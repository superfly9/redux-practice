import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const onClick = ()=>{
    // 1.export keyword붙일 필요x 2. import(파일 경로).then(data) =>data는 모듈 객체 : Module {default : { }, ... } 의 형태를 가짐
    import('./0-base/data.json').then((data)=>console.log(data)) // Module {default : { name:'Seoul',age:50 } ,__esModule:true...}
    import('./0-base/data.json').then(({default :data})=>console.log(data)) // default객체의 이름을 data로 바꿔서 출력
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClick}>get JSON</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
