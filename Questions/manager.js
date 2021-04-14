const managerQs = [
    {
        type: "input",
        name: "manName",
        message: "Manager name?",
        validate: answer => {
            if (answer !== '') {
                return true
            } return "Manager name is required!"
        }
    },{
        type: "input",
        name: "manId",
        message: "Manager ID?",
    },{
        type: "input",
        name: "manEmail",
        message: "Manager email?",
    },
    {
        type: "input",
        name: "manOfficeNum",
        message: "Manager office number?",
    },
]

module.exports = managerQs