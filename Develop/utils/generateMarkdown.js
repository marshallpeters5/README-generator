// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  let badge = '';

  switch (license) {
    case 'MIT':
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'GPLv2':
      badge = '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)';
      break;
    case 'Apache':
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      break;
    case 'GPLv3':
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'BSD 3-Clause':
      badge = '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
      break;
    case 'Unlicense':
      badge = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
      break;
    default:
      badge = '';
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  let link = '';

  switch (license) {
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'GPLv2':
      link = 'https://www.gnu.org/licenses/gpl-2.0';
      break;
    case 'Apache':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPLv3':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'BSD 3-Clause':
      link = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'Unlicense':
      link = 'http://unlicense.org/';
      break;
    default:
      link = '';
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const licenseLink = renderLicenseLink(license);
  const licenseBadge = renderLicenseBadge(license);

  return `## License

${licenseBadge}

This project is licensed under the ${license} License. See the [${license}](${licenseLink}) file for details.`;
}

// Desperately trying to get this to take me to the desired location on the README using HTML anchor tags.
function renderTableOfContents(data) {
  const sections = ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'];
  let tableOfContents = '';

  sections.forEach((section) => {
    if (data[section.toLowerCase()]) {
      tableOfContents += `- [${section}](#${section.toLowerCase().replace(/ /g, '-')}-)\n`;
    }
  });

  if (tableOfContents) {
    tableOfContents = `## Table of Contents\n\n${tableOfContents}\n`;
  }

  return tableOfContents;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

${renderTableOfContents(data)}

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

If you have any questions, please contact me at ${data.email}. You can also find more of my work at [${data.github}](https://github.com/${data.github}/).`;
}

module.exports = generateMarkdown;