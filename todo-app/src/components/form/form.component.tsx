import "./form.css";
import React, { useState } from "react";
import type { ITodoItem } from "../../types";

interface IProps {
  onCreateTask: (task: ITodoItem) => void;
}

const TodoForm = React.memo((props: IProps) => {
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (e.currentTarget["label"].value.trim() === "") {
      setErrorMsg("You Must Add Task Title");
      return;
    }
    setErrorMsg("");
    const newTask: ITodoItem = {
      id: Date.now(),
      isDone: false,
      isUrgent: e.currentTarget["urgent"].checked,
      title: e.currentTarget["label"].value,
    };
    props.onCreateTask(newTask);

    e.currentTarget["urgent"].checked = false;
    e.currentTarget["label"].value = "";
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <input type="text" name="label" placeholder="Type Todo here.." />
      <div>
        <div>
          <label htmlFor="urgent">Urgent</label>
          <input type="checkbox" id="urgent" />
        </div>
        <input type="submit" value="Add Todo" />
      </div>
      {errorMsg && (
        <p style={{ margin: "0 auto", padding: "0", color: "red" }}>
          {errorMsg}
        </p>
      )}
    </form>
  );
});

export default TodoForm;
