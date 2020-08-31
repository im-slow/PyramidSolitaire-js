import { setStyle } from "./utils";
import { BACK_CARD, CARD_SIZE_X, CARD_SIZE_Y } from "./const";

class Card {
    constructor(id, value, flip = true, focus = false, position = 0, removed = false) {
        let card;
        var _this = this; // var utilizzata per esempio, è scorretto. Viene utilizzata per fare il bind della callback

        let init = (function() {
            card = document.createElement('div');

            this.id = id;
            this.value = value;
            this.flip = flip;
            this.focus = focus;
            this.position = position;
            this.removed = removed;

            card.setAttribute('id', id);
            card.setAttribute('value', value);

            this.setStyle(card, styles.card);
            // this.setStyle(card, {rotate: Math.floor(Math.random() * -5) + 3 +"deg"});
            this.setStyle(card, {backgroundImage: "url('./src/images/"+BACK_CARD+"')"});

            card.addEventListener('mouseover', (event) => {
                event.preventDefault();
                event.stopPropagation();
                if (event.target !== card || this.flip === true) return;
                this.setStyle(card, styles.mouseover);
            });

            card.addEventListener('mouseout', (event) => {
                event.preventDefault();
                event.stopPropagation();
                if (event.target !== card || this.focus === true || this.flip === true) return;
                this.setStyle(card, styles.mouseout);
            });

            card.addEventListener('click', (event) => {
                if(event.target !== card || card.flip===true) return;
                event.preventDefault();
                event.stopPropagation();
                let e = new CustomEvent('clickedCard', {
                    bubbles: true,
                    detail: _this,
                });
                card.dispatchEvent(e);
            });

        }).bind(this);

        this.getCard = function () {
            return card;
        }

        this.attach = function(parentElement) {
            parentElement.appendChild(card);
        };

        this.detach = function() {
            card.parentElement.removeChild(card);
        };

        this.handleEvent = function(eventType, callback) {
            card.addEventListener(eventType, callback.bind(null, _this)); // con null abbiamo "oscurato il contesto" e viene evitato che il div torni fuori nel caso in cui qualcuno usasse la nostra libreria
        };

        init();
    };
}
Card.prototype.setStyle = setStyle; // aggiunge funzionalità esterna all'oggetto nell'interno del prototype

const styles = {
    card: {
        width: ''+CARD_SIZE_X,
        height: ''+CARD_SIZE_Y,
        display: 'inline-block', // permette all'elemento di allargarsi in base al contenuto
        marginBottom: '-50px',
        marginLeft:'5px',
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
}
export { Card }