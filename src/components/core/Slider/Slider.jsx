import React, {useState} from "react";
import "./Slider.css";

const Slider = ({title, values, onChange}) => {
    const [currentIndex, setCurrentIndex] = useState(Math.floor(values.length / 2));

    const handleSlide = (index) => {
        setCurrentIndex(index);
        if (onChange) {
            onChange(values[index]);
        }
    };

    return (
        <div>
            <h3>{title}</h3>
            <div className="value-slider">
                <div className="slider-track">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className={`slider-point ${
                                index === currentIndex ? "active" : ""
                            }`}
                            onClick={() => handleSlide(index)}
                        >
                            {value}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
