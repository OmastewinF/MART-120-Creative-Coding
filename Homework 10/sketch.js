
// Sun Varibles!
var sunx = 30;
var suny = 30;
var sundiameter = 30;
var sunmovement = 13;

//Varibles for the hands
var handy = 410;
var handdiameter = 30;
var handmovement = 7;

// Varibles for my head
var headx = 300;
var heady = 225;
var headdiameter = 125;
var headmovement = 4;

// Varibles for my "signature"
var size = 15;
var count = 0;
var sizeDirection = 1;




function setup()
{
  createCanvas (500, 600);
}
function draw ()
  {
  // This entier body of shapes makes up the self portrait of O'mastewin Foster
  background (120, 100, 220);

  textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
        text('by, omastewin foster', 50, 60);

// Sun
  fill(255, 204, 0);
  circle(sunx, suny, sundiameter);

  if(sunx >=470 || sunx<=0 )
  {
  sunmovement*=-1;
  }

  sunx+=sunmovement;

  // Feet
  fill('magenta');
   square(210, 535, 60);
   fill('magenta');
   square(310, 535, 60);

   // Legs
   fill(225, 204, 0);
   rect(320, 355, 25, 180);
   fill(225, 204, 0);
   rect(245, 355, 25, 180);

// Body
fill(0,0, 225);
rect(235, 280, 125, 180);

// Face
fill (255, 204, 0);
circle(headx, heady, headdiameter);
if(headx>= 470 || headx <= 0)
{
  headmovement*=-1;
}
headx+=headmovement;

fill('magenta');
triangle(400, 200, 135, 245, 290, 90);

//Arms
fill(20, 75, 200);
rect(220,300,20,120);
fill(20, 75, 200);
rect(350,300,20,120);

// hands
fill(255, 204, 0);
circle( 360, handy, handdiameter);
fill(255, 204, 0);
circle(230, handy, handdiameter);
if(handy >=600|| handy<=0 )
{
handmovement*=-1;
}

handy+=handmovement;

//eyes and smile
line(250, 250, 350, 250);
circle(255, 200, 20);
circle(325, 195, 20);

//eyebrows
line(225, 190, 290, 180);
line(350, 190, 300, 180);

// nose
triangle(400, 230, 290, 245, 255, 220);

// puples
point(255, 200);
point(325, 195);
}
