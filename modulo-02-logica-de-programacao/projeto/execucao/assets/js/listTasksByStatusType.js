import { possibleStatus, tasks } from "./in-memory.js";

export const listTasksByType = (status) => {
  if (!possibleStatus.includes(status))
    return `status incorreto, status possíveis ${
      (possibleStatus.reduce((acc, val) => acc.concat(` ${val}`)), "")
    }`;

  return tasks.filter((task) => task.status === status);
};
