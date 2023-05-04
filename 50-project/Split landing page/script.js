const  left = document.querySelector(".left");
const  right = document.querySelector(".right");
const  countainer = document.querySelector(".countainer");

left.addEventListener("mouseenter" , ()=> countainer.classList.add("hover-left"))
left.addEventListener("mouseleave" , ()=> countainer.classList.remove("hover-left"))


right.addEventListener("mouseenter" , ()=> countainer.classList.add("hover-right"))
right.addEventListener("mouseleave" , ()=> countainer.classList.remove("hover-right"))
