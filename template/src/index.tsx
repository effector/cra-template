import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.css";
import { Application } from "./application";
import * as serviceWorker from "./service-worker";

ReactDOM.render(<Application />, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
