
import { useState } from 'react'
import '../App.css'

const imageList={
  "Lm7805dunglamgi": "https://blogger.googleusercontent.com/img/a/AVvXsEjCqr-EqweBXQFm4sKRTRRaoI8A_6Cd2lYmSstqg5c1hrQyOGrhi2Ph4wTFvj05Ovu7tl8p4XpSpmQIHQS2RJZjkRFq6eBO10d7ZhCZirKiWUk6tZ1V_IYgKIZRi0dAcgkKhVMLh3C6YLGe6jnqegssZYlehcidilrMAbT1HjuOofAtcMQWPT0_1if7GmZS",
}

const questions = [
  {
    question: 'LM7805 dùng để làm gì?',
    imageUrl: imageList.Lm7805dunglamgi,
    options: [
      'Tăng điện áp',
      'Ổn định điện áp đầu ra khoảng 5V',
      'Đo dòng điện',
      'Chuyển AC thành DC',
    ],
    answer: 1,
    explanation:
      'LM7805 là IC ổn áp tuyến tính, thường được dùng để tạo ra điện áp DC khoảng 5V ổn định.',
    explanationImageUrl: '',
    explanationYoutubeUrl: '',
  },
  {
    question: 'Với LM7805 thông thường, chân nào là GND?',
    imageUrl: imageList.Lm7805dunglamgi,
    options: [
      'Chân 1',
      'Chân 2',
      'Chân 3',
      'Không có chân GND',
    ],
    answer: 1,
    explanation:
      'Với dạng TO-220 phổ biến, nhìn mặt có chữ của LM7805: chân 1 là IN, chân 2 là GND, chân 3 là OUT.',
    explanationImageUrl: '',
    explanationYoutubeUrl: 'https://www.youtube.com/watch?v=05eIujKBZLs',
  },
  {
    question: 'Nếu cấp 12V vào LM7805 và lấy ra 5V, phần điện áp dư chủ yếu biến thành gì?',
    imageUrl: '',
    options: [
      'Ánh sáng',
      'Âm thanh',
      'Nhiệt',
      'Từ trường',
    ],
    answer: 2,
    explanation:
      'LM7805 là ổn áp tuyến tính. Phần chênh lệch điện áp bị tiêu tán dưới dạng nhiệt.',
    explanationImageUrl: '',
    explanationYoutubeUrl: '',
  },
  {
    question: 'Cấp 12V vào LM7805, tải tiêu thụ 0.5A. Công suất nhiệt xấp xỉ bao nhiêu?',
    imageUrl: '',
    options: [
      '0.5W',
      '2.5W',
      '3.5W',
      '6W',
    ],
    answer: 2,
    explanation:
      'P = (Vin - Vout) x I = (12 - 5) x 0.5 = 3.5W. LM7805 lúc này sẽ khá nóng.',
    explanationImageUrl: '',
    explanationYoutubeUrl: '',
  },
  {
    question: 'Trường hợp nào nên đặc biệt cân nhắc tản nhiệt cho LM7805?',
    imageUrl: '',
    options: [
      'Vin cao và dòng tải lớn',
      'Vin = 5V và dòng tải bằng 0',
      'Không có tải',
      'Chỉ khi dùng LED',
    ],
    answer: 0,
    explanation:
      'Công suất nhiệt tăng khi điện áp đầu vào cao và dòng tải lớn. Khi công suất nhiệt lớn, cần chú ý tản nhiệt.',
    explanationImageUrl: '',
    explanationYoutubeUrl: '',
  },
]

function App() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const question = questions[current]

  const handleAnswer = (index) => {
    if (selected !== null) return

    setSelected(index)

    if (index === question.answer) {
      setScore((score) => score + 1)
    }
  }

  const nextQuestion = () => {
    if (current === questions.length - 1) {
      setFinished(true)
      return
    }

    setCurrent((current) => current + 1)
    setSelected(null)
  }

  const restart = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <main className="quiz">
        <div className="quiz-card result">
          <div className="icon">LM7805</div>

          <h1>Hoàn thành!</h1>

          <p className="score">
            Bạn đúng <strong>{score}</strong> / {questions.length} câu
          </p>

          <p>
            {score === questions.length
              ? 'Tuyệt vời! Bạn đã nắm khá chắc những kiến thức cơ bản về LM7805.'
              : 'Bạn đã có nền tảng rồi. Hãy thử lại để hiểu LM7805 chắc hơn nhé.'}
          </p>

          <button onClick={restart}>Làm lại</button>
        </div>
      </main>
    )
  }

  return (
    <main className="quiz">
      <div className="quiz-card">
        <div className="header">
          <span>LM7805</span>
          <span>
            {current + 1} / {questions.length}
          </span>
        </div>

        <div className="progress">
          <div
            className="progress-bar"
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        <h1>{question.question}</h1>

        {question.imageUrl.trim() && (
          <img
            className="question-image"
            src={question.imageUrl}
            alt={`Hình minh họa: ${question.question}`}
          />
        )}

        <div className="options">
          {question.options.map((option, index) => {
            let className = 'option'

            if (selected !== null) {
              if (index === question.answer) {
                className += ' correct'
              } else if (index === selected) {
                className += ' wrong'
              }
            }

            return (
              <button
                key={option}
                className={className}
                onClick={() => handleAnswer(index)}
              >
                <span className="letter">
                  {String.fromCharCode(65 + index)}
                </span>

                <span>{option}</span>
              </button>
            )
          })}
        </div>

        {selected !== null && (
          <div
            className={
              selected === question.answer
                ? 'explanation correct-box'
                : 'explanation wrong-box'
            }
          >
            <strong>
              {selected === question.answer ? 'Chính xác!' : 'Chưa đúng'}
            </strong>

            <p>{question.explanation}</p>

            {question.explanationImageUrl.trim() && (
              <img
                className="explanation-image"
                src={question.explanationImageUrl}
                alt={`Hình giải thích: ${question.question}`}
              />
            )}

            {question.explanationYoutubeUrl.trim() && (
              <a
                className="explanation-video-link"
                href={question.explanationYoutubeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Xem video giải thích trên YouTube
              </a>
            )}
          </div>
        )}

        {selected !== null && (
          <button className="next" onClick={nextQuestion}>
            {current === questions.length - 1
              ? 'Xem kết quả'
              : 'Câu tiếp theo'}
          </button>
        )}
      </div>
    </main>
  )
}

export default App