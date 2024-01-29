function toggletext() {
  setTimeout(() => {
    document.querySelector("#name").innerHTML = "Welcome to my Portfolio";
    document.querySelector("#name").style.color = "#909884";
  }, 0);
  setTimeout(() => {
    document.querySelector("#name").innerHTML = "";
    document.querySelector("#name").style.color = "#758A8D";
  }, 2000);
  
}
toggletext();
setInterval(toggletext, 3000);


for(let i=0;i<8;i++){
  task(i);
}
function pagestart() {

  setTimeout(()=>{
    window.location.replace("Home.html");   
  }, 8000);
}
pagestart();
window.onbeforeunload = function () {
  window.location.replace("index.html"); 
} 

function task(i) {
  setTimeout(function(){
    const navtab=document.getElementsByClassName("nav-tab")[i];
    navtab.classList.add("hover");
  }, 1000 * i );
}
function confirmExit()
{
 alert("exiting");
 window.location.href='index.html';
 return true;
}
window.onbeforeunload = confirmExit;