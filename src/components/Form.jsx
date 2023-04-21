import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/CRUD/crudSlice";
import { v4 as uuid } from "uuid";

const taskInitialState = {
  id: "",
  name: "",
  description: "",
};

function Form() {
  const [task, setTask] = useState(taskInitialState);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tasks } = useSelector((store) => store.crud);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const newTasks = tasks.map((item) => {
        if (item.id === id) {
          return task;
        }
        return item;
      });
      dispatch(editTask(newTasks));
    } else if (task.name && task.description) {
      const newTask = { ...task, id: uuid() };
      dispatch(addTask(newTask));
    }
    setTask(taskInitialState);
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      const currentTask = tasks.find((task) => task.id === id);
      setTask(currentTask);
    }
  }, [id]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 py-5 px-6 rounded text-white shadow-md"
      >
        <div>
          <label htmlFor="name" className="text-xl sm:text-2xl mb-5 block">
            Task
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={task.name}
              onChange={handleChange}
              className="w-full text-lg sm:text-xl p-2 rounded mt-1 text-gray-800"
            />
          </label>
        </div>
        <div className="mb-2">
          <label
            htmlFor="description"
            className="text-xl sm:text-2xl block mb-5"
          >
            Description
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              value={task.description}
              onChange={handleChange}
              className="w-full text-lg sm:text-xl p-2 rounded mt-1 resize-none text-gray-800"
            />
          </label>
        </div>
        <button className="text-lg sm:text-xl bg-red-600 text-center p-2 hover:bg-red-500 transition-colors cursor-pointer w-full">
          {id ? "Edit" : "Create"}
        </button>
      </form>
    </div>
  );
}

export default Form;
