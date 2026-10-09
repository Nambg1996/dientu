import React, { useRef, useState, useEffect } from 'react';
import './DrawingBoard.css';

export default function DrawingBoard() {
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const activeStrokeRef = useRef(null);
  const [isDrawMode, setIsDrawMode] = useState(false);
  const [color, setColor] = useState('#ff0000');
  const [size, setSize] = useState(4);
  const [isEraser, setIsEraser] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const ctx = canvas.getContext('2d');
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      tempCtx.drawImage(canvas, 0, 0);

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.drawImage(tempCanvas, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDrawMode) return undefined;

    const preventContextMenu = (event) => event.preventDefault();
    document.documentElement.classList.add('drawing-active');
    document.addEventListener('contextmenu', preventContextMenu, true);

    return () => {
      document.documentElement.classList.remove('drawing-active');
      document.removeEventListener('contextmenu', preventContextMenu, true);
    };
  }, [isDrawMode]);

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const startDraw = (e) => {
    if (!isDrawMode || e.pointerType === 'touch') return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    isDrawingRef.current = true;
    const pos = getPos(e);
    const stroke = {
      color,
      size: isEraser ? size * 6 : size,
      isEraser,
      points: [pos],
    };
    activeStrokeRef.current = stroke;
    const ctx = e.currentTarget.getContext('2d');
    ctx.globalCompositeOperation = isEraser ? 'destination-out' : 'source-over';
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, stroke.size / 2, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawStrokePath = (ctx, stroke, points) => {
    if (points.length === 0) return;
    ctx.globalCompositeOperation = stroke.isEraser ? 'destination-out' : 'source-over';
    ctx.strokeStyle = stroke.color;
    ctx.lineWidth = stroke.size;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i += 1) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
  };

  const appendPointerSamples = (event) => {
    const stroke = activeStrokeRef.current;
    if (!stroke) return [];
    const coalescedEvents = event.nativeEvent.getCoalescedEvents?.();
    const events = coalescedEvents?.length ? coalescedEvents : [event.nativeEvent];
    const newPoints = [];

    events.forEach((pointerEvent) => {
      const pos = getPos(pointerEvent);
      const previous = newPoints[newPoints.length - 1] ?? stroke.points[stroke.points.length - 1];
      if (pos.x === previous.x && pos.y === previous.y) return;
      newPoints.push(pos);
    });

    if (newPoints.length > 0) {
      const ctx = canvasRef.current.getContext('2d');
      drawStrokePath(ctx, stroke, [stroke.points[stroke.points.length - 1], ...newPoints]);
      stroke.points.push(...newPoints);
    }
    return newPoints;
  };

  const draw = (e) => {
    if (!isDrawingRef.current || !isDrawMode) return;
    appendPointerSamples(e);
  };

  const stopDraw = (e) => {
    if (!isDrawingRef.current) return;
    if (e?.nativeEvent && activeStrokeRef.current) {
      appendPointerSamples(e);
    }
    isDrawingRef.current = false;
    const stroke = activeStrokeRef.current;
    activeStrokeRef.current = null;
    if (stroke) setHistory((prev) => [...prev, stroke]);
  };

  const redrawStrokes = (strokes) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    strokes.forEach((stroke) => {
      if (stroke.points.length === 1) {
        ctx.globalCompositeOperation = stroke.isEraser ? 'destination-out' : 'source-over';
        ctx.fillStyle = stroke.color;
        ctx.beginPath();
        ctx.arc(stroke.points[0].x, stroke.points[0].y, stroke.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        drawStrokePath(ctx, stroke, stroke.points);
      }
    });
    ctx.globalCompositeOperation = 'source-over';
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const newHistory = history.slice(0, -1);
    redrawStrokes(newHistory);
    setHistory(newHistory);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'source-over';
    setHistory([]);
  };

  return (
    <>
      {!isDrawMode && (
        <button className="drawing-trigger-btn" onClick={() => setIsDrawMode(true)}>
          Bật bảng vẽ giảng bài
        </button>
      )}

      {isDrawMode && (
        <div className="drawing-toolbar">
          <button
            className={`drawing-btn drawing-btn-pen ${isEraser ? 'inactive' : ''}`}
            onClick={() => setIsEraser(false)}
          >
            Bút
          </button>

          <input
            type="color"
            className="color-picker"
            value={color}
            onChange={(e) => { setColor(e.target.value); setIsEraser(false); }}
            disabled={isEraser}
          />

          <input
            type="range"
            min="1"
            max="15"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            style={{ width: '70px' }}
          />

          <div className="drawing-divider" />

          <button
            className={`drawing-btn drawing-btn-eraser ${isEraser ? 'active' : ''}`}
            onClick={() => setIsEraser(!isEraser)}
          >
            Tẩy
          </button>

          <button
            className="drawing-btn drawing-btn-undo"
            onClick={handleUndo}
            disabled={history.length === 0}
          >
            Undo
          </button>

          <button className="drawing-btn drawing-btn-clear" onClick={clearCanvas}>
            Xóa hết
          </button>

          <div className="drawing-divider" />

          <button className="drawing-btn drawing-btn-exit" onClick={() => setIsDrawMode(false)}>
            Thoát vẽ
          </button>
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="drawing-canvas"
        onPointerDown={startDraw}
        onPointerMove={draw}
        onPointerUp={stopDraw}
        onPointerCancel={stopDraw}
        onContextMenu={(e) => e.preventDefault()}
        style={{
          pointerEvents: isDrawMode ? 'auto' : 'none',
          cursor: isDrawMode ? (isEraser ? 'cell' : 'crosshair') : 'default',
        }}
      />
    </>
  );
}