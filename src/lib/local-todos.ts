const TODO_KEY = "todos";

export function setLocalTodos(todos: Array<string>) {
  console.log("setting local todos", todos);
  window.localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

export function getLocalTodos(): Array<string> {
  const data = window.localStorage.getItem(TODO_KEY);
  if (data) return JSON.parse(data);
  return [];
}
