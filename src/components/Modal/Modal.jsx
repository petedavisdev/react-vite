export function Modal(props) {
    return (
        <div className="modal">
            <div className="modal__dialog">
                <p>Are you sure you want to delete {props.text}?</p>

                <section>
                    <button type="button" onClick={props.onCancel}>
                        Cancel
                    </button>

                    <button type="button">Delete</button>
                </section>
            </div>
        </div>
    );
}
