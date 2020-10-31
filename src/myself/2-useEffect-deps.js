import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


/* 
버튼 클릭시 상태 변경으로 컴포넌트 함수는 계속 리렌더링 => count값은 계속 증가
useEffect는 초기 렌더링시 딱 1번만 실행 따라서
'render'역시 1번만 실행, 버튼 클릭해도 더 이상 출력XX
즉, state변경으로 컴포넌트 리렌더링 + 변경된 state가 화면에 반영되지만 useEffect는 딱 초기 렌더링시 1번만 실행
따라사 render는 1번만 출력된다
*/
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("render");
  }, []);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}


//컴포넌트 초기 실행 및 useEffect 초기실행(render 1번 출력)=>버튼 클릭=>상태 변경되어 컴포넌트 리렌더링=>useEffect도 매번 다시 실행=>render도 매번 출력
function Counter2() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log("render");
    });
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }

//  버튼 클릭시 컴포넌트 state변경 및 리렌더링 => count값은 계속 증가하고 컴포넌트 리렌더링 되지만 useEffect는 더 이상 실행되지 않는다
//  따라서 render는 딱 1번만 실행된다
  function Counter3() {
    const [count, setCount] = useState(0);
    const city= 'seoul';
    useEffect(() => {
      console.log("render");
    },[city]);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }

/*
공통점 : 컴포넌트 초기 렌더링시에는 무조건 1번은 실행된다
useEffect(callback,[])  => 컴포넌트 리렌더링 되도 더 이상 실행X,컴포넌트 초기 렌더링시에만 실행
useEffect(callback)  => 컴포넌트 리렌더링 될때마다 실행,컴포넌트 초기 렌더링시에도 실행
useEffect(callback,[deps])  => 컴포넌트 리렌더링될때 deps변경시에만 실행,컴포넌트 초기 렌더링시에도 실행
*/