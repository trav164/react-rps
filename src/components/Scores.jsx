import '../App';

const Scores = ({ scores, username }) => {
    return (
        <div>
            <h2>Scores</h2>
            <h4>{username.toUpperCase()} {scores.player} | {scores.computer} COMPUTER</h4>
        </div>
    )
}

export default Scores;