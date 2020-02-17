"user strict";

const colorInput = document.getElementById("color");
const weight = document.getElementById("weight");
const shape = document.getElementById("shape");
const clear = document.getElementById("clear");
const strokePaths = [];
const ellipsePaths = [];
let currentStrokePath = [];
let currentEllipsePath = [];

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
    }
  }

  // Looping over all the paths and drawing all the points inside them
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
}

function mousePressed() {
  // Clean up the currentPath
  currentStrokePath = [];
  currentEllipsePath = [];

  // Push the new path inside the paths array
  switch (shape.value) {
    case "stroke":
      strokePaths.push(currentStrokePath);
      break;
    case "ellipse":
      ellipsePaths.push(currentEllipsePath);
      break;
  }
}

clear.addEventListener("click", () => {
  // Remove all the paths
  paths.splice(0);

  // Clear the background
  background(255);
});

//Ellipse with width and height of 80px:  ellipse(point.x, point.y, 80, 80);
