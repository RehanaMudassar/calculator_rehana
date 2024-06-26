#! /usr/bin/env node
//import gradient from 'gradient-string';
import inquirer from "inquirer";

async function calculator() {
    const calc = await inquirer.prompt([
        {
            type: 'list',
            name: 'optr',
            message: 'Choose operation:',
            choices: ['Add', 'Subtract', 'Multiply', 'Divide']
        },
        {
            type: 'number',
            name: 'num1',
            message: 'Enter first number:'
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter second number:'
        }
    ])
    .then(answers => {
    if(answers.optr == 'Add') 
    {  
    console.log('Sum of two numbers is ',answers.num1+answers.num2)
    }
    else if(answers.optr == 'Subtract')
    {
       console.log('Difference of two numbers is ',answers.num1-answers.num2)
    }  
    else if(answers.optr == 'Multiply')
    {
        console.log('Product of two numbers is ',answers.num1*answers.num2)
    }
    else if(answers.optr == 'Divide')
    {
        console.log('Division of two numbers is ',answers.num1/answers.num2)
    }
    else
    {
        console.log("invalid data")
    }
  })
}
calculator()
