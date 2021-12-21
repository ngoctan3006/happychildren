import './login.css';
import wave from './img/wave-removebg.svg';
import logo from './img/avatar.svg';
import bg from './img/bg.svg';
import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <div className="login">
            	<img className="wave" src={wave} alt="wave"/>
            <div className="container_login">
                <div className="img">
                    <img src={bg} alt="bg"/>
                </div>
                <div className="login-content">
                    <form >
                        <img src={logo} alt="logo"/>
                        <h2 className="title">Happy Children</h2>
                        <div className="input-div one">
                        <div className="i">
                                <i className="fas fa-user"></i>
                        </div>
                        <div className="div">
                                <h5>Username</h5>
                                <input type="text" className="input"/>
                        </div>
                        </div>
                        <div className="input-div pass">
                        <div className="i"> 
                                <i className="fas fa-lock"></i>
                        </div>
                        <div className="div">
                                <h5>Password</h5>
                                <input type="password" className="input"/>
                        </div>
                        </div>
                        <div className="forgotOrNew">
                            <Link to="/signup" className="signUpButton">New Account</Link>
                            <Link to='/forgotPassWord'>Forgot Password?</Link>
                        </div>
                        <input type="submit" className="btn" value="Login"/>
                    </form>
                </div>
            </div>
        </div>
    
    )
}