const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const timeEl = document.querySelector(".time")
const secondEl = document.querySelector(".second")
const dateEl = document.querySelector(".date")
const toggleEl = document.querySelector(".toggle")
const html = document.querySelector("html")

const days = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Fridya", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


toggleEl.addEventListener("click", (a) => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark")
    a.target.innerHTML = "Dark mode"
  } else {
    html.classList.add("dark")
    a.target.innerHTML = "Light mode"
  }
})


function setTime() {
  const time = new Date();
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hours12 = hours % 12
  const minutes = time.getMinutes()
  const second = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours12, 0,11,0,360)}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0,59,0,360)}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0,59,0,360)}deg)`

  timeEl.innerHTML = `${hours12}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
  dateEl.innerHTML = `${days[day]} , ${months[month]}<span class="circle">${date}`
}

function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime()

setInterval(setTime, 1000)