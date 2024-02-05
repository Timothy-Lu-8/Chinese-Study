const CharacterDetails = ({character}) => {
    return (
        <div className="character-details">
            <h4>Character: {character.chineseSymbol}({character.pinyin})</h4>
            <p><strong>Definition: {character.englishDefinition}</strong></p>
        </div>
    )
}

export default CharacterDetails