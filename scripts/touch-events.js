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

function noScroll() {
  window.scrollTo(0, 0);
}

// add listener to disable scroll
window.addEventListener("scroll", noScroll);
