class Food{

    constructor(){
        this.foodStock=0
        this.lastFed=0
        this.image=loadImage("Milk")
    }

        getFoodStock(){
            database.ref('Food').on("value",(data)=>{
                this.foodStock=data.val()
            })
        }

        updateFoodStock(x){
            database.ref('Food').update({
                Food:x    
            })
        }

        deductFood(){
            database.ref
        }


        display(){
          var  x=70,y=100;
            imageMode("CENTER");
            image(this.image,100,250,10,10)
            if(this.foodStock!=0){
                for(var i=0;i<this.foodStock;i++){
                    if(i%10==0){
                        x=80;
                        y=y+50;
                    }
                    image(this.image,x,y,50,50);
                    x=x+30
                }
            }



        }

}