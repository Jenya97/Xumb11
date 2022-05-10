import { countWatcher } from "./Counter/CounterSaga";
import {userWatcher} from './Users/UserSaga'
import { all } from "redux-saga/effects";

export function* rootWatcher(){
    yield  all([
        countWatcher(),
        userWatcher()
    ])
}