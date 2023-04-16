const Square = require('../square.js');

describe('Square', () => {
    it('should return logo with user choice of shape, color, text, and text color', () => {
        const square = new Square('JRM', 'white', 'black');
        expect(square.render()).toEqual(`
        <svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="250" height="250" r="250" fill="black" />
        <text fill="white" font-size-"75" x-"172" y-"250">JRM</text>
        </svg>
        `
        );
    });
});