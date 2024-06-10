import { useState } from "react"

const CharacterForm = () => {
    const [chineseSymbol, setChineseSymbol] = useState("")
    const [pinyin, setPinyin] = useState("")
    const [englishDefinition, setEnglishDefinition] = useState("")
    const [courseNumber, setCourseNumber] = useState("")
    const [lessonNumber, setLessonNumber] = useState("")
    const [supplementary, setSupplementary] = useState("")
    const [wt, setWT] = useState("")
    const [error, setError] = useState(null)

    const handleSubmission = async(e) => {
        e.preventDefault()

        const character = {chineseSymbol, pinyin, englishDefinition, courseNumber, lessonNumber, supplementary, wt}

        const response = await fetch('https://chinese-study-pi.vercel.app/characters', {
            method: 'POST',
            body: JSON.stringify(character),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setChineseSymbol("")
            setPinyin("")
            setEnglishDefinition("")
            setError(null)
            console.log("new character added")
        }
    }

    return (
        <form className="create" onSubmit={handleSubmission}>
            <h3> Add a New Character</h3>
            <label>Chinese Character:</label>
            <input type="text" onChange={(e) => setChineseSymbol(e.target.value)} value ={chineseSymbol} />

            <label>Pinyin:</label>
            <input type="text" onChange={(e) => setPinyin(e.target.value)} value ={pinyin} />
            
            <label>English Definition:</label>
            <input type="text" onChange={(e) => setEnglishDefinition(e.target.value)} value ={englishDefinition} />

            <label>Course Number:</label>
            <input type="text" onChange={(e) => setCourseNumber(e.target.value)} value ={courseNumber} />

            <label>Lesson Number:</label>
            <input type="text" onChange={(e) => setLessonNumber(e.target.value)} value ={lessonNumber} />

            <label>Supplementary:</label>
            <input type="text" onChange={(e) => setSupplementary(e.target.value)} value ={supplementary} />

            <label>Type:</label>
            <input type="text" onChange={(e) => setWT(e.target.value)} value ={wt} />

            <button>Add Character</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default CharacterForm
