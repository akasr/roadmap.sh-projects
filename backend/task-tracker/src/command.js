import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addTask, deleteTask, listTasks, updateTask } from "./tasks.js";

const formatTasks = (tasks) => {
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
  .scriptName("task-cli")
  .usage("$0 <command> [options]")
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
      console.log(`Task added successfully: ${task.id}`);
    }
  )
  .command(
    "list [status]",
    "List tasks",
    (yargs) => {
      return yargs.positional("status", {
        describe: "Status of the tasks to be listed",
        type: String,
      });
    },
    async (argv) => {
      let tasks;
      if (argv.status) {
        tasks = await listTasks(argv.status);
      } else {
        tasks = await listTasks();
      }
      formatTasks(tasks);
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
    },
    async (argv) => {
      await updateTask(argv.id, "description", argv.description);
      console.log("Task has been updated!");
    }
  )
  .command(
    "mark-in-progress <id>",
    "Mark the task to be in progress",
    (yargs) => {
      return yargs.positional("id", {
        describe: "Task ID to be marked in progress",
        type: Number,
      });
    },
    async (argv) => {
      await updateTask(argv.id, "status", "in-progress");
      console.log("Task has been marked in progress!");
    }
  )
  .command(
    "mark-done <id>",
    "Mark the task to be done",
    (yargs) => {
      return yargs.positional("id", {
        describe: "Task ID to be marked done",
        type: Number,
      });
    },
    async (argv) => {
      await updateTask(argv.id, "status", "done");
      console.log("Task has been marked done");
    }
  )
  .demandCommand(1)
  .parse();
