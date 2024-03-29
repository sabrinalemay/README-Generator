// TODO: Create a function that returns a license badge based on which license is passed in
const inquirer = require('inquirer');

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "ISC"){
    return "(https://opensource.org/licenses/ISC)"
  } else { return "" };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== undefined){
    return "(https://opensource.org/licenses/ISC)";
  } else { return "" };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== undefined) {

  } else { return "" };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## table of contents
- [Description](#description)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contibuting)
- [Tests](#tests)
## Description
${data.description}
## License
${data.license}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Email
If you would like to contact me with questions, ideas, or ways you would improve the project please click the link below!
  My Email: [${data.email}](mailto:${data.email})
## Github
Here is my GitHub page: [https://github.com/${data.Github}](https://github.com/${data.Github})
`;
}

module.exports = generateMarkdown;
