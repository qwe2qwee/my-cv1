const toggle = document.querySelectorAll(".faq-toggle")
const fof = document.querySelectorAll("h3");


toggle.forEach(toggles => {
  toggles.addEventListener("click",() => {
    toggles.parentNode.classList.toggle("active")
  })
})
