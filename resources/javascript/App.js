import React from "react";
import ReactDOM from "react-dom";
import {Home} from "./home/Home";
import '../scss/styles.scss'


let App = () => {
    return (
        <div>
            <Home/>
        </div>
    );
}

export const SERVER_ADDR = "https://server.moeinarabi.ir";
ReactDOM.render(<App/>, document.getElementById('app'));