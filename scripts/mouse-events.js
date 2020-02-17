"user strict";

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

clear.addEventListener("click", () => {
  // Remove all the paths
  ellipsePaths.splice(0);
  strokePaths.splice(0);
  squarePaths.splice(0);
  starPaths.splice(0);

  // Clear the background
  background(255);
});

//Ellipse with width and height of 80px:  ellipse(point.x, point.y, 80, 80);
