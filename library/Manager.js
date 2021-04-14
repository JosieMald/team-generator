const Employee =  require('./Employee.js')


class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    } 
    
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager'
    }
    renderManager() {
        return `
        <div class="card" style="width: 18rem">
            <div class="card-header">
                <h2>${this.name}</h2>
                <h3>${this.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: 1176391</li>
                  <li class="list-group-item">email@gmail.com</li>
                  <li class="list-group-item">office number</li>
                </ul>
            </div>
          </div>`
    }
}
module.exports = Manager;