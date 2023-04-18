const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
// const {Circle, Triangle, Square} = require('./lib/shapes.js');

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