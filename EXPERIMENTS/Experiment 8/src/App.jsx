import { useState } from "react"; 
import "./App.css"; 
function App() { 
  const [count, setCount] = useState(0); 
  const increment = () => { 
    setCount(count + 1); 
  }; 
  const decrement = () => { 
    setCount(count - 1); 
  }; 
  const reset = () => { 
    setCount(0); 
  }; 
  return ( 
    <div className="container"> 
      <h1>Counter Application</h1> 
 
      <div className="counter-box"> 
        <h2>{count}</h2> 
 
        <div className="buttons"> 
          <button onClick={increment}>+</button> 
          <button onClick={decrement}>-</button> 
          <button onClick={reset}>Reset</button> 
        </div> 
      </div> 
    </div> 
  ); 
} 
export default App;