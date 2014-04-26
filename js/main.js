var c=document.getElementsByTagName("canvas")[0];
ctx=c.getContext('2d');
var scale = 1,x=200,y=300,arr=[200,300];

function redraw(){
  ctx.clearRect(0,0,400,600)
  var t;
  for(var i = 0; i < world.length;i++){
    t = world[i]
    ctx.drawImage(t.img,t.x+mouse.dx,t.y+mouse.dy,t.size[0]*scale,t.size[1]*scale);
  }
  //ctx.drawImage(imgs[0],arr[0]+mouse.dx,arr[1]+mouse.dy,400*scale,600*scale);
}
function log(value,level){
  console.log(value)
}
var world = [];
world[0]={img:imgs[0],x:0,y:0,size:[400,600]};
world[1]={img:imgs[1],x:150,y:50,size:[100,100]};
world[0]={img:imgs[0],x:0,y:0,size:[400,600]};
world[1]={img:imgs[1],x:150,y:50,size:[100,100]};