import classes from "./Button.module.css"
export function Button({children, onClick, transparent}) {
    return (
        <button onClick={onClick} className={transparent ? `${classes.button} ${classes.transparent}` : classes.button}>
            {children}
        </button>
    )
}