"user strict";

const colorInput = document.getElementById("color");
const weight = document.getElementById("weight");
const shape = document.getElementById("shape");
const clear = document.getElementById("clear");

// Arrays to store the different paths in, based on the shape
const strokePaths = [];
const ellipsePaths = [];
const squarePaths = [];
const starPaths = [];
let currentStrokePath = [];
let currentEllipsePath = [];
let currentSquarePath = [];
let currentStarPath = [];
