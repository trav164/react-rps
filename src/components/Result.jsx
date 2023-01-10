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
                <h1>Round is a draw</h1>
            </div>
        )
    }
}

export default Result;