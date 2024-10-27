import "./global.css";
import "./index.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Quiz from "./components/Quiz";
import Categories from "./components/Categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const resetQuiz = () => {
    setSelectedCategory(null);
  };

  return (
    <BrowserRouter>
      {" "}
      <div className="App">
        {!selectedCategory ? (
          <Categories onSelectCategory={handleCategorySelect} />
        ) : (
          <Quiz category={selectedCategory} onRestart={resetQuiz} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
