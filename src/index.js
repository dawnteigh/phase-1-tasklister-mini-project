document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    taskAdd(e.target.grabbable.value)
  })
});
function taskAdd(todo) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteTime)
  btn.textContent = "O"
  li.textContent = `${todo} - `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}
function deleteTime(e){
  e.target.parentNode.remove();
}