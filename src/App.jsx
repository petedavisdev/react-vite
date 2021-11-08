import React from "react";
import { Card } from "./components/Card/Card";

function App() {
    return (
        <div className="App">
            <header>
                <h1>Todos:</h1>
            </header>

            <main>
                <Card text="Learn React" />
                <Card text="Learn Next" />
                <Card text="Prep Next workshop" />
            </main>
        </div>
    );
}

export default App;
