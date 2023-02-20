
var bottunCollrs=["red" ,"blue","green","yellow"];

var gameP=[];

var clikedPttern=[];
var started =false;

var level=0;




$(document).keypress(function () {
  if (!started ) {
   $("#level-title").text("level "+level);
   nextSequence();
   started = true;
  }
});




$(".btn").click(function () {
  var iddd =$(this).attr("id");
  clikedPttern.push(iddd);
  playSounds(iddd);
  addd(iddd);
  chekAn(clikedPttern.length-1);


});


function chekAn(checked) {

  if (gameP[checked] === clikedPttern[checked]) {
    console.log("success");

    if (clikedPttern.length===gameP.length) {
      setTimeout(function() {
        nextSequence();
      },1000);
    }

  } else {
    console.log("wrong");

    playSounds("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    },200);

    $("#level-title").text("Game Over, Press Any key to Restart");
    startOver();
  }

}



function nextSequence() {


  clikedPttern =[];

  level++;
  $("#level-title").text("level "+level);

  var randomNumber =Math.floor(Math.random()*4);
  var loking=bottunCollrs[randomNumber];
  gameP.push(loking);


  $("#"+loking ).fadeIn(100).fadeOut(100).fadeIn(100);
  playSounds(loking);


}


function playSounds(goo) {
  var sound =new Audio("sounds/" + goo + ".mp3");
  sound.play();

}

function addd(animation) {

  $("#"+animation).addClass("pressed");

setTimeout(  function () {
    $("#"+animation).removeClass("pressed");
},100);
}


function startOver() {
  level=0;
  gameP=[];
  started = false;
}
