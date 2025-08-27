import { useState } from "react";
import "./App.css";
import AllTodos from "./components/all-todos/all-todos.component";
import TodoData from "./components/todo-data/todo-data.component";
import TodoForm from "./components/todo-form/todo-form.components";

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
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function App() {
  const [tasksList, setTasksList] = useState<string[]>(() => {
    const localTasks = window.localStorage.getItem("tasks");
    return localTasks ? JSON.parse(localTasks) : [];
  });

  function handleFormSubmit(task: string) {
    let newArr = [...tasksList, task];
    setTasksList(newArr);
    window.localStorage.setItem("tasks", JSON.stringify(newArr));
  }

  return (
    <div>
      <div className="time-format">
        <p>
          <b>{days[new Date().getDay()]}</b>, {new Date().getDate()}{" "}
          {months[new Date().getMonth()]}
        </p>
      </div>
      <TodoForm onFormSubmit={handleFormSubmit} />
      <TodoData tasksList={tasksList} />
      <AllTodos tasksList={tasksList} />
    </div>
  );
}

export default App;
