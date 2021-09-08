var Body = {
  setColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color)
  },
  setBgcolor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color)
  }
}
var Links = {
  setColor:function(titlec, activec){
    // var tli = document.querySelectorAll('.title');
    // for(i = 0; i < tli.length; i++){
    //   tli[i].style.color = titlec;
    // }
    $('.title').css('color',titlec);
    if (document.querySelector('#active')){
      document.querySelector('#active').style.color = activec;
    }
  }
}

function toggle(self){
  if (self.value === 'night'){
    Body.setColor('white');
    Body.setBgcolor('black');
    Links.setColor('white','lightcyan')
    self.value = 'day';
  } else {
    Body.setColor('black');
    Body.setBgcolor('white');
    Links.setColor('black','dodgerblue')
    self.value = 'night';
  }
}
