import "./todo-form.css";
import { useState } from "react";
import { formValidation } from "../../utils/validation";

interface IProps {
  onFormSubmit: (title: string) => void;
}

const TodoForm = (props: IProps) => {
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errorMsg: string = formValidation(e.currentTarget["todoName"].value);
    setError(errorMsg);

    if (errorMsg.length === 0) {
      setError("");
      props.onFormSubmit(e.currentTarget["todoName"].value);
      e.currentTarget["todoName"].value = "";
    }
  }

  return (
    <form className="form-component" onSubmit={handleSubmit}>
      <input type="text" placeholder="Type Todo here" name="todoName" />
      {error.length > 0 && (
        <p style={{ margin: "0px", padding: "0px", color: "red" }}>{error}</p>
      )}
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default TodoForm;
