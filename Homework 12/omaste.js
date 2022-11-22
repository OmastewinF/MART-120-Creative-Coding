var bigsqaurey=440;
var bigsqaurediamenter= 90;
var bigsqauremovement = 11;

var bigsqaurey2=440;
var bigsqauremovement2=4;

var circlex=50;
var circley=50;
var circlediamenter= 40;

var littlesqaurey = 440;
var littlesqauremovement = 5;

// varibles for keys
var s = 87;
var w = 83;
var a = 65;
var d = 68;

var enemyx = 30;
var enemyY = 30;

var mouseEnemyX;
var mouseEnemyY;

function setup()
{
  createCanvas(1350, 500);
}

function draw ()
{
  background (120, 100, 220);
  // text for exit
  textSize(26);
  text("Exit",1275, 285)



createbox();
createexit();
createcharacter();
charactermovement();
createborder();
createcelebration();
createmouse();
obsitcals();
}





// floor boxes
function createbox(){
  fill('magenta');
   square(100, littlesqaurey, 60);
   fill('magenta');
   square(600, littlesqaurey, 60);
   fill('magenta')
   square(1150, littlesqaurey, 60);
   if(littlesqaurey >=600|| bigsqaurey<=0 )
   {
   littlesqauremovement*=-1;
   }
 littlesqaurey+=littlesqauremovement;

}

// exit notifitcation
function createexit(){
    fill(255, 204, 0)
   ellipse(1300, 350, 60,100);

}

// creation of character
function createcharacter(){
  fill(0);
  circle(circlex, circley, circlediamenter);
}

// functions for the character movement
function charactermovement(){
  if (circlex>=1350){
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

  if(circley>=500){
    circley=5;
  }

  if (circlediamenter>=100){
    circlediamenter=1;
  }else if(circlediamenter>=100){
    circlediamenter=1;
    }
}

// borders
function createborder(){
  // leftside
    rect(0,0,10,600);
    //bottom
    rect(0,490,1350, 25);
    // top,
    rect (0,0,1350, 10);
    // rightside
    rect(1340,0,10,600);
}

// function for the celebration results
function createcelebration(){

  if(circlex>1290 && circley>300){
    fill(0);
    textSize(35);
    text("YOU WIN! Wahoo wahoo", 500,250);
}
}

// funtions for the mouse
function createmouse(){
  fill('magenta');
  circle(mouseEnemyX, mouseEnemyY, 25);
}

function mouseClicked(){
  mouseEnemyX= mouseX;
  mouseEnemyY= mouseY;
}

function obsitcals(){
  fill(0);
  square(350, bigsqaurey, bigsqaurediamenter);
  fill(0);
  square (850, bigsqaurey2, bigsqaurediamenter);
  if(bigsqaurey >=600|| bigsqaurey<=0 )
  {
  bigsqauremovement*=-1;
  }
bigsqaurey+=bigsqauremovement;
  if(bigsqaurey2 >=600|| bigsqaurey2<=0 )
  {
  bigsqauremovement2*=-1;
  }
  bigsqaurey2+=bigsqauremovement2;
}
