const TodoComputed = ({computedItemsLeft, clearCompleted}) => {
    return(
        <section className=" dark:bg-gray-800 flex justify-between px-4 py-4 bg-white rounded-b-md dark:ng-gray-800 transition-all duration-1000">
          <span className="text-gray-400">{computedItemsLeft} quedan </span>
          <button className="text-gray-400" onClick={clearCompleted}>limpiar completados</button>
        </section>

    )
}

export default TodoComputed