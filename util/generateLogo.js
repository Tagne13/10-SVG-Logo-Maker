const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function generateLogo(response) {
    if (response.shape === 'Circle') {
        let userLogo = new Circle (response.text, response.textColor, response.shapeColor)
        return userLogo.render()
    } 
    if (response.shape === 'Square') {
        let userLogo = new Square (response.text, response.textColor, response.shapeColor)
        return userLogo.render()
    }
    if (response.shape === 'Triangle') {
        let userLogo = new Triangle (response.text, response.textColor, response.shapeColor)
        return userLogo.render()
    }
};

module.exports = generateLogo;