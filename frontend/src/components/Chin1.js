import {useState} from "react"
import { useNavigate } from "react-router-dom";

const Chin1 = () => {
    const [open, setOpen] = useState(false);
    
    const navigate = useNavigate()
    const toPage = (courseNum, lessonNum) => {
      navigate('/flashcards', {state:{courseNum, lessonNum}})
    }
    const Dropdown = () => {
        return (
            <div className="chin1-dropdown-component">
                {/* <a href="#">All</a> */}
                <a onClick={()=>{toPage("1501","1")}}>(一) Lesson 1</a>
                <a onClick={()=>{toPage("1501","2")}}>(二) Lesson 2</a>
                <a onClick={()=>{toPage("1501","3")}}>(三) Lesson 3</a>
                <a onClick={()=>{toPage("1501","4")}}>(四) Lesson 4</a>
                <a onClick={()=>{toPage("1501","5")}}>(五) Lesson 5</a>
                <a onClick={()=>{toPage("1501","6")}}>(六) Lesson 6</a>
                <a onClick={()=>{toPage("1501","7")}}>(七) Lesson 7</a>
            </div>
        )
    }

    return (
        <div className="chin1">
            <p className="chin1501" onClick={() => setOpen(!open)}>Chinese 1501</p>
            <a href="#" className="dropdown" onClick={() => setOpen(!open)}>
                <span className="material-symbols-outlined">arrow_drop_down</span>
            </a>
            {open && Dropdown()}
        </div>
    );
}

export default Chin1
