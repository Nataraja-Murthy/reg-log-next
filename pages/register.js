import React, { useState } from "react";
import Router from 'next/router';
import '@/styles/register.module.css';

export default function Register() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [dob, setDob] = useState('');

    const addEmployee = async (name, email, mobile, dob, pass) => {
        await fetch('apalya/addEmployee', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                mobile: mobile,
                dob: dob,
                password: pass,
                //userId: Math.random().toString(36).slice(2),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response)

            //    .then((data) => {
            //       setPosts((posts) => [data, ...posts]);
            //       setTitle('');
            //       setBody('');
            //    })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const handleSubmit = (e) => {
        //e.preventDefault();
        console.log(email);
        addEmployee(name, email, mobile, dob, pass);
        Router.push("/login")
    }

    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit} method="POST">
                    <label className="label" htmlFor="name">Name:</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    <label className="label" htmlFor="email">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label className="label" htmlFor="mobile">Mobile:</label>
                    <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="tel" placeholder="Enter Mobile" id="mobile" name="mobile" />
                    <label className="label" htmlFor="dob">Date of Birth:</label>
                    <input value={dob} onChange={(e) => setDob(e.target.value)} type="date" id="dob" name="dob" placeholder="yyyy-mm-dd" min="1979-01-01" max="2030-12-31" />
                    <label className="label" htmlFor="password">Password:</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button className="button" type="submit">Register</button>
                </form>
                <button className="link-btn" onClick={() => Router.push("/login")}>Already have an account? Login here.</button>
            </div>
        </div>
    )
}