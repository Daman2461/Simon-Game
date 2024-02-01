var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var buttonClick=[];
var t=0;


$(document).keydown(function(e){
    if(t===0){

        if($("body").hasClass("game-over")){$("body").removeClassClass("game-over");}
    t=1;
    $("h1").text("Level " + 0);
    game();
    }
});




$(".btn").click(function(){
    makeSound(this.id);
    buttonAnimation(this.id);
    buttonClick.push(this.id);
    check();
    
});
var q=1;
function game(){

    
    var y=nextSequence();
    gamePattern.push(buttonColours[y]);
    
    makeSound(buttonColours[y]);
    buttonAnimation(buttonColours[y]);

}

function check(){
    
    var conti=0;

if(buttonClick.length===gamePattern.length ){


    for(var i=0;i< gamePattern.length;i++){


        if(buttonClick[i]!=gamePattern[i]){
            conti=-1;
            break;
        }

        else{
            conti=1;
        }
    }
 }
    if(conti===-1){
        var a=new Audio("./sounds/wrong.mp3");
        a.play();
        
        $("h1").text("Game Over, Press Any Key to Restart");
  
    $("body").addClass("game-over");

    t=0;
    gamePattern = [];
    buttonClick = [];
    $(document).off("keydown").on("keydown", function(e) {
        if (t === 0) {
            if ($("body").hasClass("game-over")) {
                $("body").removeClass("game-over");
            }
            t = 1;q=0;
            $("h1").text("Level " + 0);

            game();
        }
    });
    }


    
    
   else if(conti===1){
        $("h1").text("Level " + q++);

        buttonClick=[];
        setTimeout(function(){
            game();
        },2000);
        

    }
}


function buttonAnimation(e){
$("."+e).addClass("pressed");

setTimeout(function(){
    $("."+e).removeClass("pressed");
},100);
}

function makeSound(e){
            var a =new Audio("sounds/"+e+".mp3");
            a.play();
    
}
function nextSequence(){
    var a=Math.random()*4;
    a=Math.floor(a);
return a;
}





