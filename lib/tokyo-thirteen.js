var cli = module.exports;
var clivas = require('clivas');
var inquirer = require('inquirer');
var shell = require('shelljs');

cli.run = function() {
//    console.log("Welcome to Tokyo Thirteen.");
    clivas.line('{red:Welcome to Tokyo Thirteen.}');
    
    // inquirer (prompts) 
    var question = {
        type: "checkbox",
        name: "hhhh",
        message: "are you?",
        choices: [
            "hoge",
            "hage",
            "hige",
            "unko",
            "kani",
            "niku"
        ]
    };
    inquirer.prompt(question, function(answers) {
        clivas.line(answers.rawlist);
    });

    
    
};
