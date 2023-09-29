import React from "react";

function Button({
  text,
  bgColor = "bg-slate-700",
  textColor = "text-white",
  width,
  display = "block ",
  border = "rounded-3xl",
  margin = "m-[5px]",
}) {
  return (
    <button
      className={`${bgColor} px-4 py-2 ${border} ${textColor} ${width} ${display} text-sm font-medium ${margin}`}
    >
      {text ?? "..."}
    </button>
  );
}

export default Button;
