class Paper
{
    constructor(xpos,ypos,radius)
    {
       var body_options = {isStatic: false, restitution: 0.3, friction: 0.5, density: 1.2}
       this.body = Bodies.circle(xpos,ypos,radius,body_options)
       this.radius = radius;
       
       World.add(world, this.body);
    }

    display()
    {
      var position = this.body.position;

      ellipseMode(RADIUS);
      ellipse(position.x,position.y,this.radius);
    }
}