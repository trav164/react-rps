import '../App';
import Scores from './Scores';
import GameButton from './GameButton';
import Result from './Result';
import { useEffect, useState } from 'react';

const Game = ({ username }) => {
    const [choice, setChoice] = useState('');
    const [result, setResult] = useState('');

    const [gameData, setGameData] = useState({
        player: 0, // score
        computer: 0, // score
        validMoves: ['r', 'p', 's'], // rock paper scissors
        validGames: ['y', 'n', 'q'], // yes no quit
    })

    useEffect(() => {
        console.warn(choice, '- has changed');
        setResult(selectWinner(choice));
    }, [choice]);

    const selectWinner = (player) => {
        const computer = gameData.validMoves[Math.floor(Math.random() * 3)];
        let result;
        switch (player + computer) {
            case 'rs':
            case 'sr':
            case 'pr':
                result = username;
                gameData.player++; // 1 to the current score
                break;
            // eslint-disable-next-line no-duplicate-case
            case 'sr':
            case 'ps':
            case 'rp':
                result = 'computer';
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
            <h1>Game on {username}</h1>
            <Scores />
            <GameButton buttonText={"Rock"} setChoice={setChoice} />
            <GameButton buttonText={"Paper"} setChoice={setChoice} />
            <GameButton buttonText={"Scissor"} setChoice={setChoice} />

            <h1>Choice: {choice}</h1>
            <Result result={result} />
        </div>
    )
}

export default Game;