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
                <Login setLoginData={setLoginData} />
            </div>
        )

    } else {
        return <Game username={loginData.username} />
    }
}

export default Home;