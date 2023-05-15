import logo from "./../../logo.png";
import "./login.css";
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { validateUser } from "../../authenticator";
import { SetUser } from "../../authenticator";

const Login = () => {

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [inputStatus, setInputStatus] = useState({ visible: false, icon: "fa-solid fa-circle-exclamation", message: "None", color: 'rgb(255, 55, 55)' });
    const authenticatedData = useContext(SetUser);

    useEffect(() => {

    }, [emailInput, passwordInput]);

    const submitLogin = async () => {

        if (emailInput == "" && passwordInput == "") {
            setInputStatus(
                {
                    visible: true,
                    icon: "fa-solid fa-circle-exclamation",
                    message: "Please enter your email and password!",
                    color: 'rgb(255, 55, 55)',
                }
            )
        } else if (emailInput == "") {
            setInputStatus(
                {
                    visible: true,
                    icon: "fa-solid fa-circle-exclamation",
                    message: "Please enter your email!",
                    color: 'rgb(255, 55, 55)',
                }
            )
        } else if (passwordInput == "") {
            setInputStatus(
                {
                    visible: true,
                    icon: "fa-solid fa-circle-exclamation",
                    message: "Please enter your password!",
                    color: 'rgb(255, 55, 55)',
                }
            )
        } else {
            const submitResponse = await validateUser(emailInput, passwordInput);
            if (submitResponse.authenticated === true) {
                setInputStatus(
                    {
                        visible: true,
                        icon: "fa-solid fa-circle-check",
                        message: submitResponse.response,
                        color: `rgb(80, 216, 109)`,
                    }
                )
                setTimeout(() => {
                    authenticatedData(submitResponse);
                }, 4000);

            }
            else {
                setInputStatus(
                    {
                        visible: true,
                        icon: "fa-solid fa-circle-exclamation",
                        message: submitResponse.response,
                        color: 'rgb(255, 55, 55)',
                    }
                )
            }
        }


    }

    return (
        <div className="overlay">
            <div className="login-modal">
                <img src={logo} alt="Brand Logo" />
                <form className="input-group">
                    <input type="text" className="email-field field" placeholder="Email" onChange={e => {
                        setEmailInput(e.target.value);
                    }} />
                    <input type="password" className="password-field field" placeholder="Password" onChange={e => {
                        setPasswordInput(e.target.value);
                    }} />
                    <button type="button" className="confirm-btn btn" value="confirm" onClick={submitLogin}>LOG IN</button>
                    <div style={{ display: inputStatus.visible === true ? "flex" : "none", color: inputStatus.color }} className="error-container">
                        <i className={inputStatus.icon}></i>
                        <p>{inputStatus.message}</p>
                    </div>
                    <p><i className="fa-solid fa-circle-notch fa-spin" style={{ visibility: "rgb(255, 55, 55)" === inputStatus.color ? "hidden" : "visible", display: "block", color: inputStatus.color }}></i></p>
                </form>
            </div>
        </div>
    );
}

export default Login;