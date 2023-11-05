// Task.tsx
import React from "react";
import type { ITask, ITaskProps } from "~/utils/types";
import useLocalStorage from "~/utils/hooks/LocalStorage";

const Task: React.FC<ITaskProps> = ({
  task,
  index,
  toggleTaskCompletion,
  handleTaskNameChange,
}) => {
  const [tasks, setTasks] = useLocalStorage({ key: "tasks", initialValue: [] });
  
  const renderSubtasks = (
    subtasks: ITaskProps["task"][],
    parentIndex: number
  ) => {
    return subtasks.map((subtask, subIndex) => (
      <Task
        key={subIndex}
        task={subtask}
        index={parentIndex * 10 + subIndex} // You might need a better way to handle index
        toggleTaskCompletion={toggleTaskCompletion}
        handleTaskNameChange={handleTaskNameChange}
      />
    ));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === "Tab") {
      event.preventDefault(); // Prevent focus from leaving the input field
      setTasks((prevTasks: ITask[]) => {
        if (index > 0) { // Ensure there is a task to nest into
          const updatedTasks = [...prevTasks];
          const taskToNest = updatedTasks.splice(index, 1)[0]; // Remove the task at the current index
          const parentTask = updatedTasks[index - 1]; // Get the task at index - 1
          if (parentTask) {
            parentTask.subtasks = parentTask.subtasks ?? []; // Initialize subtasks if it doesn't exist
            parentTask.subtasks.push(taskToNest!); // Add the removed task as a subtask
            return updatedTasks;
          }
        }
        return prevTasks; // Return the previous tasks if there is no task to nest into
      });
    }
  };

  return (
    <>
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
            className={`placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 font-inter peer h-full w-full border-none border-charcoal-600 bg-transparent pb-1.5 pt-1.5 text-sm font-normal outline outline-0 transition-all focus:border-slate-400 focus:outline-0 disabled:border-0 ${
              task.completed && "text-charcoal-600 line-through"
            }`}
            placeholder=""
            onChange={(e) => handleTaskNameChange(index, e)}
            value={task.text}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        </label>
      </div>
      {task.subtasks && renderSubtasks(task.subtasks, index)}
    </>
  );
};

export default Task;
