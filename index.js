// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    { name: "title", message: "What is the title of you project?" },
    { name: "description", message: "Enter the description of your project: " },
    {
        name: "installationInstructions",
        message: "Enter the installation instructions: ",
    },
    {
        name: "contributionGuidelines",
        message: "Enter the contribution guidelines: ",
    },
    { name: "usageInstructions", message: "Enter the usage information: " },
    {
        name: "testingInstructions",
        message: "Enter instructions for testing: ",
    },
    {
        name: "license",
        type: "list",
        message: "Choose a license: ",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "Mozilla Public License 2.0",
            "MIT License",
            "The Unlicense",
        ],
    },
    { name: "githubUsername", message: "Github Username: " },
    { name: "email", message: "Email: " },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err && console.log(err));
}

function getLicenseExplanation(license) {
    switch (license) {
        case "GNU AGPLv3":
            return "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.";
        case "GNU GPLv3":
            return "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.";
        case "Mozilla Public License 2.0":
            return "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.";
        case "MIT License":
            return "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
        case "The Unlicense":
            return "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.";
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const {
            title,
            license,
            description,
            installationInstructions,
            contributionGuidelines,
            usageInstructions,
            testingInstructions,
            githubUsername,
            email,
        } = answers;

        const readme = `
# ${title}\n
${license}\n\n 
## Table of Contents\n
- <a href="#description">Description</a>
- <a href="#installation">Installation</a>
- <a href="#contribute">Contribute</a>
- <a href="#how-to-use">How to Use</a>
- <a href="#testing-instructions">Testing Instructions</a>
- <a href="#license">License</a>
- <a href="#questions">Contact and Questions</a>
## Description \n
${description}\n\n 
## Installation\n
${installationInstructions}\n
## Contribute\n
${contributionGuidelines}\n\n
## How to Use\n
${usageInstructions}\n\n
## Testing Instructions\n
${testingInstructions}\n\n
## License\n
${getLicenseExplanation(license)}
## Questions\n
You can send questions to the github account: ${githubUsername},
or email at ${email}`;

        writeToFile("README.md", readme);
    });
}

// Function call to initialize app
init();
