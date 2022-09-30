import TaskCard from "./TaskCard";
import { TaskContext } from "../Context/TaskContext";
import { useContext } from "react";

const TaskList = () => {
  const {Task} = useContext(TaskContext);
  if (Task.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center"> No hay tareas nuevas </h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">

      {Task.map((task) => (
        <TaskCard key={task.id} task={task}/>
        // <div key={task.id}>
        //   <h1> {task.title} </h1>
        //   <p> {task.descripcion} </p>
        // </div>
      ))}
    </div>
  );
};

export default TaskList;
