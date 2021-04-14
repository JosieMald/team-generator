
const path = require("path");
const inquirer = require('inquirer');
const fs = require("fs");
const Manager = require('./library/Manager');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
const render = require('./src/page-template');
const managerQs = require('./Questions/manager');
const engineerQs = require('./Questions/engineer');
const internQs = require('./Questions/intern');
const team = [];
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");

function runApp() {

inquirer
.prompt([ 
    {
        type: 'list',
        name: "empType",
        message: "Would you like to add an employee?",
        choices: ['Manager', 'Engineer', 'Intern', 'Build Team']
    }
]).then(answer => {
    switch(answer.empType) {
        case 'Manager':
          askManager();
          break;
        case 'Engineer':
          askEngineer();
          break;
        case 'Intern':
            askIntern();
            break;  
        default:
          buildTeam();
      }
})
};
const askManager = () => {
    inquirer.prompt(managerQs).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.manName, answers.manId, answers.manEmail, answers.manOfficeNum);
        team.push(manager);
        runApp();
    })
}
const askEngineer = () => {
    inquirer.prompt(engineerQs).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGithub);
        team.push(engineer);
        runApp();
    })
}
const askIntern = () => {
    inquirer.prompt(internQs).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.inName, answers.inId, answers.inEmail, answers.inSchool);
        team.push(intern);
        runApp();
    })
}
  
  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team), "utf-8");
  }

runApp();
