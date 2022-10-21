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
    <li className="w-full flex gap-4 border-b pb-2 mb-2">
      {edit ? (
        <input className="w-full border p-2 rounded" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
      ) : (
        <span className="w-full border border-white py-2">{value}</span>
      )}

      <div className="flex flex-nowrap gap-2">
        <button onClick={onEdit}>{edit ? (editChange ? "save" : "cancel") : "edit"}</button>{" "}
        <button onClick={onDelete}>delete</button>
      </div>
    </li>
  );
}
