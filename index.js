// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// An array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project:",
    name: "description",
  },

  // // this one is the multiple choise license prompt
  {
    type: "list",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    name: "license",
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation",
    default: "npm i",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "test",
    default: "npm test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribute",
  },
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

// function to initialize app

const init = () => {
  promptUser()
    .then((data) =>
      writeFileAsync("./sampleREADME/README.md", generateMarkdown(data))
    )
    .then(() => console.log("Generating README..."))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
