const Triangle = require('./triangle.js');

describe('Triangle', () => {
    it('should return logo with user choice of text, text color, and color', () => {
        const triangle = new Triangle('JRM', 'white', 'black');
        expect(triangle.render()).toEqual(`
        <svg version="1.1"
            height="200" width="300" 
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="black"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="white">JRM</text>
        </svg>
        `
        );
    });
});