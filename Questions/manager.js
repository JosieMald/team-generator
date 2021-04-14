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
    },
    {
        type: "input",
        name: "manId",
        message: "Manager ID?",
        validate: answer => {
            if (answer !== '') {
                return true
            } return "Manager ID is required!"
        }
    },
    {
        type: "input",
        name: "manEmail",
        message: "Manager email?",
        validate: answer => {
            if (answer !== '') {
                return true
            } return "Manager email is required!"
        }
    },
    {
        type: "input",
        name: "manOfficeNum",
        message: "Manager office number?",
        validate: answer => {
            if (answer !== '') {
                return true
            } return "Manager office number is required!"
        }
    },
]

module.exports = managerQs