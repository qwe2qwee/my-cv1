const insert = document.querySelector("#insert")




addEventListener("keydown", (ee) => {
  insert.innerHTML = `
  <div class="key">
  ${ee.key.toLocaleUpperCase() === ' ' ? "space" : ee.key.toLocaleUpperCase()}
  <small>event.key</small>
  </div>
  <div class="key">
  ${ee.keyCode}
  <small>event.keyCode</small>
  </div>
  <div class="key">
  ${ee.code}
  <small>event.code</small>
  </div>
  ` 
})