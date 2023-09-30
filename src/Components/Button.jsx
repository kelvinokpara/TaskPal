import React from "react";
import {
  DeleteTaskAction,
  GetTaskAction,
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
  id,
  func,
}) {
  // const dispatch = useDispatch();
  // const deleteTaskHandler = (id) => {
  //   dispatch(DeleteTaskAction(id));
  //   dispatch(GetTaskAction());
  //   console.log("DONE");
  // };
  console.log(id);

  return (
    <button
      type="submit"
      className={`${bgColor} px-4 py-2 ${border} ${textColor} ${width} ${display} text-sm font-medium ${margin}`}
    >
      {text ?? "..."}
    </button>
  );
}

export default Button;
