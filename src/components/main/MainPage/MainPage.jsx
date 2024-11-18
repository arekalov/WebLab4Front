import {useAuth} from "../../start/Authorization/AuthContext.jsx";
import Canvas from "../Canvas/Canvas.jsx";
import {Controls} from "../Controls.jsx";
import "./MainPage.css"
import {Button} from "../../core/Button/Button.jsx";
import Table from "../Table/Table.jsx";
import {addPoint, clearPoints, getPoints} from "../../../data/Repository.js";
import {useEffect, useState} from "react";
import {ERROR, POINTS_LOADING_ERROR} from "../../../data/Strings.js";

export function MainPage() {
    const auth = useAuth();
    const [points, setPoints] = useState([]);

    useEffect(() => {
        async function fetchPoints() {
        try {
            const data = await getPoints(auth.user, auth.password);
            if (data === ERROR) {
            } else {
                setPoints(data);
            }
        } catch (error) {
            console.error(POINTS_LOADING_ERROR);
        }
    }
    fetchPoints();
}, [auth.user, auth.password]);

    const clearAll = async () => {
        await clearPoints(auth.user, auth.password)
        setPoints([])
    }

    const addPointUser = async (x, y, r, time, result) => {
        await addPoint(auth.user, auth.password, x, y, r, time, result);
        setPoints(prevPoints => [...prevPoints, { x, y, r, time, result }]); // добавляем точку в состояние
    };

return (
        <div className="main-page">
            <h2>Добро пожаловать, {auth.user}!</h2>
            <div className="content-wrapper">
                <div className="canvas-column">
                    <Canvas existedPoints={points} savePoint={addPointUser}/>
                </div>
                <div className="controls-column">
                    <Controls/>
                </div>
            </div>
            <Button onClick={clearAll}>Почистить точки</Button>
            <Table points={points}/>
            <Button onClick={auth.logout}>Выйти</Button>
        </div>
    );
}
