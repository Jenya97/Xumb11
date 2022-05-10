import {put, takeEvery } from 'redux-saga/effects';
import { ASYNC_DECREMENT, ASYNC_INCREMENT, decrementCreate, incrementCreate} from './Counter';


const time=(ms)=>new Promise(res=>setTimeout(res,ms));


function* incrementWorker(){
    yield time(3000)
    yield put(incrementCreate())
}

function* decrementWorker(){
    yield time(3000)
    yield put(decrementCreate())
}

export function* countWatcher(){
    yield takeEvery(ASYNC_INCREMENT,incrementWorker);
    yield takeEvery(ASYNC_DECREMENT,decrementWorker)
}