var c=document.getElementsByTagName("canvas")[0];
ctx=c.getContext('2d');
var scale = 1,x=200,y=300,arr=[200,300];

function redraw(){
  ctx.clearRect(0,0,400,600)
  ctx.drawImage(imgs[0],arr[0]+mouse.dx,arr[1]+mouse.dy,400*scale,600*scale);
}
function log(value,level){
  console.log(value)
}
var world = [];

