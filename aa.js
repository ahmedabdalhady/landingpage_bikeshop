let toggler=document.querySelector(".open-menu");
let nav = document.querySelector("nav");
let close = document.querySelector(".close-menu");
let view1 =document.querySelector(".first");
let view2 =document.querySelector(".second");
let view3 =document.querySelector(".third");
let bike = document.querySelector(".bike");
let buts = document.querySelector(".expl");
let main = document.querySelector(".main_view");
toggler.onclick = function(){
    nav.classList.add("open");
}
close.onclick = function(){
    nav.classList.remove("open");
}
view1.onclick = function(){
    bike.setAttribute("src","images/bike-1.png");
    buts.classList.replace("expl","expl_non");
}
view2.onclick = function(){
    bike.setAttribute("src","images/bike-2.png");
    buts.classList.replace("expl","expl_non");
}
view3.onclick = function(){
    bike.setAttribute("src","images/bike-3.png");
    buts.classList.replace("expl","expl_non");
}
main.onclick = function(){
    bike.setAttribute("src","images/E-Bike1.png");
    buts.classList.replace("expl_non","expl");
}