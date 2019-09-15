import { createStore, applyMiddleware, combineReducers } from "redux";
import homeReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const rootReducer = combineReducers({
  home: homeReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);
