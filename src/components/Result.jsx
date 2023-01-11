import '../App';

const Result = ({ result }) => {
    if (result) {
        return (
            <div>
                <h1>🔥 {result.toUpperCase()} WINS 🔥</h1>
            </div>
        )
    } else {
        return (
            <div>
                {/* Need to work out how not to render
                this on first load as nobody has played
                so it cannot possibly be a draw */}
                <h1>Round is a draw</h1>
            </div>
        )
    }
}

export default Result;