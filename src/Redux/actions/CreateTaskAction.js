import {
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  // CREATE_TASK_RESET,
  CREATE_TASK_ERROR,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
  GET_TASK_ERROR,
  //
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_ERROR,
  //
  EDIT_TASK_REQUEST,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_ERROR,
  //
  GET_TASK_ID,
} from "../constants";
import axios from "axios";

const backend_base_url = "http://localhost:4000";

export const createTaskAction = (BodyData) => async (dispatch, state) => {
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: CREATE_TASK_REQUEST,
    });
    const { data } = await axios.post(`${backend_base_url}/tasks`, {
      ...BodyData,
    });
    console.log(data, "data");

    dispatch({
      type: CREATE_TASK_SUCCESS,
      payload: data.BodyData,
    });
    alert("Task saved");
  } catch (error) {
    console.log(error.message, "error");
    dispatch({
      type: CREATE_TASK_ERROR,
      payload: error.message,
    });
  }
};

// hhhhhhhhhhhhhhhhhhhhhhhhhhhh

export const GetTaskAction = () => async (dispatch, state) => {
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: GET_TASK_REQUEST,
    });
    const { data } = await axios.get(`${backend_base_url}/tasks`);
    console.log(data, "data");

    //if we get here, then request is a success case
    dispatch({
      type: GET_TASK_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    console.log(error.message, "error");
    dispatch({
      type: GET_TASK_ERROR,
      payload: error.message,
    });
  }
};

export const GetTaskIdAction = (data) => {
  return {
    type: GET_TASK_ID,
    payload: data,
  };
};

export const DeleteTaskAction = (id) => async (dispatch, state) => {
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: DELETE_TASK_REQUEST,
    });
    const { data } = await axios.delete(`${backend_base_url}/tasks/${id}`);
    console.log(data, "data");

    //if we get here, then request is a success case
    dispatch({
      type: DELETE_TASK_SUCCESS,
      payload: data,
    });
    alert("Item successfully deleted");
    return data;
  } catch (error) {
    console.log(error.message, "error");
    dispatch({
      type: DELETE_TASK_ERROR,
      payload: error.message,
    });
  }
};

export const editTaskAction = (id, BodyData) => async (dispatch, state) => {
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: EDIT_TASK_REQUEST,
    });
    const { data } = await axios.patch(`${backend_base_url}/tasks${id}`, {
      ...BodyData,
    });
    console.log(data, "data");

    //if we get here, then request is a success case
    dispatch({
      type: EDIT_TASK_SUCCESS,
      payload: data,
    });
    alert("Item successfully edited");
    return data;
  } catch (error) {
    console.log(error.message, "error");
    dispatch({
      type: EDIT_TASK_ERROR,
      payload: error.message,
    });
  }
};
