class Plinko{
    constructor(x, y, r){
        var options = {
           isStatic: true
        }
        this.r = r;
        this.x = x;
        this.y = y;
 
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
 
        push();
        fill("red");
        ellipseMode(RADIUS);
        ellipse(this.x, this.y, this.r, this.r);
        pop();
    }
 };