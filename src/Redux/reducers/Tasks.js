import {
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_RESET,
  CREATE_TASK_ERROR,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
  GET_TASK_RESET,
  GET_TASK_ERROR,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_ERROR,
} from "../constants";

export const CreateTaskReducer = (
  state = {
    createTasks: {},
    createLoading: false,
    createSuccess: false,
    createError: null,
  },
  action
) => {
  switch (action.type) {
    case CREATE_TASK_REQUEST:
      return {
        ...state,
        createLoading: true,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        createLoading: false,
        createSuccess: true,
        createTasks: action.payload,
      };
    case CREATE_TASK_RESET:
      return {
        createLoading: false,
        createSuccess: false,
        createTasks: null,
        createError: null,
      };
    case CREATE_TASK_ERROR:
      return {
        ...state,
        createLoading: false,
        createSuccess: false,
        createError: action.payload,
      };
    default:
      return state;
  }
};

export const GetTaskReducer = (state = {}, action) => {};

export const GetAllTaskReducer = (
  state = {
    allTasks: [],
    allLoading: false,
    allSuccess: false,
    allError: null,
  },
  action
) => {
  switch (action.type) {
    case GET_TASK_REQUEST:
      return {
        ...state,
        allLoading: true,
      };
    case GET_TASK_SUCCESS:
      return {
        ...state,
        allLoading: false,
        allSuccess: true,
        allTasks: action.payload,
      };
    case GET_TASK_RESET:
      return {
        allLoading: false,
        allSuccess: false,
        allTasks: null,
        allError: null,
      };
    case GET_TASK_ERROR:
      return {
        ...state,
        allLoading: false,
        allSuccess: false,
        allError: action.payload,
      };
    default:
      return state;
  }
};

export const DeleteTaskReducer = (
  state = {
    delTasks: [],
    delLoading: false,
    delSuccess: false,
    delError: null,
  },
  action
) => {
  switch (action.type) {
    case DELETE_TASK_REQUEST:
      return {
        ...state,
        delLoading: true,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        delLoading: false,
        delSuccess: true,
        delTasks: action.payload,
      };
    case DELETE_TASK_ERROR:
      return {
        ...state,
        delLoading: false,
        delSuccess: false,
        delError: action.payload,
      };

    default:
      return state;
  }
};
