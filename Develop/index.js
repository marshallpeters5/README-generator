// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
    {
      type: 'confirm',
      name: 'tableOfContents',
      message: 'Will you be needing a table of contents for this README?',
      default: true
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions:',
      default: 'npm install'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information:',
      default: 'npm start'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines:',
      default: 'Contributions are welcome.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions:',
      default: 'npm test'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license:',
      choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-Clause', 'Unlicensed']
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
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const template = `# ${answers.title}\n\n${answers.description}\n`;
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
      console.log(`Successfully wrote ${fileName}`);
    }
  });
}
// Function call to initialize app
init();