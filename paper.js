class Paper{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.r=radius;
        this.image=loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image( this.image,0, 0, this.r*3,this.r*3);
        pop();
      }
}