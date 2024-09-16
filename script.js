// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var wrap= document.querySelector("#project-wrap")
var img= document.querySelector("#fixed-image")

wrap.addEventListener("mouseenter",function(){
    img.style.display="block"
})
wrap.addEventListener("mouseleave",function(){
    img.style.display="none"
})

var allPro=document.querySelectorAll("#projects")

allPro.forEach(function(e){ 
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("image-data")
        img.setAttribute("src",image);
    })
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var menu=document.querySelector("#menu");
var overlay=document.querySelector("#overlay-black");
var navimg=document.querySelector("nav img");
var flag=0;
menu.addEventListener("click",function(){
    if(flag==0){
        overlay.style.top=0;
        navimg.style.opacity=0;
        flag=1;
    }
    else{
        overlay.style.top="-100%";
        flag=0;
        navimg.style.opacity=100;
    }
})

var loader=document.querySelector("#loader");
setTimeout(function(){
    loader.style.top="-100%"
},3500)