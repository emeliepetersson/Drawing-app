"user strict";

const colorInput = document.getElementById("color");
const weight = document.getElementById("weight");
const shape = document.getElementById("shape");
const clear = document.getElementById("clear");
const save = document.getElementById("save");
const eraser = document.getElementById("eraser");

const paths = [];
let currentPath = [];
let canvas;
