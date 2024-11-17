import {useAuth} from "../start/Authorization/AuthContext.jsx";

export function MainPage() {
    const { user, logout } = useAuth();

    return (
        <div>
            <h1>Добро пожаловать, {user.name}!</h1>
            <button onClick={logout}>Выйти</button>
        </div>
    );
}