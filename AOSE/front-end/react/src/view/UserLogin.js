import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const UserLogin = ({username, password, onLog, onChange, onReg}) => (
    <div className="login-container">

        <div className="card1">
            <h2>Login</h2>
            <br/>
            <label>Username:</label>
            <input className="login-input" placeholder="username" value={username}
                   onChange={ e => onChange("username", e.target.value)}
            />
            <br/>
            <label>Password :</label>
            <input type="password" className="login-input" placeholder="password" value={password}
                   onChange={ e => onChange("password", e.target.value)}
            />
            <br/>
            <button className="login-register-button" onClick={onLog}>Login</button>
            <button className="login-register-button" onClick={onReg}>Register</button>
        </div>


    </div>
);
export  default UserLogin;