//rootSaga
import {all,fork} from 'redux-saga/effects';
import userTicket from './userTicket';

export default function* rootSaga () {
    // all => 여러 개의 effect실행 후 다 끝나기까지 기다림
    yield all([fork(userTicket)]);
}