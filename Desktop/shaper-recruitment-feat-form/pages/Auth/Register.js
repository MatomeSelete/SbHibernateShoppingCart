
import getConfig from 'next/config'
import { useState } from 'react'
import style from "../../styles/Home.module.css"

const { publicRuntimeConfig } = getConfig();

function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleRegister() {
        const registerInfo = {
            username: username,
            email: email,
            password: password
        }

        const register = await fetch('https://shaper-app.onrender.com/api/auth/local/register', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })

        const registerResponse = await register.json();
        console.log(registerResponse)

    }

    return (
        <div className="container">
            <div className={`row justify-content-center ${style.mainForms}`}>
                <div className="col-md-8" >
                    <h2>Please Register here</h2>
                    <form>

                        <div className={`form-group mb-3 col-sm-4-md-10 ${style.formGroup}`}>
                            <input
                                className="form-control"
                                type="text"
                                onChange={e => setUsername(e.target.value)} value={username}
                                placeholder="Username"
                            />
                        </div>

                        <div className={`form-group mb-3 col-sm-4-md-10 ${style.formGroup}`}>
                            <input
                                className="form-control"
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email" />
                        </div>

                        <div className={`form-group mb-3 col-sm-4-md-10 ${style.formGroup}`}>
                            <input
                                className="form-control"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                placeholder="Password" /><br />
                        </div>
                        <div className={`form-group mb-3 col-sm-4-md-10 ${style.formGroup}`}>
                            <button className={`btn btn-secondary ${style.Nextbtn} `} type="button" onClick={() => handleRegister()}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;