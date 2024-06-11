import Chin1 from "../components/Chin1"
import Chin2 from "../components/Chin2"
import CharacterForm from "../components/CharacterForm"
import Removal from "../components/Removal"

const Home = () => {

    return (
        <div className="home">
            <div className="homeText">
                <h1>Chinese Study/Learning Tool (学/复习中文)</h1>
                <p>Learn or brush up on your Chinese vocabulary!</p>
            </div>
            <Chin1/>
            <Chin2/>
            <CharacterForm/>
            <Removal/>
        </div>
    )
}

export default Home