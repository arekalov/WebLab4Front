import {useAuth} from "../../start/Authorization/AuthContext.jsx";
import Canvas from "../Canvas/Canvas.jsx";
import {Controls} from "../Controls.jsx";
import "./MainPage.css"
import {Button} from "../../core/Button/Button.jsx";
import Table from "../Table/Table.jsx";
import {getPoints} from "../../../data/Repository.js";

export function MainPage() {
    const {user, logout} = useAuth();
    return (
        <div className="main-page">
            <h2>Добро пожаловать, {user}!</h2>
            <div className="content-wrapper">
                <div className="canvas-column">
                    <Canvas/>
                </div>
                <div className="controls-column">
                    <Controls/>
                </div>
            </div>
            <Table/>
            <Button onClick={logout}>Выйти</Button>
        </div>
    );
}
