const inquirer = require('inquirer'); //'inquirer' used for command line questions. 
const fs = require('fs'); //for file system operations.
const generateMarkdown = require('./utils/generateMarkdown'); //'generateMarkdown' is to create the markdown text

const questions = [ //Array of questions for inquirer to use in the command line. 
  {
    type: 'input',//specifies the type of prompt to be displayed. 
    name: 'title',//Key to the answer the prompt is asking. 
    message: 'Provide a title for your project:'//Prompt question/command. 
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps to install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Give examples and instructions on how to use this application:'
  },
  {
    type: 'input',
    name: 'collaborations',
    message: 'Give examples and instructions on how to contribute to the application:'
  },
  {
    
    type: 'input',
    name: 'test',
    message: 'Give examples and instructions on how to test this application:'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your sources/collaborators:'
  },
  {
    type: 'list', 
    name: 'license',
    message: 'Choose the license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache', 'ISC', 'None']//drop down list for choices of licenses.
  },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => { //will write data to fileName parameter. 
        if (err) console.log(err); // If statement incase of an error, which will be logged to the console.
        else console.log('Created README file!'); // If cleared of errors it should log 'Created README file!'.
    });
}

function init() { // Initializes application
    inquirer.prompt(questions).then((answers) => { // When prompt questions 'writeFile' is called with a 'README.md' file name. 
      writeToFile('README.md', answers);// Answers are written to the 'README.md' file.
    });
  }

init();
