function Point(x,y) {
	this.x = x;
	this.y = y;
	// this.toString = function() {
	// 	return `${this.x}, ${this.y}`
	// };
}

Point.prototype.toString = function() {
	return `${this.x}, ${this.y}`
}

function Side(length) {
	this.length = length
}

function Shape() {
	
}

Shape.prototype.addToPlane = function(x,y) {
	this.position = new Point(x,y)
}
Shape.prototype.move = function(x,y) {
	this.position = new Point(x,y)
}

function Circle(radius) {
	Shape.call(this);
	this.radius = radius
	// THIS DOES WORK
	// this.area = function() {
	// 	return Math.PI * `${this.radius}` **2
	// }
	// this.circumference = function() {
	// 	return Math.PI * `${this.radius}` * 2
	// }
	// this.diameter = () => {return `${this.radius}` * 2}
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle
Circle.prototype.area = function() {return Math.PI * this.radius **2}
Circle.prototype.circumference = function() {return Math.PI * this.radius * 2}
Circle.prototype.diameter = function() {return this.radius * 2}

function Polygon(sides){
	Shape.call(this);
	this.sides = sides
	this.numberOfSides = function() {
		return this.sides.length
	}
	// DOES NOT WORK
	// this.perimeter = function() {
	// 	return this.sides.reduce((a,b) => { return a + b.length}, 0)
	// }
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon
Polygon.prototype.perimeter = function() {return this.sides.reduce( (a,b) =>  {return a+b.length}, 0)}

function Quadrilateral(side1, side2, side3, side4){
	Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)])
	
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(side1, side2, side3, side4){
	Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)])
} 

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle

function Rectangle(width, height) {
	Quadrilateral.call(this, width, width, height, height);
	this.width = width;
	this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {return this.width*this.height }

function Square(length) {
	Rectangle.call(this, length, length);
	this.length = length
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square
Square.prototype.listProperties = function() {
  var properties = "";
  for (var property in this) {
    if(this.hasOwnProperty(properties)) {
      propperties += "this." + property + " = " + this[property] + "\n";
    }
  }
  return(properties);
}
