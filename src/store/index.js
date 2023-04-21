import { createStore } from "redux";
import { myReducer } from "./reducers/index";

export const store = createStore(myReducer);