import React, { useState } from "react";
import ReactDOM from "react-dom";

function Example() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on: ' + count);
    }, 3000);
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);


/*
명심
1. 모든 렌더링은 고유의 prop과 state값을 가진다
2. 모든 렌더링은 고유의 event Handler를 가진다
3. 모든 렌더링은 고유의 effect를 가진다

2번의 이벤트 핸들러를 관찰해볼 것인데 행동은 다음과 같다
1. count 3까지 증가
2. alert버튼 클릭
3. 3초 지나기 전 count 5까지 증가 
결과는?
alert의 count는 버튼을 클릭할 때의 값인 3을 반환

count 값이 매번 별개의 함수 호출마다 존재하는 상수값이라는 이야기를 했습니다. 
이걸 특히 강조하고 싶은데, 우리의 함수는 여러번 호출되지만(랜더링마다 한 번씩), 
각각의 랜더링에서 함수 안의 count 값은 상수이자 독립적인 값(특정 랜더링 시의 상태)으로 존재합니다.
이벤트 핸들러가 특정 랜더링에 “속해 있으며”, 얼럿 표시 버튼을 클릭할 때 그 랜더링 시점의 counter state를 유지한 채로 사용
따라서 alert실행시 count는 3이었고 이떄의 상수값을 alert가 바라보고 있기에 3이 출력

이펙트 함수 자체도 매 랜더링마다 별도로 존재합니다.
즉, 각각의 이펙트 버전은 매번 랜더링에 “속한” count 값을 “봅니다”.
즉, 훅이 자바스크립트 클로저에 아주 많이 의존하고 있다고 생각할 수 있다
(클로저: 생성될 때의 외부 scope/변수를 기억하고 있는 내부 함수)

우리는 이미 count 는 특정 컴포넌트 랜더링에 포함되는 상수라고 배웠습니다. 이벤트 핸들러는 그 랜더링에 “속한” count 상태를 “봅니다”. 
count 는 특정 범위 안에 속하는 변수이기 때문입니다. 이펙트에도 똑같은 개념이 적용됩니다!
“변화하지 않는” 이펙트 안에서 count 변수가 임의로 바뀐다는 뜻이 아닙니다. 이펙트 함수 자체가 매 랜더링마다 별도로 존재합니다.
즉, 이펙트는  매 랜더링 마다 다른 함수라는 뜻입니다. 그리고 각각의 이펙트 함수는 그 랜더링에 “속한” props와 state를 “봅니다”.
개념적으로, 이펙트는 랜더링 결과의 일부라 생각할 수 있습니다.

리액트는 여러분이 제공한 이펙트 함수를 기억해 놨다가 DOM의 변화를 처리하고 브라우저가 스크린에 그리고 난 뒤 실행합니다.
리액트는 브라우저가 페인트 하고 난 뒤에야 이펙트를 실행합니다
즉,컴포넌트가 리턴하는 jsx를 render한 이후에 호출된다


결론:
“컴포넌트의 랜더링 안에 있는 모든 함수는 (이벤트 핸들러, 이펙트, 타임아웃이나 그 안에서 호출되는 API 등) 랜더(render)가 호출될 때 정의된 props와 state 값을 잡아둔다(기억하고 있다가 사용한다).”


state를 업데이트할 때마다, 리액트는 컴포넌트를 호출
setCount 를 호출할 때, 리액트는 다른 count 값과 함께 컴포넌트를 다시 호출

클린업:
'컴포넌트의 랜더링 안에 있는 모든 함수는 (이벤트 핸들러, 이펙트, 타임아웃이나 그 안에서 호출되는 API 등) 랜더가 호출될 때 정의된 props와 state 값을 잡아둔다'는 것을 기억하는가?
마찬가지다
이펙트의 클린업은 “최신” prop을 읽지 않는다. 클린업이 정의된 시점의 랜더링에 있던 값을 읽는다.

이와 같은 관점에서 보면 props/state/event Handler/effect는 항상 특정 상태값을 가지는 렌더링에 속해 있다
*/


// 최초 랜더링 시
function Counter() {
    // ...
    useEffect(
      // 첫 번째 랜더링의 이펙트 함수
      () => {
        document.title = `You clicked ${0} times`;
      }
    );
    // ...
  }
  // 클릭하면 함수가 다시 호출된다
  function Counter() {
    // ...
    useEffect(
      // 두 번째 랜더링의 이펙트 함수
      () => {
        document.title = `You clicked ${1} times`;
      }
    );
    // ...
  }
  // 또 한번 클릭하면, 다시 함수가 호출된다
  function Counter() {
    // ...
    useEffect(
      // 세 번째 랜더링의 이펙트 함수
      () => {
        document.title = `You clicked ${2} times`;
      }
    );
    // ..
  }