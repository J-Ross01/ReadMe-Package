function renderLicenseBadge(license) { // Function to create license badge with shields.io service.
  if (!license) return ''; // If no license is provided, return an empty string.
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;// Return a Markdown-formatted string to a badge image for the license. 
}

function renderLicenseLink(license) { //Function to create license link to the official page of the provided license.
  if (!license) return ''; // If no license is provided, return an empty string.
  return `[License](https://opensource.org/licenses/${license})`;
}

function renderLicenseSection(license) { // Function to create license section in README.md file.
  if (!license) return '';// If no license is provided, return an empty string.
  return `## License\nThis project is licensed under the ${license} license. ${renderLicenseLink(license)}`; // A markdown-formatted string containing the license name and a link to its page.
}

function generateMarkdown(data) { // Function that generates the Markdown content for the README.
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [How to Contribute](#contributing)
  - [Tests](#tests)

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ${renderLicenseSection(data.license)}
  
  ## Badges
  ${renderLicenseBadge(data.license)}
  
  ## Features
  ${data.features}
  
  ## How to Contribute
  ${data.contributing}
  
  ## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
