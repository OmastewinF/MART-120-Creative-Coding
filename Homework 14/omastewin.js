
//character varibles
var circlex=15;
var circley=15;
var circlediameter= 30;

// mouse
var enemyx = 30;
var enemyY = 30;

var mouseEnemyX;
var mouseEnemyY;

// enemys shapes
var myXs=[];
var myYs=[];
var myDiameters=[];
var myMovements= 10;

var myX2s={};
var myY2s=[];
var myDiameter2s=[];
var myMovement2s = 5;


var myXsSpeed=6;
var myX2Speed=10;




function setup(){
  createCanvas(800,600);
  // enemys
        myXs[0] = 3;
        myYs[0] = 100;
        myDiameters[0] = 50;

        myXs[1] = 3;
        myYs[1] = 200;
        myDiameters[1] = 50;


        myXs[2] = 3;
        myYs[2] = 300;
        myDiameters[2] = 30;


        myX2s[0] = 3;
        myY2s[0] = 400;
        myDiameter2s[0] = 50;


        myX2s[1] = 3;
        myY2s[1] = 500;
        myDiameter2s[1] = 50;


}

function draw(){
  background('BLUE');

  //text
  textSize(10);
  text("EXIT",770, 550);



  // functions

  createCharacter();
  enemyCreation();
  enemycreation2();
  charactermovement();
  createmouse();
  createexit();
  createcelebration();
}


// character
function createCharacter(){
  fill("BLACK");
  circle(circlex, circley, circlediameter);
}

// character movement
function charactermovement(){
  if (circlex>=800){
    circlex= 5;
  }

  if(keyIsDown(68)){
    circlex += 5;
  } else if(keyIsDown(65)){
    circlex -= 5;
  }

  if(keyIsDown(83)){
    circley += 5;
  }else if(keyIsDown(87)){
    circley -= 5;
  }

  if(circley>=600){
    circley=5;
  }

  if (circlediameter>=100){
    circlediamenter=1;
  }else if(circlediameter>=100){
    circlediameter=1;
    }
}


// funtions for the enemy on the mouse
function createmouse(){
  fill('magenta');
  circle(mouseEnemyX, mouseEnemyY, 25);
}

function mouseClicked(){
  mouseEnemyX= mouseX;
  mouseEnemyY= mouseY;
}



// enemy
function enemyCreation (){
  fill('WHITE')
    circle(myXs[0],myYs[0], myDiameters[0]);
    circle(myXs[1],myYs[1], myDiameters[1]);
    circle(myXs[2],myYs[2], myDiameters[2]);
    for(var i = 0; i < myXs.length; i++){
      myXs[i] += myXsSpeed;
    if (myXs[i] > width) {
            myXs[i] = 0;
        }
        if (myXs[i] < 0) {
            myXs[i] = width;
        }
}
}

function enemycreation2(){
  fill ('WHITE')
  circle(myX2s[0],myY2s[0], myDiameter2s[0]);
  circle(myX2s[1],myY2s[1], myDiameter2s[1]);

for(var i = 0; i < myXs.length; i++){
  myX2s[i] += myX2Speed;
  if (myX2s[i] > width) {
          myX2s[i] = 0;
      }
      if (myX2s[i] < 0) {
          myX2s[i] = width;
      }
}
}


// exit notifitcation
function createexit(){
    fill(255, 204, 0)
   ellipse(780, 590, 60,60);

}

function createcelebration(){

  if(circlex> 750 && circley>580){
    fill(0);
    textSize(30);
    text("YOU WIN! You kicked some ass!", 250,250);
  }
