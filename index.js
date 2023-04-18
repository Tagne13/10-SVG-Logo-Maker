const inquirer = require('inquirer');
const fs = require('fs');
// const generateLogo = require('./util/generateLogo.js');
const { wrap } = require('module');
const {Circle, Triangle, Square} = require('./lib/shapes.js');

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
        name: 'color'
    },
];
var generateLogo = ("");

function generateLogo(response) {
    if (response.shape === 'Circle') {
        let userLogo = new Circle (response.text, response.textColor, response.color)
        return userLogo.render()
    } 
    if (response.shape === 'Square') {
        let userLogo = new Square (response.text, response.textColor, response.color)
        return userLogo.render()
    }
    if (response.shape === 'Triangle') {
        let userLogo = new Triangle (response.text, response.textColor, response.color)
        return userLogo.render()
    }
};

function writeToFile(fileName, response) {
    let content = generateLogo(response);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error);
        } else {
            return console.log('Generated logo.svg!');
        }
    });
}

function init() {
    inquirer.prompt(questions).then(function (response) {
        let fileName = "./samples/logo.svg";
        writeToFile(fileName, response);
    });
}

init();

// module.exports = generateLogo;