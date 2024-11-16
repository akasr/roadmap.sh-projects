# Task Tracker CLI

A simple command-line interface (CLI) application built with Node.js and Yargs for maintaining tasks.

## Features

- Add tasks
- List all tasks
- List task based on their status
- Mark tasks as in progress or done
- Delete tasks

## Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

    ```bash
    git clone --no-checkout https://github.com/akasr/roadmap.sh-projects.git task-tracker
    cd task-tracker
    git sparse-checkout init
    git sparse-checkout set backend/task-tracker
    git checkout
    cd backend/task-tracker
    ```

2. Install Dependencies:

    ```bash
    npm install  
    ```

3. Link the app globally (optional for CLI usage):

    ```bash
    npm link  
    ```

## Usage

Once installed, you cane use the `task-tracker` command (or `node index.js` if not linked).

### Commands

1. Add a task

    ```bash
    task-cli add "task description"
    ```

2. Updating and deleting a task

    ```bash
    task-cli update 1 "new task description"
    task-cli delete 1
    ```

3. Marking a task as in progress or done

    ```bash
    task-cli mark-in-progress 1
    task-cli mark-done 1
    ```

4. Listing all tasks 

    ```bash
    task-cli list
    ```

5. Listing tasks by status

    ```bash
    task-cli list done
    task-cli list todo
    task-cli list in-progress
    ```
#### Help
To view all available commands and options:
```bash
task-cli --help
```

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
