import { useState } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard.component";
import TodoForm from "./components/form/form.component";
import TodoList from "./components/todo-list/todo-list.component";
import type { ITodoItem } from "./types";

const days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>(() => {
    const localTasks = window.localStorage.getItem("tasks");
    return localTasks ? JSON.parse(localTasks) : [];
  });

  function handleNewTask(newTask: ITodoItem) {
    const newTodos = [...todos, newTask];
    window.localStorage.setItem("tasks", JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  function handleDelete(id: number) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    window.localStorage.setItem("tasks", JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  function handleToggle(e: React.ChangeEvent<HTMLInputElement>) {
    const newTodos = todos.map((todo) =>
      todo.id === Number(e.target.dataset["itemId"])
        ? { ...todo, isDone: !todo.isDone }
        : todo
    );
    window.localStorage.setItem("tasks", JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  return (
    <div>
      <p>
        <b>{days[new Date().getDay()]}</b>, {new Date().getDate()}{" "}
        {months[new Date().getMonth()]}
      </p>
      <TodoForm onCreateTask={handleNewTask} />
      <Dashboard items={todos} />
      <TodoList items={todos} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
}

export default App;
