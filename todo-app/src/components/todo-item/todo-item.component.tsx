import "./todo-item.css";
import type { ITodoItem } from "../../types";

interface IPops {
  data: ITodoItem;
  onDelete: (id: number) => void;
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoItem = (props: IPops) => {
  function handleDelete(id: number) {
    props.onDelete(id);
  }

  return (
    <div className={`item-wrapper ${props.data.isUrgent ? "urgent" : ""} ${props.data.isDone ? "complete" : ""} `}>
      <input
        type="checkbox"
        onChange={props.onToggle}
        checked={props.data.isDone ? true : false}
        data-item-id={props.data.id}
      />
      <span>{props.data.title}</span>
      <span onClick={() => handleDelete(props.data.id)}>
        <i className="fa-solid fa-trash" style={{ color: "red" }}></i>
      </span>
    </div>
  );
};

export default TodoItem;
