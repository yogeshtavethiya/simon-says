import React, { useState } from "react";
import './styles.css';

const Game = () => {
    const [randomItem, setRandomItem] = useState(null);
    const [highlight, setHighlight] = useState(false);
    const [startClicked, setStartClicked] = useState(false);
    const [round, setRound] = useState(1);
    const [playerSequence, setPlayerSequence] = useState([]);
    const [computerSequence, setComputerSequence] = useState([]);

    const randomGenerator = () => {
        const newSequence = Array.from({ length: round }, () => Math.floor(Math.random() * 9 + 1));
        setComputerSequence(newSequence);
        setRandomItem(newSequence[0]);
        setStartClicked(true);
        setHighlight(true);

        newSequence.forEach((item, index) => {
            setTimeout(() => {
                setRandomItem(item);
            }, index * 1000);

            if (index === newSequence.length - 1) {
                setTimeout(() => setHighlight(false), (index + 1) * 1000);
            }
        });
    };

    const playGame = (id) => {
        const nextIndex = playerSequence.length;
        if (id === computerSequence[nextIndex]) {
            setPlayerSequence((prev) => [...prev, id]);

            if (nextIndex + 1 === computerSequence.length) {
                setRound((prevRound) => prevRound + 1);
                setPlayerSequence([]);
                console.log("Correct! Next.");
            }
        } else {
            console.log("Incorrect.");
            setPlayerSequence([]);
        }
    };

    return (
        <div className="container">
            <div className={`game-container ${startClicked ? 'active' : ''}`}>
                {[...Array(9)].map((_, idx) => (
                    <div
                        onClick={() => playGame(idx + 1)}
                        key={idx}
                        className={`game-box ${highlight && randomItem === idx + 1 ? 'bg-blue' : ''}`}
                    >
                        {idx + 1}
                    </div>
                ))}
            </div>
            <button className="start-btn" onClick={randomGenerator}>Start Game</button>
            <p>Round: {round}</p>
        </div>
    );
};

export default Game;
