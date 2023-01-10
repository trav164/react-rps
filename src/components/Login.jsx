import { useState } from 'react';
import '../App';

const Login = ({ setLoginData }) => {
    const [input, setInput] = useState('');

    return (
        <div>
            <h3>Please enter your player name:</h3>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)} />
            <button onClick={() => setLoginData({
                loggedIn: true,
                username: input,
            })}>Login</button>
        </div>
    )
}

export default Login;