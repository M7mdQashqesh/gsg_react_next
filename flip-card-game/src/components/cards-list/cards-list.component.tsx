import "./cards-list.css";
import Card from "../card/card.component";
import { ELevels } from "../../types/@types";
import { useState } from "react";
import { createGameBoard } from "../../utils/game-utils";

const CURRENT_LEVEL = ELevels.MEDIUM;

const CardsList = () => {
  const [cards, setCards] = useState(createGameBoard(CURRENT_LEVEL))

  return (
    <div className={`cars-list level_${CURRENT_LEVEL}`}>
      {cards.map((card, index) => <Card key={index} data={card} />)}
    </div>
  )
}

export default CardsList
