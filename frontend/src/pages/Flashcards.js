import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import CharacterDetails from "../components/CharacterDetails"

const Flashcards = () => {
    const [characters, setCharacters] = useState(null)
    const [display, setDisplay] = useState(false)
    const [title, setTitle] = useState("")
    const location = useLocation()
    const navigate = useNavigate()
    const courseNum = location.state.courseNum
    const lessonNum = location.state.lessonNum

    const toQuizPage = () => {
        navigate("/quiz", {state:{characters}})
    }

    const toHomePage = () => {
        navigate("/home")
    }

    useEffect(() => {
        const fetchData = async () => {
            let response
            let displaying = "Chinese " + courseNum + " Lesson " + lessonNum
            if (lessonNum != "0"){
                setDisplay(true)

                response = await fetch(`api/characters/${lessonNum}/${courseNum}`, {
                    //mode: 'no-cors',
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                    },
                },)
            }

            else {
                displaying = "Chinese " + courseNum + " All"
                response = await fetch(`/api/characters/${courseNum}`, {
                    //mode: 'no-cors',
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                    },
                },)
            }

            const json = await response.json()

            if (response.ok){
                setCharacters(json)
                setTitle(displaying)
            }
    }

    fetchData()
}, [])

    return (
        <div className="characterFlashcards">
            <div className="heading">
                <span class="material-symbols-outlined" onClick={toHomePage}>arrow_back</span>
                <p className="homeRedirect">To Home Page</p>
                <h2>{title}</h2>
                <button onClick={toQuizPage}>Quiz</button>
            </div>
            {characters && characters.map((character) => (
                <CharacterDetails key={character._id} character={character}/>
            ))}
        </div>
    )
}

export default Flashcards
