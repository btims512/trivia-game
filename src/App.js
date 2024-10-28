import "./global.css";
import "./index.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Quiz from "./components/Quiz";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const handleStartQuiz = (category, difficulty) => {
    setSelectedCategory(category);
    setSelectedDifficulty(difficulty);
    setIsQuizStarted(true);
  };

  const resetQuiz = () => {
    setIsQuizStarted(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="main-content">
          {!isQuizStarted ? (
            <Categories onSelectCategory={handleStartQuiz} />
          ) : (
            <Quiz
              category={selectedCategory}
              difficulty={selectedDifficulty}
              onRestart={resetQuiz}
            />
          )}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
