import { useState } from "react";

interface CreateToDoProps {
  onCreate: (value: string) => void;
}

export function CreateToDo({ onCreate }: CreateToDoProps) {
  const [value, setValue] = useState<string>("");

  const onClickCreate = () => {
    onCreate(value);
    setValue("");
  };

  return (
    <>
      <style jsx>{`
        div {
          gap: 0.5rem;
          display: flex;
          justify-content: space-between;
        }

        input {
          width: 100%;
          padding: 0.5rem;
        }

        button {
          white-space: nowrap;
        }
      `}</style>

      <div>
        <input placeholder="create new todo" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={onClickCreate}>create</button>
      </div>
    </>
  );
}
