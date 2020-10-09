import {all,fork,put,call,takeLastest} from 'redux-saga';
import {
    GET_USER_TICKET_REQUEST,
    GET_USER_TICKET_SUCCESS,
    GET_USER_TICKET_FAILURE} from '../constants/actionTypes';
import axios from 'axios';

function getUserTicketApi (params) {
    let url = '/api/userTicket'
    return axios.get(url,params);
} // promise를 리턴
function* getUserTicket (action) {
    try {
        //서버 요청시 call
        const result = yield call(getUserTicketApi,action.params);
        //api요청으로 받아온 데이터를 액션 객체에 넣어서 reducer에 dispatch해줌
        yield put({type:GET_USER_TICKET_SUCCESS,data:result.data});
    } catch (e) {
        yield put({type:GET_USER_TICKET_FAILURE,data:e.response.data});
    }
}

function* watchGetUserTicket () {
    yield takeLastest(GET_USER_TICKET_REQUEST,getUserTicket);
}
export default function* () {
    yield all([fork(watchGetUserTicket)]);
}
