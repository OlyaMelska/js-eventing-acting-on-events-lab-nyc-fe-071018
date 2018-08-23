let element = document.getElementById('dodger')

function moveDodgerLeft() {
  let leftNumbers = element.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    element.style.left = `${left - 1}px`
  }
}

function moveDodgerUp() {
  let topNumbers = element.style.bottom.replace('px', '')
  let top = parseInt(topNumbers, 10)
 
  if (top < 400) {
    element.style.bottom = `${top + 10}px`
  }
}

function moveDodgerRight(){
  let rightNumbers = element.style.left.replace('px', '')
  let right = parseInt(rightNumbers, 10)
 
  if (right < 360) {
    element.style.left = `${right + 1}px`
  }
}

document.addEventListener('keydown', (event) => {
  if (event.which === 37) {
    moveDodgerLeft()
  }
  else if(event.which === 39){
    moveDodgerRight()
  }
  else if(event.which === 38){
    moveDodgerUp()
  }
})

