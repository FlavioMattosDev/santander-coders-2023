import { tasks, possibleStatus } from "./in-memory.js";

export const listTasksByType = (status) => {
  if (!possibleStatus.hasOwnProperty(upperCaseStatus)) {
    const possibleStatusList = Object.keys(possibleStatus).reduce(
      (acc, val) => acc.concat(` ${val}`),
      ""
    );

    return `Status incorreto, status possíveis:${possibleStatusList}`;
  }

  return tasks.filter((task) => task.status === status.toLowerCase());
};
