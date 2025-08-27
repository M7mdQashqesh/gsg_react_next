import { useState } from "react";
import "./todo-data.css";

interface IProps {
  tasksList: string[];
}

const TodoData = (props: IProps) => {
  const [createdTasksNo, setCreatedTasksNo] = useState<number>(
    props.tasksList.length
  );

  return (
    <div className="div-container">
      <div>
        <p>{createdTasksNo}</p>
        <p>Created Tasks</p>
      </div>
      <div>
        <p>04</p>
        <p>Completed Tasks</p>
      </div>
    </div>
  );
};

export default TodoData;
