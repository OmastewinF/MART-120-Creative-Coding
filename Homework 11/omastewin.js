
// Varibles for the obsitcals
var bigsqaurey=440;
var bigsqaurediamenter= 90;
var bigsqauremovement = 9;

var circlex=50;
var circley=50;
var circlediamenter= 40;

// varibles for keys
var s = 87;
var w = 83;
var a = 65;
var d = 68;

var enemyX; 30
var enemyY; 30

var mouseEnemyX;
var mouseEnemyY;
// opening canvas function
function setup()
{
  createCanvas(1350, 500);
}

function draw ()
{
  background (120, 100, 220);

// text for exit
textSize(26);
text("Exit",1275, 40)

// Blocks on the background
  fill('magenta');
   square(100, 440, 60);
   fill('magenta');
   square(600, 440, 60);
   fill('magenta')
   square(1150, 440, 60);
   fill(0)
   ellipse(1300, 225, 60,350);

// big squares moving
   fill(0);
   square(350, bigsqaurey, bigsqaurediamenter);
   fill(0);
   square (850, bigsqaurey, bigsqaurediamenter);
   if(bigsqaurey >=600|| bigsqaurey<=0 )
   {
   bigsqauremovement*=-1;
   }

   bigsqaurey+=bigsqauremovement;

//character and its functions to movement
fill(0);
circle(circlex, circley, circlediamenter);

circlex+=10;
circley+=3;
circlediamenter+=8;

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



// final text
  if(circlex>1300 && circley>200){
    fill(0);
    textSize(35);
    text("YOU WIN! Wahoo wahoo", 500,250);
    i++;
  }

fill('magenta');
circle(mouseEnemyX, mouseEnemyY, 10);
}
  function mouseClicked()
{
  mouseEnemyX= enemyX;
  mouseEnemyY= enemyY;
}
