window.onload =  function() {
  canvas = document.getElementById("koptok");
  canvas.height = '300';
  canvas.width = '450';
  ctx = canvas.getContext('2d');
  x=0;
  y=0;
  vx = 5;
  vy= 4;
  cradius =10;
  bx=300;
  by=270;
  bgcolor= 'red';
  score = 0;
  pause = false;


  
}

function board () {
  ctx.rect(bx, by, 80, 8);
  ctx.fillStyle='bgcolor';
  ctx.fill();

  
  
}

function reset() {
  x=0;
  y=0;
  bx=300;
  score = 0;
}
function pauseText() {
  ctx.fillStyle='greey';
  ctx.fillText(txt, 10, 10);
  
  
}

function ball() {
  ctx.beginPath();
  ctx.arc(x, y, cradius, Math.PI * 2  , true);
  ctx.closePath();
  ctx.fillStyle = "red";
  ctx.fill();
}

function move() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball();
  board();
  x+=vx;
  y+=vy;
  if(x+vx >canvas.width || x+vx < 0){
    vx = -vy;
  }
  if(y+vy > canvas.height || y+vy <0){
    vy = -vy;
  } 




  ///

function tap(e) {
  px=e.targetTouches ? 
  e.targetTouches[0].pageX
   : e.pageX ,
  py = e.targetTouches ?
   e.targetTouches[0].pageY
  : e.pageY,
  bx  =  px - canvas.offsetLeft;
}

canvas.addEventListener("mousemove" , tap ,false);
canvas.addEventListener("touchmove" , tap ,false);

if(x+ vx > bx && x+ vx < bx +80 &&  ( y+vy >270 && y+vy <275)){
  vy = -vy;
  score  + 5;
}


if( y + vy > canvas.height  -5){
  // o'yin tugadi
  reset();
}

ctx.fillText("Natija: ", score ,380, 10);
raf = window.requestAnimationFrame(move);
}

raf  =window,requestAnimationFrame(move);
document.addEventListener("keypress"  ,function (e) {
  if(e.keyCode = 32) {
    if(!pause) {
      cancelAnimationFrame(raf);
      pause = true;
      pauseText('paused');

    }

    else {
      pause  = false;
      raf = window.requestAnimationFrame(move);
  }
  }
});








  










