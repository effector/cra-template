import { MouseEvent } from "react";
import { createStore, createEvent } from "effector";

export const incrementClicked = createEvent<MouseEvent<HTMLButtonElement>>();
export const resetClicked = createEvent<MouseEvent<HTMLButtonElement>>();

export const $counterValue = createStore(0);

$counterValue.on(incrementClicked, state => state + 1).reset(resetClicked);
