const BACK_CARD = "bg.png";
const CARD_TYPE = "napoletane";

let scale = screen.width<=768?1.1:1;
let MARGIN_TOP = 1;
/*if(screen.width<=768){
    if(!(navigator.userAgent.match(/DLI-L22/i))) { // se Honor 6A non mettere margine superiore a 30%
        MARGIN_TOP = 10;
    }
}*/
if(screen.width<=768) {
    // debug Mobile/15A372, E148 pres-iphone, DLI-L22 aless, PRA-LX1 franc
    console.log("ua: ", navigator.userAgent);
    if(!(new RegExp(['DLI-L22', 'Mobile/15E148', 'Mobile/15A148', '15E148', 'PRA-LX1'].join("|")).test(navigator.userAgent))) {
        MARGIN_TOP = 10;
        console.log("margine normale");
    }
}

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
