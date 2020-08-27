class Umbrella{
    constructor(x,y){
         var options =  {
             isStatic:true
         }

        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
        this.image = loadImage("man.png");
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, 450, 350);
        pop();
    }
}