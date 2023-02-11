import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [data, setdata] = useState({
        message: "",
    });

    useEffect(() => {
        fetch("/hello").then((response) =>
            response.json().then((data) => {
                setdata({
                    message: data.message
                });
            })
        );
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>{data.message}</h1>
            </header>
        </div>
    );
}

export default App;