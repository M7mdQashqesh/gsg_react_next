import type { ITodoItem } from "../types";

interface IState {
  todos: ITodoItem[];
}

type Action =
  | { type: "ADD_TODO"; payload: ITodoItem }
  | { type: "REMOVE_TODO"; payload: number }
  | { type: "TOGGLE_TODO"; payload: number };

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newItem = { ...action.payload, id: Date.now() };
      return { ...state, todos: [...state.todos, newItem] };
    }
    case "REMOVE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case "TOGGLE_TODO": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    }

    default:
      return state;
  }
};

export default reducer;
