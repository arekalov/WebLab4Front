import {useAuth} from "../../start/Authorization/AuthContext.jsx";
import Canvas from "../Canvas/Canvas.jsx";
import {Controls} from "../Controls.jsx";
import "./MainPage.css"
import {Button} from "../../core/Button/Button.jsx";
import Table from "../Table/Table.jsx";

export function MainPage() {
    const {user, logout} = useAuth();

    return (
        <div className="main-page">
            <h2>Добро пожаловать, {user.name}!</h2>
            <div className="content-wrapper">
                <div className="canvas-column">
                    <Canvas/>
                </div>
                <div className="controls-column">
                    <Controls/>
                </div>
            </div>
            <Table points={[
                { time: "12:30:45", x: -1.5, y: 0.5, r: 2, result: true },
                { time: "12:31:00", x: 1, y: 1, r: 2, result: false },
                { time: "12:31:15", x: -2, y: 1.5, r: 3, result: true },
            ]}/>
            <Button onClick={logout}>Выйти</Button>
        </div>
    );
}
