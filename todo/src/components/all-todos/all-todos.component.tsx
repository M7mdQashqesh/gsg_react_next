import TodoItem from "../todo-item/todo-item.component";
import "./all-todos.css";

interface IProps {
  tasksList: string[];
}

const AllTodos = (props: IProps) => {
  return (
    <div className="all-todos">
      {props.tasksList.length > 0 ? (
        props.tasksList.map((task) => <TodoItem key={task} title={task} />)
      ) : (
        <div>No Tasks Yet</div>
      )}
    </div>
  );
};

export default AllTodos;
