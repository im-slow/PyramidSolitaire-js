import { Card } from './Card';
import { Deck } from './Deck';
import './styles/main.scss';
import { setStyle } from "./utils";
import {SidebarManager} from "./Hand";
import {Board} from "./Board";

{
    let myApp = (function(){
        let context = document.getElementById('root');

        setStyle(context, styles.context);

        let sidebar = document.createElement('sidebar');
        setStyle(sidebar, styles.sidebar);

        context.appendChild(sidebar); // appende al div sidebar destra

        let content = document.createElement('section');
        setStyle(content, styles.content);

        context.appendChild(content);

        let pyramid = new Board(content, sidebar);
        pyramid.newGame();
        pyramid.generateCard(content);
    });

    window.addEventListener('load', myApp, false);
}

const styles = {
    context: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        minHeight: '360px',
        minWidth: '740px',
    },
    sidebar: {
        position: 'absolute',
        top: '80%',
        right: 0,
        left: 0,
        bottom: 0,
        backgroundImage: "url('./src/images/sidebar.png')",
        padding: '15px',
        textAlign: 'center',
        vspace: 100,
    },
    content: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: '20%',
        background: "url('./src/images/green_felt.jpg')",
        padding: '15px',
        paddingTop: '3%',
        textAlign: 'center',
        // display: 'inline-block',
        // height: '100%',
        // verticalAlign: 'middle',
        // marginRight: '-0.25em', /* Adjusts for spacing */
    },
    card: {
        height: '113px',
        width: '65px',
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
    },
}
