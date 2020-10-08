import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'; 
import { increaseCount } from './reducer/counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
//count값을 전역적으로 관리하기에 useState가 필요 없어짐
function Counter () {
  //selector function의 return값 === useSelector의 return값
  const {count} = useSelector(state=>state.counter);
  console.log(count) // 초기에 저장한 {count:0}의 값 0
  const dispatch = useDispatch(); //특정 사건이 발생함을 리듀서에게 알려주는 역할
  const increase = ()=>dispatch(increaseCount()) //increaseCount(), 즉 action creator는 어떤 종류의 action이 일어났는지를 reducer에게 전달
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increase}>Increase Count</button>
    </div>
  )
}

export default App;