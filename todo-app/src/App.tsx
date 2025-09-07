import "./App.css";
import type { ITodoItem } from "./types";
import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import Dashboard from "./components/dashboard/dashboard.component";
import TodoForm from "./components/form/form.component";
import TodoList from "./components/todo-list/todo-list.component";
import reducer from "./state/reducer";

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
  const [timer, setTimer] = useState<string>();
  const [state, dispatch] = useReducer(reducer, {
    todos: JSON.parse(window.localStorage.getItem("tasks") || "[]"),
  });

  let intervalId = useRef<number>(0);
  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, []);

  function stopTimer() {
    if (intervalId.current) clearInterval(intervalId.current);
  }

  const handleNewTask = useCallback(
    (newTask: ITodoItem) => {
      dispatch({ type: "ADD_TODO", payload: newTask });
    },
    [state.todos]
  );

  function handleDelete(id: number) {
    dispatch({ type: "REMOVE_TODO", payload: id });
  }

  function handleToggle(e: React.ChangeEvent<HTMLInputElement>) {
    const itemId = Number(e.target.dataset["itemId"]);
    dispatch({ type: "TOGGLE_TODO", payload: itemId });
  }

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <div>
      <p>
        <b>{days[new Date().getDay()]}</b>, {new Date().getDate()}{" "}
        {months[new Date().getMonth()]} - {timer}{" "}
        <button onClick={stopTimer}>Stop</button>
      </p>
      <TodoForm onCreateTask={handleNewTask} />
      <Dashboard items={state.todos} />
      <TodoList
        items={state.todos}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;
