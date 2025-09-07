import CardsList from "../components/cards-list/cards-list.component";
import Status from "../components/status/status.component";
import "./screens.css";

const GameScreen = () => {
  return (
    <div className="game-screen">
      <Status />
      <CardsList />
    </div>
  )
}

export default GameScreen
