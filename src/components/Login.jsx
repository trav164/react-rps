import { useState } from 'react';
import '../App';

const Login = ({ setLoginData }) => {
    const [input, setInput] = useState('');

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Derek" className="input input-bordered" value={input} onChange={e => setInput(e.target.value)} />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={() => setLoginData({
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
