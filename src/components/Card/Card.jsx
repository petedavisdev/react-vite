import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import "./card.css";

export function Card(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleDelete() {
        setModalIsOpen(true);
    }

    function handleCancel() {
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>

            <button type="button" onClick={handleDelete}>
                Delete
            </button>

            {modalIsOpen && <Modal text={props.text} onCancel={handleCancel} />}
        </div>
    );
}