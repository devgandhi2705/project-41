class Drops{
    constructor(x,y){
        var options =  {
            isStatic:false,
            friction:0.1
        }
        this.x  = x;
        this.y = y;
        this.body = Bodies.circle(x,y,10);
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("DarkBlue");
        ellipse(this.x, this.y, 7, 10);
        pop();
    }


    update(){
       if(this.body.position.y > height){
           Matter.Body.setPosition(this.body,{x:random(0,width-30),y:random(0,100)});
       }
    }
}