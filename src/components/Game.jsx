import '../App';
import Scores from './Scores';
import GameButton from './GameButton';
import Result from './Result';
import { useEffect, useState } from 'react';

const Game = ({ username }) => {
    // Non reactive variable
    const gameData = {
        validMoves: ['r', 'p', 's'], // rock paper scissors
        validGames: ['y', 'n', 'q'], // yes no quit
    }
    const [choice, setChoice] = useState('');
    const [result, setResult] = useState('');
    const [scores, setScores] = useState({
        player: 0,
        computer: 0,
    });

    useEffect(() => {
        console.warn(choice, '- has changed');
        setResult(selectWinner(choice[0].toLowerCase()));
    }, [choice]);

    const selectWinner = (player) => {
        const computer = gameData.validMoves[Math.floor(Math.random() * 3)];
        let result;
        switch (player + computer) {
            case 'rs':
            case 'sr':
            case 'pr':
                result = username;
                scores.player++; // 1 to the current score
                break;
            // eslint-disable-next-line no-duplicate-case
            case 'sr':
            case 'ps':
            case 'rp':
                result = 'computer';
                scores.computer++; // 1 to the current score
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
            <Scores scores={scores} username={username} />
            <GameButton buttonText={"Rock"} setChoice={setChoice} />
            <GameButton buttonText={"Paper"} setChoice={setChoice} />
            <GameButton buttonText={"Scissor"} setChoice={setChoice} />

            <h3>Choice: {choice}</h3>
            <h3></h3>
            <Result result={result} />
        </div>
    )
}

export default Game;