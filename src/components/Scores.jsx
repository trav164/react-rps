import '../App';

const Scores = ({ scores, username, setScores }) => {
    return (
        <div className='container bg-base-200 rounded-xl p-4 text-white shadow-md'>
            <h2 className='font-medium text-2xl'>SCORES</h2>
            <h4>{username.toUpperCase()} {scores.player} | {scores.computer} COMPUTER</h4>

            <button className="btn btn-primary mt-12 shadow-md" onClick={() => setScores({ player: 0, computer: 0 })}>Reset Game</button>
        </div>
    )
}

export default Scores;