const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateSite = require('../Develop/utils/generate-read');



// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the title of your  Project?"
},{
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },{
        type:"input",
        name: "email",
        message: "What is your email address?"
    },{
        type:"input",
        name: "description",
        message: "Write a description of your project for users to read"
    },{
        type: "input",
        name: "usage",
        message: "What does the user need to know about the repository",
    },{
        type: "input",
        name: "contributing",
        message: "What does the user need to know about adding to the repository",
    },{
        type: "input",
        name: "license",
        message: "What kind of license should the project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "Nothing"]
    },{
        type: "input",
        name: "installation",
        message: "What command should the project run to install dependencies",
        default: "npm i"
    },{
        type: "input",
        name: "test",
        message: "what command should be executed to run tests?",
        default: "npm test"
    }  
];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
      console.log('Generating README...');
      writeToFile('README.md', generateSite({...inquirerResponses}));
    })
  }
  
  init();
  


