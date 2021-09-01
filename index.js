/*
=======================================
Adding functaionality to hamburger menu
=======================================
*/

var hamMenuState = 0;
function openMenu(){
    if(!hamMenuState){
    document.getElementById("menu-items").style.display = "block";
    hamMenuState = 1;   
    }
    else{
    document.getElementById("menu-items").style.display = "none";
        hamMenuState = 0;
    }
}

/*
==================================
Createing clickable image corousal
==================================
*/

function imageDisplay(n){
    
    const imgel = document.getElementById("display-image");

    const el = document.getElementById("image-icons").childNodes;

    const src = el  [n].src;

    imgel.src = src;
}

imageDisplay(1);

function showCourosal(){
    const el = document.getElementById("image-icons");
    const txt = document.getElementById("photos-btn").innerText;
    if(txt === 'Photos'){
        el.style.display = "flex";
        document.getElementById("photos-btn").innerHTML = "Close"
        
    }
    else{
        el.style.display = "none";
        document.getElementById("photos-btn").innerText = "Photos"  
    }
    
    
    
}
