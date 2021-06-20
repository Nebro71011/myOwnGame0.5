class Blocks {
  constructor(x, y) {

    var options={
      'isStatic':true
    }

    this.body = Bodies.rectangle(x, y, 50,30, options);
    this.x=x;
    this.y=y;
    
    
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("white");
    rect(this.x, this.y, 50, 30);
    pop();
    }
};

 