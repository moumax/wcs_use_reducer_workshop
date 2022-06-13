import { useReducer } from "react"
import TodoCard from "./components/TodoCard"
import TodoForm from "./components/TodoForm"

import { todoReducer, init } from "./reducers/todoReducer"

function App() {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  return (
    <>
      <div className="App">
        {todos.map((todo) => (
          <TodoCard
            key={Math.floor(Math.random() * 1000)}
            todo={todo}
            dispatch={dispatch}
          />
        ))}
      </div>
      <TodoForm dispatch={dispatch} />
    </>
  )
}

export default App
