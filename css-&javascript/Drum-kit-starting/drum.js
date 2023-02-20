
var goo=document.querySelectorAll(".drum").length;


for (var i = 0; i < goo; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function  () {
    var fffa= this.innerHTML;

    uuoo(fffa);
    }
);

}
document.addEventListener("keypress" ,function ( event) {

  uuoo(event.key);

}
)
function uuoo(key) {

      switch (key) {
        case "w":
         var ww = new Audio('sounds/crash.mp3');
         ww.play()
         break;
        case "a":
          var aa = new Audio('sounds/tom-2.mp3');
          aa.play()
          break;
        case "s":
         var ss = new Audio('sounds/kick-bass.mp3');
         ss.play()
         break;
        case "d":
         var dd = new Audio('sounds/tom-3.mp3');
         dd.play()
         break;
        case "j":
         var jj = new Audio('sounds/tom-1.mp3');
         jj.play()
         break;
        case "k":
         var kk = new Audio('sounds/snare.mp3');
         kk.play()
         break;
        case "l":
         var ll = new Audio('sounds/tom-4.mp3');
         ll.play()
         break;
        default:    console.log(fffa);
      }

}
