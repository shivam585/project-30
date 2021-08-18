class dustbin{

constructor(x,y,w,h){
    var options={
        isStatic:true,
        restitution:1,
       
        
        }

this.x=x
this.y=y
this.w=w
this.h=h
this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)

World.add(world,this.body)



}

display(){
    push()
stroke("black")
fill("brown")
rectMode(CENTER)
rect(this.x,this.y,this.w,this.h)
pop()




}










}