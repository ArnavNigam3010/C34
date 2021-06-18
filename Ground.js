class Ground{
    constructor(){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(500,570,1000,60, options);
        this.width = 1000;
        this.height = 60;

        World.add(world, this.body);

    }

    display(){
        rectMode(CENTER);
        fill("blue");
        rect(this.body.position.x, this.body.position.y, 1000, 60);
        
    }
}