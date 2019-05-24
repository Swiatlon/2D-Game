let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let square = {
  x: 0,
  y: 500,
  width: 51,
  height: 56,
  x_velocity: 0,
  y_velocity: 0,
  jumping: true,
  gravity: 320,
};
let key = "";
let secondKey = "";


function drawWiercik() {
  ctx.drawImage(imageWiercik, square.x, square.y);
}


// let image = new Image(51, 56);
// let _self = this;
// image.onload = function () {
//   console.log(ctx);
//   ctx.drawImage(this, 0, 0);
//   console.log('aaaaaa')
// }

// image.addEventListener('load', function() {
// execute drawImage statements here

// }, false);
// setTimeout(() => {
//   ctx.drawImage(myImage, 0, 0);
// }, 1000);

// ctx.drawImage(this, 0, 0);

// ctx.drawImage(this, 0, 0);

// image.onload = drawWiercik;
// function drawWiercik() {


//   ctx.drawImage(this, 0, 0);
//   console.log(this);

// }
// drawWiercik();
const keyListener = function (event) {
  switch (event.keyCode) {
    case 37: // left
      key = "left";

      console.log('Lewo');
      break;
    case 38: // up
      secondKey = "up";
      console.log("Gora");
      break;
    case 39: // right
      key = "right";
      console.log("Prawo");
      break;
    case 40: // down
      key = "bottom";
      console.log("Dol");
      break;
    default:
  }
}
const secondKeyListener = function (event) {
  switch (event.keyCode) {
    case 37: // left
      key = "";

      break;
    case 38: // up

      break;
    case 39: // right
      key = "";
      break;
    case 40: // down
      key = "";
      break;
    default:
  }
}

const animate = function () {
  ctx.clearRect(0, 0, window.innerWidth, 556);
  drawMap();
  if (key == "right") {
    square.x_velocity += 6;
  } else if (key == "left") {
    square.x_velocity -= 6;
  }
  if (secondKey == "up" && square.y > square.gravity && square.jumping == true) {
    square.y -= 5;
    square.x_velocity = 0;
    if (square.y < 450 && key == "left") { // zaczyna
      square.x_velocity -= 6;
    } else if (square.y < 450 && key == "right") { // tutaj masz ify ktore pozwalaja ci na to zeby postac mogla isc w lewo prawo od pewnej wysokosci
      square.x_velocity += 6;
    } // konczy

  } else if (square.y == square.gravity) {

    secondKey = "dziala";
    // console.log(key);

  }
  if (secondKey == "dziala" && square.y != 500) {
    square.y += 5;
  }
  square.x += square.x_velocity;
  square.y_velocity *= 0.1;
  square.x_velocity *= 0.1;
  // console.log(square.y);
  // squar();
  
  drawWiercik();

  window.requestAnimationFrame(animate);
}

drawWiercik();
window.addEventListener("keydown", keyListener);
window.addEventListener("keyup", secondKeyListener);
window.requestAnimationFrame(animate);

// if (key == "up" && square.y >300 ){
//   square.y  -= 10;
//   console.log(key);
// } else if(square.y == 300){

//     key = "dziala";
//   // console.log(key);

//  } 
// if (key == "dziala" && square.y !=500){
//     square.y +=10;
//   }