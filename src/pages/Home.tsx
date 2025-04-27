import GameCard from "../components/ui/GameCard";
import "./css/Home.css";
import { useNavigate } from "react-router-dom";
import connectionsImage from "./assets/connections.png"
import wordleImage from "./assets/wordle.png"
import sudokuImage from "./assets/sudoku.png"

function Home () {
    const navigate = useNavigate();

    return (
        <div className="container">
            <GameCard
                text="Connections"
                navigateButton={() => navigate("/connections")}
                buttonText="Play"
                gameImage={connectionsImage}
                imageStyle="image"
                cardStyle="card connections-color"
                textStyle="card-text"
            />
            <GameCard
                text="Wordle"
                navigateButton={() => navigate("/wordle")}
                buttonText="Play"
                gameImage={wordleImage}
                imageStyle="image"
                cardStyle="card wordle-color"
                textStyle="card-text"
            />
            <GameCard
                text="Sudoku"
                navigateButton={() => navigate("/sudoku")}
                buttonText="Play"
                gameImage={sudokuImage}
                imageStyle="image"
                cardStyle="card sudoku-color"
                textStyle="card-text"
            />
            {/* Add more games here later */}
        </div>
    )
}

export default Home;
