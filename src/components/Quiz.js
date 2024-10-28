import React, { useState, useEffect } from "react";
import axios from "axios";
import Score from "./Score";
import logo from "../assets/logo-trivio-sm.svg";
import restartIcon from "../assets/icon-restart.png";

const Quiz = ({ category, difficulty, onRestart }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);

  useEffect(() => {
    // If "any" is selected, omit category and difficulty from URL
    const categoryParam =
      category && category !== "any" ? `&category=${category}` : "";
    const difficultyParam =
      difficulty && difficulty !== "any" ? `&difficulty=${difficulty}` : "";

    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=10${categoryParam}${difficultyParam}&type=multiple`
        );

        const processedQuestions = response.data.results.map((question) => {
          const allAnswers = [
            ...question.incorrect_answers,
            question.correct_answer,
          ];
          const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
          return { ...question, shuffledAnswers };
        });

        setQuestions(processedQuestions);
        setLoading(false);
        // console.log("Fetched Questions:", processedQuestions);
      } catch (error) {
        console.error("Error fetching trivia data:", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [category, difficulty]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswerLocked(true);
  };

  const handleLockAnswer = () => {
    if (!selectedAnswer) return;

    const correctAnswer = questions[currentQuestion].correct_answer;
    const answerData = {
      question: questions[currentQuestion].question,
      correctAnswer: correctAnswer,
      selectedAnswer: selectedAnswer,
      allAnswers: questions[currentQuestion].shuffledAnswers,
    };
    setUserAnswers([...userAnswers, answerData]);

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setIsAnswerLocked(false);
  };

  const resetQuiz = () => {
    onRestart();
  };

  if (loading || questions.length === 0) {
    return (
      <div className="loading-container">
        <img src={logo} alt="Trivio Logo Loading" className="loading-logo" />
        <p className="loading-text">Loading quiz...</p>
      </div>
    );
  }

  if (currentQuestion >= questions.length) {
    return (
      <Score
        score={score}
        totalQuestions={questions.length}
        userAnswers={userAnswers}
        resetQuiz={resetQuiz}
      />
    );
  }

  const { question, shuffledAnswers } = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <img src={logo} alt="Trivio Logo" className="quiz-logo" />
        <button className="restart-button" onClick={resetQuiz}>
          <img src={restartIcon} alt="Restart" className="restart-icon" />
          Restart
        </button>
      </div>
      <p className="question-counter">
        This quiz has 10 questions and they’re a hoot!
      </p>
      <h3
        className="question-text"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <div className="answer-container">
        <div className="answer-options">
          {shuffledAnswers.map((answer, index) => (
            <button
              key={index}
              className={`answer-button ${
                selectedAnswer === answer ? "selected" : ""
              }`}
              onClick={() => handleAnswerSelection(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          ))}
        </div>
      </div>
      <button
        className={`lock-button ${isAnswerLocked ? "enabled" : ""}`}
        onClick={handleLockAnswer}
        disabled={!isAnswerLocked}
      >
        Lock It In!
      </button>
    </div>
  );
};

export default Quiz;
