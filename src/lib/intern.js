const Intern = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    
    getRole() {
        return "Intern";
    }

    getGithub() {
        return this.github
    }

};

module.exports = Intern;