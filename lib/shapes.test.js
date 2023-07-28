const {Shape, Circle, Square, Triangle } = require('./shapes')

// A testing suite for Logo is created.
describe('Logo', () => {
    // A test is created to check that Text Length is in fact equal to three.
    describe('Text Length', () => {
    it('should be exactly 3 characters long', () => {
        // Arrange
        const textLength = 3;
        // Act
        const testLogoText = new Shape("cat", "red", "blue");
        const testLogoLength = testLogoText.txt
        // Assert
        expect(testLogoLength.length).toEqual(textLength);
      });
    });
    // A test is created to see if the background and text color do not match, in this case it does so the test fails.
    describe('Color Match', () => {
        it('should not have the background and text color match', () => {
            // Arrange
            
            // Act
            const testLogo = new Shape("dog", "red", "red");
            const testLogoTxtColor = testLogo.txtColor
            const testLogoBkgdColor = testLogo.shapeColor
            // Assert
            expect(testLogoTxtColor).not.toBe(testLogoBkgdColor);
          });
        });
});
// A testing suite for Shapes is created.
describe('Shapes', () => {
    // A test is created to check if the given color is going to contain said color in its return string.
    describe('Shape Color', () => {
    it('should match the shapes color to a given color', () => {
        // Arrange
        const givenColor = "orange";
        const testShape = new Triangle("cat", "teal", givenColor);
        // Act
        // Assert
        expect(testShape.render()).toContain('<polygon points="50, 148 250, 148 150, 33" fill="orange" />');
      });
    });
});