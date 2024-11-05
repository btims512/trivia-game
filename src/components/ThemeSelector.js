import React, { useRef } from "react";

const ThemeSelector = ({ theme, toggleTheme, themeIcon }) => {
  const themeSelectRef = useRef(null);

  return (
    <div
      className="theme-selector-button"
      onClick={() => themeSelectRef.current?.click()}
    >
      <img src={themeIcon} alt="Theme Icon" className="theme-icon" />
      <select
        ref={themeSelectRef}
        id="theme-select"
        onChange={(e) => toggleTheme(e.target.value)}
        value={theme}
        aria-label="Theme Selector"
      >
        <option value="default">Change theme</option>
        <option value="mint">Mint Theme</option>
        <option value="sky">Sky Theme</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
