import  '../component-css/AnswerChoice.css'

const AnswerChoice = ({character}) => {
    return (
        <div className="answer-details">
            <h4>Pinyin: {character.pinyin}</h4>
            <p><strong>Definition: {character.englishDefinition}</strong></p>
        </div>
    )
}

export default AnswerChoice