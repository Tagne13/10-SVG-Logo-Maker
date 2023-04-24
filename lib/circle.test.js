const Circle = require('./circle.js');

describe('Circle', () => {
    it('should return logo with user choice of text, text color, and shape color', () => {
        const circle = new Circle('JRM', 'white', 'black');
        expect(circle.render()).toEqual(`
        <svg version="1.1" 
            height="200" width="300" 
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="black"/>
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">JRM</text>
        </svg>
        `
        );
    });
});