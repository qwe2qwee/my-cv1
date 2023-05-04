const boxes = document.querySelectorAll(".box");


window.addEventListener("scroll", checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggb = window.innerHeight / 5 * 4;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggb) {
      box.classList.add("show")
    } else {
      box.classList.remove("show")
    }
  })
}



let strs = ["hossin", "simo" , "soooooo"]
let yon = [];

for (let i = 0; i <strs.length; i++) {
  strs[i].length.push(you)
}