// const
const CANVAS_W = window.innerWidth;
const CANVAS_H = window.innerHeight;
const canvas = document.getElementById('canvas');
canvas.width = CANVAS_W;
canvas.height = CANVAS_H;
canvas.style.backgroundColor = 'rgb(0, 0, 0)';
const CTX = canvas.getContext('2d');
CTX.font = '12px Arial';


// mouse event
let MOUSE_X;
let MOUSE_Y;
canvas.addEventListener('mousemove', e => {
  MOUSE_X = e.offsetX;
  MOUSE_Y = e.offsetY;
});