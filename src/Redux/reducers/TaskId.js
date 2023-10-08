import { GET_TASK_ID } from "../constants";

const initialState = 0;
export const taskIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_ID:
      return (state = action.payload);
    default:
      return state;
  }
};
