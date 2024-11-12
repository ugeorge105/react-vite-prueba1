import { Droppable, Draggable } from "@hello-pangea/dnd"

import IconCross   from "./icons/IconCross"
import TodoItem from "./TodoItem"

const TodoList = ({todos, removeTodo, updateTodo}) => {
    return(
        <Droppable droppableId="todos">
            {(droppabbleProvided)=> (
            <div
                ref={droppabbleProvided.innerRef}
                {...droppabbleProvided.droppableProps}
                className=" overflow-hidden dark:bg-gray-800 bg-white rounded-md p-4 mt-8 transition-all duration-1000">
                {todos.map((todo, index)=> (
                    <Draggable 
                        key={todo.id} 
                        index={index} 
                        draggableId={`${todo.id}`}>
                        
                        {(draggableProvided)=> (
                            <TodoItem 
                            
                            todo={todo} 
                            removeTodo={removeTodo} 
                            updateTodo={updateTodo}
                            ref={draggableProvided.innerRef }
                            {...draggableProvided.dragHandleProps}
                            {...draggableProvided.draggableProps}
                            />
                        )}
                    </Draggable>
                ))} 
                {droppabbleProvided.placeholder } 
        </div>
        )}
      </Droppable>
    )
}

export default TodoList