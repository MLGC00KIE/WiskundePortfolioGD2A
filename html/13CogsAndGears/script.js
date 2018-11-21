const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let cog = new Image();
cog.src = "img/cog_12_1.png";
cog.rotation = 0;

let background = new Image();
background.src = "img/metalbackground.jpg";

cog.addEventListener('load',()=>{
  animate();

})



function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(background, 0,0)
  requestAnimationFrame(animate);

  context.save();
  context.translate(1000,400);
  context.rotate(cog.rotation);
  context.drawImage(cog,-0.5*cog.width,-0.5*cog.height);
  context.restore();

  context.save();
  context.translate(750,311);
  context.rotate(-cog.rotation);
  context.drawImage(cog,-0.5*cog.width,-0.5*cog.height);
  context.restore();
  
  cog.rotation += 0.01;
}