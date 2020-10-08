import {createStore,applyMiddleware,compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from '../reducer';

const enhancer = process.env.NODE_ENV === 'production' 
    ? compose(applyMiddleware()) : composeWithDevTools(applyMiddleware(logger))

//reducer를 store와 연결 +  store가 미들웨어/devtool 사용가능하게 enhancer추가
const store = createStore(rootReducer,enhancer);
export default store;