 /*.ref() is used to refer to the location of the
database. 
.on() = listener . 
.set() is used to set the value in the
database.
*/


var hypnoticBall , database;
var position;

function setup(){
   database= firebase.database();
   console.log(database);
    createCanvas(500,500);
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";
    

    var ball1 = database.ref('ball/position');
    ball1.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(position !== undefined)
    {
        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
            console.log("Hi");
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
    }
    drawSprites();
} 

function readPosition(data)
{
   var position= data.val();
   console.log(position.x);
   hypnoticBall.x = position.x;
   hypnoticBall.y=position.y;
    
}
function writePosition(x,y)
{
    database.ref('ball/position').set({
        'x' : position.x +x,
        'y' : position.y+y
    })
    
}
function showError()
{
    console.log("Error");
}