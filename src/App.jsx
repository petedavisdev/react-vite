import React, { useEffect, useState } from "react";
import { Card } from "./components/Card/Card";
import { Form } from "./components/Form/Form";

function App() {
    const [todoList, setToDoList] = useState([]);

    useEffect(() => {
        getTodos();
    }, []);

    async function getTodos() {
        try {
            const response = await fetch("http://localhost:3000/todos");
            const data = await response.json();

            setToDoList(data);
        } catch (err) {
            console.error(err);
        }
    }

    async function handleSubmitTodo(text) {
        try {
            const response = await fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({ text }),
                headers: { "Content-Type": "application/json" },
            });

            const data = await response.json();

            setToDoList([...todoList, data]);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="App">
            <header>
                <h1>Todos:</h1>
            </header>

            <Form submitTodo={handleSubmitTodo} />

            <main>
                {todoList.map((todo, index) => (
                    <Card text={todo.text} key={index} />
                ))}
            </main>
        </div>
    );
}

export default App;
