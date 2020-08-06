import { createEvent, createStore } from "effector";

export const increment = createEvent();
export const decrement = createEvent();

export const $counter = createStore(0)
  .on(increment, count => count + 1)
  .on(decrement, count => count - 1);
