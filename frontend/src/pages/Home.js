import Chin1 from "../components/Chin1"
import Chin2 from "../components/Chin2"
import CharacterForm from "../components/CharacterForm"

const Home = () => {

    return (
        <div className="home">
            <div className="homeText">
                <h1>Chinese Learner (学中文)</h1>
                <p>Learn or brush up on your Chinese vocabulary!</p>
            </div>
            <Chin1/>
            <Chin2/>
            <CharacterForm/>
        </div>
    )
}

export default Home