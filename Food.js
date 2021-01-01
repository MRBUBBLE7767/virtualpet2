class Food{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = milkBottle;
        World.add(world, this.body);
      }
      display(){
       var x = 80 , y = 100;

       imageMode(CENTRE);
       image(this.image,720,220,70,70);

       if(this.foodStock!= 0){
           for (var i = 0; i = this.foodStock;i++){
               if(i%10==0){
                   x=80;
                   y=y+50
               }
               image(this.image,x,y,50,50);
               x+x+30;
           } 
       }
      }
}