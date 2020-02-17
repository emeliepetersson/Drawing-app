"use strict";

function touchStarted() {
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

var xStart,
  yStart = 0;

document.addEventListener("touchstart", function(e) {
  xStart = e.touches[0].screenX;
  yStart = e.touches[0].screenY;
});

document.addEventListener("touchmove", function(e) {
  var xMovement = Math.abs(e.touches[0].screenX - xStart);
  var yMovement = Math.abs(e.touches[0].screenY - yStart);
  if (yMovement * 3 > xMovement) {
    e.preventDefault();
  }
});
