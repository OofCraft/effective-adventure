class Gd{

    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.rectangle(400,100,650,50,options);
        this.width=width;
        this.height=height;
        World.add(world, this.body)
    }

    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}