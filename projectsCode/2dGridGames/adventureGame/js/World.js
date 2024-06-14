const WORLD_W = 50;
const WORLD_H = 50;
const WORLD_GAP = 0;
const WORLD_COLS = 16;
const WORLD_ROWS = 12;
const WORLD_TOTAL_WIDTH = WORLD_W*WORLD_COLS;
const WORLD_TOTAL_HEIGHT = WORLD_H*WORLD_ROWS;
// console.log(WORLD_TOTAL_WIDTH, ":", WORLD_TOTAL_HEIGHT);
var theArena =  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                1, 1, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
                1, 1, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0,
                1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                1, 5, 0, 2, 5, 1, 0, 0, 0, 5, 0, 0, 0, 0, 5, 5,
                1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 5, 0, 0, 0, 0,
                1, 5, 3, 3, 5, 1, 0, 0, 5, 1, 1, 0, 0, 5, 0, 0,
                1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 5, 0, 5, 0, 0,
                1, 0, 0, 0, 0, 1, 1, 0, 5, 0, 1, 0, 0, 5, 0, 0,
                1, 1, 0, 0, 5, 5, 5, 0, 1, 0, 5, 0, 0, 5, 0, 5];

var tutorial =  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 2, 0, 0, 4, 0, 5, 0, 3, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var originalWorld =  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 1, 1, 1, 1,
    1, 0, 4, 0, 4, 0, 1, 0, 0, 0, 1, 0, 1, 4, 4, 1,
    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 1, 5, 1, 1,
    1, 1, 1, 5, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 1, 1, 
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 4, 0, 1, 1,
    1, 4, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 
    1, 0, 5, 0, 5, 0, 5, 0, 3, 0, 1, 1, 1, 1, 1, 1,
    1, 2, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];

var theEnd =[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                    4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0,
                    4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    4, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0,
                    4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                    4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 
                    4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                    4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 
                    4, 3, 3, 4, 4, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0,
                    4, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 
                    4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    4, 0, 0, 0, 4, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0];

var levelList = [tutorial, originalWorld, theArena, theEnd];
var levelNow = 0;
var worldGrid = [];

const WORLD_ROAD = 0;
const WORLD_WALL = 1;
const WORLD_PLAYERSTART = 2;
const WORLD_TROPHY = 3;
const WORLD_KEY = 4;
const WORLD_DOOR = 5;
const WORLD_DOOR_OPEN = 6;

function returnTileTypeAtColRow(col, row) {
    if(col >=0 && col < WORLD_COLS && 
        row >= 0 && row < WORLD_ROWS) {
        
        var worldIndexUnderCoord = rowColtoArrayIndex(col, row);
        return worldGrid[worldIndexUnderCoord];
    } else {
        return WORLD_WALL;
    }
}

function handleStoppingWarrior(whichWarrior){
    if(whichWarrior.keyHeld_North) {
        whichWarrior.y += WALK_SPEED;
    }
    if(whichWarrior.keyHeld_South) {
        whichWarrior.y -= WALK_SPEED;
    }
    if(whichWarrior.keyHeld_West) {
        whichWarrior.x += WALK_SPEED;
    }
    if(whichWarrior.keyHeld_East) {
        whichWarrior.x -= WALK_SPEED;
    }
}

function tileTypeMove(checkTileType){
    return (checkTileType == WORLD_ROAD||
            checkTileType == WORLD_DOOR_OPEN);
}

function warriorWorldHandling(whichWarrior) {
    var warriorWorldCol = Math.floor(whichWarrior.x/ WORLD_W);
    var warriorWorldRow = Math.floor(whichWarrior.y/WORLD_H);
    if(warriorWorldCol>=0 && warriorWorldCol < WORLD_COLS && 
        warriorWorldRow >= 0 && warriorWorldRow < WORLD_ROWS){

        var tileHere = returnTileTypeAtColRow(warriorWorldCol, warriorWorldRow);
            
        if(tileHere == WORLD_TROPHY){
            console.log(whichWarrior.name + " TRIUMPHED IN THIS LEVEL!!");
            nextLevel();
            // alert(whichWarrior.name + " WINS!!"); // warrior keeps going after alert as if up key was still pressed
        } 
        else if(tileHere == WORLD_KEY) {
            whichWarrior.keysHeld++;
            // console.log(whichWarrior.keysHeld);
            // console.log(warriorWorldCol, ":", warriorWorldRow, ":", worldGrid[warriorWorldCol + WORLD_COLS*warriorWorldRow]);
            // console.log(rowColtoArrayIndex(warriorWorldCol, warriorWorldRow));
            worldGrid[rowColtoArrayIndex(warriorWorldCol, warriorWorldRow)] = WORLD_ROAD;
        }
        else if(tileHere == WORLD_DOOR) {
            if(whichWarrior.keysHeld > 0){
                worldGrid[rowColtoArrayIndex(warriorWorldCol, warriorWorldRow)] = WORLD_DOOR_OPEN;
                whichWarrior.keysHeld--;
            } else {
                handleStoppingWarrior(whichWarrior);
            }
        }
        else if(!tileTypeMove(tileHere) || 
                whichWarrior.x <= 3 || whichWarrior.x >= WORLD_TOTAL_WIDTH-(WORLD_W/3)
                || whichWarrior.y <= WORLD_H/2 || whichWarrior.y > WORLD_TOTAL_HEIGHT-(WORLD_H/3)
            ) {
            handleStoppingWarrior(whichWarrior);
        } // end of if else if goal vs road
    } // end of world row and col
} // end of warriorWorldHandling func

function rowColtoArrayIndex(col, row) {
    return col + WORLD_COLS * row;
}

function tileTypeHasTransparency(checkTileType){
    return (checkTileType == WORLD_DOOR ||
            checkTileType == WORLD_KEY ||
            checkTileType == WORLD_TROPHY ||
            checkTileType == WORLD_DOOR_OPEN);
}

function drawWorlds() {
    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    for(var eachRow = 0; eachRow < WORLD_ROWS; eachRow++){
        for(var eachCol = 0; eachCol < WORLD_COLS; eachCol++){
            var tileKindHere = worldGrid[arrayIndex];
            var useImg = worldPics[tileKindHere]; //take the value in the world map and find the image from the worldPics array we load
            if(tileTypeHasTransparency(tileKindHere)){
                canvasContext.drawImage(worldPics[0], drawTileX, drawTileY);
            }
            canvasContext.drawImage(useImg, drawTileX, drawTileY);
            drawTileX += WORLD_W
            arrayIndex++;
        } //end of for each col   
        drawTileY += WORLD_H;     
        drawTileX = 0;
    } //end of for each row
    if(levelNow == 0){
        var tutorialText = "Welcome to Escape the Lair!";
        colorText(tutorialText, 60, 100, "black", "30px arial");
        tutorialText = "Escape with the trophy by collecting keys to go through doors.";
        colorText(tutorialText, 60, 150, "black", "25px arial");
    }
} // end of drawWorlds

function drawUserStats(whichWarrior) {
    colorRect(5, 5, 100, 25, "yellow", 0.7);
    var userStatsText = "Keys: " + whichWarrior.keysHeld;
    colorText(userStatsText, 20, 23, "black", "20px serif");
}