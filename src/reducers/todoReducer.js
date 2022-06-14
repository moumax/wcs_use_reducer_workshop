const init = () => JSON.parse(localStorage.getItem('todos')) || []

const persistTodos = (todos) => localStorage.setItem('todos', JSON.stringify(todos))

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newList = [...state, action.payload]
            persistTodos(newList)
            return newList
        case 'REMOVE_TODO':
            const newTodos = state.filter((todo) => todo !== action.payload)
            persistTodos(newTodos)
            return newTodos
        case 'CHANGE_TODO_STATUS':
            const editedTodos = [...state]
            const index = editedTodos.indexOf(action.payload)
            editedTodos[index].status = action.status
            persistTodos(editedTodos)
            return editedTodos
        default:
            console.erreur("Unknown action !")
    }
}

export { todoReducer, init }