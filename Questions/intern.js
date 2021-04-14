const internQs = [
    {
        type: "input",
        name: "inName",
        message: "Intern name?",
        validate: answer => {
            if (answer !== '') {
                return true
            } return "Intern name is required!"
        }
    },
    {
        type: "input",
        name: "inId",
        message: "Intern ID?",
        validate: answer => {
            if (answer !== '') {
                return true
            } return "Intern ID is required!"
        }
    },
    {
        type: "input",
        name: "inEmail",
        message: "Intern Email?",
        validate: answer => {
            if (answer !== '') {
                return true
            } return "Intern Email is required!"
        }
    },
    {
        type: "input",
        name: "inSchool",
        message: "Intern School?",
        validate: answer => {
            if (answer !== '') {
                return true
            } return "Intern School is required!"
        }
    },
]

module.exports = internQs