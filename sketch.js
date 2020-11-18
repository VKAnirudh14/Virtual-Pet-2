var Dog;
var HappyDog;
var database;
var foods;
var foodStock;
var DogImg;
var HappyDogImg;
var db;
var FeedFood,AddFood;
var fedTime,lastFed;
var foodObj;

function preload()
{
  DogImg = loadImage("Dog.png");
  HappyDogImg = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);

  FeedFood = createButton("Feed the Dog");
  FeedFood.position(700,95);
  FeedFood.mousePressed(feedDog);

  AddFood=createButton("Add Food");
  AddFood.position(800,95);
  AddFood.mousePressed(AddFood)

  foodObj = new Food();
  
  database = firebase.database();
  Dog=createSprite(250,250);
  Dog.scale=0.1;
  Dog.addImage(DogImg)

  foodStock=database.ref("Food")
    foodStock.on("value",readStock)


}


function draw() {  

  background("green");

 

    foodObj.display();

    fedTTime =  database.ref('FeedTime')
    fedTime.on("value",function(data){
    lastFed=data.val();
});
  

  drawSprites();
  textSize(25);
  text("Note:Press Up_Arrowto feed Doggo Milk",100,100);

  if(lastFed>=12){
    text("Last Feed :"+lastFed%12 + "PM",350,30);
  }
  else if(lastFed==0){
    text("Last Feed :12 AM",35,30);
  }else{
    text("Last Feed : "+lastFed + 'AM',350,30);

    }
  }



  function readStock(data){
    foods=data.val();
  }

  function writeStock(x){

    if(x<=0){
      x=0;
    }else{
      x=x-1;
    }
    database.ref('/').update({
      Food:x
    });
  }

  function AddFood(){



    foodObj.updateFoodStock(foodObj.getFoodStock()+1);
    database.ref('/').update({
      Food:foodObj.getFoodStock(),
      fedTime:hour()

    })


  }
  function feedDog(){

  

    foodObj.updateFoodStock(foodObj .getFoodStock()-1);
    database.ref('/').update({
      Food:foodObj.getFoodStock(),
      fedTime:hour()
      
    })

  }