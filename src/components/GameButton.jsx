import '../App.css';

const GameButton = ({ buttonText, setChoice }) => {
    return (
        <button onClick={() => setChoice(buttonText[0].toLowerCase())}>{buttonText}</button>
    );
}

export default GameButton;
