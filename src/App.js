import "./global.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Quiz from "./components/Quiz";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import themeIcon from "./assets/theme.png"; // Import the theme icon

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [theme, setTheme] = useState("default"); // "default", "mint", or "sky"

  useEffect(() => {
    document.body.classList.remove("mint-theme", "sky-theme");
    if (theme === "mint") {
      document.body.classList.add("mint-theme");
    } else if (theme === "sky") {
      document.body.classList.add("sky-theme");
    }
  }, [theme]);

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

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
            <Categories
              onSelectCategory={handleStartQuiz}
              theme={theme}
              toggleTheme={toggleTheme}
              themeIcon={themeIcon} // Pass theme icon as a prop
            />
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
