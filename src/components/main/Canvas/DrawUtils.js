
export const drawCircle = (ctx, width, height, radius, dynamicScalingFactor) => {
    ctx.fillStyle = "#39FF1410";
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, radius * dynamicScalingFactor, 0, 0.5 * Math.PI);
    ctx.lineTo(width / 2, height / 2);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#39FF14";
    ctx.stroke();
}

export const drawRectangle = (ctx, width, height, radius, dynamicScalingFactor) => {
    ctx.fillStyle = "#0000FF10";
    ctx.fillRect(width / 2, height / 2, radius * dynamicScalingFactor, -radius / 2 * dynamicScalingFactor);
    ctx.strokeStyle = "#0000FF";
    ctx.strokeRect(width / 2, height / 2, radius * dynamicScalingFactor, -radius / 2 * dynamicScalingFactor);
}

export const drawTriangle = (ctx, width, height, radius, dynamicScalingFactor) => {
    ctx.fillStyle = "#FFFF0010";
    ctx.beginPath();
    ctx.moveTo(width / 2, height / 2);
    ctx.lineTo(width / 2, height / 2 + radius / 2 * dynamicScalingFactor);
    ctx.lineTo(width / 2 - radius * dynamicScalingFactor, height / 2);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#FFFF00";
    ctx.stroke();
}

export const drawAxis = (ctx, width, height) => {
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);

    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.strokeStyle = 'white';
    ctx.stroke();
}