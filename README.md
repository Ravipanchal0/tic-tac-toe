# 🎮 Tic Tac Toe (React)

A simple and interactive Tic Tac Toe game built using **React**. This project demonstrates state management, component-based architecture, and dynamic UI updates with a clean and responsive design.

---

## 🚀 Features

- 🧑‍🤝‍🧑 Two-player gameplay (Player X vs Player O)
- ✏️ Custom player names
- 🎯 Active player indicator
- 🧠 Automatic winner detection
- 🤝 Draw detection
- 🔄 Restart game functionality
- ✨ Smooth popup animation for moves
- 📱 Responsive UI with modern styling

---

## 🛠️ Tech Stack

- **React** (Functional Components & Hooks)
- **JavaScript (ES6+)**
- **CSS / Tailwind CSS**
- **Vite / Create React App** (depending on your setup)

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Player.jsx
│   ├── GameBoard.jsx
│   ├── GameOver.jsx
│   └── utilitiesFunc.js
│
├── assets/
│   └── winningComb.js
│
├── App.jsx
└── main.jsx
```

---

## 🧩 How It Works

- The game state is managed using React’s `useState`.
- Each move is stored in `gameTurns`.
- The board is dynamically derived using a helper function.
- Winner logic checks predefined winning combinations.
- UI updates automatically based on state changes.

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ravipanchal0/tic-tac-toe.git
cd tic-tac-toe
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

---

## 🎯 Game Rules

- Players take turns placing their symbol (**X** or **O**) on the board.
- The first player to align 3 symbols in a row, column, or diagonal wins.
- If all 9 squares are filled without a winner, the game ends in a draw.

---

## ✨ Animations

- Each move triggers a **popup animation** for the symbol.
- Enhances user experience and makes gameplay more interactive.

---

## 🔮 Future Improvements

- 🤖 Add AI (single-player mode)
- 🌐 Online multiplayer
- 🏆 Score tracking
- 🎨 Theme customization
- 🔊 Sound effects

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 🙌 Acknowledgements

- Inspired by classic Tic Tac Toe game
- Built as part of learning React fundamentals

---

## 💬 Feedback

If you have any suggestions or feedback, feel free to open an issue or contribute!

---
