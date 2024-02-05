const CharacterDetails = ({character}) => {
    return (
        <div className="character-details">
            <h4>Character: {character.chineseSymbol}</h4>
            <p><strong>Pinyin: {character.pinyin}</strong></p>
            <p><strong>English Definition: {character.englishDefinition}</strong></p>
        </div>
    )
}

export default CharacterDetails