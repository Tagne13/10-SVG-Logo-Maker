const Shape = require("./shapes.js");

class Square extends Shape {

    render() {
        return `<svg height="300" width="200" xmins="http://www.w3.org/2000/svg">
            <rect width="250" height="250" r="250" fill="${this.color}" />
            <text fill="${this.textColor}" font-size-"75" x-"172" y-"250">${this.text}</text>
            </svg>`
    }
};