import React, {useState} from "react";
import "./TextField.css";

const TextField = ({min, max, onChange, title}) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const inputValue = e.target.value;

        if (!/^-?\d*\.?\d*$/.test(inputValue) && inputValue !== "") {
            setError("Введите числовое значение");
            return;
        }

        // Обновление значения
        setValue(inputValue);
        setError("");

        const numericValue = parseFloat(inputValue);
        if (numericValue < min || numericValue > max) {
            setError(`Число в диапазоне [${min}, ${max}]`);
        }

        if (onChange && !isNaN(numericValue)) {
            onChange(numericValue);
        }
    };

    return (
        <div>
            <h3>{title}</h3>
            <div className="text-field-wrapper">
                <input
                    type="text"
                    className={`text-field ${error ? "text-field-error" : ""}`}
                    value={value}
                    onChange={handleChange}
                    placeholder={`Введите значение [${min}, ${max}]`}
                />
                {error && <div className="text-field-error-message">{error}</div>}
            </div>
        </div>
    );
};

export default TextField;
