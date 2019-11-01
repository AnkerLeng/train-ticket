import React, { Component, useState, useMemo, memo, useCallback } from 'react';
import './App.css';


const Counter = memo(function Counter(props) {
  console.log('Counter render')
  return (
    <h1 onClick={props.onClick}>{props.count}</h1>
  )
});


function App(props) {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  // useMemo 如果不穿第二个参数则每次运行，传空数组运行一次。
  const double = useMemo(() => {
    return count * 2;
  }, [count === 3]);

  // const half = useMemo(() => {
  //   return double / 4;
  // }, [double]);

  // const onClick = useMemo(() => {
  //   console.log('onClick')
  // }, [])

  const onClick = useCallback(() => {
    console.log('onClick')
    // setClickCount(clickCount + 1);
    setClickCount((clickCount) => clickCount + 1);
  }, [clickCount]);

  return (

    <div>
      <button type="button"
        onClick={() => { setCount(count + 1) }}
      >
        Add ({count}), double:({double})
      </button>
      <Counter count={double} onClick={onClick}></Counter>
    </div>
  )

}

export default App;
