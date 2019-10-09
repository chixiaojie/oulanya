var ul=document.getElementsByClassName("product-taps-ul")
var lis=ul[0].children;
for(var i=0;i<lis.length;i++){
  lis[i].onclick=add;
}
function add(e){
  var tabs=document.getElementById("tabs")
  var tab=tabs.children;
  for(var i=0;i<tab.length;i++){
    tab[i].style.display="none";     
  }
  tab[e.target.dataset.indexof].style.display="block";  
}

