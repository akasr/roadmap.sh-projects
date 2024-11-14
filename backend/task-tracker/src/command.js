import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addTask, listAll } from "./tasks.js";

const listTasks = (tasks) => {
  tasks.forEach(({ id, description, status, createdAt, updatedAt }) => {
    console.log(`id: ${id}`);
    console.log(`description: ${description}`);
    console.log(`status: ${status}`);
    console.log(`created at: ${createdAt}`);
    console.log(`updated at ${updatedAt}`);
    console.log("\n");
  });
};

yargs(hideBin(process.argv))
  .command(
    "add <task>",
    "Add a new task",
    (yargs) => {
      return yargs.positional("task", {
        describe: "Task to add",
        type: "string",
      });
    },
    async (argv) => {
      const task = await addTask(argv.task);
      console.log(`Task added: ${task.description}`);
    }
  )
  .command(
    "list",
    "List all the tasks",
    (yargs) => {},
    async (argv) => {
      const tasks = await listAll();
      listTasks(tasks);
    }
  )
  .demandCommand(1)
  .parse();
