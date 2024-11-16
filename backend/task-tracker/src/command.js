import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addTask, deleteTask, listAll, updateTask } from "./tasks.js";

const listTasks = (tasks) => {
  tasks.forEach(({ id, description, status, createdAt, updatedAt }) => {
    console.log(`id: ${id}`);
    console.log(`description: ${description}`);
    console.log(`status: ${status}`);
    console.log(`created at: ${createdAt}`);
    console.log(`updated at: ${updatedAt}`);
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
  .command(
    "delete <id>",
    "Delete the task by its ID",
    (yargs) => {
      return yargs.positional("id", {
        describe: "Task ID to be deleted",
        type: Number,
      });
    },
    async (argv) => {
      await deleteTask(argv.id);
      console.log(`Task deleted with id: ${argv.id}`);
    }
  )
  .command(
    "update <id> <description>",
    "Update the description of task by its ID",
    (yargs) => {
      return yargs
        .positional("id", {
          describe: "Task ID to be updated",
          type: Number,
        })
        .positional("description", {
          describe: "New description of task",
          type: String,
        });
    }, async (argv) => {
      await updateTask(argv.id, argv.description);
      console.log("Task has been updated!")
    }
  )
  .demandCommand(1)
  .parse();
