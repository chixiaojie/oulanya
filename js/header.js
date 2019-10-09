;(function(){
    var as=document.querySelectorAll("#d1>div>ul>[data-toggle=tab]");
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

    var d1=document.querySelectorAll("#d1>div>div")
   
    for(var i=0;i<d1.length;i++){
        d1[i].onmouseover=function(){
            this.style.display="block";
        }
        d1[i].onmouseout=function(){
            this.style.display="none";
        }
    }

})();