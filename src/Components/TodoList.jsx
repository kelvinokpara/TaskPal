import React, { useEffect, useState } from "react";
import Button from "./Button";
import {
  GetTaskAction,
  createTaskAction,
  DeleteTaskAction,
} from "../Redux/actions/CreateTaskAction";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const dispatch = useDispatch();
  const { createTask, getAllTasks, deleteTask } = useSelector((state) => state);
  // const { createTasks, createLoading, createSuccess, createError } = createTask;
  const { allTasks } = getAllTasks;

  useEffect(() => {
    dispatch(GetTaskAction());
  }, []);
  console.log(allTasks);

  const [taskSummary, setTaskSummary] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [isModal, setIsModal] = useState(false);

  const taskDataHandler = (e) => {
    if (e.target.name === "summary") {
      setTaskSummary(e.target.value);
      console.log(e.target.value);
    }

    if (e.target.name === "description") {
      setTaskDesc(e.target.value);
      console.log(e.target.value);
    }
  };

  const taskSubmitHandler = () => {
    if (taskSummary.length !== 0 && taskDesc.length !== 0) {
      dispatch(
        createTaskAction({
          summary: taskSummary,
          description: taskDesc,
        })
      );
      setIsModal(false);
      dispatch(GetTaskAction());
      return;
    }
    alert("You have not set a valid task");
  };

  // const deleteTaskHandler = () => {
  //   dispatch(DeleteTaskAction());
  //   dispatch(GetTaskAction());
  //   console.log("DONE");
  // };

  return (
    <div className="flex flex-col gap-5 p-3 px-10 h-[80vh]">
      <div className="flex justify-between items-center px-5 py-2 rounded-md border border-slate-200">
        <div onClick={() => setIsModal(true)}>
          <Button
            text={"New Task"}
            bgColor={"bg-slate-700"}
            textColor={"text-white"}
            use={"norm"}
          />
        </div>

        <p>Some Text</p>
      </div>
      <div className="flex gap-[15px] flex-wrap">
        {allTasks && allTasks.length > 0 ? (
          allTasks.map((item) => (
            <div
              key={item.id}
              className=" flex flex-col items-center justify-between p-[15px] w-[200px] min-h-[200px] shadow-md rounded-lg bg-white"
            >
              <div className="w-full text-center" id="tabText">
                <h6 className="font-semibold my-2">{item.summary}</h6>
                <p className="text-xs my-4">{item.description}</p>
              </div>

              <div className="w-full" id="tabButtons">
                <Button
                  text={"Edit Task"}
                  width={"w-full"}
                  border={"rounded-md"}
                  margin={"my-[5px]"}
                  use={"edit"}
                  Id={item.id}
                />

                <Button
                  text={"Delete Task"}
                  width={"w-full"}
                  border="rounded-md"
                  margin={"my-[5px]"}
                  use={"delete"}
                  Id={item.id}
                  // handler={({ detail }) => {
                  //   deleteTaskHandler(detail);
                  //   console.log(detail, typeof detail, "opx");
                  //   dispatch(GetTaskAction());
                  // }}
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <h2 className="text-center">Create New Task</h2>
          </div>
        )}
      </div>
      {/*  */}
      {isModal && (
        <div
          className=" fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black bg-opacity-50 box-border "
          // onClick={() => setIsModal(false)}
        >
          <div class=" min-h-[20rem] sm:w-[25rem] shadow-black-100 rounded-2xl bg-white shadow-lg sm:max-w-lg">
            <div class="relative bg-slate-700 py-6 pl-8 text-xl font-semibold uppercase tracking-wider text-white">
              Make a Task
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute top-0 right-0 m-5 h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                onClick={() => setIsModal(false)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            {/*  */}
            <div className="p-4">
              <div class="relative mt-4">
                <input
                  type="text"
                  id="Summary"
                  name="summary"
                  value={taskSummary}
                  onChange={(e) => taskDataHandler(e)}
                  class="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pr-3 pb-2.5 pt-4 text-sm text-gray-900 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label for="Summary" class="label-1">
                  {" "}
                  Summary{" "}
                </label>
              </div>

              <div class="relative mt-4">
                <textarea
                  name="description"
                  id="Description"
                  cols="30"
                  rows="10"
                  value={taskDesc}
                  onChange={(e) => taskDataHandler(e)}
                  class="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pr-3 pb-2.5 pt-4 text-sm text-gray-900 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>

                <label for="Description" class="label-1">
                  {" "}
                  Description{" "}
                </label>
              </div>

              {/*  */}
              <div class="mt-4 flex items-center space-x-4" id="timerBar">
                <div class="relative mt-2 w-20">
                  <input
                    type="number"
                    id="Days"
                    value="15"
                    class="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pr-3 pb-2.5 pt-4 text-sm text-gray-900 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label for="Days" class="label-1">
                    {" "}
                    Days{" "}
                  </label>
                </div>
                <span class="text-gray-400">x</span>
                <div class="relative mt-2 w-20">
                  <input
                    type="number"
                    id="Hours"
                    class="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pr-3 pb-2.5 pt-4 text-sm text-gray-900 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label for="Hours" class="label-1">
                    {" "}
                    Hours{" "}
                  </label>
                </div>
                <span class="text-gray-400">x</span>
                <div class="relative mt-2 w-20">
                  <input
                    type="number"
                    id="Minutes"
                    class="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pr-3 pb-2.5 pt-4 text-sm text-gray-900 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label for="Minutes" class="label-1">
                    {" "}
                    Minutes{" "}
                  </label>
                </div>
              </div>
              {/*  */}
              <hr class="mt-8 mb-4 opacity-75" />
              <div class="flex justify-end space-x-2" id="buttonDiv">
                <button
                  class="rounded-xl px-6 py-3 font-medium outline-none focus:ring"
                  onClick={() => setIsModal(false)}
                >
                  Cancel
                </button>
                <button
                  class="rounded-xl bg-slate-700 px-6 py-3 font-medium text-white outline-none focus:ring"
                  onClick={() => taskSubmitHandler()}
                >
                  Save
                </button>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;
