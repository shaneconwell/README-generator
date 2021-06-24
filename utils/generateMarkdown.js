// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
     return "https://img.shields.io/badge/license-MIT-brightgreen";
      
    case "APACHE 2.0":
      return "https://img.shields.io/badge/license-APACHE%202.0-brightgreen";
      
    case "GPL 3.0":
      return"https://img.shields.io/badge/license-GPL%203.0-brightgreen";
     
    case "BSD 3":
      return"https://img.shields.io/badge/license-BSD%203-brightgreen";
      
    default:
     return"";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {

  switch (license) {
    case 'MIT':
      return "https://opensource.org/licenses/MIT";
    
    case 'APACHE 2.0':
      return"https://opensource.org/licenses/Apache-2.0";
      
    case 'GPL 3.0':
      return"https://opensource.org/licenses/GPL-3.0";
      
    case 'BSD 3':
      return"https://opensource.org/licenses/BSD-3-Clause";
      
    default:
      console.log('');
  }

}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return "This project is licensed under the [MIT]('https://opensource.org/licenses/MIT') license.";
    
    case 'APACHE 2.0':
      return "This project is licensed under the [APACHE 2.0]('https://opensource.org/licenses/Apache-2.0') license.";
      
    case 'GPL 3.0':
      return"This project is licensed under the [GPL 3.0](https://opensource.org/licenses/GPL-3.0) license.";
    case 'BSD 3':
      return"This project is licensed under the [BSD 3](https://opensource.org/licenses/BSD-3-Clause) license.";
    case 'None':
      return "This project has no license";
    default:
      return "";
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  let badge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  let licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}  

  <a href="${licenseLink}" alt="License">
        <img src="${badge}" /></a>
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#Contributing)
  - [Tests](Test)
  - [Questions](Questions)

  ## Installation
  To install necessary dependencies, run the following command:
   \`\`\`\ md
   ${data.installation}
   \`\`\`\

  ## Usage
  ${data.usage}

  ## License
  ${licenseSection}

  ## Contributing
  ${data.contribute}

  ## Tests
  To run tests, run the following command:

  \`\`\`\ md
  ${data.test}
  \`\`\`\

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at [${data.email}](${data.email}). You can find more of my work at [${data.username}](https://github.com/${data.username}).

  `;
}

module.exports = generateMarkdown;
