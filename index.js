let element = document.getElementById('dodger')

function moveDodgerLeft() {
  var leftNumbers = element.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    element.style.left = `${left - 1}px`
  }
}

function moveDodgerUp() {
  var topNumbers = element.style.top.replace('px', '')
  var top = parseInt(topNumbers, 10)
 
  //if (top > 0) {
    element.style.top = `${top + 10}px`
  //}
}

function moveDodgerRight(){
  var rightNumbers = element.style.left.replace('px', '')
  var right = parseInt(rightNumbers, 10)
 
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

