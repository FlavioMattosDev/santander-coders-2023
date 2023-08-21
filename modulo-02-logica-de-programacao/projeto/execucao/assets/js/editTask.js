import { tasks, isValidStatus } from "./in-memory.js";

export const editTask = (taskToBeSaved) => {
  if (!isValidStatus(taskToBeSaved.status)) return "Status incorreto";

  const index = tasks.findIndex((task) => task.id === taskToBeSaved.id);

  if (index === -1) return `Task com o id ${taskToBeSaved.id} não existe!`;

  const { id, ...properties } = taskToBeSaved;

  const updatedProperties = Object.keys(properties).reduce((acc, key) => {
    if (isNotNullish(properties[key])) {
      acc[key] = properties[key];
    }
    return acc;
  }, {});

  tasks[index] = {
    ...tasks[index],
    ...updatedProperties,
  };

  return "Task editada";
};

const isNotNullish = (value) => value != null;

// export const editTask = (taskToBeSaved) => {
//   const task = tasks.find((task) => task.id === taskToBeSaved.id);

//   if (!task) throw new TaskIdNotFound(taskToBeSaved.id);

//   for (const key in task) {
//     if (isUpdatableKey(key) && isNotNullish(task[key])) {
//       task[key] = taskToBeSaved[key];
//     }
//   }
// };
// const isUpdatableKey = (key) => key !== "id" && key !== "createdAt";
