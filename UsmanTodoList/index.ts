import inquirer from "inquirer";

let todoList: string[] = [];
async function RepeatFlow() {
    const answer = await inquirer.prompt([{
        name:"repeat",
        type:"list",
        choices:["Yes", "No" ],
        message: "Do you want another Operation"
    }])
    return (answer.repeat === "Yes")?true:false
} 

async function TodoList() {
do {
    const answer: { option: string } = await inquirer.prompt([
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
        RepeatFlow()
      } else if (answer.option === "Display") {
        todoList.forEach((element) => console.log(element));
      } else if (answer.option === "Remove Items") {
        const removeItem: { remove: string } = await inquirer.prompt([
          {
            name: "remove",
            type: "input",
            message: "Which item you want to remove",
          },
        ]);
        let index = todoList.indexOf(removeItem.remove);
        console.log(index);
      }
        
} while ();

}

TodoList();
