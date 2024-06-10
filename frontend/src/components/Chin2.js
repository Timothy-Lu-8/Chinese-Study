import {useState} from "react"
import { useNavigate } from "react-router-dom";

const Chin2 = () => {
    const [lessonNumber, setLessonNumber] = useState("");
    
    const navigate = useNavigate()
    const toPage = () => {
        console.log(lessonNumber)
        navigate('/flashcards', {state:{courseNum:"1502", lessonNum:lessonNumber}})
    }

    const lessonChange = (event) => {
        setLessonNumber(event.target.value)
    }

    return (
        <div className="chin2">
            <select className="c2Dropdown" value={lessonNumber} onChange={lessonChange} p>
                <option value="" disabled selected>Chinese 1502</option>
                <option value={"0"}>All</option>
                <option value={"8"}>Lesson 8</option>
                <option value={"9"}>Lesson 9</option>
                <option value={"10"}>Lesson 10</option>
                <option value={"11"}>Lesson 11</option>
                <option value={"12"}>Lesson 12</option>
                <option value={"13"}>Lesson 13</option>
                <option value={"14"}>Lesson 14</option>
            </select>
            {toPage(lessonNumber)}
        </div>
    );
}

export default Chin2
