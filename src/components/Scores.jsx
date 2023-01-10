import '../App';

const Scores = ({ scores, username, setScores }) => {
    return (
        <div>
            <h2>Scores</h2>
            <h4>{username.toUpperCase()} {scores.player} | {scores.computer} COMPUTER</h4>

            <button onClick={() => setScores({ player: 0, computer: 0 })}>Reset Game</button>
        </div>
    )
}

export default Scores;