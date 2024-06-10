import {useState} from "react"
import { useNavigate } from "react-router-dom";

const Chin1 = () => {
    const [lessonNumber, setLessonNumber] = useState("");
    
    const navigate = useNavigate()
    const toPage = () => {
        console.log(lessonNumber)
        navigate('/flashcards', {state:{courseNum:"1501", lessonNum:lessonNumber}})
    }

    const lessonChange = (event) => {
        setLessonNumber(event.target.value)
    }

    return (
        <div className="chin1">
            <select className="c1Dropdown" value={lessonNumber} onChange={lessonChange} p>
                <option value="" disabled selected>Chinese 1501</option>
                <option value={"0"}>All</option>
                <option value={"1"}>Lesson 1</option>
                <option value={"2"}>Lesson 2</option>
                <option value={"3"}>Lesson 3</option>
                <option value={"4"}>Lesson 4</option>
                <option value={"5"}>Lesson 5</option>
                <option value={"6"}>Lesson 6</option>
                <option value={"7"}>Lesson 7</option>
            </select>
            {toPage(lessonNumber)}
        </div>
    );
}

export default Chin1
