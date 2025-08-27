import "./todo-item.css";
import { useState } from "react";

interface IProps {
  title: string;
}

const TodoItem = (props: IProps) => {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleStatus() {
    setIsCompleted(!isCompleted);
  }

  return (
    <div className="todo-item">
      <div
        onClick={handleStatus}
        className={`checked ${isCompleted ? "completed" : ""}`}
      ></div>
      <p className={`${isCompleted ? "completed" : ""}`}>{props.title}</p>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
