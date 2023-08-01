var funn=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]

var one =  Math.floor(Math.random()*6);
var onee = Math.floor(Math.random()*6);

var mmm="images"+ "/" +funn[onee];

var mm="images"+ "/" +funn[one];

document.querySelector(".img1").setAttribute("src",mm);
document.querySelector(".img2").setAttribute("src",mmm);

if (mmm>mm) {
  document.querySelector("h1").textContent="Player2 winner";

}  else if (mm>mmm){
  document.querySelector("h1").textContent="Player1 winner";

} else  {
  document.querySelector("h1").textContent="draw";

}
