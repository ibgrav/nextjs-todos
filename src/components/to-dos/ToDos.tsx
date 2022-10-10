import { useEffect, useState } from "react";
import { getLocalTodos, setLocalTodos } from "../../lib/local-todos";
import { CreateToDo } from "./Create-ToDo";
import { ToDo } from "./ToDo";

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
    <>
      <style jsx>{`
        ol {
          width: 100%;
          margin: 0 0 2rem 0;
          padding: 0;
        }

        .todos {
          margin-bottom: 2rem;
        }
      `}</style>

      <div className="todos">
        <ol>
          {todos.map((value, i) => (
            <ToDo key={i} value={value} onDelete={() => onDeleteTodo(i)} onUpdate={(value) => onUpdateTodo(i, value)} />
          ))}
        </ol>

        <CreateToDo onCreate={onCreateTodo} />
      </div>
    </>
  );
}
