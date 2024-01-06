import { useEffect, useState } from "react"

const C1L1 = () => {
    const [characters, setCharacters] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/characters")
            const json = await response.json()

            if (response.ok){
                setCharacters(json)
            }
    }

    fetchData()
}, [])
    return (
        <div className="c1l1Characters">
            {characters && characters.map((character) => (
                <p key={character._id}>{character.chineseSymbol}</p>
            ))}
        </div>
    )
}

export default C1L1