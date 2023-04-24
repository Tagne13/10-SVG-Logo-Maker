const Circle = require('../lib/circle.js');
const Square = require('../lib/square.js');
const Triangle = require('../lib/triangle.js');

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

module.exports = generateLogo;