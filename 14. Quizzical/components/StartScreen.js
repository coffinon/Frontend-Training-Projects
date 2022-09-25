import React from "react"

export default function StartScreen(props) {
    return (
        <main className="background-theme">
            <h1 className="start-screen--title">Quizzical</h1>
            <h2 className="start-screen--tip">Click the button to start the quiz!</h2>
            <button className="navigation-button" onClick={props.startQuiz}>Start quiz</button>
        </main>
    )
}