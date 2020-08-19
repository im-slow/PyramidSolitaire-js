import { Card } from './Card';
import {Board} from "./Board";

class Deck {
    constructor() {
        this.list = [];
    }

    newDeck() {
        let suits = ['b', 'c', 'd', 's'];
        let suitsLength = suits.length;
        for(var i = 0; i < suitsLength; i++){
            for(var j = 1; j<=10; j++){
                this.list.push(new Card(suits[i]+j, j));
            }
        }
    }

    shuffle() {
        for (let i = this.list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
        }
        return this.list;
    }
}

export { Deck }