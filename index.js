const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./util/generateLogo.js');
const fileName = "./samples/logo.svg";
const { wrap } = require('module');
// const {Circle, Triangle, Square} = require('./lib/shapes.js');

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

function createSVG(response) {
    const svg = generateLogo(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg!')); 
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        createSVG(response);
        })
    .catch(err => {
        console.log(err)
    });
}

init();