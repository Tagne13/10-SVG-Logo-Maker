const Shape = require("./shapes.js");

class Triangle extends Shape {

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.color}"/>
            <text fill="${this.textColor}" font-size-"75" x-"172" y-"250">${this.text}</text>
            </svg>`
    }
};