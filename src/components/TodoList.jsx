import IconCross   from "./icons/IconCross"
import TodoItem from "./TodoItem"

const TodoList = ({todos, removeTodo, updateTodo}) => {
    return(
        <div className=" overflow-hidden dark:bg-gray-800 bg-white rounded-md p-4 mt-8 transition-all duration-1000">
            {todos.map((todo)=> (
                <TodoItem 
                key={todo.id} 
                todo={todo} 
                removeTodo={removeTodo} 
                updateTodo={updateTodo}/>
            ))}
        

        

        
      </div>
    )
}

export default TodoList