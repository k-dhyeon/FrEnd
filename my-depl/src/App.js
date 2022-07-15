import logo from "./logo.svg";
import "./App.css";
import react, { useState, useEffect } from "react";

function App() {
    const [msg, setMsg] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/deploy")
            .then((response) => console.log(response.text()))
            .then((msg) => {
                setMsg(msg);
            });
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{msg}</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
