import React from "react"

function TodoCard({ todo }) {
  return (
    <div className="todoCard">
      <div>todoCard</div>
      <div className="flex">
        <input
          checked={todo.status || false}
          type="checkbox"
          name="checkStatus"
          id="checkStatus"
        />
        <p className={`${todo.status && "done"}`}>{todo.content}</p>
        <button>Supprimer</button>
      </div>
    </div>
  )
}

export default TodoCard
