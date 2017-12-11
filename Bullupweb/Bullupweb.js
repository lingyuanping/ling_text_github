function move(obj, target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
            var speed = (target - obj.offsetLeft) / 5;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      obj.style.left = obj.offsetLeft + speed + "px";
      if (target == obj.offsetLeft){
        obj.style.left = target +  "px";
        clearInterval(obj.timer);
        return;
      }
    }, 30);
  }

var bar_ul = $(".bullup_liansai_bar");
var bar_li = bar_ul.children();
bar_li.eq(0).addClass("current");

for (var i = 0; i < bar_li.length; i++){
    bar_li.eq(i).on("click", i, function(event){
        $(this).addClass("current").siblings('li').removeClass("current");
        move(move1, -event.data * 1000);
    });
}
var move1 = document.getElementById("move");
btn2.click(function(){
  move(move1,-1000);
});


//获取到顶部的高度，兼容各版本浏览器
function getScroll(){
    if (window.pageXOffset){
      return {
        top: window.pageYOffset,
        left: window.pageXOffset
      }
    } else if (document.body.scrollTop){
      return {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
      }
    } else {
      return {
        top: document.documentElement.scrollTop,
        left: document.documentElement.scrollLeft
      }
  }
}



var current;
window.onscroll=function(event){
    current = getScroll().top;
    if(current>100){
       $(".anchor .backtotop").show();
    }else {
      $(".anchor .backtotop").hide();
    }
}


var lii = $(".anchor ul").children();
var arr =[1100,2300,3400,4300];

for (var i = 2; i < lii.length-2; i++){
  lii.eq(i).on("click", i, function(event){
      $(this).addClass("action_one").siblings('li').removeClass('action_one');
      var target = arr[event.data-2];
      move11(target);
  });
}

$(".backtotop").on("click",function(event){
  move11(0);
  lii.eq(1).addClass("action_one").siblings('li').removeClass('action_one');
});
//target参数表示的是当前的盒子距离父盒子顶部的距离，offsetTop
var timer = null;
function move11(target){
      clearInterval(timer);
      timer = setInterval(function(){
          var speed = (target - current ) / 10;
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
          current += speed;
          //用于进行屏幕的滚动
          window.scrollTo(0, current);
          if ( target == current ) {
              clearInterval(timer);
          }
      }, 30);
  }
  //点击播放音乐,暂停音乐
  var music = document.getElementById("audio");
  $("#bullup_bg_music").click(function(event){
      if($(this).text()=="关闭背景音乐"){
        music.pause();
        $(this).text("开启背景音乐");
      }else{
        music.play();
        $(this).text("关闭背景音乐");
      }
  });
