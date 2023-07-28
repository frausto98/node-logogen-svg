const {Shape, Circle, Square, Triagle } = require('./shapes')

// A testing suite for Circle is created.
describe('Logo', () => {
    // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
    describe('Text Length', () => {
    it('should not be any more, nor any less than 3 characters long', () => {
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
});