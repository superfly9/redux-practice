import produce from 'immer';
import { GET_USER_TICKET_SUCCESS,GET_USER_TICKET_FAILURE,GET_USER_TICKET_REQUEST } from '../constants/actionTypes';

const initialState = {
    userTicket : [],
    loading: false
}

export const getUserTicket = (params)=>({
  type : GET_USER_TICKET_REQUEST,
  /*params은 saga의
  const result = yield call(getUserTicketApi, action.params);
  여기의 params로 들어간다. */
  params  
});

export const setTickets = (ticket) =>({type:SET_TICKET,ticket});


//produce(state,draft=>{})는 callback통해 바뀐 객체를 리턴한다
const userTicket = (state=initialState,action) => {
    return produce(state,draft=>{
        switch (action.type) {
            case GET_USER_TICKET_REQUEST:
                draft.loading = true;
                break;
            case GET_USER_TICKET_SUCCESS:
                draft.userTicket = action.data;
                draft.loading = false;
                break;
            case GET_USER_TICKET_FAILURE:
                draft.loading = false;
                break;
            default:
                return state;
        }
    })
}
export default userTicket;