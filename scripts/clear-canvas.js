"use strict";

clear.addEventListener("click", () => {
  // Remove all the paths
  ellipsePaths.splice(0);
  strokePaths.splice(0);
  squarePaths.splice(0);
  starPaths.splice(0);

  // Clear the background
  background(255);
});
