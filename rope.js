class Rope{
    constructor(bodyA,pointB){
       
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0,
            length:500
        }
        this.pointB=pointB
        this.body=Constraint.create(options)
        World.add(world,this.body)
    }
    display(){
        
       
       var pointA=this.body.bodyA.position
       var pointB=this.pointB
       push()
       strokeWeight(2)
       fill("black")
       line(pointA.x,pointA.y,pointB.x,pointB.y)
       pop()
       
        
    }
}