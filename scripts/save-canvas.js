"use strict";

save.addEventListener("click", () => {
  createStringDict(paths).saveJSON("myDrawing");
  console.log("saved!");
});
