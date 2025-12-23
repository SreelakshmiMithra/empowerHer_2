import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAdd = () => {
    if (title.trim() === "") return;
    addTodo(title);
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        placeholder="Enter todo"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
