// var x,y;

// function setup(){
//   createCanvas(400,400);

  
// }
// function draw(){
//   background(0);
  
//   x = mouseX;
//   y = mouseY;

//   if(mouseIsPressed){
//     stroke("white");
//     strokeWeight(3);
//     line(x,y,x+100,y+100);
//     console.log("check");
//   }
// }


var x, y;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  x = mouseX;
  y = mouseY;
  stroke(255);


  if (mouseIsPressed) {
    line(x,y,pmouseX,pmouseY)
    // ellipseMode(CENTER); 
    //   fill(255); 
    //   ellipse(x,y, 10, 10)     
  }
  
}
