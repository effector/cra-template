import * as React from "react";
import { useStore } from "effector-react";
import "./home.css";
import { $counterValue, incrementClicked, resetClicked } from "./model";

export const HomePage: React.FC = () => (
  <div className="hero">
    <h1>Effector</h1>
    <h2>Counter value: {useStore($counterValue)}</h2>
    <div data-block="buttons">
      <button onClick={incrementClicked}>Increment</button>
      <button onClick={resetClicked}>Reset</button>
    </div>
  </div>
);
