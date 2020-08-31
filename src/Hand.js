import { setStyle } from "./utils";
import { BACK_CARD, CARD_SIZE_X, CARD_SIZE_Y } from "./const";

class Hand {
    constructor(sidebar) {
        this.sidebar = sidebar;
        this.deck = document.createElement('div');
        this.side = document.createElement('div');
        this.init();

        this.side.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            let e = new Event('clickedSideDeck');
            this.side.dispatchEvent(e);
        });

        this.side.addEventListener('mouseover', (event) => {
            if (event.target !== this.side || this.side.style.backgroundImage === '' || this.side.style.backgroundImage === 'none') return;
            event.preventDefault();
            event.stopPropagation();
            setStyle(this.side, styles.mouseover);
        });

        this.side.addEventListener('mouseout', (event) => {
            if (event.target !== this.side || this.side.style.backgroundImage === '' || this.side.style.backgroundImage === 'none') return;
            event.preventDefault();
            event.stopPropagation();
            setStyle(this.side, styles.mouseout);
        });

        this.deck.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            let e = new Event('clickedCardDeck', {bubbles: true});
            this.deck.dispatchEvent(e);
        });

        this.side.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            let e = new Event('clickedCardSide', {bubbles: true});
            this.side.dispatchEvent(e);
        });
    }

    init(){
        this.side.setAttribute("id", "side");
        this.deck.setAttribute("id", "deck");

        setStyle(this.deck, styles.card);
        setStyle(this.side, styles.card);
        //setStyle(side, {rotate: "4deg"});
        setStyle(this.deck, {backgroundImage: "url('./src/images/"+ BACK_CARD + "')"});
        //setStyle(deck, {rotate: "-4deg"});

        this.sidebar.appendChild(this.side);
        this.sidebar.appendChild(this.deck);
    };

    getSide(){
        return this.side;
    }

    getDeck(){
        return this.deck;
    }
}
Hand.prototype.setStyle = setStyle();

const styles = {
    card: {
        width: ''+CARD_SIZE_X,
        height: ''+CARD_SIZE_Y,
        display: 'inline-block', // permette all'elemento di allargarsi in base al contenuto
        marginBottom: '-50px',
        marginLeft: '5px',
        marginRight: '5px',
        borderStyle: 'solid',
        borderColor: '#d1d1d1',
        borderWidth: '2px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '12px',
        position: 'relative',
        verticalAlign: 'middle',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    mouseover: {
        boxShadow: '0px 0px 2px 2px rgba(197,239,247,1)'
    },
    mouseout: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    no_border: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderColor: '#d1d1d1'
    },
    border: {
        borderColor: '#19b5fe'
    },
    hidden: {
        visibility: 'hidden'
    }
}

export { Hand }

