class Ball{
    constructor(x,y){
        var options = {
            restitution : 0.6,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,50, options);
        this.width = 50;
        this.height = 50;

        World.add(world, this.body);
    }

    display(){
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(this.body.position.x, this.body.position.y, 50, 50);

    }
}