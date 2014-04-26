c.onmousewheel = function(e){
  temp = Math.pow(1.1,e.deltaY/100);
  var t;
  for(var i = 0; i < world.length;i++){
    t = world[i]
    t.x = (1-temp)*e.x+ t.x*temp;
    t.y = (1-temp)*e.y+ t.y*temp;
  }
  
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
    var t;
    for(var i = 0; i < world.length;i++){
      t = world[i]
      t.x += (mouse.dx)
      t.y +=(mouse.dy);
    }
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