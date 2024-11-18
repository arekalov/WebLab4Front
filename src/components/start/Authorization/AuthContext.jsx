import React, { createContext, useState, useContext } from "react";
import {login, register} from "../../../data/Repository"
import {OK, PASSWORDS_DIFFERENT_ERROR} from "../../../data/Strings.js";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    const loginUser = async (username, password) => {
        const response = await login(username, password)
        if (response === OK) {
            setUser(username)
            setPassword(password)
        }
        return response
    };

    const registerUser = async (username, password, passwordAgain) => {
        if (password !== passwordAgain) {
            return PASSWORDS_DIFFERENT_ERROR
        } else {
            const response = await register(username, password)
            if (response === OK) {
                setUser(username)
                setPassword(password)
            }
            return response
        }
    }

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, password, login: loginUser, logout, register: registerUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
