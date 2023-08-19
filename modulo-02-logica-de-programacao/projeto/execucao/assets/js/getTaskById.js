import { tasks } from "./in-memory.js";

export const getTaskById = (taskId) => {
  try {
    const task = tasks.find((task) => task.id === taskId);

    if (!task) {
      throw new Error("Tarefa não encontrada!");
    }

    return task;
  } catch (error) {
    return error.message;
  }
};
