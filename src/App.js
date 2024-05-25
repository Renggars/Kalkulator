import { useState } from "react";
import "./App.css";

function App() {
  const simbol = [":", "x", "-", "+", "="];
  const operation = [
    "AC",
    "CE",
    "%",
    ":",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleClick = (e) => {
    if (e === "AC") {
      setDisplay("0");
      setPrevValue(null);
      setOperator(null);
    } else if (e === "CE") {
      setDisplay((current) => current.slice(0, -1));
    } else if (e === "=") {
      if (operator && prevValue !== null) {
        const currentValue = parseFloat(display);
        let result;
        switch (operator) {
          case "x":
            result = prevValue * currentValue;
            break;
          case ":":
            result = prevValue / currentValue;
            break;
          case "+":
            result = prevValue + currentValue;
            break;
          case "-":
            result = prevValue - currentValue;
            break;
          default:
            break;
        }
        setDisplay(String(result));
        setPrevValue(null);
        setOperator(null);
      }
    } else if (simbol.includes(e)) {
      setOperator(e);
      setPrevValue(parseFloat(display));
      setDisplay("0");
    } else {
      setDisplay((current) => (current === "0" ? e : current + e));
    }
  };
  return (
    <div className="main">
      <div className="container">
        <div className="result">{display}</div>
        <div className="operation">
          {operation.map((val, index) => {
            return (
              <div
                onClick={() => {
                  handleClick(val);
                }}
                className={
                  simbol.includes(val)
                    ? "span-1-color"
                    : val === "0"
                    ? "span-2"
                    : "span-1"
                }
                key={index}
              >
                {val}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
