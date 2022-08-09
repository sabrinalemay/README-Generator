// Includes packages needed for this application
const inquirer = require('inquirer');
const { fileSync } = require('tmp');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your project',
},
{
    type: 'input',
    name: 'installation',
    message: 'Insert the installation instructions',
},
{
    type: 'input',
    name: 'usage',
    message: 'Insert the usage information',
},
{
    type: 'input',
    name: 'contributing',
    message: 'Insert the contribution guidelines',
},
{
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
},
{
    type: 'list',
    name: 'license',
    message: 'License',
    choices: [
        {
            name: 'MIT',
            value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        }, 
        {
            name: 'Apache 2.0',
            value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        }, 
        {
            name: 'CC0 1.0',
            value: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
        }, 
        {
            name: 'None',
            value: 'No license'
        }],
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }
    });
};

// function askQuestions(){
//     return inquirer.prompt(questions)
//     .then((answers) =>{
//         console.log(answers)
//         return answers
//     })
// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput){
        writeToFile("README.md", generateMarkdown(userInput));
    })
};

// Function call to initialize app
init();
