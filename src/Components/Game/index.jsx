import React, { useState } from "react";
import './styles.css'

const Game = () => {
    const [randomItem, setRandomItem] = useState(0)
    const [startClicked, setStartClicked] = useState(false)
    const randomGenerator = () => {
        const newNo = Math.floor(Math.random()*9 + 1)
        console.log(newNo, 'random no.')
        setRandomItem(newNo)
        setStartClicked(true)
    }

    return (
        <div className="container">
        <div className="game-container">
            <div className={`game-box ${randomItem === 1 ? 'bg-blue' : ''}`}>1</div>
            <div className={`game-box ${randomItem === 2 ? 'bg-blue' : ''}`}>2</div>
            <div className={`game-box ${randomItem === 3 ? 'bg-blue' : ''}`}>3</div>
            <div className={`game-box ${randomItem === 4 ? 'bg-blue' : ''}`}>4</div>
            <div className={`game-box ${randomItem === 5 ? 'bg-blue' : ''}`}>5</div>
            <div className={`game-box ${randomItem === 6 ? 'bg-blue' : ''}`}>6</div>
            <div className={`game-box ${randomItem === 7 ? 'bg-blue' : ''}`}>7</div>
            <div className={`game-box ${randomItem === 8 ? 'bg-blue' : ''}`}>8</div>
            <div className={`game-box ${randomItem === 9 ? 'bg-blue' : ''}`}>9</div>
        </div>
        <button className="start-btn" onClick={randomGenerator}>Start Game</button>
        </div>
    )
}

export default Game