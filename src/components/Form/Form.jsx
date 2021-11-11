import { useRef } from "react";
import classes from "./Form.module.css";

export function Form(props) {
    const textInputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        props.submitTodo(textInputRef.current.value);
    }

    return (
        <form action="" className={classes.form} onSubmit={handleSubmit}>
            <label htmlFor="text" className={classes.form__label}>
                Text
            </label>
            <input
                type="text"
                id="text"
                className={classes.form__input}
                required
                ref={textInputRef}
            />
            <button type="submit">Add</button>
        </form>
    );
}
