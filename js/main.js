var c=document.getElementsByTagName("canvas")[0];
ctx=c.getContext('2d');
var v = new Image();
v.onload = function(){
  ctx.drawImage(v,5,5,260,125);
};
v.src = 'img/sloth.png';