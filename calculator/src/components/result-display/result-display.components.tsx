import "./result-display.css";

interface IProps {
  firstOperand: string;
  secondOperand: string;
  operation: string;
  result: string;
}

const ResultDisplay = (props: IProps) => {
  return (
    <div className="screen">
      {props.firstOperand} {props.operation} {props.secondOperand}{" "}
      {props.result !== "" ? "=" : ""} {props.result}
    </div>
  );
};

export default ResultDisplay;
