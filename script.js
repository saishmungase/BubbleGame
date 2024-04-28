
var score = 0;
var time = 60;
var random =0;
function bubbles(){
    var clutter = "";
    
    for(var i =0; i<=83; i++){
        var rn = Math.floor(Math.random()*10);
        clutter +=`<div class="circle"><h3>${rn}</h3></div>`
    }
    
    document.querySelector(".downpanel").innerHTML = clutter;

}


function timer(){
    var timely = setInterval(function(){
        if(time > 0) {
            time--;
            document.querySelector("#time").textContent = time;
        }else{
            clearInterval(timely);
            document.querySelector(".downpanel").innerHTML= `<h2>GAME OVER, YOUR SCORE= ${score}</h2>`;
        }
    }, 1000);
}

function hitler(){
    random = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = random;
}

function scorer(){
    score +=10;
    document.querySelector("#mark").textContent= score;
}


document.querySelector(".downpanel").addEventListener("click", function (val){
    var listen = Number(val.target.textContent);
    if(listen === random){
        scorer();
        bubbles();
        hitler();
    }
}
)

bubbles();
timer();
hitler();