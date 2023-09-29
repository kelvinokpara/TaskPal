import { combineReducers } from "redux";
import {
  CreateTaskReducer,
  GetAllTaskReducer,
  DeleteTaskReducer,
} from "./reducers";

export const reducers = combineReducers({
  createTask: CreateTaskReducer,
  getAllTasks: GetAllTaskReducer,
  deleteTask: DeleteTaskReducer,
});
