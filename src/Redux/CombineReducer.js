import { combineReducers } from "redux";
import {
  CreateTaskReducer,
  GetAllTaskReducer,
  DeleteTaskReducer,
  EditTaskReducer,
  taskIdReducer,
} from "./reducers";

export const reducers = combineReducers({
  createTask: CreateTaskReducer,
  getAllTasks: GetAllTaskReducer,
  deleteTask: DeleteTaskReducer,
  editTask: EditTaskReducer,
  getTaskId: taskIdReducer,
});
