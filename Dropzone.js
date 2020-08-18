const { CENTER, FILL } = require("./p5");

class Dropzone {
constructor(x,y){
var options = {
isStatic:true
}
this.body = Bodies.rectangle(x,y,100,10,options);
this.width=100;
this.height=10;
World.add(world,this.body)
}
display(){
rectMode(CENTER);
fill("red")
}
}
