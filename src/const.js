const BACK_CARD = "bg.png";
const CARD_TYPE = "napoletane";
let CARD_SIZE_X = '';
switch(CARD_TYPE){
    case "toscane": CARD_SIZE_X = '72px';
        break;
    case "napoletane": CARD_SIZE_X = '65px';
        break;
    case "piacentine": CARD_SIZE_X = '58px';
        break;
}

const CARD_SIZE_Y = '113px';

export { BACK_CARD, CARD_TYPE, CARD_SIZE_X, CARD_SIZE_Y };