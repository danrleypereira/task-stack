// Task.tsx
import React from "react";
import type { ITaskProps } from "~/utils/types";

const Task: React.FC<ITaskProps> = ({
  task,
  index,
  toggleTaskCompletion,
  handleTaskNameChange,
}) => {
  return (
    <div className="flex h-11 w-full min-w-[300px] flex-row items-center">
      <div
        className={`mr-2 h-4 w-4 rounded-full border-2 border-charcoal-600 ${
          task.completed ? "bg-charcoal-700" : "bg-charcoal-600"
        }`}
        aria-label={`Task ${index + 1}`}
        onClick={() => toggleTaskCompletion(index)}
      />
      <label htmlFor={`item${index}`} className="flex-grow">
        <input
          key={index}
          className={`placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full border-none border-charcoal-600 bg-transparent pb-1.5 pt-1.5 font-inter text-sm font-normal outline outline-0 transition-all focus:border-slate-400 focus:outline-0 disabled:border-0 ${
            task.completed && "text-charcoal-600 line-through"
          }`}
          placeholder=""
          onChange={(e) => handleTaskNameChange(index, e)}
          value={task.text}
        />
      </label>
    </div>
  );
};

export default Task;
