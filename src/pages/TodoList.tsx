// prettier-ignore
'use client'

import React, { useEffect, useState } from "react";
import useLocalStorage from "~/utils/hooks/LocalStorage";
import type { ITask } from "~/utils/types";
import Task from "./Task";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage({ key: "tasks", initialValue: [] });
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue) {
      setTasks(
        (prevItems: ITask[]) =>
          [
            ...prevItems,
            { text: inputValue, completed: false } as ITask,
          ] as ITask[]
      );
      setInputValue(""); // Clear the input after adding the item
    }
  };

  const toggleTaskCompletion = (index: number) => {
    setTasks((prevTasks: ITask[]) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } as ITask : task
      )
    );
  };

  const handleTaskNameChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newText = event.target.value;
    setTasks((prevTasks: ITask[]) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <>
      <div className="relative h-11 w-full min-w-[300px]">
        <input
          placeholder=" "
          className="text-charcoal-500 placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full border-b border-charcoal-600 bg-transparent pb-1.5 pt-4 font-inter text-sm font-normal outline outline-0 transition-all focus:border-slate-400 focus:outline-0 disabled:border-0"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <label className="after:content[' '] peer-placeholder-shown:text-charcoal-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-2.5 left-0 flex h-full w-full select-none text-sm font-normal leading-tight text-slate-400 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-slate-400 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-slate-400 peer-focus:after:scale-x-100 peer-focus:after:border-slate-400 peer-disabled:text-transparent">
          Add ToDo Item
        </label>
      </div>
      <div className="max-w-screen flex flex-col">
        <div className="min-w-md mx-auto max-w-lg text-white">
          {tasks.length > 0 ? (
            tasks
              .sort((currentTask, nextTask) =>
                currentTask.completed === nextTask.completed ? 0 : 
                  currentTask.completed ? 1 : -1
              ) // sort based on completion
              .map((task, index) => (
                <Task
                  key={index}
                  task={task}
                  index={index}
                  toggleTaskCompletion={toggleTaskCompletion}
                  handleTaskNameChange={handleTaskNameChange}
                />
              ))
          ) : (
            <h1 className="mt-4 text-center">Ain&apos;t no tasks yet</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoList;
