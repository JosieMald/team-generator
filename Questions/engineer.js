const engineerQs = [
    {
        type: "input",
        name: "engName",
        message: "Engineer name?",
        validate: answer => {
            if (answer !== '') {
                return true
            } return "Engineer name is required!"
        }
    },
    {
        type: "input",
        name: "engId",
        message: "Engineer ID?",
        validate: answer => {
            if (answer !== '') {
                return true
            } return "Engineer ID is required!"
        }
    },
    {
        type: "input",
        name: "engEmail",
        message: "Engineer Email?",
        validate: answer => {
            if (answer !== '') {
                return true
            } return "Engineer Email is required!"
        }
    },
    {
        type: "input",
        name: "engGithub",
        message: "Engineer GitHub?",
        validate: answer => {
            if (answer !== '') {
                return true
            } return "Engineer Github is required!"
        }
    },
]

module.exports = engineerQs