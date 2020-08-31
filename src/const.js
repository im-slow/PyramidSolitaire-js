const BACK_CARD = "bg.png";
const CARD_TYPE = "napoletane";

let scale = screen.width<=768?1.1:1;
let MARGIN_TOP = screen.width<=768?10:1;
let CARD_SIZE_X = '';
switch(CARD_TYPE){
    case "toscane": CARD_SIZE_X = (72*scale)+'px';
        break;
    case "napoletane": CARD_SIZE_X = (65*scale)+'px';
        break;
    case "piacentine": CARD_SIZE_X = (58*scale)+'px';
        break;
}

const CARD_SIZE_Y = (113*scale)+'px';

export { BACK_CARD, CARD_TYPE, CARD_SIZE_X, CARD_SIZE_Y, MARGIN_TOP};