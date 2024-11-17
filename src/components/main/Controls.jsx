import Slider from "../core/Slider/Slider.jsx";
import TextField from "../core/TextField/TextField.jsx";
import {Button} from "../core/Button/Button.jsx";

export function Controls() {
    return (
        <div>
            <Slider onChange={{}} title={"Значение по X:"} values={[-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2]}/>
            <TextField onChange={{}} min={-5} max={3} title={"Значение по Y:"}/>
            <Slider onChange={{}} title={"Значение R:"} values={[-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2]}/>
            <Button onClick={{}}>Добавить точку</Button>
        </div>
    )
}