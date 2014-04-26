var c=document.getElementsByTagName("canvas")[0];
ctx=c.getContext('2d');
var scale = 1,x=200,y=300,arr=[200,300];
var v = new Image();
v.onload = function(){
  redraw()
};
v.src = 'img/sloth.png';
function redraw(){
  ctx.clearRect(0,0,400,600)
  ctx.drawImage(v,arr[0]+mouse.dx,arr[1]+mouse.dy,400*scale,600*scale);
}
function log(value,level){
  console.log(value)
}
c.onmousewheel = function(e){
  temp = Math.pow(1.1,e.deltaY/100);
  arr[0] = (1-temp)*e.x+ arr[0]*temp;
  arr[1] = (1-temp)*e.y+ arr[1]*temp;
  scale *= temp;
  console.log(scale,arr);
  redraw();
}
var mouse = {};
mouse.down = false;
mouse.x = 0;
mouse.y = 0;
mouse.dx = 0;
mouse.dy = 0;
c.onmousedown = function(evt){
    mouse.down = true;
    mouse.x = evt.x;
    mouse.y = evt.y;
};
c.onmouseup = function(evt){
    mouse.down = false;
    arr[0]+=(mouse.dx)
    arr[1]+=(mouse.dy);
    mouse.dx = 0;
    mouse.dy = 0;
    redraw();
};
c.onmousemove = function(evt){
    if(mouse.down){
      mouse.dx = evt.x - mouse.x;
      mouse.dy = evt.y - mouse.y;
      redraw();
    }
};