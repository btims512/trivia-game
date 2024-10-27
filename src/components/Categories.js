import React, { useState, useEffect } from "react";
import axios from "axios";
import Difficulty from "./Difficulty";
import logo from "../assets/logo-trivio-lg.svg";
import arrowIcon from "../assets/icon-arrow-down.svg";

const Categories = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [difficulty, setDifficulty] = useState("any");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api_category.php"
        );
        setCategories(response.data.trivia_categories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  return (
    <div className="outer-container">
      <div className="app-container">
        <img src={logo} alt="Trivio Logo" className="logo" />
        <h1>Trivio</h1>
        <p className="subtitle-p">
          What’s your vibe today? Pick a category, and let’s dive in!
        </p>
        <div className="select-container">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Any Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <img src={arrowIcon} alt="Dropdown arrow" className="select-arrow" />
        </div>
        <p>And now, choose your challenge level!</p>
        <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
        <button
          className="cta"
          disabled={!selectedCategory || !difficulty} 
          onClick={() => onSelectCategory(selectedCategory, difficulty)}
        >
          Let the game begin!
        </button>
      </div>
    </div>
  );
};

export default Categories;
