import React, { useEffect, useState } from "react";
import "./Table.css";
import { getPoints } from "../../../data/Repository.js";
import { useAuth } from "../../start/Authorization/AuthContext.jsx";

export default function Table() {
    const auth = useAuth();
    const [points, setPoints] = useState([]);  // Состояние для хранения точек
    const [loading, setLoading] = useState(true); // Состояние для загрузки
    const [error, setError] = useState(null); // Состояние для ошибок

    useEffect(() => {
        async function fetchPoints() {
            try {
                const data = await getPoints(auth.user, auth.password);
                if (data === "ERROR") {
                    setError("Ошибка при загрузке данных");
                } else {
                    setPoints(data);
                }
            } catch (error) {
                console.error("Ошибка при загрузке точек:", error);
                setError("Ошибка при загрузке данных");
            } finally {
                setLoading(false);
            }
        }

        fetchPoints(); // Запускаем получение данных
    }, [auth.user, auth.password]);

    return (
        <div className="table-container">
            {loading && <div>Загрузка...</div>}
            {error && <div className="error">{error}</div>}
            {!loading && !error && (
                <table className="styled-table">
                    <thead>
                    <tr>
                        <th>Время</th>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>Результат</th>
                    </tr>
                    </thead>
                    <tbody>
                    {points.map((point, index) => (
                        <tr key={index}>
                            <td>{point.time}</td>
                            <td>{point.x}</td>
                            <td>{point.y}</td>
                            <td>{point.r}</td>
                            <td className={point.result ? "success" : "failure"}>
                                {point.result ? "V" : "X"}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
