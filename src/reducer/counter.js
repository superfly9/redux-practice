//Action Type
export const INCREASE = 'COUNTER/INCREASE';

//Action creator
export const increaseCount =()=>({type:INCREASE});

//redux의 초기 state ( redux의 실행하고 reducer가 처음 실행 될 때 default의 값으로 실행 )
const initialState = {count :0}

const counter = (state=initialState,action) => {
    switch(action.type) {
        case INCREASE:
            return {
                ...state,
                count : state.count+1
            }
        default:
            return state;
    }
}
export default counter;