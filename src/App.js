import TodoCard from "./components/TodoCard"
import TodoForm from "./components/TodoForm"

function App() {
  const todos = []

  return (
    <>
      <div className="App">
        {todos.map((todo) => (
          <TodoCard key={Math.floor(Math.random() * 1000)} todo={todo} />
        ))}
      </div>
      <TodoForm />
    </>
  )
}

export default App
