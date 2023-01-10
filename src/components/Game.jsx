import '../App';
import Scores from './Scores';
import GameButton from './GameButton';
import { useState } from 'react';

const Game = () => {
    const [choice, setChoice] = useState();

    return (
        <div>
            <h1>Game Component</h1>
            <Scores />

            <GameButton buttonText={"Rock"} setChoice={setChoice} />
            <GameButton buttonText={"Paper"} setChoice={setChoice} />
            <GameButton buttonText={"Scissor"} setChoice={setChoice} />

            <h1>Choice: {choice}</h1>
        </div>
    )
}

export default Game;