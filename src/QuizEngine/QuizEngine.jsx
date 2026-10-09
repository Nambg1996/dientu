import React, { useState } from 'react';
import './QuizEngine.css';

export default function QuizEngine({ title, questions }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  const handleAnswer = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (current === questions.length - 1) {
      setFinished(true);
      return;
    }
    setCurrent((prev) => prev + 1);
    setSelected(null);
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="quiz-container">
        <div className="quiz-card result">
          <h1>{title} - Hoàn thành!</h1>
          <p className="score">
            Bạn đúng <strong>{score}</strong> / {questions.length} câu
          </p>
          <button className="restart-btn" onClick={restart}>Làm lại bài kiểm tra</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="quiz-header">
          <span>{title}</span>
          <span>{current + 1} / {questions.length}</span>
        </div>

        <div className="progress-bar-bg">
          <div
            className="progress-bar-fill"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>

        <h2>{question.question}</h2>

        {question.imageUrl && question.imageUrl.trim() && (
          <img className="question-image" src={question.imageUrl} alt="Hình minh họa" />
        )}

        <div className="options-grid">
          {question.options.map((option, index) => {
            let className = 'option-btn';
            if (selected !== null) {
              if (index === question.answer) className += ' correct';
              else if (index === selected) className += ' wrong';
            }

            return (
              <button
                key={option}
                className={className}
                onClick={() => handleAnswer(index)}
              >
                <span><strong>{String.fromCharCode(65 + index)}.</strong> {option}</span>
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className={`explanation-box ${selected === question.answer ? 'correct-box' : 'wrong-box'}`}>
            <strong>{selected === question.answer ? 'Chính xác!' : 'Chưa đúng'}</strong>
            <p>{question.explanation}</p>
            {question.explanationImageUrl && (
              <img className="explanation-image" src={question.explanationImageUrl} alt="Hình giải thích" />
            )}
          </div>
        )}

        {selected !== null && (
          <button className="next-btn" onClick={nextQuestion}>
            {current === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
          </button>
        )}
      </div>
    </div>
  );
}