const Shape = require("./shapes.js");

class Circle extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, color);
    };
    render() {
        return `
        <svg version="1.1" 
            height="200" width="300" 
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.color}"/>
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

module.exports = Circle;