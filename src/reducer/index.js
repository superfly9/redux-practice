//root reducer생성, store에 저장되는 reducer는 오직 1개
import {combineReducers} from 'redux';
import counter from './counter';

// combineReducer에는 {}형식을 전달해줘야
const rootReducer = combineReducers({counter});
export default rootReducer;