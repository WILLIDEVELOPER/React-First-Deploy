import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function Formulario() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion,
    });
    setTitle("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="capitalize text-white font-bold text-2xl mb-3"> crear una tarea</h1>
        <input
          placeholder="Escribe el titulo de la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-3"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-3"
          value={descripcion}
        ></textarea>
        <button className="bg-indigo-500 px-4 py-2 text-white rounded-md hover:bg-indigo-400">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default Formulario;
