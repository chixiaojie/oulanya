var a = document.querySelectorAll(".abc");
var b = document.querySelectorAll(".abc+ul");
for (var i = 0; i < a.length; i++) {
  a[i].onclick = function (e) {
    if (b[this].style.height > "0px") {
      b[this].style.height = "0px";
    } else if (b[this].style.height == "0px") {
      var c = document.querySelectorAll(".abc+ul")[this].querySelectorAll("li").length;
      b[this].style.height = 33 * c + "px";
    } else {
      var c = document.querySelectorAll(".abc+ul")[this].querySelectorAll("li").length;
      b[this].style.height = 33 * c + "px";
    }
    if (a[this].className == "abc") {
      a[this].className = "abc b"
    } else {
      a[this].className = "abc"
    }
  }.bind(i);
}
var imgChange=document.querySelector(".do-like-right");
var zIndex=0;
var a=0;
imgChange.onclick=function(){
  zIndex++;
  a++;
  var imgs=imgChange.children;
  if(a>=imgs.length){
    a=0
  }
  imgs[a].style.zIndex=zIndex;
}













