import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { addTask } from './tasks.js';

yargs(hideBin(process.argv))
    .command('add <task>', 'Add a new task', (yargs) => {
        return yargs.positional('task', {
            describe: 'Task to add',
            type: 'string'
        })
    }, async (argv) => {
        const task = await addTask(argv.task);
        console.log(`Task added: ${task.description}`);
    })
    .command('list', 'List all the tasks', (yargs) => {}, async(argv) => {
        
    })
    .demandCommand(1)
    .parse();