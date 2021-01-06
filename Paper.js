class Paper{

    constructor(x,y,radius){
        var options={
            restitution:1,
            friction:0.5,
            density:1.2
            //isStatic:true
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius;
        World.add(world, this.body)
    }

    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y, 100)


    }
}