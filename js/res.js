var imgs = [];
imgs.i = 0;
imgs.loader = function(){
  imgs.onload();
};
imgs.onload = function(){
  imgs.i++;
  if(imgs.i === 1){
    redraw()
  }
}
imgs[0] = new Image();
imgs[0].onload = imgs.loader
imgs[0].src = 'img/sloth.png';
