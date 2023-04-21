import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "../features/CRUD/crudSlice";

export const store = configureStore({
  reducer: {
    crud: crudSlice,
  },
});
