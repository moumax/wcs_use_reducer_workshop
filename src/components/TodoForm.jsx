import { useState } from "react"

function TodoForm() {
  const [content, setContent] = useState("")

  return (
    <>
      <div>todoForm</div>
      <input
        onChange={(e) => {
          setContent(e.target.value)
        }}
        type="text"
        name="textIpnut"
        id="textIpnut"
      />
      <button>Ajouter</button>
    </>
  )
}

export default TodoForm
