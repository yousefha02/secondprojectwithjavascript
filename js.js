/* the nav of the header */
let list = document.querySelector(".head #list");
let nav = document.querySelector(".head ul.nav");
let val=0;
list.addEventListener("click",function()
{
    if(val==0)
    {
        val++;
        nav.style.display="none"
    }
nav.style.display= nav.style.display=="none"? "flex":"none" ;
list.className=list.className=="fas fa-bars" ?"fas fa-times":"fas fa-bars";
})
/* click search */ 
let search = document.getElementById("search");
let divsearch = document.querySelector(".search")
let close = document.querySelector(".search i")
search.addEventListener("click",function()
{
   divsearch.style.cssText="bottom:0"
})
close.addEventListener("click",function()
{
    divsearch.style.cssText="bottom:-100%"
})
/* log in */
let login = document.querySelector(".sign");
let user = document.querySelector("#user");
let close2 = document.querySelector(".sign i");
user.addEventListener("click",function()
{
    login.style.cssText="display:block"
})
close2.addEventListener("click",function()
{
    login.style.cssText="display:none;"
})
/* sign up */
let link = document.querySelector(".sign a");
let sign = document.querySelector(".signup");
let close3 = document.querySelector(".signup i");
let haveaccount = document.querySelector(".signup a")
link.addEventListener("click",function()
{
    sign.style.cssText="display:block";
    login.style.cssText="display:none";
})
close3.addEventListener("click",function()
{
    sign.style.cssText="display:none;"
})
haveaccount.addEventListener("click",function()
{
    sign.style.cssText="display:none;"
    login.style.cssText="display:block";
})
/* slides */
let numslides =4;
let currentslide=0;
let left = document.querySelector(".home .left");
let right = document.querySelector(".home .right");
let slide = document.querySelector(".home .content")
right.addEventListener("click",function()
{
    if(currentslide<(numslides-1))
    {
        currentslide++;
        left.classList.remove("disabled");
        right.classList.remove("disabled");
        slide.style.cssText=`transform: translateX(calc(-100% * ${currentslide}));`
        if(currentslide>=3)
            right.classList.add("disabled");
    }
    else
     right.classList.add("disabled");
})
left.addEventListener("click",function()
{
    if(currentslide>0)
    {
        currentslide--;
        right.classList.remove("disabled");
        left.classList.remove("disabled");
        slide.style.cssText=`transform: translateX(calc(-100% * ${currentslide}));`
            if(currentslide<=0)
             left.classList.add("disabled");
    }   
})