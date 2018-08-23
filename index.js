let element = document.getElementById('dodger')

function moveDodgerLeft() {
  var leftNumbers = element.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    element.style.left = `${left - 1}px`
  }
}

function moveDodgerRight(){
  let rightNumbers = element.style.left.replace('px', '')
  let right = parseInt(rightNumbers, 10)
 
  if (right > 0) {
    element.style.left = `${left + 1}px`
  }
}

document.addEventListener('keydown', (event) => {
  if (event.which === 37) {
    moveDodgerLeft()
  }
  else if(event.which === 39){
    moveDodgerRight()
   
  }
})

