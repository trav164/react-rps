import '../App';
import Scores from './Scores';
import GameButton from './GameButton';
import { useState } from 'react';

const Game = ({ username }) => {
    const [choice, setChoice] = useState();

    const [gameData, setGameData] = useState({
        player: 0, // score
        computer: 0, // score
        username: '',
        validMoves: ['r', 'p', 's'], // rock paper scissors
        validGames: ['y', 'n', 'q'], // yes no quit
    })

    const selectWinner = (player, computer) => {
        let result;
        switch (player + computer) {
            case 'rs':
            case 'sr':
            case 'pr':
                result = `${gameData.username.toUpperCase()} wins!`;
                gameData.player++; // 1 to the current score
                break;
            // eslint-disable-next-line no-duplicate-case
            case 'sr':
            case 'ps':
            case 'rp':
                result = 'COMPUTER wins!';
                gameData.computer++; // 1 to the current score
                break;
            case 'pp':
            case 'ss':
            case 'rr':
                result = null;
                break;
            default:
                result = null;
                break;
        }
        return result;
    }
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