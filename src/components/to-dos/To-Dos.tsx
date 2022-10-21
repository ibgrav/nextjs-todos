import { useEffect, useState } from "react";
import { getLocalTodos, setLocalTodos } from "../../lib/local-todos";
import { CreateToDo } from "./Create-To-Do";
import { ToDo } from "./To-Do";

export function ToDos() {
  const [todos, setTodos] = useState<Array<string>>([]);

  useEffect(() => {
    setTodos(() => getLocalTodos());
  }, []);

  const onCreateTodo = (value: string) => {
    if (value) {
      setTodos((todos) => {
        const updatedTodos = [...todos, value];
        setLocalTodos(updatedTodos);
        return updatedTodos;
      });
    }
  };

  const onUpdateTodo = (index: number, value: string) => {
    setTodos((todos) => {
      const updatedTodos = Array.from(todos);
      updatedTodos[index] = value;
      setLocalTodos(updatedTodos);
      return updatedTodos;
    });
  };

  const onDeleteTodo = (index: number) => {
    setTodos((todos) => {
      const updatedTodos = Array.from(todos);
      updatedTodos.splice(index, 1);
      setLocalTodos(updatedTodos);
      return updatedTodos;
    });
  };

  return (
    <div className="mb-8">
      <ol className="w-full mb-8">
        {todos.map((value, i) => (
          <ToDo key={i} value={value} onDelete={() => onDeleteTodo(i)} onUpdate={(value) => onUpdateTodo(i, value)} />
        ))}
      </ol>

      <CreateToDo onCreate={onCreateTodo} />
    </div>
  );
}
