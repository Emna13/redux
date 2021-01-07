import { createStore } from "redux";
import todoReducer from "./reducer/todoReducer";



const devTools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store=createStore(todoReducer,devTools)

export default store;