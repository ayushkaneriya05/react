import { useState } from 'react'

function Counter() {
    // let count = 10;
    let [count, setCount] = useState(10);
    const increment = () => {
        if(count < 20) {
            setCount(count+1);
            console.log("Incremented ",count);
        }else{
            console.log("Count is already at 20");
            return;
        }
    }
    const decrement = () => {
        if(count > 0) {
            setCount(count-1);
            console.log("Decremented ",count);
        } else {
            console.log("Count is already at 0");
            return;
        }

    }
  return (
    <>
    <h1>Counter (0-20)</h1>
    <h3>Count: {count}</h3>
    {console.log("Rendered ",count)}
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter