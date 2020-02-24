"use strict";

function draw() {
  noFill();
  frameRate(30);

  //If the eraser is checked, make the current path the same color as the canvas
  if (mouseIsPressed && eraser.checked) {
    const point = {
      x: mouseX,
      y: mouseY,
      color: "#ffffff",
      weight: 10,
      shape: "stroke"
    };
    // Store the location of the mouse in the currentPath array and call the drawPath function
    currentPath.push(point);
    drawPath();
  } else if (mouseIsPressed) {
    const point = {
      x: mouseX,
      y: mouseY,
      color: colorInput.value,
      weight: weight.value,
      shape: shape.value
    };
    // Store the location of the mouse in the currentPath array and call the drawPath function
    currentPath.push(point);
    drawPath();
  }
}

function drawPath() {
  paths.forEach(path => {
    beginShape();
    path.forEach(point => {
      stroke(point.color);
      strokeWeight(point.weight);
      switch (point.shape) {
        case "stroke":
          vertex(point.x, point.y);
          break;
        case "ellipse":
          ellipse(point.x, point.y, 80, 80);
          break;
        case "square":
          rect(point.x, point.y, 55, 55);
          break;
        case "star":
          star(point.x, point.y, 30, 70, 5);
          break;
        default:
          break;
      }
    });
    endShape();
  });
}
