class Player{
    constructor(x,y){
        var options={
            'friction':1,
            'density':1,
            'restitution':1,
            'isStatic':true
        }
        
        this.player=Bodies.rectangle(x,y,30,30,options);
        

        World.add(world,this.player);
    }

    display(){
        translate(this.player.position.x,this.player.position.y);
        stroke("white");
        fill("black");
        rectMode(CENTER);
        rect(0,0,30,30);
        
        if(keyIsDown(UP_ARROW)){
            this.player.position.y=this.player.position.y-10;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.player.position.y=this.player.position.y+2;
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.player.position.x=this.player.position.x+2;
        }
        if(keyIsDown(LEFT_ARROW)){
            this.player.position.x=this.player.position.x-2;
        }
    }
}