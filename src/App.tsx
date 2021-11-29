import React from 'react';
import './App.css';
import SuperButton from "./components/c2-SuperButton/SuperButton";
import SuperInputText from "./components/c1-SuperInputText/SuperInputText";

function App() {
    return (
        <div className="App">
            <h1>test</h1>
            <SuperInputText />
            <SuperButton>Like</SuperButton>
        </div>
    );
}

export default App;
