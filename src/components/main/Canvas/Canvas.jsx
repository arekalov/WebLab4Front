import React, {useRef, useState, useEffect} from 'react';
import {drawAxis, drawCircle, drawRectangle, drawTriangle} from "./DrawUtils.js";

export default function Canvas() {
    const canvasRef = useRef(null);
    const [points, setPoints] = useState([]);

    let radius = 250
    const dynamicScalingFactor = 1
    const width = 650
    const height = 650

    const pointRadius = 5
    const drawElements = (ctx) => {
        drawAxis(ctx, width, height)
        drawCircle(ctx, width, height, radius, dynamicScalingFactor)
        drawRectangle(ctx, width, height, radius, dynamicScalingFactor)
        drawTriangle(ctx, width, height, radius, dynamicScalingFactor)
    };

    const drawPoints = (ctx, points) => {
        points.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, pointRadius, 0, 2 * Math.PI);

            ctx.fillStyle = 0 <= radius ? 'green' : 'red';

            ctx.fill();
        });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawElements(ctx);
        drawPoints(ctx, points);
    }, [points]);

    const handleClick = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newPoint = {
            x,
            y,
        };
        setPoints([...points, newPoint]);
    };

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={650}
                height={650}
                style={{border: '1px solid black'}}
                onClick={handleClick}
            />
        </div>
    );
}
