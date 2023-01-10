import '../App';
import Scores from './Scores';
import GameButton from './GameButton';
import Result from './Result';
import { useEffect, useState } from 'react';

const Game = ({ username }) => {
    const gameData = {
        validMoves: ['rock', 'paper', 'scissors'], // rock paper scissors
        validGames: ['y', 'n', 'q'], // yes no quit
    }
    const [choice, setChoice] = useState('');
    const [result, setResult] = useState('');
    const [scores, setScores] = useState({
        player: 0,
        computer: 0,
    });
    const [computerMove, setComputerMove] = useState('');

    useEffect(() => {
        console.warn(choice, '- has changed');
        if (!choice.length) return;
        setResult(selectWinner(choice[0]?.toLowerCase()));
    }, [choice]);

    const selectWinner = (player) => {
        const computer = gameData.validMoves[Math.floor(Math.random() * 3)];
        setComputerMove(computer);
        let result;
        switch (player + computer[0]) {
            case 'rs':
            case 'sp':
            case 'pr':
                result = username;
                scores.player++; // 1 to the current score
                break;
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
        <div className='flex h-screen'>
            <div className='m-auto'>
                <p>Game on {username.toUpperCase()}</p>
                <Scores scores={scores} username={username} setScores={setScores} />

                <GameButton buttonText={"Rock"} setChoice={setChoice} />
                <GameButton buttonText={"Paper"} setChoice={setChoice} />
                <GameButton buttonText={"Scissor"} setChoice={setChoice} />

                <p>Your Choice: {choice}</p>
                <p>Computers Choice: {computerMove.toUpperCase()}</p>
                <Result result={result} />
            </div>
        </div>
    )
}

export default Game;