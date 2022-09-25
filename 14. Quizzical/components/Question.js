import React from "react"

export default function Question(props) {
    const buttons = props.questionAnswers.map((element, index) => {
        let style = {}
        if (props.formSubmitted) {
            if (element === props.questionCorrectAnswer) {
                style = {
                    backgroundColor: '#94D7A2',
                    border: 'none'
                }
            } else if (element === props.playerAnswer) {
                style = {
                    backgroundColor: '#F8BCBC',
                    border: 'none',
                    opacity: 0.5
                }
            } else {
                style = {
                    opacity: 0.5
                }
            }
        }
        
        return (
            <button
                type="button"
                key={index}
                value={element}
                onClick={e => props.answerClick(e, props.id)}
                style={style}
            >{element}</button>
        )
    })
    
    return (
        <div className="question">
            <p className="question--description">{props.question}</p>
            <div className="question--buttons">
                {buttons}
            </div>
        </div>
    )
}