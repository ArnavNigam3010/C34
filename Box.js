class Box{
    constructor(x,y){
        var options = {
            restitution : 0.6,
            friction : 0.00000005,
            density : 1.2
        }
        this.body = Bodies.rectangle(x,y,75,75, options);
        this.width = 75;
        this.height = 75;
        this.body.position.x = x;
        this.body.position.y = y;

        World.add(world, this.body)
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        
        rectMode(CENTER);
        fill("green");
        stroke("white");
        strokeWeight(2);
        rect(0,0, 75, 75);
        pop();
    }
}