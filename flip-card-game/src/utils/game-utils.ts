import type { ELevels, ICard } from "../types/@types";

export const createGameBoard = (level: ELevels): ICard[] => {
  let cards: ICard[] = Array.from({ length: level * level },
    (_, index) => ({ id: index % 2 === 0 ? index + 1 : index, image: "", visible: false }))
    .sort(() => Math.random() - 0.5)

  cards = cards.map(card => ({ ...card, image: `https://api.clipart.com/img/previews/education-${card.id}.jpg` }))

  return cards
}
