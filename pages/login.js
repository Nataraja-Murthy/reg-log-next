import React, { useState } from "react";
import Router from "next/router";

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const checkEmployee = async (email, pass) => {
        const endpoint = `apalya/loginCheck?email=${email}&password=${pass}`
        await fetch(endpoint, {
            method: 'POST',
        })
            .then(function (response) {
                // The response is a Response instance.
                // You parse the data into a useable format using `.json()`
                return response.json();
            }).then(function (data) {
                // `data` is the parsed version of the JSON returned from the above endpoint.
                // console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                // alert(data.registered);
                // alert(1);
                if (data.registered) {
                    window.alert("Registered user, we can allow to login.");
                    Router.push("/details");
                } else {
                    window.alert(" Not registered, So please register before login.");
                    Router.push("/register");
                }
                // return data.registered;
            })
            // .then((response) => response)
            // .then((isRegistered) => {
            //     setIsRegistered(response);
            //     alert(NatarajaMurthy);  
            // })
            // .then((response) => {
            //     alert(response.json());
            //     response.json();
            // }) 
            .catch((err) => {
                console.log(err.message);
            });
    };

    const handleSubmit = (e) => {
        console.log(email);
        checkEmployee(email, pass);
        e.preventDefault();
    }

    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit} method="POST">
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Log In</button>
                </form>
                <button className="link-btn" onClick={() => Router.push("/register")}>Don't have an account? Register here.</button>
            </div>
        </div>
    )
}