const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup',(ee) => {
  createTags(ee.target.value)
  if (ee.key === 'Enter') {
    setTimeout(()=> {
      ee.target.value = ''
    },10)
    randomS()
  }
})

function createTags(inn) {
  const tagses = inn.split(',').filter(tag => tag.trim()!=='')
  .map(tag => tag.trim())
  tagsEl.innerHTML = ''
  tagses.forEach(tag => {
    const tegg = document.createElement('span')
    tegg.classList.add("tag")
    tegg.innerText = tag
    tagsEl.appendChild(tegg)
  });
}

function randomS() {
  const timess = 30;
  const inter = setInterval(()=> {
    const randomtag = pickRandomTag()
    highlightTag(randomtag)
    setTimeout(()=> {
      unhighlightTag(randomtag)
    },100)
  },100);

  setTimeout(()=> {
    clearInterval(inter)
    setTimeout(()=>{
      const randomtag = pickRandomTag();
      highlightTag(randomtag)
    },100)
  }, timess * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag")
  return tags[Math.floor(Math.random() * tags.length)]
} 

function highlightTag(tagggg) {
  tagggg.classList.add('high')
}

function unhighlightTag(taggg) {
  taggg.classList.remove('high')
}