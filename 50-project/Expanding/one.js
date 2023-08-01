panals = document.querySelectorAll('.panel');

panals.forEach( panal => {
  panal.addEventListener("click" , function () {
    remmm()
    panal.classList.add('active')
  })
});



function remmm() {
  panals.forEach( pa => {
    pa.classList.remove("active")
  })
}