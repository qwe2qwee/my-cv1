const menuBtn = document.querySelector('#open-btn')
const closeBtn = document.querySelector('#close-btn')
const menu = document.querySelector(' nav .countainer ul')
const LI = document.querySelectorAll('nav .countainer ul li')
const skillitems = document.querySelectorAll('section.skills .skill')

const swiper = new Swiper('.swiper', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});



LI.forEach(ee => {
  ee.addEventListener('click', () => {
    remmm()
    ee.classList.add('active')
  })
})

function remmm() {
  LI.forEach(pa => {
    pa.classList.remove('active')
  })
}
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
})

skillitems.forEach(skill => {
  skill.querySelector('.head').addEventListener('click', () => {
    skill.querySelector('.items').classList.toggle("show-items")
  })
})

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY)
})