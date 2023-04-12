const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./util/generateLogo');
const { wrap } = require('module');

const questions = [
    {
        type: 'input',
        message: 'Please type in a character set of up to 3 characters.',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What color would you like the text to be?',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'What shape would you like the SVG to be?',
        name: 'shape',
        choices: [
            'Triangle',
            'Square',
            'Circle'
        ]
    },
    {
        type: 'input',
        message: 'What color would you like the SVG shape to be?',
        name: 'shapeColor'
    },
];

function writeToFile(fileName, data) {
    let content = generateLogo(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error);
        } else {
            return console.log('Generated logo.svg!');
        }
    });
}

function init() {
    inquirer.prompt(questions).then(function (data) {
        let fileName = "logo.svg";
        writeToFile(fileName, data);
    });
}

init();

