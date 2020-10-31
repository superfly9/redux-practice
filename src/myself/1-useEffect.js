import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// 상태변경 함수에 함수를 전달함으로써
//의존성 배열에 의지하지 않고 count값을 1씩 증가하게 함

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log('Seoul')
      setCount(count=>count+1); 
      return ()=>clearInterval(id);
    }, 1000);
  }, []);
  return <h1>{count}</h1>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
