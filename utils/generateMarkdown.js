// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // switch statement to render the badge based on the selected license
  switch (license) {
    // name of the license
    case 'MIT':
      // returns the markdown badge for the license with the link to the license
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      // If there is no license, return an empty string
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // switch statement to render the link based on the selected license
  switch (license) {
    // name of the license
    case 'MIT':
      // returns the link to the license
      return 'https://opensource.org/licenses/MIT';
      case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
      case 'GPL':
        return 'https://www.gnu.org/licenses/gpl-3.0';
        case 'BSD':
          return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      // If there is no license, return an empty string
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // switch statement to render the badge and link based on the selected license
  const licenseSection = `## License`
  switch (license) {
    // name of the license
  case 'MIT':
    // returns the  markdown section license and the link to the license
  return `${licenseSection}
  This project is licensed under the MIT license.
  To learn more about the MIT license, visit their site at ${renderLicenseLink(license)}`;
  case 'Apache':
   return `${licenseSection}
   This project is licensed under the Apache license.
  To learn more about the Apache license, visit their site at ${renderLicenseLink(license)}`;
  case 'GPL':
  return `${licenseSection}
  This project is licensed under the GPL license.
  To learn more about the GPL license, visit their site at ${renderLicenseLink(license)}`;
  case 'BSD':
  return `${licenseSection}
  This project is licensed under the BSD license.
  To learn more about the BSD license, visit their site at ${renderLicenseLink(license)}`;
  default:
    // If there is no license, return an empty string
  return '';
  };
};

// function to generate link to the user's GitHub profile
function generateGitHubUserName(username) {
  // returns the markdown link to the user's GitHub profile
  return `[${username}](https://github.com/${username})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description 
${data.description}
  ## Installation
${data.installation}
  ## Usage
${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
${data.contributing}
  ## Tests
${data.tests}
  ## Questions
Thank you so much for using my application! 
Feel free to reach out to me at ${data.email} 
or visit my GitHub profile at ${generateGitHubUserName(data.username)}

`;
}

module.exports = generateMarkdown;
