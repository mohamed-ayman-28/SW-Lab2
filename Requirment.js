/*IMPORTANT NOTES
1- you are using JS Name Casing (CamelCasing)
2- make this code as clean as possible 
3- apply all the concepts you learned during this lab (Naming, comments,  functions)
*/

class Point {
  constructor(coordinateX, coordinateY) {
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
  }
}

class Rectangle {
  constructor(startingPoint, width , height) {
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid Width and Height");
    }
    this.startingPoint = startingPoint;
    this.width = width; 
    this.height = height; 
  }

  // ***************
  // METHODS
  // ***************

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return (2 * this.width) + (2 * this.height);
  }


  setHeight(height) {
    this.height = (height && height > 0)?height:0;
  }

  setWidth(width) {
    this.width = (width && width > 0)?width:0;
  }

  setStartingPoint(startingPoint) {
    this.startingPoint = (startingPoint && (startingPoint.coordinateX > 0 && startingPoint.coordinateY > 0) )?startingPoint:{x : 0, y: 0};
  }

  setAllAttributes({ startingPoint, width, height }) {
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid Width and Height"); 
    }
    this.startingPoint = startingPoint;
    this.width = width;
    this.height = height;
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }

  printEndPoints() {
    const topRight = this.startingPoint.coordinateX + this.width;
    const bottomLeft = this.startingPoint.coordinateY + this.height;
    console.log("End Point X-Axis (Top Right): " + topRight);
    console.log("End Point Y-Axis (Bottom Left): " + bottomLeft);
  }

  printArea(){
    console.log("Area : ", this.getArea());
  }

  printPerimeter(){
    console.log("Perimeter : ", this.getPerimeter());
  }

}

function buildRectangle(width, height, coordinateX, coordinateY) {
  const topLeft = new Point(coordinateX, coordinateY);
  const rectangle = new Rectangle(topLeft, width, height);
  return rectangle;
}

function buildSquare(length, cordinateX, coordinateY) {
  return buildRectangle(length,length, cordinateX, coordinateY);
}

const rectangle = buildRectangle(2, 5, 3, 4);
const square = buildSquare(5, 1, 2);

square.printArea();
square.printPerimeter();
square.printEndPoints();

rectangle.setHeight(3);
