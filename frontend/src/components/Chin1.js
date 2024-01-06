import {useState} from "react"

const Chin1 = () => {
    const [open, setOpen] = useState(false);
    
    const Dropdown = () => {
        return (
            <div className="dropdown-component">
                <a href="#">All</a>
                <a href="/chin1l1">(一) Lesson 1</a>
                <a href="#">(二) Lesson 2</a>
                <a href="#">(三) Lesson 3</a>
                <a href="#">(四) Lesson 4</a>
                <a href="#">(五) Lesson 5</a>
                <a href="#">(六) Lesson 6</a>
                <a href="#">(七) Lesson 7</a>
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
