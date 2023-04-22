// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title of your project?',
    default: 'My Project Title'
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Please provide a brief description of your project:',
    default: 'This is a description.'
  },
  {
    type: 'input',
    name: 'TableContents',
    message: 'Will you be needing a table of contents for this README?',
    default: '1. Placeholder\n2. Placeholder\n3. Placeholder'
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Please provide installation instructions:',
    default: 'Use npm install in the integrated terminal.'
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Please provide usage information:',
    default: 'Use npm start in the integrated terminal.'
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'Please provide contribution guidelines:',
    default: 'Contributions are welcome.'
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Please provide test instructions:',
    default: 'Use npm test in the integrated terminal.'
  },
  {
    type: 'list',
    name: 'License',
    message: 'Please choose a license:',
    choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'GitHub',
    message: 'What is your GitHub username?',
    default: 'username'
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What is your email address?',
    default: 'email@example.com'
  },
];
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const template = `# ${answers.Title}\n\n## Description\n${answers.Description}\n\n## Table of Contents\n${answers.TableContents}\n\n## Installation\n${answers.Installation}\n\n## Usage\n${answers.Usage}\n\n## Contributing\n${answers.Contributing}\n\n## Tests\n${answers.Tests}\n\n## License\n${answers.License}\n\n## GitHub\nhttps://github.com/${answers.GitHub}\n\n## Questions\n Email me with any questions: ${answers.Email}`;
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