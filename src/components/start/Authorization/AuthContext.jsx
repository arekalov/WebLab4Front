import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        if (username === "admin" && password === "password") {
            setUser({ name: username });
            return true;
        }
        return false;
    };

    const register = (username, password, passwordAgain) => {
        if (password !== passwordAgain) {
            return "Пароли не совпадают"
        } else if (false) {
            return "Логин уже существует"
        } else {
            // todo save to db
            setUser({ name: username });
            return ""
        }
    }

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
