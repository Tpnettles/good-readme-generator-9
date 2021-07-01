const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./assets/generateMarkdown');


inquirer
  .prompt([
    /* Questions */
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the application that is associated with this README?',
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
        name: 'gitHub_information',
        message: 'What is your GitHub username?',
      },


  ])
  .then((answers) => {
    console.log(answers)
    const readMeContent = generateMarkdown(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('README created!')
    );
  });
