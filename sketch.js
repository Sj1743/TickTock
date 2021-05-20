//declare variables
var hr, mn, sc;
var hourAngle, minuteAngle, secondAngle;


function setup() {

  //canvas
  createCanvas(400,400);
}


function draw() {

  //translate, rotate, set angle mode
  angleMode(DEGREES);
  translate(200,200);
  rotate(-90);

  //background
  background(0);  

  //call functions
  getTime();
  rotateHands();
  drawHands();
  drawArcs();
}


//get current hour, minute, second and store in variables
function getTime(){
  
  hr = hour();
  mn = minute();
  sc = second();
}


//set angles of hours', seconds' and minutes' hands
function rotateHands(){

  secondAngle = map(sc, 0, 60, 0, 360);
  minuteAngle = map(mn, 0, 60, 0, 360);
  hourAngle = map(hr%12, 0, 12, 0, 360);
}



//draw hours', minutes' and seconds' hands
function drawHands(){

  //draw seconds' hand
  push();
  rotate(secondAngle); 
  stroke(255,0,0);
  strokeWeight(6);
  line(0,0,100,0);
  pop();

  //draw minutes' hand
  push();
  rotate(minuteAngle);
  stroke(0,255,0);
  strokeWeight(6);
  line(0,0,75,0);
  pop();

  //draw hours' hand
  push();
  rotate(hourAngle);
  stroke(0,0,255);
  strokeWeight(6);
  line(0,0,50,0);
  pop();
}


//draw arcs for the seconds, minutes and hours around the clock
function drawArcs(){

  strokeWeight(8);
  noFill();
  //seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,secondAngle);
  //minutes
  stroke(0,255,0);
  arc(0,0,280,280,0,minuteAngle);
  //hours
  stroke(0,0,255);
  arc(0,0,260,260,0,hourAngle);
}
