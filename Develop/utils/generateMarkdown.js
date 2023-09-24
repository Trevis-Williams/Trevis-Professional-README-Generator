// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    const LicenseBadgeUrl = `![License](url_to_license_badge)`;
    return LicenseBadgeUrl
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    const LicenseLinkUrl = `[License](url_to_license_text)`;
    return LicenseLinkUrl;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `
    ## License
    
    This project is licensed under the [${license}](url_to_license_text) license.
        `;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.projectName}

  ${licenseBadge}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.Installation}
  
  ## Usage
  - GitHub: [${data.gitHub}](https://github.com/${data.gitHub})
  
  ## License
  ${licenseSection}
  `;
  }

module.exports = generateMarkdown;

module.exports = generateMarkdown;
