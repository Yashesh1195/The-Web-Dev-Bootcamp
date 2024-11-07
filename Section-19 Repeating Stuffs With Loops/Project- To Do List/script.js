let command = prompt("What would you like to do?");

const todos = ["Collect Sandwiches!!", "Setup ur study schedule!!"];

//quit or q command loop
while(command !== "quit" && command !== "q"){
    //list command
    if(command === "list"){
        console.log("************");
        
        for(let i = 0; i<=todos.length-1; i++){
            console.log(`${i}: ${todos[i]}`);
        }

        console.log("************");
    }

    //new command
    else if(command === "new"){
        let newTodo = prompt("Enter the new ToDo!!");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }

    //delete command
    else if(command === "delete"){
        let deleteTodo = parseInt(prompt("Enter the index of the Todo to be removed!!"));
        todos.splice(deleteTodo, 1);
    }

    command = prompt("What would you like to do?");
}

console.log("You Quit The App!!");