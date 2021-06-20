class Ground{
    constructor(x,y,width,height){
        var option={
            'isStatic':true
        }
        this.ground=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;

        World.add(world,this.ground);
    }
    display(){
        translate(this.ground.position.x,this.ground.position.y);
        fill("brown");
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
    }
        
}