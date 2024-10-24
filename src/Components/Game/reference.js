import React, { useState, useEffect } from "react";
import './styles.css';

const Game = () => {
  const [randomItem, setRandomItem] = useState(null);
  const [startClicked, setStartClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(1000); // Game speed in ms
  
  // Function to generate random number and highlight the box
  const randomGenerator = () => {
    const newNo = Math.floor(Math.random() * 9 + 1);
    setRandomItem(newNo);
  };

  // Start the game, set up an interval to highlight boxes periodically
  const startGame = () => {
    setStartClicked(true);
    setIsGameOver(false);
    setScore(0); // Reset score
    const gameInterval = setInterval(() => {
      if (!isGameOver) {
        randomGenerator();
        setScore(prev => prev + 1); // Increase score as game progresses
      }
    }, gameSpeed);

    // End the game after 30 seconds
    setTimeout(() => {
      clearInterval(gameInterval);
      setIsGameOver(true);
      setStartClicked(false);
    }, 30000); // Game lasts 30 seconds
  };

  // Reset the game
  const resetGame = () => {
    setRandomItem(null);
    setScore(0);
    setIsGameOver(false);
  };

  return (
    <div className="container">
      <h1>Score: {score}</h1>
      <div className={`game-container ${startClicked ? "active" : ""}`}>
        {[...Array(9).keys()].map((_, index) => (
          <div
            key={index + 1}
            className={`game-box ${randomItem === index + 1 ? "bg-blue flash" : ""}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      {!isGameOver ? (
        <button className="start-btn" onClick={startGame}>
          {startClicked ? "Game in Progress..." : "Start Game"}
        </button>
      ) : (
        <button className="start-btn" onClick={resetGame}>
          Reset Game
        </button>
      )}
    </div>
  );
};

export default Game;
