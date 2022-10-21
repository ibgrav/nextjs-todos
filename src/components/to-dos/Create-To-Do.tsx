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
    <div className="flex gap-4 justify-between">
      <input
        className="w-full p-2 border-2 rounded"
        placeholder="create new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="whitespace-nowrap" onClick={onClickCreate}>
        create
      </button>
    </div>
  );
}
