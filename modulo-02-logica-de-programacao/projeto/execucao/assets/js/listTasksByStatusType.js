import { possibleStatus, tasks, possibleStatusObj } from "./in-memory.js";

export const listTasksByType = (status) => {
  // if (!possibleStatus.includes(status))
  //   return `status incorreto, status possíveis ${possibleStatus.reduce(
  //     (acc, val) => acc.concat(` ${val}`),
  //     ""
  //   )}`;

  if (!possibleStatusObj[status.toUpperCase()])
    return `status incorreto, status possíveis${possibleStatus.reduce(
      (acc, val, i, arr) => acc.concat(` ${val.toLocaleUpperCase()}`),
      ""
    )}`;

  return tasks.filter((task) => task.status === status.toLowerCase());
};
