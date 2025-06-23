//ques1:Draw Rectangle

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 200;
canvas.height = 200;

// Draw the outer black square with a white border
ctx.fillStyle = 'white';
ctx.fillRect(10, 10, 180, 180);
ctx.strokeStyle = 'black';
ctx.lineWidth = 65;
ctx.strokeRect(10, 10, 180, 180);

// Draw the inner white square with a black border
ctx.fillStyle = 'white';
ctx.fillRect(60, 60, 80, 80);
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.strokeRect(60, 60, 80, 80);

//ques 2: Draw Circle

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 200;
canvas.height = 200;

// Draw the red circle
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = 'white';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.stroke();

//ques3:  Write a JavaScript program to draw two intersecting rectangles, one of which has alpha transparency. 
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 300;
canvas.height = 200;

// Draw the red opaque rectangle
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100); // (x, y, width, height)

// Draw the blue semi-transparent rectangle
ctx.fillStyle = 'rgba(0, 0, 255, 0.5)'; // 0.5 = 50% transparent
ctx.fillRect(100, 80, 100, 100);


//ques4: Draw right-angled triangle

var canvas = document.getElementById('myCanvas');

// Make sure the canvas exists before using it
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');

  // Start drawing a triangle
  ctx.beginPath();
  ctx.moveTo(50, 50);     // First point (top-left)
  ctx.lineTo(50, 200);    // Second point (bottom-left)
  ctx.lineTo(200, 200);   // Third point (bottom-right)
  ctx.closePath();        // Closes the triangle (back to first point)

  // Fill and stroke
  ctx.fillStyle = 'black';
  ctx.fill();

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.stroke();
}


//ques5: Write a JavaScript program to draw the following diagram [use the moveto() function].Sample output:


function draw() 
{
  var canvas = document.getElementById('canvas');
  if (canvas.getContext)
  {
    var context = canvas.getContext('2d');
    context.beginPath();
   // Outer circle
    context.arc(75,75,50,0,Math.PI*2,true);
    context.moveTo(110,75);
    // Mouth 
    context.arc(75,75,35,0,Math.PI,false); 
    // Lefy and Right eye
    context.moveTo(55,65);
    context.arc(60,65,5,0,Math.PI*2,true); 
    context.arc(90,65,5,0,Math.PI*2,true);
    context.stroke();
  }
}


//ques 6:Write a JavaScript program to draw the following diagram [diagonal, white to black circles].
function draw()
  {
  var ctx = document.getElementById("myCanvas").getContext("2d");
  var counter = 0;
  for (var i=0;i<6;i++)
  {
  for (var j=0;j<6;j++)
  {
  //Start from white and goes to black
  ctx.fillStyle = "rgb(" + Math.floor(255-42.5*i) + "," + Math.floor(255-42.5*i) +
  "," + Math.floor(255-42.5*j) + ")";
ctx.beginPath();
  if (i === counter && j === counter)
  {
  //creates the circles
  ctx.arc(25+j*50,30+i*50,20,0,Math.PI*2,true);
  ctx.fill();
  //creates a border around the circles so white one will be vissible
  ctx.stroke();
  } 
  }
  counter++;
  }
  }
  draw();
