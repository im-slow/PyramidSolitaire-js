import {setStyle} from "./utils";
import {CARD_TYPE} from "./const";

class Splash {
    constructor(content) {
        this.content = content;
        this.splash = document.createElement('div');
        this.button = document.createElement('div');
        this.init();
    }

    init() {
        setStyle(this.splash, styles.splash);
        this.content.parentNode.append(this.splash);

    setStyle(this.button, styles.button);
    this.button.innerText = "New Game";

    this.button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            window.location.reload();
    });

    this.splash.appendChild(this.button);
    }

    setWin(){
        // immagine splash scrren di vittoria
        setStyle(this.splash, { backgroundImage: "url('./src/images/win.png')" });
    }

    setLose(){
        // immagine splash scrren di sconfitta
        setStyle(this.splash, { backgroundImage: "url('./src/images/lose.png')" });
    }
}
const styles = {
    splash: {
        position: "absolute",
        textAlign: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        minHeight: '360px',
        minWidth: '360px',
        padding: "30px",
        margin: "30px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: 'flex',
        justifyContent: 'center',
        transform: 'scale(0.8)'
    },
    button: {
        height: '20px',
        width: '100px',
        position: 'absolute',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '12px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#d1d1d1',
        cursor: 'pointer',
        backgroundColor: '#e7e7e7',
        textAlign: 'center',
        top: '66%',
    },
}

export { Splash };

