#! /usr/bin/env node
import inquirer from "inquirer";
const Pin = 1717;
let Z = await inquirer.prompt({
    message: "Enter Your Pin",
    type: "input",
    name: "Pin"
});
if (parseInt(Z.Pin) === Pin) {
    console.log("Welcome! You Entered the Correct Pin");
}
else {
    console.log("You Entered the Wrong Pin \nTry Again");
    process.exit();
}
let Current_Balance = 1000;
let Display_Balance = (Balance) => {
    console.log(`Your Current Balance is: ${Balance}`);
};
let Deposit = async (CurrentBalance) => {
    let Dpite = await inquirer.prompt({
        message: "Enter Deposit Amount",
        name: "Amount",
        type: "input"
    });
    return CurrentBalance + parseInt(Dpite.Amount);
};
let Fast_Cash = async (Balance) => {
    console.log("Press A : Fast Cash 1000");
    console.log("Press B : Fast Cash 5000");
    console.log("Press C : Fast Cash 10000");
    console.log("Press D : Fast Cash 20000");
    let Option = await inquirer.prompt({
        message: "Enter Your Option",
        type: "input",
        name: "Cash"
    });
    switch (Option.Cash) {
        case "A":
            if (Balance >= 1000) {
                console.log("You Withdrew Free Cash 1000");
                Balance = Balance - 1000;
            }
            else {
                console.log("Insufficient Balance for Fast Cash 1000");
            }
            break;
        case "B":
            if (Balance >= 5000) {
                console.log("You Withdrew Free Cash 5000");
                Balance = Balance - 5000;
            }
            else {
                console.log("Insufficient Balance for Fast Cash 5000");
            }
            break;
        case "C":
            if (Balance >= 10000) {
                console.log("You Withdrew Free Cash 10000");
                Balance = Balance - 10000;
            }
            else {
                console.log("Insufficient Balance for Fast Cash 10000");
            }
            break;
        case "D":
            if (Balance >= 20000) {
                console.log("You Withdrew Free Cash 20000");
                Balance = Balance - 20000;
            }
            else {
                console.log("Insufficient Balance for Fast Cash 20000");
            }
            break;
        default:
            console.log("Please Choose a Valid Option");
    }
    console.log(`Your Current Balance is ${Balance}`);
    return Balance;
};
let Withdraw_Money = async (Balance) => {
    let money = await inquirer.prompt({
        name: "Cash",
        message: "Enter Amount To Withdraw",
        type: "input"
    });
    let withdrawAmount = parseInt(money.Cash);
    if (withdrawAmount <= Balance) {
        Balance -= withdrawAmount;
        console.log(`You Successfully Withdrew ${withdrawAmount} \nNow Your Current Balance is ${Balance}`);
    }
    else {
        console.log("Insufficient Balance");
    }
    return Balance;
};
while (true) {
    console.log("Press A: To Display Your Current Balance");
    console.log("Press B: To Deposit In Your Account");
    console.log("Press C: To Withdraw Fast Cash");
    console.log("Press D: To Withdraw Money");
    console.log("Press E: Exit");
    let S = await inquirer.prompt({
        message: "Enter Your Option",
        type: "input",
        name: "Option",
    });
    switch (S.Option) {
        case "A":
            Display_Balance(Current_Balance);
            break;
        case "B":
            Current_Balance = await Deposit(Current_Balance);
            break;
        case "C":
            Current_Balance = await Fast_Cash(Current_Balance);
            break;
        case "D":
            Current_Balance = await Withdraw_Money(Current_Balance);
            break;
        case "E":
            console.log("Successfully Exited");
            process.exit();
        default:
            console.log("Invalid Option, Please Try Again");
    }
}
