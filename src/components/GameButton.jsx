import '../App.css';

const GameButton = ({ buttonText, setChoice }) => {
    return (
        <button onClick={() => setChoice(buttonText)}>{buttonText}</button>
    );
}

export default GameButton;
