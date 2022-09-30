import TaskList from "./Components/TaskList.jsx";
import Formulario from "./Components/Formulario.jsx";

function App() {
  return (
    <main className="bg-zinc-800 h-screen">
      <div className="container mx-auto p-10">
        <Formulario/>
        <TaskList/> 
      </div> 
    </main>
  );
}

export default App;
