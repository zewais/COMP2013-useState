import "./App.css";
import BadCounter from "./Components/BadCounter";
import Counter from "./Components/Counter";
import CounterWithLimits from "./Components/CounterWithLimits";

function App() {
  return (
    <>
      <Counter />
      <CounterWithLimits />
      <BadCounter />
    </>
  );
}

export default App;
