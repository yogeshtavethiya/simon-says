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
            <div className={`game-container ${startClicked ? 'active' : ''}`}>
                {[...Array(9)].map((_,index)=>(
                    <div key={index} className={`game-box ${randomItem === index + 1 ? 'bg-blue' : ''} `}>
                    {index + 1}
                </div>
                ))}
            </div>

        <button className="start-btn" onClick={randomGenerator}>Start Game</button>
        </div>
    )
}

export default Game