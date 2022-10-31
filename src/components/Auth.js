import axios from "axios";
import React, { useState } from "react";
import { logIn } from "../store/actionCreators/auth";
import store from "../store/store";

export const Auth = ({setAuth}) => {
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()

 
    const handleLogin = (e) => {
        setLogin(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async() => {
        const authModel = {
            username : login,
            password : password
        }

        const config = {
            method : "POST",
            url : "https://fakestoreapi.com/auth/login",
            headers: {
                "Content-Type" : "application/json"
            },
            data : JSON.stringify(authModel)
        }
        try {
            const {data} = await axios(config)
            if (data.token) {
                console.log(data.token)
                store.dispatch(logIn(data.token))
                setAuth(true)
            }
        } catch (e) {
            console.log(e)
        }
    
    }



    return (
        <div className='auth'>
        <div className='auth__form'>
          <input type="text" onInput={handleLogin} placeholder="login" className='auth__inp' />
          <input type="text" onInput={handlePassword} placeholder="password" className='auth__inp' />
          <button onClick={handleSubmit} className='auth__btn'>Log-in</button>
        </div>
    </div>
    )
}