import React from "react"

function TodoCard({ todo, dispatch }) {
  return (
    <div className="todoCard">
      <div>todoCard</div>
      <div className="flex">
        <input
          onChange={() =>
            dispatch({
              type: "CHANGE_TODO_STATUS",
              payload: todo,
              status: !todo.status,
            })
          }
          checked={todo.status || false}
          type="checkbox"
          name="checkStatus"
          id="checkStatus"
        />
        <p className={`${todo.status && "done"}`}>{todo.content}</p>
        <button
          onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })}
        >
          Supprimer
        </button>
      </div>
    </div>
  )
}

export default TodoCard
