"use strict";

save.addEventListener("click", event => {
  event.preventDefault();
  saveCanvas(canvas, "myCanvas", "jpg");
});
