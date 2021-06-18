class Sling{
    constructor(ball, p){
        var options = {
            bodyA : ball,
            pointB : p,
            stiffness : 0.5,
            length : 350
        }
        this.body = Matter.Constraint.create(options);
        this.pointB = p;
        

        World.add(world, this.body);
    }

    display(){
        push();
        stroke("yellow");
        strokeWeight(7);
        line(this.pointB.x, this.pointB.y, this.body.bodyA.position.x, this.body.bodyA.position.y);
        pop();
        
    }
}