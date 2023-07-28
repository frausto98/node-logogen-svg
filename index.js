const inquirer = require('inquirer');
const fs = require('fs')
const {Circle, Triangle, Square} = require('./lib/shapes')

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "txt",
        message: "Please input THREE characters for your logo text:",
    },
    {
        type: "input",
        name: "txtColor",
        message: "Please enter a color for your logo text color:",
    },
    {
        type: "list",
        name: "shape",
        message: "What shape would you like your logo to be?",
        choices: ["square", "triangle", "circle"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a color for your shape color:",
    },
];



inquirer

    .prompt(questions)

    .then((answers) => {
    const textColorLowered = answers.txtColor.toLowerCase()
    const shapeColorLowered = answers.shapeColor.toLowerCase()

    if (answers.txt.length > 3 || answers.txt.length < 3){
        return console.log("Sorry, you entered text that was not THREE characters only. Please try again.")
    }
    if (textColorLowered === shapeColorLowered) {
        return console.log("You cannot have the same color text and background. Please try again.")
    }
    
    let chosenShape;

    if(answers.shape === 'circle'){
        chosenShape =  new Circle(answers.txt, answers.txtColor, answers.shapeColor)
    } else if (answers.shape === 'square'){
        chosenShape =  new Square(answers.txt, answers.txtColor, answers.shapeColor)
    } else if (answers.shape === 'triangle'){
        chosenShape =  new Triangle(answers.txt, answers.txtColor, answers.shapeColor)
    }
    
   
      fs.writeFile(`./dist/logo.svg`, chosenShape.render(), (err) =>
      err ? console.error(err) : console.log('SVG Logo Created!'));
  })   





