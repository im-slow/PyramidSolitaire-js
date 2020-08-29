import {Hand} from "./Hand";
import {getRangeByRow, getRow, reverseString, setStyle} from "./utils";
import {Deck} from "./Deck";
import { CARD_TYPE } from "./const";
import {Splash} from "./Splash";

class Board {
    constructor(content, sidebar) {
        this.deck = [];
        this.hand = [];
        this.sideHand = [];
        this.clickedCard = 0;
        this.content = content;
        this.sidebar = sidebar;
        
        this.sidebar.addEventListener('clickedCardDeck', (event) => {
            if(this.hand.length===0) return;
            this.sideHand.push(this.hand.pop());
            let length = this.sideHand.length;
            if(length === 0) return;
            this.setCardImage(this.sideHand[length-1].id, this.getSideHand())
            if (this.hand.length === 0) {
                setStyle(this.getHand(), {backgroundImage: "none"});
            }
        });

        this.sidebar.addEventListener('clickedCardSide', (event) => {
            let length = this.sideHand.length;
            if(length === 0) return;
            this.cardEvent(this.sideHand[length-1], this.getSideHand());
        });

        this.content.addEventListener('clickedCard', (event) => {
           this.cardEvent(event.detail, event.detail.getCard());
        });
    }

    newGame(){
        let fullDeck = new Deck(this.content);
        let fullHand = new Hand(this.sidebar);
        fullDeck.newDeck();
        fullDeck.shuffle();

        this.deck = fullDeck.list.slice(0,28);
        this.hand = fullDeck.list.slice(28,40);
    }

    generateCard(content) {
        let pPosition = 0;
        for( var i=0; i<6; i++ ){
            for( var n=0; n<i+1; n++ ){
                let tempCard = this.deck[pPosition];
                tempCard.position = ++pPosition;
                this.appendToPyramid(tempCard);
            }
            let br = document.createElement('br');
            content.appendChild(br);
        }
        for( var n=0; n<7; n++ ){
            let tempCard = this.deck[pPosition];
            tempCard.flip = false;
            tempCard.position = ++pPosition;
            this.appendToPyramid(tempCard);
            this.setCardImage(tempCard.id, tempCard.getCard());
        }
        for(var n=0; n<12; n++){
            let tempCard = this.hand[n];
            if(n===0){
                tempCard.flip = true;
                this.setCardImage(tempCard.id, tempCard.getCard());
            }
            tempCard.flip = false;
            tempCard.position = ++pPosition;
        }
    }

    appendToPyramid(card) {
        card.attach(this.content);
    };

    appendToSidebar(card) {
        card.attach(this.sidebar);
    }

    getHand(){
        return this.sidebar.childNodes[1];
    }

    getSideHand(){
        return this.sidebar.childNodes[0];
    }

    setHidden(div) {
        setStyle(div, styles.hidden);
    }

    setNoBorder (div) {
        setStyle(div, styles.no_border);
    }

    setBorder(div) {
        setStyle(div, styles.border);
    }

    setCardImage(id, div){
        let url = reverseString(id);
        setStyle(div, { backgroundImage: "url('./src/images/" + CARD_TYPE +"/"+url+".png')" });
        this.setNoBorder(this.getSideHand());
    }

    setSideHandNone(){
        setStyle(this.getSideHand(), { backgroundImage: "none"});
        setStyle(this.getSideHand(), styles.card);
        this.setNoBorder(this.getSideHand());
    }

    setSideHandByCondition(){
        this.sideHand.pop();
        let length = this.sideHand.length;
        if(length !== 0) {
            this.setCardImage(this.sideHand[length-1].id, this.getSideHand());
        } else {
            this.setSideHandNone();
        }
    }

