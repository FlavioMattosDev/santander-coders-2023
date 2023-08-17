import { tasks } from "./in-memory";

export const getTaskById = (taskId) => {
	try {
		const task = tasks.find((task) => task.id === taskId);

		if (!task) {
			throw new Error("Tarefa não encontrada!");
		}

		return task;
	} catch (error) {
		console.log(error.message);
	}
};
