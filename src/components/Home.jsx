import { useState } from 'react';
import '../App';
import Game from './Game';
import Login from './Login';

const Home = () => {
    const [loginData, setLoginData] = useState({
        loggedIn: false,
        username: '',
    });

    if (!loginData.loggedIn) {
        return (
            <div>
                <h3>Welcome to the rock paper scissors game.</h3>
                <Login setLoginData={setLoginData} />
            </div>
        )

    } else {
        return <Game />
    }
}

export default Home;