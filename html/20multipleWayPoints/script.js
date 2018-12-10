const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let temp;
let Points = [];
let moveToA = false;
let distance = 1;
let waypointIndex = [1,2,3,4,5];
let moveForward = [true,true,true,true,true];
let players = [];

function setUp(){

    CreatePoint(5);


    CreatePlayer(5);

  animate();
}

function CreatePoint(number){
    for (let i = 0; i < number; i++) {
        temp = {};
        temp.pos = new Vector2d(randomNumber(canvas.width),randomNumber(canvas.height));
        temp.vel = new Vector2d(0,0);
        temp.point = new Point(temp.pos.dx,temp.pos.dy,20,"red");
        Points.push(temp);
    }
    
}

function animate(){
    
  requestAnimationFrame(animate);
  // context.clearRect(0,0,1000,1000);
  context.fillStyle = "rgba(255,255,255,0.2)";
  context.fillRect(0,0,canvas.width,canvas.height);

  DrawLines();


  DrawPoints();

  for(let i = 0; i < 5; i++) {
    if(moveForward[i]) {
        // distance = players[i].player.point.distanceToOtherPoint(Points[waypointIndex[i]].point);
        console.log(players[i].point, waypointIndex[i], i);
        players[i].vel.differenceVector(Points[waypointIndex[i]].pos,players[i].pos);
        if(players[i].point.distanceToOtherPoint(Points[waypointIndex[i]].point)<5){
            if(waypointIndex[i] >= Points.length - 1) {
                moveForward[i] = false;
                waypointIndex[i]--;
                return;
            }
            waypointIndex[i]++
        }
    } else {
        distance = players[i].point.distanceToOtherPoint(Points[waypointIndex[i]].point);
        players[i].vel.differenceVector(Points[waypointIndex[i]].pos,players[i].pos);
        if(players[i].point.distanceToOtherPoint(Points[waypointIndex[i]].point)<5){
            if(waypointIndex[i] <= 0) {
                moveForward[i] = true;
                waypointIndex[i]++;
                return
            }
            waypointIndex[i]--;
        }
    }
    console.log(waypointIndex[i]);
    

    players[i].vel.magnitude = 1/40*(distance + 1);
    players[i].vel.draw(context,players[i].pos.dx,players[i].pos.dy,20);
  }

  // player.pos.draw(context,0,0,1);
  // B.pos.draw(context,0,0,1);

}

function randomNumber(maxnumber){
    return (Math.random() * maxnumber);
}

function DrawLines() {
    for (let i = 0; i < Points.length - 1; i++) {
        context.beginPath();
        context.strokeStyle = "gray";
        context.setLineDash([6, 10]);
        context.moveTo(Points[i].pos.dx,Points[i].pos.dy);
        context.lineTo(Points[(i + 1)].pos.dx,Points[(i + 1)].pos.dy);
        context.closePath();
        context.stroke();
        context.setLineDash([0]);
    }  
}

function DrawPoints(){
    for (let i = 0; i < Points.length; i++) {
        Points[i].pos.add(Points[i].vel);
        Points[i].point.position(Points[i].pos);
        Points[i].point.draw(context);
    }  
}

function CreatePlayer(number) {
    player = {};
    player.pos = new Vector2d((Points[0].pos.dx + Points[0].pos.dx)/2,(Points[0].pos.dy + Points[0].pos.dy)/2);
    player.vel = new Vector2d(0,0);
    player.acc = new Vector2d(0,0);
    player.point = new Point(player.pos.dx,player.pos.dy,10,"yellow");
    players.push(player);
}

function DrawPlayers() {
    players[i].vel.add(player.acc);
    players[i].pos.add(player.vel);
    players[i].point.position(player.pos);
    players[i].point.draw(context);
}

setUp();
