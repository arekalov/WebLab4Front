const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export const transformPoints = (points) => {
    return points.map(point => ({
        time: formatTime(point.time),
        x: point.x,
        y: point.y,
        r: point.r,
        result: point.result
    }));
};