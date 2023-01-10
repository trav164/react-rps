import { useState } from 'react';
import '../App';

const Login = ({ setLoginData }) => {
    const [input, setInput] = useState('');

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <p className='prose lg:prose-xl'>Welcome to Lewis' Rock Paper Scissors game.</p>
                        <p className='prose sm:prose-sm'>The web app was built using react and tailwind css.</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Derek" className="input input-bordered" value={input} onChange={e => setInput(e.target.value)} />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent" onClick={() => setLoginData({
                                loggedIn: true,
                                username: input,
                            })}>Play</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
