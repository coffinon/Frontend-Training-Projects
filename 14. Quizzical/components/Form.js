import React from "react"
import Question from "./Question"
import ScoreBar from "./ScoreBar"

export default function Form(props) {
    const [formSubmitted, setFormSubmitted] = React.useState(false)
    const [playerAnswers, setPlayerAnswers] = React.useState(new Array(5))
    const [points, setPoints] = React.useState(0)
    
    // Submit button handler
    function handleSubmit(event) {
        event.preventDefault()
        setFormSubmitted(true)
        for (let i = 0; i < playerAnswers.length; i++) {
            if (props.questions[i].correctAnswer === playerAnswers[i]) {
                setPoints(prevPoints => prevPoints + 1)
            }
        }
    }
    
    // Reset states and launch new game
    function newGame() {
        setFormSubmitted(false)
        setPlayerAnswers(new Array(5))
        setPoints(0)
        props.startNewGame()
    }
    
    // This function is executed after choosing an answer
    function answerClick(event, buttonId) {
        setPlayerAnswers(prevPlayerAnswers => {
            let newPlayerAnswers = prevPlayerAnswers
            newPlayerAnswers[buttonId] = event.target.value
            return newPlayerAnswers
        })
    }
    
    const questionElements = props.questions.map((element, index) => {
        return (
            <Question 
                key={index}
                id={index}
                question={element.question}
                questionAnswers={element.answers}
                questionCorrectAnswer={element.correctAnswer}
                playerAnswer={playerAnswers[index]}
                formSubmitted={formSubmitted}
                answerClick={answerClick}
            />
        )
    })
    
    return (
        <form className="background-theme" onSubmit={handleSubmit}>
            {questionElements}
            {formSubmitted ?
                <ScoreBar newGame={newGame} points={points} /> :
                <button className="navigation-button check-button">Check answers</button>
            }
        </form>
    )
}