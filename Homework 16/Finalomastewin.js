




var circlex=400;
var circley=100;
var circlediameter= 200;
var movement= 5;




function setup(){
  createCanvas(800,600);

}

function draw(){
  background('#008080');

fill('YELLOW')
text("Its tends to hit me all once and leave all once. I hope to find a balence someday, but for now Ill embrace the journey.", 100,300)



  createBody();
  createHead();
createArm1();
createArm2();
createCircle();
}




function createBody(){
  fill ('YELLOW');
  rect(370,490,60,110);
}



function createHead(){
  fill('YELLOW');
  circle(400,500,100);
}


function createArm1(){
  fill(0)
  line(370,560,300,500);
}

function createArm2(){
  fill(0);
    line(490,500,430,560);
}

function createCircle(){
  fill('BLACK');
  circle(circlex,circley,circlediameter);

  if(circley >=600|| circley<=0 )
  {
        movement*=-1;
  }
      circley+=movement;
}
