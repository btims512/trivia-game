import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import logo from "../assets/logo-trivio-sm.svg";

const Score = ({ score, totalQuestions, userAnswers, resetQuiz }) => {
  const finalMessage =
    score > 7
      ? "🎉 Great job!"
      : score > 4
      ? "👍 Well done!"
      : "😞 Better luck next time!";

  useEffect(() => {
    if (score >= 6) {
      confetti({
        particleCount: 180,
        spread: 90,
        origin: { y: 0.5 },
      });
    }
  }, [score]);

  return (
    <div className="score-card">
      <div className="results">
        <h1>Results</h1>
        <p>Ta-da! 🎉 Here are your results!</p>
      </div>
      <div className="result-container">
        <p className="score-text">
          {score} / {totalQuestions}
        </p>
        <p>{finalMessage}</p>
      </div>
      <div className="restart-div">
        <button onClick={resetQuiz} className="cta">
          Give it another go!
        </button>
      </div>
      <div className="answer-summary">
        {userAnswers.map((answerData, index) => (
          <div key={index} className="question-block">
            <h3
              className="answer-question"
              dangerouslySetInnerHTML={{ __html: answerData.question }}
            />
            <div className="answers-div">
              {answerData.allAnswers.map((answer, i) => (
                <p
                  key={i}
                  className={`answer-text ${
                    answer === answerData.correctAnswer
                      ? "correct"
                      : answer === answerData.selectedAnswer
                      ? "incorrect"
                      : ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="restart-div">
        <button onClick={resetQuiz} className="cta">
          Give it another go!
        </button>
      </div>
      <div className="bottom-logo-container">
        <img src={logo} alt="Trivio Logo" className="bottom-logo" />
      </div>
    </div>
  );
};

export default Score;
