// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

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
