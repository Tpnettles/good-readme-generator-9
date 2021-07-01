
function renderLicenseBadge(license) {

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
}



function generateMarkdown(answers) {
  return   `
# ${answers.title}


## Description

${answers.description}

## Instructions

${answers.installation}

## Demonstrations/Examples

${answers.usage}
  
## Requirements of contributions

${answers.contributing}

## Testing

${answers.tests}

## Links

Here is the link to [my GitHub page](${answers.gitHub_information}).

## License 

${renderLicenseBadge(answers.license)}

` 
}

module.exports = generateMarkdown;
