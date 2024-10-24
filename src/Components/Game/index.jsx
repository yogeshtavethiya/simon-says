import React, { useState } from "react";
import './styles.css'

const Game = () => {
    const [randomItem, setRandomItem] = useState(0)
    const randomGenerator = () => {
        const newNo = Math.floor(Math.random()*10 + 1)
        console.log(newNo, 'random no.')
        setRandomItem(newNo)
        

    }

    return (
        <div className="container">
        <div className="game-container">
            <div className="game-box">1</div>
            <div className="game-box">2</div>
            <div className="game-box">3</div>
            <div className="game-box">4</div>
            <div className="game-box">5</div>
            <div className="game-box">6</div>
            <div className="game-box">7</div>
            <div className="game-box">8</div>
            <div className="game-box">9</div>
        </div>
        <button className="start-btn" onClick={randomGenerator}>Start Game</button>
        </div>
    )
}

export default Game