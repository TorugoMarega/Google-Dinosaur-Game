var character = document.getElementById("character");
var block = document.getElementById("block");

function gameStart(){
    setTimeout(function(){
        block.classList.add("blockAnimation")
    },500)
}

setTimeout(gameStart, 1000)


function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate")
    },500)
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); 
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); 
    if (blockLeft < 40 && blockLeft >0 && characterTop>=130){
        block.style.animation = "none";
        alert("You Lose")
         addEventListener
        if(Event = 'click'){
            window.location.reload()    
        } 
    }
}, 10); 