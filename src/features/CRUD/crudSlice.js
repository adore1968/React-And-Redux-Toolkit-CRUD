import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTasks = [...state.tasks, action.payload];
      return { ...state, tasks: newTasks };
    },
    editTask: (state, action) => {
      return { ...state, tasks: action.payload };
    },
    deleteTask: (state, action) => {
      const newTasks = state.tasks.filter((task) => task.id !== action.payload);
      return { ...state, tasks: newTasks };
    },
  },
});

export default crudSlice.reducer;
export const { addTask, editTask, deleteTask } = crudSlice.actions;
