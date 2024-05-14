import inquirer from "inquirer";
//Asking Question from the Users through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select one Operator to Perform Operations",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    }
]);
// Conditional Statement If-Else
if (answers.Operator == "Addition") {
    console.log(answers.FirstNumber + answers.SecondNumber);
}
else if (answers.Operator == "Substraction") {
    console.log(answers.FirstNumber - answers.SecondNumber);
}
else if (answers.Operator == "Multipication") {
    console.log(answers.FirstNumber * answers.SecondNumber);
}
else if (answers.Operator == "Division") {
    console.log(answers.FirstNumber / answers.SecondNumber);
}
else {
    console.log("INVALID INPUT");
}
