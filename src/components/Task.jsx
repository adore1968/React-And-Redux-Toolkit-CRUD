import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/CRUD/crudSlice";

function Task({ item }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="bg-gray-800 text-white py-5 px-6 rounded shadow-md flex justify-center sm:justify-between flex-col sm:flex-row text-lg sm:text-xl">
      <div className="sm:text-left text-center">
        <h6 className="mb-2">{item.name}</h6>
        <p className="sm:mb-0 mb-2">{item.description}</p>
      </div>
      <div className="text-center">
        <Link
          to={`/edit/${item.id}`}
          className="py-2 px-4 bg-blue-600 rounded inline-block hover:bg-blue-500 transition-colors w-full mb-2"
        >
          Edit
        </Link>
        <div>
          <button
            onClick={() => handleDelete(item.id)}
            className="py-2 px-4 bg-red-600 rounded  hover:bg-red-500 transition-colors inline-block w-full sm:w-fit"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
