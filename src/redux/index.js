import { combineReducers,legacy_createStore as createStore,applyMiddleware } from "redux"; 
import countReducer from "./Counter/Counter";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "./rootSaga";
import userReducer from "./Users/UsersReducer";
const sagaMiddelWare=createSagaMiddleware()
export const store=createStore(
    combineReducers({
     countReducer,
     userReducer
    }),
    applyMiddleware(sagaMiddelWare)
)

sagaMiddelWare.run(rootWatcher)