// import getConfig from 'next/config'
import { useState } from 'react'
// import { setCookie } from 'nookies'
import Router from 'next/router'
import style from "../../styles/Home.module.css"


const { publicRuntimeConfig } = getConfig();

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {
        const loginInfo = {
            identifier: username,
            password: password
        }

        const login = await fetch('https://shaper-app.onrender.com/api/auth/local', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })

        const loginResponse = await login.json();
        // setCookie(null, 'jwt', loginResponse.jwt, {
        //     maxAge: 30 * 24 * 60 * 60,
        //     path: '/',
        // })
        if (loginResponse.user.email === username) {
            Router.push('/posts')
        }

    }

    return (
        <div className={`container ${style.multiStepForm}`} >
            <div className={`row justify-content-center ${style.mainForms}`}>
                <div className="col-md-8" >
                <h2>Please Login here</h2>

                <form>
                    <div className={`form-group mb-3 col-sm-4-md-10 ${style.formGroup}`}>
                        <input
                            className="form-control"
                            type="email"
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                        />
                    </div>

                    <div className={`form-group mb-3 col-sm-4-md-10 ${style.formGroup}`}>
                        <input
                            className="form-control"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <div className={`form-group mb-3 col-sm-4-md-10 ${style.formGroup}`}>
                        <button className={`btn btn-secondary ${style.Nextbtn} `} type="button" onClick={() => handleLogin()}>Login</button>
                    </div>
                </form>

            </div>
        </div>
        </div>

    );
}

export default Login; 
