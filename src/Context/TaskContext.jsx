import { createContext, useState, useEffect } from "react";
import { Tasks } from "../Data/Tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [Task, setTask] = useState([]);

  function createTask(tarea) {
    setTask([
      ...Task,
      {
        title: tarea.title,
        id: Task.length,
        descripcion: tarea.descripcion,
      },
    ]);
  }

  function deleteTask(taskId) {
    //?Si el id que le pasan a la funcion es igual al que se tiene en el momento, eliminalo y si no filtralo, es decir, no lo elimines
    setTask(Task.filter((t) => t.id !== taskId));
  }

  useEffect(() => {
    setTask(Tasks);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        Task,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
