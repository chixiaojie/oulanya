;(function(){
    var as=document.querySelectorAll("#d1>div>ul>li>[data-toggle=tab]");
    for(var a of as){
        a.onmouseover=function(){
            var id=this.getAttribute("data-target");
            var div=document.getElementById(id);
            div.style.display="block";
        }
        a.onmouseout=function(){
            var id=this.getAttribute("data-target");
            var div=document.getElementById(id);
            div.style.display="none";
        }
    }
})();