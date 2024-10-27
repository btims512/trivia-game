import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const Score = ({ score, totalQuestions, userAnswers, resetQuiz }) => {
  const finalMessage =
    score > 7
      ? "🎉 Great job!"
      : score > 4
      ? "👍 Well done!"
      : "😞 Better luck next time!";

  useEffect(() => {
    if (score >= 0) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
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
      <button onClick={resetQuiz} className="cta">Give it another go!</button>
      </div>
      <div className="answer-summary">
        {userAnswers.map((answerData, index) => (
          <div key={index} className="question-block">
            <h3 dangerouslySetInnerHTML={{ __html: answerData.question }} />
            {answerData.allAnswers.map((answer, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{ __html: answer }}
                className={`answer 
                  ${answer === answerData.correctAnswer ? "correct" : ""} 
                  ${
                    answer === answerData.selectedAnswer &&
                    answer !== answerData.correctAnswer
                      ? "incorrect"
                      : ""
                  }`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="restart-div">
      <button onClick={resetQuiz} className="cta">Give it another go!</button>
      </div>
    </div>
  );
};

export default Score;
