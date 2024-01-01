import {useState} from "react"

const Chin1 = () => {
    const [open, setOpen] = useState(false);
    
    const Dropdown = () => {
        return (
            <div className="dropdown-component">
                <p>All</p>
                <p>(一) Lesson 1</p>
                <p>(二) Lesson 2</p>
                <p>(三) Lesson 3</p>
                <p>(四) Lesson 4</p>
                <p>(五) Lesson 5</p>
                <p>(六) Lesson 6</p>
                <p>(七) Lesson 7</p>
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
