// TODO: Include packages needed for this application
//  Variable to store the inquirer package
const inquirer = require('inquirer');
//  Variable grab the generateMarkdown function from the generateMarkdown.js file
const generateMarkdown = require('./utils/generateMarkdown');
//  Variable for the fs package
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    // array of questions for user input
    return inquirer.prompt ([{ 
        // type of input from the prompt user method
        type: 'input',
        // the name of the input to be used in the generateMarkdown function
        name: 'title',
        // the message to be displayed to the user in the terminal
        message: 'What is the title of your project? '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions for your project: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage instructions for your project: '
    },
    {
        //  a type of input called list to be used in the prompt user method
        type: 'list',
        // the name of the input to be used in the generateMarkdown function
        name: 'license',
        // the message to be displayed to the user in the terminal
        message: 'Please select a license for your project',
        // the choices to be displayed to the user in the terminal
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter the instructions for contributing to your project: '
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter the instructions for testing your project or simply state not applicable: '
    }
])}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // write the data to the fileName
    fs.writeFile('./dist/README.md', data, (err) => {
        // if there is an error, throw an error
        if (err) throw err;
        // log a message to the user
        console.log('Successfully generated/wrote over README.md in the dist folder');
    });
}

// TODO: Create a function to initialize app
function init() {
    // call the promptUser function to prompt the user for input
    promptUser()
    // .then is a promise method that takes in a function as an argument in this case the generateMarkdown function
    .then(value => {
        // call the generateMarkdown function to generate the markdown as data in the writeToFile function
        const data = generateMarkdown(value);
        // call the writeToFile function to write/create the README file in the dist folder
        writeToFile('README.md', data);
  })
};

// Function call to initialize app
init();
