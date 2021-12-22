import './login.css'
import wave from './img/wave-removebg.svg'
import logo from './img/avatar.svg'
import bg from './img/bg.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const handleInput = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async e => {
        e.preventDefault()

        const url = 'http://localhost:4552/api/v1/users/login'

        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(values)
            })
            response = await response.json()
            alert(response.message || 'login success')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="login">
            <img className="wave" src={wave} alt="wave" />
            <div className="container_login">
                <div className="img">
                    <img src={bg} alt="bg" />
                </div>
                <div className="login-content">
                    <form >
                        <img src={logo} alt="logo" />
                        <h2 className="title">Happy Children</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5></h5>
                                <input type="text" name="username" value={values.username} onChange={handleInput} className="input" />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5></h5>
                                <input type="password" name="password" value={values.password} onChange={handleInput} className="input" />
                            </div>
                        </div>
                        <div className="forgotOrNew">
                            <Link to="/signup" className="signUpButton">New Account</Link>
                            <Link to='/forgotPassWord'>Forgot Password?</Link>
                        </div>
                        <input type="submit" onClick={handleLogin} className="btn" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    )
}
