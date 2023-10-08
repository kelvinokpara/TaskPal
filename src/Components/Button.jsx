import React from "react";
import {
  DeleteTaskAction,
  GetTaskAction,
  GetTaskIdAction,
} from "../Redux/actions/CreateTaskAction";
import { useDispatch } from "react-redux";

function Button({
  text,
  bgColor = "bg-slate-700",
  textColor = "text-white",
  width,
  display = "block ",
  border = "rounded-3xl",
  margin = "m-[5px]",
  Id,
  use,
  handler,
}) {
  const dispatch = useDispatch();
  const deleteTaskHandler = (id) => {
    dispatch(DeleteTaskAction(id));
    dispatch(GetTaskAction());
    console.log("DONE");
  };

  const TaskIdHandler = (id) => {
    // dispatch(GetTaskIdAction(id));
    handler(id);

    dispatch(GetTaskAction());
    console.log("DONE");
  };

  return (
    <>
      {use === "edit" ? (
        <button
          className={`${bgColor} px-4 py-2 ${border} ${textColor} ${width} ${display} text-sm font-medium ${margin}`}
          onClick={() => TaskIdHandler(Id)}
        >
          {text ?? "..."}
        </button>
      ) : use === "delete" ? (
        <button
          className={`${bgColor} px-4 py-2 ${border} ${textColor} ${width} ${display} text-sm font-medium ${margin}`}
          onClick={() => deleteTaskHandler(Id)}
        >
          {text ?? "..."}
        </button>
      ) : use === "norm" ? (
        <button
          className={`${bgColor} px-4 py-2 ${border} ${textColor} ${width} ${display} text-sm font-medium ${margin}`}
        >
          {text ?? "..."}
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default Button;
