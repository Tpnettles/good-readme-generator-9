const inquirer = require('inquirer');
const fs = require('fs');

// Code that constructs markdown page
const generateMarkdown = (answers) =>
  
`
  # ${answers.title}

  # Table of Contents

  - [Contributing](#Requirements_of_contributions)

  - [Description](#Description)

  - [Information](#Links)

  - [Installation](#Instructions)

  - [License](#License)

  - [Usage](#Demonstrations/Examples)

  

  ## Description
  
  ${answers.description}
  
  ## Instructions
  
  ${answers.installation}
  
  ## Demonstrations/Examples
  
  ${answers.usage}
    
  ## Requirements_of_contributions
  
  ${answers.contributing}
  
  ## Testing
  
  ${answers.tests}
  
  ## Links
  
  Here is my e-mail address [${answers.email_information}].
  Here is the link to my GitHub page [https://github.com/${answers.GitHub_information}].
  
  ## License 
  
  ${renderLicenseBadge(answers.license)}
   `;



const renderLicenseBadge = (license) => {

    if(license === 'MIT'){
    
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if(license === 'Mozilla'){
      
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    else if(license === 'BSD_3'){
    
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
    else if(license === 'Apache'){
    
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    };


inquirer
  .prompt([
    /* Questions ran in node */
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the application?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Thoroughly describe your application and the functionality of it.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please list created instructions to properly run this application (separate instructions by using the * key).',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide examples, links, pictures, etc. to demonstrate the proper usage of this application.',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What are some of your requirements regarding open contributions to this application, if any?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the guidelines to successfully testing the code associated with the created application?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license will you be using?',
        choices: ['MIT','Mozilla','BSD_3', 'Apache'],
        default:'MIT'
      },
      {
        type: 'input',
        name: 'email_information',
        message: 'Please enter the your email address.',
        
      },      
      {
        type: 'input',
        name: 'GitHub_information',
        message: 'Please enter your GitHub username.',
        
      },
  ])
  .then((answers) => {
    console.log(answers)
    const readMeContent = generateMarkdown(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('README created!')
    );
  });

  module.exports = generateMarkdown;