    cardEvent(card, div){
        // se coperta esci
        if (card.flip === true) return;

        // se la carta è selezionata dopo il click viene deselezionata
        if (card.focus === true) {
            // condizione iniziale
            this.clickedCard = 0;
            card.focus = false;

            this.setNoBorder(div);
            return;
        }

        let row = getRow(card.position); // ritorna la riga corrente grazie alla lista di numeri triangolari
        let rangeInf = getRangeByRow(row-1); // ritorna il range di tutte le carte sulla riga superiore a quella della carta cliccata
        let rangeSup = getRangeByRow(row); // ritorna il ragne di tutte le carte presenti sulla riga della carta cliccata

        // prima carta selezionata
        if (this.clickedCard === 0) {
            if (card.value === 10) {
                card.removed = true;
                if(row === 8) {
                    this.setSideHandByCondition();
                } else {
                    this.setHidden(div);
                    this.checkParent(rangeInf, rangeSup);
                }
            } else {
                // seleziona la carta
                card.focus = true;
                this.setBorder(div);
                this.clickedCard = card;
            }

            // seconda carta selezionata
        } else {

            // la somma è 10
            if (this.clickedCard.value + card.value === 10) {
                this.clickedCard.removed = true;
                card.removed = true;

                // ritorna la riga corrente grazie alla lista di numeri triangolari
                let rowFirstCard = getRow(this.clickedCard.position);
                let rangeInfFirstCard = getRangeByRow(rowFirstCard-1);
                let rangeSupFirstCard = getRangeByRow(rowFirstCard);

                if(row === 8) {
                    // se la carta cliccata fa parte del mazzo
                    this.setSideHandByCondition();
                    this.setHidden(this.clickedCard.getCard());
                    this.checkParent(rangeInfFirstCard, rangeSupFirstCard);
                } else if (rowFirstCard === 8) {
                    // se la carta cliccata in precedenza fa parte del mazzo
                    this.setSideHandByCondition();
                    this.setHidden(div);
                    this.checkParent(rangeInf, rangeSup);
                } else {
                    // altrimenti sono entrambe della piramide
                    this.setHidden(div);
                    this.setHidden(this.clickedCard.getCard());
                    this.checkParent(rangeInf, rangeSup);
                    this.checkParent(rangeInfFirstCard, rangeSupFirstCard);
                }

            // la somma non è 10
            } else {
                // deseleziona carte
                card.focus = false;
                this.clickedCard.focus = false;
                this.setNoBorder(div);
                this.setNoBorder(this.clickedCard.getCard());
            }
            // la variabile che mantiene la carta selezionata per prima torna al valore di default
            this.clickedCard = 0;
        }
        if(this.hand.length === 0){
            // controlla se ci sono mosse disponibili
            this.checkMove();
        }
    }

    // vengono scoperte le carte sulla riga-1 a quella cliccata, se scoperte
    checkParent(rangeInf, rangeSup) {
        if(rangeSup[0]===0){
            this.sideHand.pop();
            let length = this.sideHand.length;
            if(length!==0){
                this.setCardImage(this.sideHand[length-1].id, this.getSideHand());
            } else {
                this.setSideHandNone();
            }
            return;
        }
        // range inferiore di carte
        let inf = this.deck.filter(function(o) {
            return o.position <= rangeInf[1] && o.position >= rangeInf[0];
        });
        // range superiore di carte
        let sup = this.deck.filter(function(o) {
            return o.position <= rangeSup[1] && o.position >= rangeSup[0];
        });
        //cicla sul range superiore della carta cliccata
        for (var i = 0; i < inf.length; i++) {
            if(sup[i].removed && sup[i+1].removed){ // se i genitori sono rimossi scopri la carta
                inf[i].flip = false; // scopri carta
                let url = reverseString(inf[i].id);
                setStyle(inf[i].getCard(), {backgroundImage: "url('./src/images/"+CARD_TYPE+"/"+url+".png')"});
            }
        }
    }

    checkMove(){
        let flippedCard = this.deck.filter(function(o) {
            return o.removed === false && o.flip === false;
        });
        if(flippedCard.length === 0) {
            let splash = new Splash(this.content);
            splash.setWin();
            return
        }
        if(this.sideHand.length !== 0){
            flippedCard.push(this.sideHand[this.sideHand.length-1]);
        }


        for (let i = 0; i<flippedCard.length; i++) {
            if (flippedCard[i].value === 10) {
                return
            }
        }

        for (let i = 0; i<flippedCard.length; i++){
            for (let j = 0; j<flippedCard.length; j++){
                if(flippedCard[i].value+flippedCard[j].value===10) {
                    if(i!==j) {
                        return
                    }
                }
            }
        }
        let splash = new Splash(this.content);
        splash.setLose();
    }
}

const styles = {
    no_border: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderColor: '#d1d1d1'
    },
    border: {
        boxShadow: '0px 0px 2px 2px rgba(197,239,247,1)',
        borderColor: '#19b5fe',
    },
    hidden: {
        visibility: 'hidden'
    }
}

export { Board }