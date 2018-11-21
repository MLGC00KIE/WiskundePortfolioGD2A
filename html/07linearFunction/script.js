const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;
let w = canvas.width;
let h = canvas.height;
let maxSize = 50;
let currentcolor;
var timer = 0;
var timer2 = 0;

let A = new Point(getRandomNumber(w),getRandomNumber(h),getRandomNumber(maxSize),getRandomColor());
let B = new Point(getRandomNumber(w),getRandomNumber(h),getRandomNumber(maxSize),getRandomColor());
let C = new Point(getRandomNumber(w),getRandomNumber(h),getRandomNumber(maxSize),getRandomColor());

let f = new LinearFunction(10,100);
let f2 = new LinearFunction(10,100);
let f3 = new LinearFunction(10,100);

A.drag();
B.drag();
C.drag();

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  if (timer >= 0) {
    currentcolor = getRandomColor();
      if(timer2 >= 0) {
        canvas.style.backgroundColor = getRandomColor();
        timer2 = 0;
      }
    timer = 0;
    
  }
 
  f.letTwoPointsDefineLine(A,B,currentcolor);
  f2.letTwoPointsDefineLine(B,C,currentcolor);
  f3.letTwoPointsDefineLine(C,A,currentcolor);

  f.draw(context);
  f2.draw(context);
  f3.draw(context);


  A.draw(context);
  B.draw(context);
  C.draw(context);

  timer++;
  timer2++;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  // return colors[Math.floor(Math.random() * colors.length)]
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

animate();
