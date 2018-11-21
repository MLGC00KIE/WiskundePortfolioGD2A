const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let w = canvas.width;
let h = canvas.height;
let maxSize = 50;
let currentcolor;
var timer = 0;  
var timer2 = 0;

let A = new Point(getRandomNumber(w), getRandomNumber(h), 20, getRandomColor());
let B = new Point(getRandomNumber(w), getRandomNumber(h), 20, getRandomColor());
let C = new Point(getRandomNumber(w), getRandomNumber(h), 20, getRandomColor());

let AB = new Point(0, 0, 20, getRandomColor());
let AC = new Point(0, 0, 20, getRandomColor());
let BC = new Point(0, 0, 20, getRandomColor());

let S = new Point(0, 0, 10, getRandomColor());

let l = new LinearFunction(10, 100);
let m = new LinearFunction(10, 100);
let l3 = new LinearFunction(10, 100);

let lAB = new LinearFunction(10, 100);
let lAC = new LinearFunction(10, 100);
let lBC = new LinearFunction(10, 100);

let A2B;
let A2C;
let B2C;

A.drag();
B.drag();
C.drag();

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);

  l.letTwoPointsDefineLine(A, B, getRandomColor());
  m.letTwoPointsDefineLine(B, C, getRandomColor());
  l3.letTwoPointsDefineLine(C, A, getRandomColor());

  lAB.letTwoPointsDefineLine(A, BC, getRandomColor());
  lAC.letTwoPointsDefineLine(B, AC, getRandomColor());
  lBC.letTwoPointsDefineLine(C, AB, getRandomColor());

  l.draw(context);
  m.draw(context);
  l3.draw(context);

  lAB.draw(context);
  lAC.draw(context);
  lBC.draw(context);

  AB.x = A.getMiddle(B).x;
  AB.y = A.getMiddle(B).y;
  AC.x = A.getMiddle(C).x;
  AC.y = A.getMiddle(C).y;
  BC.x = B.getMiddle(C).x;
  BC.y = B.getMiddle(C).y;

  S.x = lAB.intersection(lAC).x;
  S.y = lAB.intersection(lAC).y;

  A.draw(context);
  B.draw(context);
  C.draw(context);
  AB.draw(context);
  AC.draw(context);
  BC.draw(context);
  S.draw(context);


  timer++;
  timer2++;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

animate();
