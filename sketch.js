//Create variables here
var dog,dog1 , happyDog ;
var database , foodS , foodStock ;
var lastFed ,feedTime,feedFood,addFood;
var foodObject ; 
function preload(){
  dog1 = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
  milkBottle = loadImage("Milk.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);

  dog = createSprite(250,300,150,150)
  dog.addImage(dog1);
//  foodObject = new Food(30,20,20,20);
  dog.scale = 0.15;
  feedTime = database.ref('FeedTime');
  feedTime.on("value",feedTime1);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
  feedFood= createButton('Feed Food');
  addFood= createButton('Add Food');
  feedFood.position(400, 100);
  addFood.position(700, 100);
  addFood.mousePressed(()=>{
    addFood1(foodS);
      })
  feedFood.mousePressed(()=>{
    writeStock(foodS);
    dog.addImage(happyDog);
  })
}


function draw() {  
  background(46,139,87);
 // foodObject.display();
  drawSprites();
  fill(255,255,254);
  stroke("black")
  text("Milk Bottles: "+foodS,170,200);
  textSize(13);
 // text("Note: Press Up Arrow To Feed The Dog.",130,10,300,20)
}

function readStock(data){
  foodS = data.val();
  
}
function feedTime1(data){
  lastFed = data.val();
  }

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
database.ref('/').update({
    Food:x
  })
}
function addFood1(x){
  x=x+1 ;
  database.ref('/').update({
    Food:x
  })
}
async function time(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var lastFed = datetime.slice(11,13);
  
}