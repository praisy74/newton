class Bob
{
    constructor(x,y){
        this.radius=50
        var options={
           
            friction:0.1,
            density:0.2
        }
    this.bub=Bodies.circle(x,y,this.radius,options);
    this.image=loadImage("Picture1a.png")
    World.add(world,this.bub)


    }
    display(){
       
  
       push()
       fill(255,0,255);
       ellipseMode(RADIUS)
       ellipse(this.bub.position.x,this.bub.position.y,50,50)
     imageMode(CENTER);
     image(this.image,this.bub.position.x,this.bub.position.y-7,217,156)
      
       pop();
       
    }
}