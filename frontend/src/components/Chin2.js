import {useState} from "react"
import { useNavigate } from "react-router-dom";

const Chin2 = () => {
    const [open, setOpen] = useState(false);
    
    const navigate = useNavigate()
    const toPage = (courseNum, lessonNum) => {
      navigate('/flashcards', {state:{courseNum, lessonNum}})
    }
    const Dropdown = () => {
        return (
            <div className="chin2-dropdown-component">
                {/* <a href="#">All</a> */}
                <a onClick={()=>{toPage("1502","8")}}>(八) Lesson 8</a>
                <a onClick={()=>{toPage("1502","9")}}>(九) Lesson 9 (In Progress!)</a>
            </div>
        )
    }

    return (
        <div className="chin2">
            <p className="chin1502" onClick={() => setOpen(!open)}>Chinese 1502</p>
            <a href="#" className="dropdown">
                <span className="material-symbols-outlined" onClick={() => setOpen(!open)}>arrow_drop_down</span>
            </a>
            {open && Dropdown()}
        </div>
    );
}

export default Chin2
