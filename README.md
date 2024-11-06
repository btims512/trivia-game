![Trivio Screenshot](./public/social_share.png)

# Trivio

Trivio is an interactive, theme-customizable trivia game designed to deliver a fun and engaging quiz experience. This project demonstrates strong front-end development skills with a focus on React, component-driven design, and styling techniques. It's a great showcase of my ability to create responsive, accessible, and user-friendly web applications.

## Features

- **Interactive Quiz Experience**: Trivio provides users with ten trivia questions in each quiz session, testing their knowledge across various categories and difficulty levels.
- **Theme Selector**: Users can customize the look and feel of the app by selecting different themes (e.g., default, mint, and sky), allowing them to personalize their experience.
- **Progress Tracking**: Users can keep track of their progress through a dynamic question counter and see their final score upon completion.
- **Responsive Design**: Optimized for both desktop and mobile devices, ensuring a seamless experience across all screen sizes.
- **Accessible UI**: Fully keyboard-navigable with visually clear indicators, meeting WCAG accessibility standards.
- **Customizable Difficulty Levels**: Users can select the difficulty level (easy, medium, hard) to tailor the challenge to their knowledge and skill level.

## Theme Customization

Trivio offers a theme customization feature, allowing users to switch between visually appealing color themes, including Default, Mint, and Sky. This feature is more than just aesthetic; it highlights a few key front-end skills and development techniques:

- **CSS Variables**: Themes are powered by CSS custom properties, enabling efficient and dynamic styling changes across the app without additional JavaScript overhead.
- **Component-Based Architecture**: The theme selector is integrated as a standalone, reusable component, showcasing modular development practices that enhance scalability and code readability.
- **State Management**: React's `useState` hook manages the current theme, updating the app styling instantly with minimal re-rendering.
- **Responsive and Accessible Design**: Each theme adheres to WCAG color contrast standards, ensuring readability for all users, including those with visual impairments. Interactive elements and hover states are carefully styled for keyboard and screen reader accessibility.

This theme customization feature not only adds a layer of personalization for users but also demonstrates skills in crafting flexible, reusable UI components with modern CSS and React state management. It’s a great example of creating a polished and user-centered interface using best practices in front-end development.

## Project Overview

Trivio is a React application, built with a component-based architecture to maximize code reusability and maintainability. The app uses a combination of hooks and state management to dynamically update the quiz based on user interactions, and it integrates with the [Open Trivia Database API](https://opentdb.com/) to fetch trivia questions across various topics.

## Technologies Used

- **React**: For building UI components and managing application state.
- **JavaScript (ES6+)**: Utilized throughout the project for logic and interactivity.
- **CSS**: Customized styles with variables and modern layout techniques, including Flexbox.
- **HTML5**: Semantic HTML to ensure accessibility and improve SEO.
- **Axios**: For handling API requests and managing trivia data.
- **Git & GitHub**: Version control for code management and collaboration.

## Installation & Setup

To set up Trivio locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/btims512/trivia-game.git
   cd trivia-game

   ```

2. **Install Dependencies:**:

```bash
npm install
```

3. **Start the Development Server:**:

```bash
npm start
```

The application will open in development mode on http://localhost:3000.

4. **Run Tests:**:

```bash
npm test
```

Launches the test runner in interactive watch mode.

5. **Build for Production:**:

```bash
npm run build
```

Builds the app for production in the build folder, optimizing the React application for best performance.

## App Structure

The main components and their functionality are as follows:

- **App**: The root component that manages the overall app structure and theme selection.
- **Quiz**: Contains the main quiz logic, including question handling, answer selection, and score tracking.
- **Categories**: Allows users to select their preferred quiz category.
- **Difficulty**: Provides options for users to set the quiz difficulty level.
- **ThemeSelector**: Enables theme customization for the user interface.
- **Footer**: Displays additional information, such as social media links or app credits.

---

## API Integration

Trivio integrates with the [Open Trivia Database API](https://opentdb.com/) to retrieve random trivia questions. This API provides a wide range of categories and difficulty levels, enhancing the game’s variety and replayability.

---

## Accessibility

Accessibility is a priority in Trivio. The app includes:

- **Keyboard Navigation**: Every interactive element is accessible via the keyboard.
- **ARIA Labels**: Screen reader users can navigate and understand the app with ease.
- **High Contrast Themes**: Color contrast is carefully managed to ensure readability.

---

## Future Enhancements

Some potential features and improvements that could be added to Trivio include:

- **Timer**: Adding a countdown timer for each question to increase the challenge.
- **Scoreboard**: Creating a global leaderboard where users can compare scores.
- **Multiplayer Mode**: Allowing users to compete with friends in real-time.
- **More Themes**: Expanding theme options to give users even more customization.

---

## Contributing

Contributions to Trivio are welcome! If you’re interested in adding new features, improving the UI, or enhancing the quiz experience, please feel free to fork the repository, make your changes, and open a pull request.

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-feature`
3. **Commit your changes**: `git commit -m 'Add new feature'`
4. **Push to the branch**: `git push origin feature/new-feature`
5. **Open a Pull Request**

---

## License

This project is licensed under the MIT License.

---

## Contact

For more information about this project, feel free to reach out:

- **GitHub**: [btims](https://github.com/btims512)
- **LinkedIn**: [benjamintims](https://www.linkedin.com/in/benjamintims/)

---

Trivio was created with passion for fun, learning, and interactive design. If you’re interested in seeing more of my work or discussing job opportunities, please get in touch. Thank you for checking out Trivio!
