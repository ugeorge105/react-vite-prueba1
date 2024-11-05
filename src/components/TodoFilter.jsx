const TodoFilter = ({changeFilter, filter}) => {
    return(
        <section className="container mx-auto px-4 mt-8">
        <div className=" dark:bg-gray-800 bg-white flex justify-center rounded-md p-4 gap-4 transition-all duration-1000">
          <button 
            className={`${
              filter=== "all"
                ? "text-blue-500 hover:text-gray-400"
                : "text-blue-400 hover:text-gray-500"
              }`}
              onClick={() => changeFilter ('all')}  
            >todos </button>
          <button className={`${
              filter=== "all"
                ? "text-blue-500 hover:text-gray-400"
                : "text-blue-400 hover:text-gray-500"
              }`}
              onClick={() => changeFilter ('completed')}
              >limpiar</button>
          <button className={`${
              filter=== "all"
                ? "text-blue-500 hover:text-gray-400"
                : "text-blue-400 hover:text-gray-500"
              }`}
              onClick={() => changeFilter ('active')}
              >activos</button>
        </div>
       

      </section>


    )
}

export default TodoFilter 