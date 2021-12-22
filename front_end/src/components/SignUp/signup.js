import './signup.css'
import { useState } from 'react'

export default function SignUp() {
    const [values, setValues] = useState({
        fullName: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        cfpassword: '',
    })

    const handleInput = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSignUp = async e => {
        e.preventDefault()
        const data = {
            username: values.username,
            password: values.password,
            fullName: values.fullName,
            email: values.email
        }

        const url = 'http://localhost:4552/api/v1/users/register'

        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            response = await response.json()
            alert(response.message)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="signupBody">
            <div class="signup">
                <div class="title">Registration</div>
                <div class="content">
                    <form action="#">
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Full Name</span>
                                <input type="text" name="fullName" value={values.fullName} onChange={handleInput} placeholder="Enter your name" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Username</span>
                                <input type="text" name="username" value={values.username} onChange={handleInput} placeholder="Enter your username" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Email</span>
                                <input type="text" name="email" value={values.email} onChange={handleInput} placeholder="Enter your email" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Phone Number</span>
                                <input type="text" name="phone" value={values.phone} onChange={handleInput} placeholder="Enter your number" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Password</span>
                                <input type="password" name="password" value={values.password} onChange={handleInput} placeholder="Enter your password" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Confirm Password</span>
                                <input type="password" name="cfpassword" value={values.cfpassword} onChange={handleInput} placeholder="Confirm your password" required />
                            </div>
                        </div>
                        <div class="gender-details">
                            <input type="radio" name="gender" id="dot-1" />
                            <input type="radio" name="gender" id="dot-2" />
                            <input type="radio" name="gender" id="dot-3" />
                            <span class="gender-title">Gender</span>
                            <div class="category">
                                <label for="dot-1">
                                    <span class="dot one"></span>
                                    <span class="gender">Male</span>
                                </label>
                                <label for="dot-2">
                                    <span class="dot two"></span>
                                    <span class="gender">Female</span>
                                </label>
                                <label for="dot-3">
                                    <span class="dot three"></span>
                                    <span class="gender">Prefer not to say</span>
                                </label>
                            </div>
                        </div>
                        <div class="button">
                            <input type="submit" value="Register" onClick={handleSignUp} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}