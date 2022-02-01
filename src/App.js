import React from 'react';
import Rectangle from "./components/Rectangle";
import Block from "./components/Block";

function App() {
    return (
        <div className="App">
            <Rectangle/>
            <Rectangle/>
            <Rectangle/>

            <Block boColor={"purple"} baColor={"lightgray"} clickable={false} />
            <Block boColor={"blue"} baColor={"red"} clickable={true} />
            <Block boColor={"green"} baColor={"yellow"} clickable={false} />
            <Block boColor={"blue"} baColor={"red"} clickable={true} />
            <Block boColor={"red"} baColor={"pink"} clickable={false} />
            <Block boColor={"blue"} baColor={"red"} clickable={true} />
        </div>
    );
}

export default App;
