const {Shape, Circle, Square, Triagle } = require('./shapes')

// A testing suite for Circle is created.
describe('Logo', () => {
    // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
    describe('Text Length', () => {
    it('should be exactly 3 characters long', () => {
        // Arrange
        const textLength = 3;
        // Act
        const testLogoText = new Shape("cat", "red", "blue");
        const testLogoLength = testLogoText.txt
        // Assert
        // expect(arithmetic.modulus(2, 2)).toEqual(total);
        expect(testLogoLength.length).toEqual(textLength);
      });
    });
    describe('Color Match', () => {
        it('should not have the background and text color match', () => {
            // Arrange
            
            // Act
            const testLogo = new Shape("dog", "red", "red");
            const testLogoTxtColor = testLogo.txtColor
            const testLogoBkgdColor = testLogo.shapeColor
            // Assert
            // expect(arithmetic.modulus(2, 2)).toEqual(total);
            expect(testLogoTxtColor).not.toBe(testLogoBkgdColor);
          });
        });
});