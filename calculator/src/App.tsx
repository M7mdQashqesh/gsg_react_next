import "./App.css";
import { useState } from "react";
import Keypad from "./components/key-pad/key-pad.component";
import ResultDisplay from "./components/result-display/result-display.components";

function App() {
  const [firstOperand, setFirstOperand] = useState("0");
  const [secondOperand, setSecondOperand] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  function resetDisplay() {
    setFirstOperand("0");
    setSecondOperand("");
    setOperation("");
    setResult("");
  }

  const handleBtnsClick = (btn: string) => {
    if (btn !== "=") {
      if (result !== "") resetDisplay();
      else {
        if (operation === "") {
          if (btn === "+" || btn === "-") setOperation(btn);
          else {
            if (firstOperand === "0") setFirstOperand(btn);
            else setFirstOperand(firstOperand + btn);
          }
        } else {
          if (btn === "+" || btn === "-") setOperation(btn);
          else {
            if (secondOperand === "") setSecondOperand(btn);
            else setSecondOperand(secondOperand + btn);
          }
        }
      }
    } else resultCalc();
  };

  const resultCalc = () => {
    if (operation === "+")
      setResult((Number(firstOperand) + Number(secondOperand)).toString());
    else setResult((Number(firstOperand) - Number(secondOperand)).toString());
  };

  return (
    <div>
      <ResultDisplay
        firstOperand={firstOperand}
        secondOperand={secondOperand}
        operation={operation}
        result={result}
      />
      <Keypad onBtnClick={handleBtnsClick} />
    </div>
  );
}

export default App;
