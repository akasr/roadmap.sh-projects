import {insertDB, getDB, saveDB} from './db.js';

export const addTask = async (task) => {
    const newTask = {
        id: Date.now(),
        description: task,
        status: "in-progress",
        createdAt: new Date().toISOString(),
        updatedAt: null
    }

    await insertDB(newTask);
    return newTask;
}
