import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between px-10 py-[10px] bg-slate-700 text-white">
      <h1 className="font-bold text-3xl">TaskPal</h1>
      <div className="flex gap-3">
        <NavLink to="/">
          <Button
            text="Log out"
            bgColor={"bg-white"}
            textColor={"text-blue-600"}
          />
        </NavLink>

        <NavLink>
          <Button
            text="Delete account"
            bgColor={"bg-white"}
            textColor={"text-blue-600"}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
