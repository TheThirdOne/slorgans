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
};
imgs.loader = function(){
  imgs.onload();
};
imgs.onload = function(){
  imgs.i++;
  if(imgs.i === imgs.n){
    draw();
  }
};
imgs.load(['img/sloth.png','img/heart.png','img/lungs.png','img/stomach.png',
           'img/intestines.png','img/muscle.png','img/brain.png',
           'img/bone.png','img/fur.png']);