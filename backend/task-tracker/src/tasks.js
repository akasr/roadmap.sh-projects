import { insertDB, getDB, saveDB } from "./db.js";

export const addTask = async (task) => {
  const newTask = {
    id: Date.now(),
    description: task,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: "Still to Happen",
  };

  await insertDB(newTask);
  return newTask;
};

export const listTasks = async (status="") => {
  let { tasks } = await getDB();
  if(status){
    tasks = tasks.filter(task => task.status == status);
  }
  return tasks;
};

export const deleteTask = async (id) => {
  const { tasks } = await getDB();
  const newTasks = tasks.filter((task) => task.id !== id);
  await saveDB({ tasks: newTasks });
};

export const updateTask = async (id, property, value) => {
  const { tasks } = await getDB();
  const task = tasks.find((task) => task.id === id);

  await deleteTask(task.id);
  task[property] = value;
  task.updatedAt = new Date().toISOString();

  await insertDB(task);
  return task;
};