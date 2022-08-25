// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'project title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a brief description of your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How will this project be utilized?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Did anyone else assist with your project?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What is your licensing choice?.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
  ])
  .then((answers) => {
  });

// TODO: Create a function to write README file
function writeToFile(READMEmd, data) {}

// TODO: Create a function to initialize app
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('You did it!');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  
        // Ask user questions and generate responses
    
        // Write new README.md to dist directory
 

// Function call to initialize app
init();

  
 