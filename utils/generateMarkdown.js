// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  switch (license) {
    case "mit":
      console.log("https://img.shields.io/badge/license-MIT-brightgreen");
      break;
    case "apache":
      console.log(
        "https://img.shields.io/badge/license-APACHE%202.0-brightgreen"
      );
      break;
    case "gpl":
      console.log("https://img.shields.io/badge/license-GPL%203.0-brightgreen");
      break;
    case "bsd":
      console.log("https://img.shields.io/badge/license-BSD%203-brightgreen");
      break;
    default:
      console.log("none");
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'mit':
      console.log("https://opensource.org/licenses/MIT");
      break;
    case 'apache':
      console.log("https://opensource.org/licenses/Apache-2.0");
      break;
    case 'gpl':
      console.log("https://opensource.org/licenses/GPL-3.0");
      break;
    case 'bsd':
      console.log("https://opensource.org/licenses/BSD-3-Clause");
      break;
    default:
      console.log('none');
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title 

  ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  To install necessary dependencies, run the following command:

  // come back to this

  \```md\  
  ${data.installation}
  \```\

  ## Usage
  ${data.usage}

  ##License
  This project is licesed under the ${data.license} license.

  ##Contributing
  ${data.contribute}

  ##Tests
  To run tests, run the following command:

  // come back to this
  md  
  ${data.test}

  ##Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.username}.

  `;
  }



  renderLicenseBadge(process.argv[2]);
  renderLicenseLink(process.argv[2]);
// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );


module.exports = generateMarkdown;
