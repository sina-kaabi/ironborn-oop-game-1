document.getElementById("Snakes").style.borderRadius = "2px";
document.getElementById("Snakes").style.border = "2.5px solid rgb(255, 95, 47)";
document.getElementById("Snakes").style.backgroundColor = "crimson";


/* Event listeners */
document.addEventListener("keydown", function(event){
    switch(event.key) {
        case "ArrowLeft":
            game.movePlayer("left");
            break;
            case "ArrowRight":
                game.movePlayer("right");
                break;
        case "ArrowUp":
                game.movePlayer("up");
                break;
        case "ArrowDown":
                game.movePlayer("down");
                break;
    
    
    
        }
});

// Generating my random colored square with math.random
function generateRandomColor() {
    return '#'+Math.floor(Math.random()*172315).toString(16);
  }
  
  function changeSquaresColor() {
   
    let squareZones = document.getElementsByClassName("squares-panel");
    for (i=0; i<squareZones.length; i++) {
      squareZones[i].style.backgroundColor = generateRandomColor();
    }
  }
  
  setInterval(changeSquaresColor, 500)

  // Generates a random color in hexadecimal (ie. #62b9cc)

  
 