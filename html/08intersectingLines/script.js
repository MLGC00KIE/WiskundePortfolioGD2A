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

let A = new Point(getRandomNumber(w),getRandomNumber(h),20,getRandomColor());
let B = new Point(getRandomNumber(w),getRandomNumber(h),20,getRandomColor());
let C = new Point(getRandomNumber(w),getRandomNumber(h),20,getRandomColor());
let D = new Point(getRandomNumber(w),getRandomNumber(h),20,getRandomColor());

let S = new Point(0,0,10,getRandomColor());

let l = new LinearFunction(10,100);
let m = new LinearFunction(10,100);

A.drag();
B.drag();
C.drag();
D.drag();

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
 
  l.letTwoPointsDefineLine(A,B,currentcolor);
  m.letTwoPointsDefineLine(C,D,currentcolor);

  l.draw(context);
  m.draw(context);

  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;


  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  S.draw(context);


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
