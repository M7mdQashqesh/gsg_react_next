import "./todo-list.css";
import TodoItem from "../todo-item/todo-item.component";
import type { ITodoItem } from "../../types";

interface IProps {
  items: ITodoItem[];
  onDelete: (id: number) => void;
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoList = (props: IProps) => {
  function handleDelete(id: number) {
    props.onDelete(id);
  }

  return (
    <div className="list-wrapper">
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          data={item}
          onDelete={handleDelete}
          onToggle={props.onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
