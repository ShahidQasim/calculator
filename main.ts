
import inquirer from 'inquirer'

const answer = await inquirer.prompt([
    {
    name : "firstnumber",
    type : "number",
    message : "enter first number"

},
{
    name : "secondnumber",
    type :  "number",
    message: "enter your second number"
},
{
    name: "operator",
    type : 'list',
    message: "select your operator",
    choices : ["addition","subtraction","multiplication","division"]
}

])
if (answer.operator==="addition") {
    console.log(answer.firstnumber+answer.secondnumber);
}
    else if (answer.operator==="subtraction"){
        console.log(answer.firstnumber-answer.secondnumber);
        
    }
    else if(answer.operator==="division") {
        console.log(answer.firstnumber/answer.secondnumber);
        
    }
    else if (answer.operator==="multiplication"){
        console.log(answer.firstnumber*answer.secondnumber);
        
    }
    else{
        console.log("enter correct number");
        
    }
