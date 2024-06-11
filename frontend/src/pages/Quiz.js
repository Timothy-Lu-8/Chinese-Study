import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import AnswerChoice from "../components/AnswerChoice"
import '../page-css/Quiz.css'

const Quiz = ({characters}) => {

    const indexSet = new Set()
    const dummy = []
    const location = useLocation()
    const chars = location.state.characters
    const correctIndex = Math.floor(Math.random()*4)
    const [options, setOptions] = useState([])
    const [display, setDisplay] = useState("")
    const [score, setScore] = useState(0)
    const [correct, setCorrect] = useState(-1)
    const [render, setRender] = useState(false)
    const [streak, setStreak] = useState(0)
    const [denominator, setDenominator] = useState(0)
    const [numerator, setNumerator] = useState(0)
    const [percentage, setPercentage] = useState(0)

    function checkAnswer(selected) {
        setDenominator(denominator+1)
        if (render == false) {
            setRender(true)
        }
        else {
            setRender(false)
        }

        if (selected == options[correct-1]) { //if the answer is right
            setScore(score+1)
            setNumerator(numerator+1)
            if ((100*(numerator+1)/(denominator+1))%1 == 0) { //if percent is a whole number
                setPercentage(100*(numerator+1)/(denominator+1))
            }
            else {
                setPercentage((100*(numerator+1)/(denominator+1)).toFixed(2))
            }

            if (score+1 > streak) {
                setStreak(score+1)
            }
        }
        else {
            setScore(0)
            if ((100*(numerator)/(denominator+1))%1 == 0) { //if percent is a whole number
                setPercentage(100*(numerator)/(denominator+1))
            }
            else {
                setPercentage((100*(numerator)/(denominator+1)).toFixed(2))
            }
        }
    }
    
    useEffect(() => {
        const answerChoices = () => {
            for (let i = 0; i < 4; i++){
                let index = Math.floor(Math.random()*chars.length)
                while (indexSet.has(index) || dummy.includes(chars[index].pinyin)) {
                    index = Math.floor(Math.random()*chars.length)
                }
                dummy.push(chars[index])
                indexSet.add(index)
            }
        }
        answerChoices()
        setOptions(dummy)
        setDisplay(dummy[correctIndex].chineseSymbol)
        setCorrect(correctIndex+1)
    }, [render])

    return (
        <div className="quiz">
            <div className="headerSection">
                <h1 className="correct">Correct: {numerator}/{denominator}</h1>
                <h1 className="streak">Best Streak: {streak}</h1>
                <h1 className="perc">Percentage: {percentage}%</h1>
            </div>
            <p className="question">Given this character, what is the pinyin and definition: {display}</p>
            {options.map((option) => (
                <div className="answerChoices">
                    <button type='button' onClick={() => checkAnswer(option)}></button>
                    <AnswerChoice key={option._id} character={option}/>
                </div>
            ))}
        </div>
    )
}

export default Quiz