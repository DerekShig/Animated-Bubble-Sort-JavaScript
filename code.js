var num = [];
var min = 0;
var iter = 20; 
var running = true;

function setup(){
  createCanvas(1000,300);
  
  frameRate(5);

  buttonPlay = createButton("Play");
  buttonPlay.position(50, 300);
  buttonPlay.mousePressed(play);
  
  buttonPause = createButton("Pause");
  buttonPause.position(100, 300);
  buttonPause.mousePressed(stop);

  for(var i = 0; i < 20; i++){
    num[i] = Math.floor(Math.random() * 20);
  }
  min = 0;
  iter = 20;
  running = true;

  noLoop();
}

function play(){
  loop();
}
function stop(){
  noLoop();
}

function draw(){
 clear();

  for(var i = 0; i < 20; i++){
        drawSqWithNum(num[i], 0, 200, 30, i*30+ 50,200);
  }
  if (min != 20 && iter >= 0){
      // Highlight the swaping items
      fill(225,0,0);
      rect(iter*30+ 50,200,30,-num[iter]*5);
      rect(iter*30 + 30+ 50,200,30,-num[iter+1]*5);
    
    }
  sort_next(num);
}

//draws a square with the number c inside it.  Assume that c is 2 digits max.
//offsetX and offsetY are positional offset from top left corner of drawarea.
//co is colour of text
//sz is size of the square
function drawSqWithNum(c, co, bg, sz, offsetX, offsetY){
  stroke(0);
  fill(bg);
  rect(offsetX,offsetY,sz,-c*5);
  stroke(co);
  fill(co);
  textAlign(CENTER);
  text(c,offsetX+0.5*sz,offsetY+(sz*0.5)+5);
}



function sort_next(arr){
  if (min==20){
    // Sorting finished, do nothing
    
  }
  if(iter==min-1){
    min++;
    iter=20;
  }
  if(arr[iter]>arr[iter+1]){
    // swap
    var temp = arr[iter];
    arr[iter]=arr[iter+1];
    arr[iter+1] = temp;
  }
  iter--;
}
