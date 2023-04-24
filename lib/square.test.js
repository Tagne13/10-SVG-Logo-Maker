const Square = require('./square.js');

describe('Square', () => {
    it('should return logo with user choice of text, text color, and color', () => {
        const square = new Square('JRM', 'white', 'black');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            height="200" width="300" 
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="black"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">JRM</text>
        </svg>
        `
        );
    });
});