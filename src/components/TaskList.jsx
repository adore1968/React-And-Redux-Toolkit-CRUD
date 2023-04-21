import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function TaskList() {
  const { tasks } = useSelector((store) => store.crud);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {tasks.map((task) => {
        return <Task key={task.id} item={task} />;
      })}
    </div>
  );
}

export default TaskList;
