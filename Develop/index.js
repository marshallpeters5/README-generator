// Included packages required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// Created an array of questions for the user's input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    default: 'My Project Title'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project:',
    default: 'This is a placeholder description.'
  },
  {
    type: 'confirm',
    name: 'tableofcontents',
    message: 'Would you like to include a table of contents for this file?',
    default: true
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions:',
    default: 'Use npm init -y and npm i inquirer in the integrated terminal.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information:',
    default: 'Use node index in the integrated terminal.'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines:',
    default: 'Meaningful contributions are welcome.'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions:',
    default: 'Testing is not yet set up for this application.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license:',
    choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-Clause', 'Unlicense']
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    default: 'username'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    default: 'email@example.com'
  },
];
// Created a function to initialize the application and write a README file
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const template = generateMarkdown(answers);
      writeToFile('README.md', template);
    })
    .catch((err) => {
      console.log(err);
    });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Successfully wrote a(n) ${fileName}`);
    }
  });
}
// Function call to initialize the application
init();