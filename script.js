"user strict";

const colorInput = document.getElementById("color");
const weight = document.getElementById("weight");
const shape = document.getElementById("shape");
const clear = document.getElementById("clear");

// Arrays to store the different paths in, based on the shape
const strokePaths = [];
const ellipsePaths = [];
const squarePaths = [];
const starPaths = [];
let currentStrokePath = [];
let currentEllipsePath = [];
let currentSquarePath = [];
let currentStarPath = [];

function setup() {
  // create a canvas which is full width and height
  createCanvas(window.innerWidth, window.innerHeight);
  // Add a white background to the canvas
  background(255);
}

function draw() {
  noFill();

  if (mouseIsPressed) {
    const point = {
      x: mouseX,
      y: mouseY,
      color: colorInput.value,
      weight: weight.value
    };
    // Store the location of the mouse in the currentPath array.
    switch (shape.value) {
      case "stroke":
        currentStrokePath.push(point);
        break;
      case "ellipse":
        currentEllipsePath.push(point);
        break;
      case "square":
        currentSquarePath.push(point);
        break;
      case "star":
        currentStarPath.push(point);
        break;
    }
  }

  // Looping over all the paths and drawing all the shapes inside them
  strokePaths.forEach(path => {
    beginShape();
    path.forEach(point => {
      stroke(point.color);
      strokeWeight(point.weight);
      vertex(point.x, point.y);
    });
    endShape();
  });

  ellipsePaths.forEach(path => {
    beginShape();
    path.forEach(point => {
      stroke(point.color);
      strokeWeight(point.weight);
      ellipse(point.x, point.y, 80, 80);
    });
    endShape();
  });

  squarePaths.forEach(path => {
    beginShape();
    path.forEach(point => {
      stroke(point.color);
      strokeWeight(point.weight);
      rect(point.x, point.y, 55, 55);
    });
    endShape();
  });

  starPaths.forEach(path => {
    beginShape();
    path.forEach(point => {
      stroke(point.color);
      strokeWeight(point.weight);
      star(point.x, point.y, 30, 70, 5);
    });
    endShape();
  });
}

function mousePressed() {
  // Clean up the currentPath
  currentStrokePath = [];
  currentEllipsePath = [];
  currentSquarePath = [];
  currentStarPath = [];

  // Push the new path inside the paths array
  switch (shape.value) {
    case "stroke":
      strokePaths.push(currentStrokePath);
      break;
    case "ellipse":
      ellipsePaths.push(currentEllipsePath);
      break;
    case "square":
      squarePaths.push(currentSquarePath);
      break;
    case "star":
      starPaths.push(currentStarPath);
      break;
  }
}

// create a star shape
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

clear.addEventListener("click", () => {
  // Remove all the paths
  ellipsePaths.splice(0);
  strokePaths.splice(0);

  // Clear the background
  background(255);
});

//Ellipse with width and height of 80px:  ellipse(point.x, point.y, 80, 80);
