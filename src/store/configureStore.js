import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLooger } from "redux-logger";
import rootReducer from "../reducers";

const loogerMiddleware = createLooger();

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loogerMiddleware)
  );
}
