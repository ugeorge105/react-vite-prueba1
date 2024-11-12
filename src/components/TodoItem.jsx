import IconCross from "./icons/IconCross"
import IconCheck from "./icons/IconCheck"
import React from "react"

const TodoItem = React.forwardRef(({todo, removeTodo, updateTodo, ...props}, ref) => {

  const {id, title, completed}= todo

  return(
      <article {...props} ref={ref} className="border-b flex gap-4 border-b-gray-400 dark:bg-gray-800 py-4 px-4 transition-all duration-1000">
        <button 
          className= {`h-5 w-5 flex-mone rounded-full border-2 ${
            completed
              ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              : "inline-block"
          }`}
          onClick={() => updateTodo(id)}
        >
          

          {completed && <IconCheck/>}

        </button>    
        <p className={`grow text-gray-600 dark:text-gray-400 transition-all duration-1000 ${completed && "line-through"}`}>{title}</p>
        <button className="flex-none" onClick={()=> removeTodo(id)}><IconCross/></button>

      </article>

  )
})

export default TodoItem