import React from "react";

const Difficulty = ({ difficulty, setDifficulty }) => {
  const difficulties = ["any", "easy", "medium", "hard"];

  return (
    <div className="difficulty-tabs">
      {difficulties.map((level) => (
        <button
          key={level}
          onClick={() => setDifficulty(level)}
          className={`tab ${difficulty === level ? "active" : ""}`}
        >
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Difficulty;
