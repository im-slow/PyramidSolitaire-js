import './styles/main.scss';
import { setStyle } from "./utils";
import { Board } from "./Board";
import { MARGIN_TOP } from "./const";

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
        minHeight: '720px',
        minWidth: '600px',
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
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
    },
    content: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: '20%',
        background: "url('./src/images/green_felt.jpg')",
        paddingTop: (3*MARGIN_TOP)+'%',
        paddingBottom: '',
        textAlign: 'center',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        marginRight: '-0.25em', /* Adjusts for spacing */
        marginLeft: '-0.25em', /* Adjusts for spacing */
    },
}
