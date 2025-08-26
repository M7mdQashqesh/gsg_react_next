import "./key-pad.css";

interface IProps {
  onBtnClick: (btn: string) => void;
}

const keypadBtns: string[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "=",
];

const Keypad = (props: IProps) => {
  return (
    <div className="key-pad">
      {keypadBtns.map((btn) => {
        return (
          <div onClick={() => props.onBtnClick(btn)} key={btn}>
            {btn}
          </div>
        );
      })}
    </div>
  );
};

export default Keypad;
