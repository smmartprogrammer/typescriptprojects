import inquirer from "inquirer";
let todoList = [];
async function TodoList() {
    const answer = await inquirer.prompt([
        {
            name: "Option",
            type: "list",
            choices: ["Add Item ", "Display", "Remove Items"],
            message: "What you want to do ?",
        },
    ]);
    if (answer.option === "Add Item") {
        const item = await inquirer.prompt([
            {
                name: "newItem",
                type: "input",
                message: "Enter New Items",
            },
        ]);
        todoList.push(item);
    }
    else if (answer.option === "Display") {
        todoList.forEach((element) => console.log(element));
    }
    else if (answer.option === "Remove Items") {
        const removeItem = await inquirer.prompt([
            {
                name: "remove",
                type: "input",
                message: "Which item you want to remove",
            },
        ]);
        let index = todoList.indexOf(removeItem.remove);
        console.log(index);
    }
}
TodoList();
