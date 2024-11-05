import { useState } from "react"
import Header from "./components/Header"
import CrossIcon from "./components/icons/IconCross"
import MoonIcon from "./components/icons/IconMoon"
import TodoComputed from "./components/TodoComputed"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"

const initialStateTodos =[
  {id:1, title:"Completar curso online", completed:true},
  {id:2, title:"Completar curso online", completed:false},
  {id:3, title:"bailar", completed:false},
  {id:4, title:"ir al gym", completed:false},
  {id:5, title:"wazaaa", completed:false},

]
const App = () =>{

  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo =(title) =>{
    const newTodo ={
      id: Date.now(),
      title: title.trim(),
      completed: false,
    }

    setTodos([...todos, newTodo]);
  }

  const updateTodo =(id) => {
    setTodos(
      todos.map((todo) =>
      todo.id === id ? {...todo,completed: !todo.completed} : todo  
      )
    )
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const computedItemsLeft = todos.filter((todo) => !todo.computed).length;

  const clearCompleted =() =>{
    setTodos(todos.filter((todo)=> !todo.completed))

  }

  const [filter, setFilter] = useState("all")

  const changeFilter =(filter)=> setFilter(filter)

  const filteredTodos = () =>{
    switch (filter){
      case "all":
        return todos
      case "active":
        return todos.filter((todo)=> !todo.completed)
      case "completed":
        return todos.filter((todo)=>todo.completed)
      default:
        return todos;

    }
  }

    

  return(
  <div className="dark:bg-gray-900 min-h-screen 
    bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat
    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000"
     >
    <Header></Header>
    <main className="conatainer mx-auto px-4 mt-8 ">

     
      <TodoCreate createTodo={createTodo} />
      
      <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>
      
      <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}></TodoComputed>

      <TodoFilter changeFilter={changeFilter} filter={filter}></TodoFilter>
      
    </main>

    
    
      <footer className="text-center mt-8 dark:text-gray-400 ">drag and drop para reordenar</footer>

  </div>
  )
}

export default App

