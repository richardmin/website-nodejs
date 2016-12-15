import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { TopBar } from "./components/TopBar";

ReactDOM.render(
    
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example"),

);

ReactDOM.render(

    <TopBar compiler="TypeScript" framework="React" />,
    document.getElementById("topbar")
    
)