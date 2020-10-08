import {createStore,applyMiddleware,compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from '../reducer';
import rootSaga from '../saga/index';

import createSagaMiddleware from 'redux-saga';

//reducer함수 실행 전에 먼저 실행할 미들웨어
const sagaMiddleWare = createSagaMiddleware();

//sageMiddleWare를 redux가 사용할 수 있도록 설정
const enhancer = process.env.NODE_ENV === 'production' 
    ? compose(applyMiddleware(sagaMiddleWare)) : composeWithDevTools(applyMiddleware(sagaMiddleWare,logger))

//reducer를 store와 연결 +  store가 미들웨어(saga)/devtool 사용가능하게 enhancer추가
const store = createStore(rootReducer,enhancer);

//root Saga실행
sagaMiddleWare.run(rootSaga);

export default store;