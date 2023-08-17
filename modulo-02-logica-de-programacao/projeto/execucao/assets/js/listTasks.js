import { tasks } from "./in-memory.js";

export const listTasks = () => {
  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  const spearedTasks = {
    todo: todoTasks,
    inProgress: inProgressTasks,
    done: doneTasks,
  };

  return spearedTasks;
};
