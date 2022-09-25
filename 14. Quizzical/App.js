import React from "react"
import StartScreen from "./components/StartScreen"
import Form from "./components/Form"
import shuffle from "./utils"

export default function App() {
    const [quizStarted, setQuizStarted] = React.useState(false)
    const [gameNumber, setGameNumber] = React.useState(0)
    const [questions, setQuestions] = React.useState({})
    
    // This function gets executed after the user clicks Start Quiz button
    function startQuiz() {
        setQuizStarted(true)
    }
    
    // This function gets executed after clicking "Try again" button
    function startNewGame() {
        setGameNumber(prevGameNumber => prevGameNumber + 1)
    }
    
    // Run this whenever the New Game begins
    React.useEffect(() => {
        // function calling API
        async function fetchAPI() {
            const response = await fetch("https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple&encode=url3986")
            const data = await response.json()
            
            // Update the state with new questions fetched from the API
            setQuestions(data.results.map(element => {
                const answersArray = element.incorrect_answers
                answersArray.push(element.correct_answer)
                shuffle(answersArray)
                return {
                    question: decodeURIComponent(element.question),
                    answers: answersArray.map(answer => decodeURIComponent(answer)),
                    correctAnswer: decodeURIComponent(element.correct_answer)
                }
            }))
        }
        fetchAPI()
    }, [gameNumber])
    
    return (
        <div className="application">
        {quizStarted ? 
            <Form 
                questions={questions}
                startNewGame={startNewGame}
            /> :
            <StartScreen startQuiz={startQuiz}/>
        }
        </div>
    )
}