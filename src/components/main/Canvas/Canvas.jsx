import React, { useRef, useState, useEffect } from 'react';
import { drawAxis, drawAxisLabels, drawCircle, drawRectangle, drawTriangle } from "./DrawUtils.js";

export default function Canvas({ existedPoints, savePoint }) {
    const canvasRef = useRef(null);
    const [points, setPoints] = useState(existedPoints || []);

    let radius = 2;
    const width = 650;
    const height = 650;

    // Масштабируем по диапазону -2 до 2 по осям X и Y
    const dynamicScalingFactor = width / 4; // (Диапазон 4 единицы для -2 до 2)

    const pointRadius = 5;

    const drawElements = (ctx) => {
        drawAxis(ctx, width, height);
        drawCircle(ctx, width, height, radius, dynamicScalingFactor);
        drawRectangle(ctx, width, height, radius, dynamicScalingFactor);
        drawTriangle(ctx, width, height, radius, dynamicScalingFactor);
        drawAxisLabels(ctx, width, height, dynamicScalingFactor);
    };

    const drawPoints = (ctx, points) => {
        points.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x * dynamicScalingFactor + width / 2,  // Переводим координаты в пиксели
                height / 2 - point.y * dynamicScalingFactor,  // Переводим координаты в пиксели
                pointRadius, 0, 2 * Math.PI);

            ctx.fillStyle = 0 <= radius ? 'green' : 'red';

            ctx.fill();
        });
    };

    useEffect(() => {
        setPoints(existedPoints);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawElements(ctx);
        drawPoints(ctx, points);
        console.log(points);
    }, [points, existedPoints]);

    const handleClick = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left - width / 2) / dynamicScalingFactor;
        const y = (height / 2 - (e.clientY - rect.top)) / dynamicScalingFactor;  // инвертируем Y

        const time = Date.now();
        const result = true;

        savePoint(x, y, radius, time, result);
    };


    return (
        <div>
            <canvas
                ref={canvasRef}
                width={650}
                height={650}
                style={{ border: '1px solid black' }}
                onClick={handleClick}
            />
        </div>
    );
}
