let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let elementOfMap = {
    x : 0,
    y : 510,
    width: 1920,
    height: 900,
};
function drawMap(){
ctx.fillStyle = "green";
ctx.fillRect(elementOfMap.x,elementOfMap.y,elementOfMap.width,elementOfMap.height);
}

drawMap();