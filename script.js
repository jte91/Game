var charcter =
document.getElementById("charcter");
var block = document.getElementById("block");
function jump()
{
    if(charcter.classList != "animate"){
        charcter.classList.add("animate");
    }
    
    setTimeout(function(){
        charcter.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft<20 && blockleft>0 && characterTop>=130)
    {
        block.style.animation = "none";
        block.style.display = "none";
        alert("YOU LOOSE")
    }
},10);
