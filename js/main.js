let toggleIcon = document.querySelector(".toggle-icon");
let toggle = document.querySelector(".toggle");
let navList    = document.querySelector(".nav-list");
let navItems   =document.querySelector(".nav-items");
let asideCogs  = document.querySelector(".aside-cogs");
let aside =document.querySelector("aside");

console.log(asideCogs.classList)

toggleIcon.addEventListener("click",closeOpenToggle);
function closeOpenToggle(){
    if( toggle.classList.contains("fa-bars")){
        toggle.classList.remove("fa-bars");
        toggle.style.color = "black";
        toggle.classList.add("fa-times");
        navList.style.display = "block";
    }
    else{
        toggle.style.color = "white";
        toggle.classList.remove("fa-times");
        toggle.classList.add("fa-bars");
        navList.style.display = "none";
    }
}
asideCogs.addEventListener("click",closeOpenCogs);
function closeOpenCogs(){
    if( asideCogs.classList.contains("fa-cogs")){
        asideCogs.classList.remove("fa-cogs");
        asideCogs.style.color = "red";
        asideCogs.classList.add("fa-times");
        aside.style.transform ="translateX(0%)"; 
    }
    else{
        asideCogs.style.color = "#5d5851";
        asideCogs.classList.remove("fa-times");
        asideCogs.classList.add("fa-cogs");
        aside.style.transform ="translateX(100%)";
    }
}