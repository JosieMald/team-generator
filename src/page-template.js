const Employee =  require('../library/Employee');
const Manager = require("../library/Manager");
const managerQs = require("../Questions/manager");
const Engineer = require('../library/Engineer');
const engineerQs = require('../Questions/engineer');
const Intern = require('../library/Intern');
const internQs = require('../Questions/intern');



 // A method for a template to render manager info

const  generateManager = managerQs => {
    return `
    <div class="card" style="width: 18rem">
    <div class="card-header">
    <h2>${managerQs.getName()}</h2>
    <h3>${managerQs.getRole()}</h3>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">${managerQs.getId()}</li>
    <li class="list-group-item">${managerQs.getEmail()}</li>
    <li class="list-group-item">${managerQs.getOfficeNumber()}</li>
    </ul>
    </div>
    </div>
    `
};

//    // A method for a template to render engineer info

const  generateEngineer = engineerQs => {
    return `
    <div class="card" style="width: 18rem">
    <div class="card-header">
    <h2>${engineerQs.getName()}</h2>
    <h3>${engineerQs.getRole()}</h3>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">${engineerQs.getId()}</li>
    <li class="list-group-item">${engineerQs.getEmail()}</li>
    <li class="list-group-item">${engineerQs.getGitHub()}</li>
    </ul>
    </div>
    </div>
    `
};

//    // A method for a template to render intern info

const  generateIntern = internQs => {
    return `
    <div class="card" style="width: 18rem">
    <div class="card-header">
    <h2>${internQs.getName()}</h2>
    <h3>${internQs.getRole()}</h3>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">${internQs.getId()}</li>
    <li class="list-group-item">${internQs.getEmail()}</li>
    <li class="list-group-item">${internQs.getSchool()}</li>
    </ul>
    </div>
    </div>
    `
};

function sortTeam(team) {
    const managerArray = team.filter(employee => employee.getRole() === 'Manager')
    .map(managerQs => generateManager(managerQs));
    console.log(managerArray);
    const engineerArray = team.filter(employee => employee.getRole() === 'Engineer')
    .map(engineerQs => generateEngineer(engineerQs));
    console.log(engineerArray);
    const internArray = team.filter(employee => employee.getRole() === 'Intern')
    .map(internQs => generateIntern(internQs));
    console.log(internArray);

}
// We are exporting out an anonymous function
module.exports = team => {
   return `
   <!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
   integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://kit.fontawesome.com/c502137733.js"></script>
   <title>Document</title>
</head>
<body>
   <div class="container-fluid">
       <div class="row">
           <div class="col-12 jumbotron mb-3 team-heading">
               <h1 class="text-center">My Team</h1>
           </div>
       </div>
   </div>
   <div class="container">
       <div class="row">
           <div class="team-area col-12 d-flex justify-content-center">
               YOUR METHOD GOES HERE THE CARDS OF MANAGER, INTERN, ENGINEER WILL BE. 
               ${sortTeam(team)}
           </div>
       </div>
   </div>
</body>
</html>
   `
}