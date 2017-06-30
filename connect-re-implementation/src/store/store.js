import {createStore} from "redux";
import {counter} from "../reducer/counter";

export const store = createStore(counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
