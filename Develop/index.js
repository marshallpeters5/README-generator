// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      default: 'My Project'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project:',
      default: 'This is a project.'
    },
    // Add more later
  ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
