import { useState } from "react";
function Counter() {
  const [number, setNumber] = useState(0);
  function onPlusOneClick() {
    setNumber(number + 1);
  }
  function onMinusOneClick() {
    setNumber(number - 1);
  }
  function onMultipicationClick() {
    setNumber(number * 5);
  }
  function onDivideClick() {
    setNumber(number / 5);
  }
  function onResetClick() {
    setNumber(0);
  }
  function onRoundClick() {
    setNumber(number.toFixed(0));
  }
  const style = {
    fontSize: number + "px"
  };
  return (
    <div className="Counter">
      <h2>{number}</h2>
      <button onClick={onPlusOneClick}>+1</button>
      <button onClick={onMinusOneClick}>-1</button>
      <button onClick={onMultipicationClick}>*5</button>
      <button onClick={onDivideClick}>/5</button>
      <button onClick={onResetClick}>RESET</button>
      <button onClick={onRoundClick}>ROUND</button>
    </div>
  );
}
export default Counter;
