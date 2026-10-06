//Description: Counter buttons to increment and decrement a count.
//useState has to imported from the main react library
import { useState } from "react";

export default function Counter() {
  //In react, data that needs to change are stored in special variables called states
  //The blueprint is creating a nameless array that only contains two elements
  //The first element is always the variable that will store the values
  //The second element is always the function that will be responsible to update the variable values
  //They are both assigned to a function named useState that takes the variable initial value
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "1px green solid", margin: "10px" }}>
      <p>Counter</p>
      {/* onClick() is a built-in function to use the on-click event for the DOM */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
