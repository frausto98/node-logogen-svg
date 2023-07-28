class Shape {
    constructor(text, textColor, shapeColor) {
        this.txt = text;
        this.txtColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>
      
      </svg>`
    }
}

class Triangle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="50, 148 250, 148 150, 33" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>
      
      </svg>`
    }
}

class Square extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>
      
      </svg>`
    }
}



module.exports = { Shape, Circle, Triangle, Square }