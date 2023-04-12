const Triangle = require('../triangle.js');

describe('Triangle', () => {
    it('should return logo with user choice of shape, color, text, and text color', () => {
        const triangle = new Triangle('black', 'JRM', 'white');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="black" />
        <text fill="white" font-size-"75" x-"172" y-"250">JRM</text>
        </svg>
        `
        );
    });
});