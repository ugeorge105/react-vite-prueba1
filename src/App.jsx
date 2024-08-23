import CrossIcon from "./components/icons/CrossIcon"
import MoonIcon from "./components/icons/MoonIcon"

const App = () =>{
  return(
  <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat" >
    <header className="container mx-auto px-4">
      <div className="flex justify-between">
        <h1 className="text-3xl uppercase text-white font-semibold tracking-[0.5cm] mt-8">Todo</h1>
        <button>
          <MoonIcon></MoonIcon>
        </button>
      </div>
      <form className="flex items-center px-4 overflow-hidden rounded-md bg-white py-4 gap-4 mt-8">
        <span className="inline-block h-5 w-5 rounded-full border-2"></span>
        <input 
          type="text" 
          placeholder="Create todo"
          className="w-full text-gray-400 outline-none"/>
      </form>
        
    </header>
    <main className="conatainer mx-auto px-4 mt-8 ">
      
      <div className="bg-white rounded-md ">
        

        <article className="border-b flex gap-4 border-b-gray-400 py-4 px-4">
          <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
          <p className="grow text-gray-600">Completar curso</p>
          <button className="flex-none"><CrossIcon/></button>

        </article>

        <article className="border-b flex gap-4 border-b-gray-400 py-4 px-4">
          <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
          <p className="grow text-gray-600">Completar curso</p>
          <button className="flex-none"><CrossIcon/></button>

        </article>

        <article className="border-b flex gap-4 border-b-gray-400 py-4 px-4">
          <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
          <p className="grow text-gray-600">Completar curso</p>
          <button className="flex-none"><CrossIcon/></button>

        </article>

        <section className="flex justify-between px-4 py-4">
          <span className="text-gray-400">quedan 5</span>
          <button className="text-gray-400">limpiar completados</button>
        </section>
      </div>
      
      
    </main>

    <section className="container mx-auto px-4 mt-8">
        <div className="bg-white flex justify-center rounded-md p-4 gap-4">
          <button className="text-blue-600">todos </button>
          <button className="hover:text-blue-600">limpiar</button>
          <button className="hover:text-blue-600">activos</button>
        </div>
       

      </section>

      <p className="text-center mt-8">drag and drop para reordenar</p>

  </div>
  )
}

export default App

