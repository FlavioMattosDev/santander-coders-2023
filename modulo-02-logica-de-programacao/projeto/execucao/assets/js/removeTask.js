import { tasks } from "./in-memory.js";

export const removeTask = (removeID) => {
  const taskIndex = tasks.findIndex((task) => task.id === removeID);
  if (taskIndex === -1) return "ID Inválido";
  const taskApagada = tasks.at(taskIndex);
  tasks.splice(taskIndex, 1);
  return `Task Apagada: ${taskApagada}`;
};
