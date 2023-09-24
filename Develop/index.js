// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'Enter your project name here',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a descripton for your project',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your github Username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your Email',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How do you install?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data,'utf8');
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = `# ${answers.projectName}

## Description
${answers.description}

## Installation
${answers.Installation}

## Usage
- GitHub: [${answers.gitHub}](https://github.com/${answers.gitHub})

## Questions
- GitHub: [${answers.gitHub}](https://github.com/${answers.gitHub})
- Email: ${answers.Email}
`;
        writeToFile('README.md', readmeContent);
        console.log('README.md created successfully.');
    });
}

// Function call to initialize app
init();
