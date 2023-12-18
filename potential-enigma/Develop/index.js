// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Input the title of your project.'
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Enter a short description of the project.'
  },
  {
    type: 'input',
    name: 'Table of Contents',
    message: 'Input links to corresponding sections of your README.'
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Explain the steps neede to install your project.'
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Give examples for using this project.'
  },
  {
    type: 'input',
    name: 'Credits',
    message: 'Give links to sources on how you went about creating your projecet.'
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Give examples for testing your project.'
  },
  {
    type: 'input',
    name: 'License:',
    message: 'Choose the license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache', 'ISC', 'None']
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) console.log(err);
        else console.log('Created README file!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      writeToFile('README.md', answers);
    });
  }
// Function call to initialize app
init();
