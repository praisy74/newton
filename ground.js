class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            friction:0.2,
            density:0.5,
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=650;
        this.h=50;
        World.add(world,this.body)
    }
    display(){
        fill("grey")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}