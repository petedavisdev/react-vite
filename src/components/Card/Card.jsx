import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import styles from "../Card/Card.module.css";

export function Card({ text }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleDelete() {
        setModalIsOpen(true);
    }

    function handleCancel() {
        setModalIsOpen(false);
    }

    return (
        <div className={styles.card}>
            <h2>{text}</h2>

            <button type="button" onClick={handleDelete}>
                Delete
            </button>

            {modalIsOpen && <Modal text={text} onCancel={handleCancel} />}
        </div>
    );
}
