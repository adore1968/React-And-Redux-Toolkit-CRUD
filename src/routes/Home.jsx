import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";

function Home() {
  const { tasks } = useSelector((store) => store.crud);
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="container">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-xl sm:text-2xl text-gray-800">
            Tasks {tasks.length}
          </h1>
          <Link
            to="/create"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors text-lg sm:text-xl"
          >
            Create Task
          </Link>
        </div>
        <TaskList />
      </div>
    </section>
  );
}

export default Home;
