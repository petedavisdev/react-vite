import styles from "./Modal.module.css";

export function Modal({ text, onCancel }) {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__dialog}>
                <p>Are you sure you want to delete {text}?</p>

                <section>
                    <button type="button" onClick={onCancel}>
                        Cancel
                    </button>

                    <button type="button">Delete</button>
                </section>
            </div>
        </div>
    );
}
