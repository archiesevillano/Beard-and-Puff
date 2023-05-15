import React, { useState } from 'react';
import axios from 'axios';
import { userAuth } from './firebase';

export const User = React.createContext();
export const SetUser = React.createContext();


const Authenticator = ({ children }) => {
    const [userData, setUserData] = useState({ authenticated: false });

    const handleSetUser = (data) => {
        setUserData(data);
    }

    return (
        <User.Provider value={userData}>
            <SetUser.Provider value={handleSetUser}>
                {children}
            </SetUser.Provider>
        </User.Provider>
    )
}

export const validateUser = async (email, password) => {
    let validationResult = {
        data: {},
        response: "Network Error! Server not found",
        isAnError: false,
        authenticated: false,
    };

    try {
        const serverData = await userAuth(email, password);

        if (serverData.data.length > 0 && (serverData.data[0].email == email && serverData.data[0].password == password)) {
            validationResult = {
                data: serverData.data[0],
                response: "Log in successfully",
                isAnError: false,
                authenticated: true,
            }
        }
        else if (serverData.data.length > 0 && serverData.data[0].email == email) {
            validationResult = {
                data: {},
                response: "Password is incorrect",
                isAnError: true,
                authenticated: false,
            }
        }
        else {
            validationResult = {
                data: {},
                response: "Invalid Email and Password",
                isAnError: false,
                authenticated: false,
            }
        }
    } catch (error) {
        console.log(`Server Error: ${error}`)
    }

    return validationResult;
}

export default Authenticator;