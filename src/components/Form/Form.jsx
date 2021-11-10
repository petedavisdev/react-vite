import classes from "./Form.module.css";

export function Form() {
    return (
        <form action="" className={classes.form}>
            <label htmlFor="text" className={classes.form__label}>
                Text
            </label>
            <input type="text" id="text" className={classes.form__input} />
            <button>Add</button>
        </form>
    );
}
