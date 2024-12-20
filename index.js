// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    { name: 'title', message: 'What is the title of you project?' },
    { name: 'description', message: 'Enter the description of your project: ' },
    { name: 'installationInstructions', message: 'Enter the installation instructions: ' },
    { name: 'contributionGuidelines', message: 'Enter the usage information: ' },
    { name: 'usageInstructions', message: 'Enter the contribution guidelines: ' },
    { name: 'testingInstructions', message: 'Enter instructions for testing: ' },
    { name: 'license', type: 'list', message: 'Choose a license: ', choices: ['GNU AGPLv3', 'GNU GPLv3', 'Mozilla Public License 2.0', 'MIT License', 'The Unlicense'] },
    { name: 'githubUsername', message: 'Github Username: ' },
    { name: 'email', message: 'Email: ' }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err && console.log(err))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const {
            title,
            license,
            description,
            installationInstructions,
            contributionGuidelines,
            usageInstructions,
            testingInstructions,
            githubUsername,
            email } = answers;

        const readme = `
# ${title}\n
${license}\n\n 
## Table of Contents\n
- <a href="#description">Description</a>
- <a href="#installation">Installation</a>
- <a href="#contribute">Contribute</a>
- <a href="#how-to-use">How to Use</a>
- <a href="#testing-instructions">Testing Instructions</a>
- <a href="#questions">Contact and Questions</a>
## Description \n
${description}\n\n 
## Installation\n
${installationInstructions}\n
## Contribute\n
${contributionGuidelines}\n\n
## How to Use
${usageInstructions}\n\n
## Testing Instructions\n
${testingInstructions}\n\n
## Questions\n
You can send questions to the github account: ${githubUsername},
or email at ${email}`;

        writeToFile('README.md', readme)
    });
}

// Function call to initialize app
init();
