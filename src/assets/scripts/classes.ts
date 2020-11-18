import { ICard } from "./types";

export class Card {
    id: number
    cards: Array<ICard>
  
    constructor(cards: Array<ICard>) {
      this.id = 0;
      this.cards = cards;
    }
  }