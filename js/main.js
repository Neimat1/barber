let toggleIcon = document.querySelector(".toggle-icon");
let toggle = document.querySelector(".toggle");
let navList    = document.querySelector(".nav-list");
let navItems   =document.querySelector(".nav-items")



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
        // navItems.style.transform="translateY(0%)";
    }
}
