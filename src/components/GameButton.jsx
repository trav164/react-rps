import '../App.css';

const GameButton = ({ buttonText, setChoice }) => {
    return (
        <button className='btn btn-accent m-6 shadow-lg' onClick={() => setChoice(buttonText)}>{buttonText}</button>
    );
}

export default GameButton;
