var imgs = [];
imgs.i = 0;
imgs.n = 0;
imgs.load = function(ar){
  imgs.n += ar.length;
  for(var i = 0; i < ar.length; i++){
    imgs[imgs.length] = new Image();
    imgs[imgs.length-1].onload = imgs.loader;
    imgs[imgs.length-1].src = ar[i];
  }
}
imgs.loader = function(){
  imgs.onload();
};
imgs.onload = function(){
  imgs.i++;
  if(imgs.i === imgs.n){
    redraw()
  }
}
imgs.load(['img/sloth.png','img/brain.png']);