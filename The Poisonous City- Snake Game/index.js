let inputDir = {x: 0, y:0};
let foodSound = new Audio('food.mp3');
let gameOverSound = new Audio('gameover.mp3');
let moveSound = new Audio('move.mp3');
let musicSound = new Audio('music.mp3');
let speed = 7;
let score = 0;
let lastPaintTime = 0;
let snakeArray = [
    {x: 13, y :15}
]
 food =  {x: 7, y: 8};

//Game Function
function main(ctime){
    window.requestAnimationFrame(main);
   // console.log(ctime);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
    
}
function iscollide(snake){
   for( let i = 1; i< snakeArray.length;i++){
    if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
        return true;
    }}
    if(snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0){
        return true;
    }
   
}
function gameEngine(){
    //PART 1
    if(iscollide(snakeArray)){
        gameOverSound.play();
        inputDir = {x:0, y:0};
        musicSound.play();
        alert("Game Over- Press any key to play again!");
        musicSound.pause();
        snakeArray = [{x:13, y:15}];
        score = 0;
    }
// Food eating , increment score and regenerate food
if(snakeArray[0].y=== food.y && snakeArray[0].x === food.x){
    foodSound.play();
    score += 5;
    scoreBox.innerHTML = "Score: "+ score;
    snakeArray.unshift({x: snakeArray[0].x + inputDir.x, y: snakeArray[0].y + inputDir.y});
    let a = 2;
    let b = 16;
    food = {x: Math.round(a +(b-a)* Math.random()),y: Math.round(a +(b-a)* Math.random())}
}
//Moving the snake
for(let index = snakeArray.length-2; index>=0; index--){
   
    snakeArray[index+1] = {...snakeArray[index]};
}
snakeArray[0].x += inputDir.x;
snakeArray[0].y += inputDir.y;
    //PART 2
    //snake part
board.innerHTML = "";
snakeArray.forEach((e, index)=>{
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if(index === 0){
    snakeElement.classList.add('head');
    }else{
     snakeElement.classList.add('snake');
    }
    board.appendChild(snakeElement);
});
    //food part
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
    
}







//Main Logic
window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
    inputDir={x:0, y:1}
    moveSound.play();
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x= 0;
            inputDir.y= -1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x= 0;
            inputDir.y= 1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x= -1;
            inputDir.y= 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x= 1;
            inputDir.y= 0;
            break;
        default:
            break;
    }
});
