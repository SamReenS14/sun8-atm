#!/usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1608;

let pinAnswer = await inquirer.prompt(
   [
    {
     name: "pin",
     message: "Welcome Ms.Samreen enter your pin ",
     type: "number"

    }
   ]
);

if(pinAnswer.pin === myPin) {
    console.log ("Correct pin code!!!")

    let operationAns = await inquirer.prompt(
   [
    { name: "operation",
      message: "Ms.Samreen please select option",
      type: "list",
      choices: ["withdraw", "check balance"]
    }
   ]
);
console.log (operationAns);

    if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt(
     [
        {
          name: "amount",
          message:"enter your amount",
          type: "number"
        }
     ]
    );

myBalance -= amountAns.amount;
console.log("Your remaining balance is: " + myBalance)



        } else if (operationAns.operation === "check myBalance")
          {console.log("your Balance is: + myBalance")

          }
}
else {
    console.log ("Incorrect pin code");

}