import { useState } from "react"
import '../component-css/Forms.css'

const Removal = () => {
    const [lesson, setLesson] = useState("")
    const handleDeletion = async(e) => {
        e.preventDefault()
        const response = await fetch(`/api/characters/${lesson}`,
            {method: 'DELETE'}
        )
        if (response.ok){
            setLesson("")
            console.log("deleted")

        }

    }
    return (
        <form className="removal" onSubmit={handleDeletion}>
            <label>Course Num to Remove:</label>
            <input type="text" onChange={(e) => setLesson(e.target.value)} value ={lesson} />
        </form>
    )
}

export default Removal