import React from "react";
import { Card } from "./components/Card/Card";
import { Form } from "./components/Form/Form";

const data = [
    {
        text: "Learn React",
    },
    {
        text: "Learn Next",
    },
    {
        text: "Learn Vercel",
    },
    {
        text: "Prep workshop",
    },
];

function App() {
    return (
        <div className="App">
            <header>
                <h1>Todos:</h1>
            </header>

            <Form />

            <main>
                {data.map((todo, index) => (
                    <Card text={todo.text} key={index} />
                ))}
            </main>
        </div>
    );
}

export default App;
