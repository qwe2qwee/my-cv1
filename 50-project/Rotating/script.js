const open = document.getElementById('open')
const close = document.getElementById('close')
const countainer = document.querySelector('.countainer')


open.addEventListener('click' , () => countainer.classList.add("show-nav"))

close.addEventListener('click' , () => countainer.classList.remove("show-nav"))