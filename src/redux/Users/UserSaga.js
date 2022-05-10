import {put,takeEvery,call} from 'redux-saga/effects';
import { FETCH_USERS, setUsers } from './UsersReducer';

const fetchUsersApi=()=>fetch("https://jsonplaceholder.typicode.com/users")


function* fetchUsersWorker(){
    const response=yield call(fetchUsersApi)
    const json= yield call(()=>new Promise(res=>res(response.json())))
    yield put(setUsers(json))
}

export function* userWatcher(){
    yield takeEvery(FETCH_USERS,fetchUsersWorker)
}