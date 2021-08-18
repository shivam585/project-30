class Bob2 extends bob{
constructor(x,y,r){

    var options={
       
        density:0.02
        
        }
    super(x,y,r,options)
    this.image=loadImage("corona22.png")



}
display(){
    
    super.display();
   

}



}