import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import CharacterDetails from "../components/CharacterDetails"

const Flashcards = () => {
    const [characters, setCharacters] = useState(null)
    const location = useLocation()
    //const courseNum = location.state.courseNum
    const lessonNum = location.state.lessonNum
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/characters/${lessonNum}`, {
                //mode: 'no-cors',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            },)
            const json = await response.json()

            if (response.ok){
                setCharacters(json)
            }
    }

    fetchData()
}, [])

    return (
        <div className="characterFlashcards">
            {characters && characters.map((character) => (
                <CharacterDetails key={character._id} character={character}/>
            ))}
        </div>
    )
}

export default Flashcards