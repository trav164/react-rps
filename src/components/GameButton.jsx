import '../App.css';

const GameButton = ({ buttonText, setChoice }) => {
    return (
        <button className='btn btn-accent m-6' onClick={() => setChoice(buttonText)}>{buttonText}</button>
    );
}

export default GameButton;
