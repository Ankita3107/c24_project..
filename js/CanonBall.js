class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.body = Bodies.rectangle(x,y,70,70);
    this.width = 70;
    this.height = 70;
    this.image = loadImage("assets,cannonBall.png");
    World.add(world,this.body);
  };

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,70,70);
    pop();
  };
};
