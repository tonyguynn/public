
var jason, santa; //these are global variables

function preload() {
  jason = loadImage("./jason.png");
  santa = loadImage("./santa.png");
  Machete = loadImage("./Machete.png");

}

function setup() {
  var canvas_context=createCanvas(1600, 1000);
  background(255,30,0,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var x=0;x<16;x++){
    for(var y=0;y<16;y++){
      if(x%2==0){
        image(jason,x*100,y*100,120,100);
      }
      else{
        image(santa,x*100,y*100,100,100);
      }
    }
  }

}

function draw(){}
function mouseClicked() {
  image(Machete,mouseX,mouseY,100,100)
}
