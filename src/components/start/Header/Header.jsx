import {useEffect, useState} from "react";
import "./Header.module.css"

export default function Header() {
    const [nowTime, setNow] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <header>
            <h3>Рекалов Артём | P3209 </h3>
            <span>Текущее время: {nowTime.toLocaleTimeString()}</span>
        </header>
    )
}