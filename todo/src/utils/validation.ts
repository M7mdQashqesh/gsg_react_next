export function formValidation(todo: string): string {
  if (!todo.trim()) return "You Should Add Todo Task";
  else return "";
}
