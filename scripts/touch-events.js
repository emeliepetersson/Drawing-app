"use strict";

function touchStarted() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}
