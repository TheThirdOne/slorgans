var c=document.getElementsByTagName("canvas")[0];
ctx=c.getContext('2d');
var scale = 1,x=200,y=300,arr=[200,300];

function draw(){
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
world[2]={img:imgs[1],x:150,y:180,size:[100,100]};
world[1]={img:imgs[2],x:100,y:150,size:[200,200]};
world[3]={img:imgs[3],x:100,y:280,size:[150,100]};
world[4]={img:imgs[4],x:100,y:340,size:[150,150]};
world[5]={img:imgs[5],x:0,y:0,size:[50,50]};
world[6]={img:imgs[6],x:150,y:50,size:[100,100]};
world[7]={img:imgs[7],x:0,y:0,size:[50,50]};
world[8]={img:imgs[8],x:0,y:0,size:[50,50]};

['img/sloth.png',
'img/heart.png',
'img/lungs.png',
'img/stomach.png',
'img/intestines.png',
'img/muscle.png',
'img/brain.png',
'img/bone.png',
'img/fur.png']