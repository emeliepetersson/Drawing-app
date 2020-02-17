"user strict";

const colorInput = document.getElementById("color");
const weight = document.getElementById("weight");
const clear = document.getElementById("clear");
const paths = [];
let currentPath = [];

function setup() {
  // create a canvas which is full width and height
  createCanvas(window.innerWidth, window.innerHeight);
  // Add a white background to the canvas
  background(255);
}

function mousePressed() {
  // Clean up the currentPath
  currentPath = [];

  // Push the new path inside the paths array
  paths.push(currentPath);
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
    currentPath.push(point);
  }

  // Looping over all the paths and drawing all the points inside them
  paths.forEach(path => {
    beginShape();
    path.forEach(point => {
      stroke(point.color);
      strokeWeight(point.weight);
      vertex(point.x, point.y);
    });
    endShape();
  });
}

clear.addEventListener("click", () => {
  // Remove all the paths
  paths.splice(0);

  // Clear the background
  background(255);
});

//Ellipse with width and height of 80px: ellipse(mouseX, mouseY, 80, 80);
