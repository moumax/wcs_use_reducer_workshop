import { useState } from "react";

function TodoForm({ dispatch }) {
  const [content, setContent] = useState("");

  return (
    <>
      <div>todoForm</div>
      <input
        onChange={(e) => {
          setContent(e.target.value);
        }}
        type="text"
        name="textIpnut"
        id="textIpnut"
      />
      <button
        onClick={() =>
          dispatch({ type: "ADD_TODO", payload: { content, status: false } })
        }
      >
        Ajouter
      </button>
    </>
  );
}

export default TodoForm;
