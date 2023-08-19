export const tasks = [];

export const possibleStatus = {
  TODO: "todo",
  IN_PROGRESS: "inProgress",
  DONE: "done",
};

export class TaskIdNotFound extends Error {
  constructor(taskId) {
    super(`Task with ID ${taskId} was not found.`);
    this.name = "TaskIdNotFound";
    this.taskId = taskId;
  }
}

export const isValidStatus = (status) =>
  Object.values(possibleStatus).includes(status);
