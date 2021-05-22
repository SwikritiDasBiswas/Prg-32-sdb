const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;
function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(950,700);
    engine = Engine.create();
    world = engine.world;
    
}

function draw(){

    // add condition to check if any background image is there to add
       if(backgroundImg)
       background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here
    
    textSize(30)
    if(hour>=12){
        text("Time: "+hour%12+ " PM",100,200)
    }
    else if(hour === 0){
        text("Time: 12 AM",100,200)
    }
    else {
        text("Time: "+hour % 12+ " AM",100,200)
    }
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJSON = await response.json(); 

    // write code slice the datetime
    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=6){
        bg = "sunrise1.png"
    }
    else if(hour>=6 && hour<=7){
        bg = "sunrise2.png"
    }
    else if(hour>=7 && hour<=9){
        bg = "sunrise3.png"
    }
    else if(hour>=9 && hour<=10){
        bg = "sunrise4.png"
    }
    else if(hour>=10 && hour<=11){
        bg = "sunrise5.png"
    }
    else if(hour>=11 && hour<=12){
        bg = "sunrise6.png"
    }
    else if(hour>=12 && hour<=14){
        bg = "sunset7.png"
    }
    else if(hour>=14 && hour<=18){
        bg = "sunset8.png"
    }
    else if(hour>=18 && hour<=21){
        bg = "sunset9.png"
    }
    else if(hour>=21 && hour<=22){
        bg = "sunset10.png"
    }
    else if(hour>=22 && hour<=23){
        bg = "sunset11.png"
    }
    else {
        bg = "sunset12.png"
    }
    //load the image in backgroundImg variable here
           backgroundImg =  loadImage(bg)
}
