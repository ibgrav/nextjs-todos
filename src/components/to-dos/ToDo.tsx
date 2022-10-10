import { useState } from "react";

interface ToDoProps {
  value: string;
  onDelete: () => void;
  onUpdate: (value: string) => void;
}

export function ToDo({ value, onDelete, onUpdate }: ToDoProps) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(value);

  const editChange = editValue !== value;

  const onEdit = () => {
    if (edit && editChange) {
      onUpdate(editValue);
      setEditValue("");
    }

    setEdit((edit) => !edit);
  };

  return (
    <>
      <style jsx>{`
        li {
          width: 100%;
          display: flex;
          gap: 1rem;
          border-bottom: 1px solid black;
          padding-bottom: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .value,
        input {
          width: 100%;
        }

        .buttons {
          display: flex;
          flex-wrap: no-wrap;
          gap: 0.5rem;
        }
      `}</style>

      <li>
        <div className="value">{edit ? <input value={editValue} onChange={(e) => setEditValue(e.target.value)} /> : value}</div>
        <div className="buttons">
          <button onClick={onEdit}>{edit ? (editChange ? "save" : "cancel") : "edit"}</button>{" "}
          <button onClick={onDelete}>delete</button>
        </div>
      </li>
    </>
  );
}
