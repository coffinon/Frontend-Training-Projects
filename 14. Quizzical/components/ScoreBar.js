import React from "react"

export default function ScoreBar(props) {
    return (
        <div className="score-bar">
            <p>You scored {props.points}/5 correct answers</p>
            <button 
                className="navigation-button"
                onClick={props.newGame}
            >Try again</button>
        </div>
    )
}