const Circle = require('./lib.circle.js');

describe('Circle', () => {
    it('should return logo with user choice of shape, color, text, and text color', () => {
        const circle = new Circle('black', 'JRM', 'white');
        expect(circle.render()).toEqual(`
        <svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="250" fill="black" />
        <text fill="white" font-size-"75" x-"172" y-"250">JRM</text>
        </svg>
        `
        );
    });
});