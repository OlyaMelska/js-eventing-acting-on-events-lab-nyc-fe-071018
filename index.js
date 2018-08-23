let element = document.getElementById('dodger')
/*
function moveDodgerLeft() {
  var leftNumbers = element.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    element.style.left = `${left - 1}px`
  }
}

function moveDodgerRight(){
  let rightNumbers = element.style.right.replace('px', '')
  let right = parseInt(rightNumbers, 10)
 
  if (right > 0) {
    element.style.right = `${right - 1}px`
  }
}
*/
document.addEventListener('keydown', (event) => {
  if (event.which === 37) {
    //moveDodgerLeft()
    let previousLeft = element.style.left
    let previousLeftNumber = parseInt(previousLeft.replace('px', ''), 10)
    if(previousLeftNumber > 0){
      let newLeftNumber = (previousLeftNumber - 10) + 'px';
      element.style.left = newLeftNumber
    }
  }
  if (event.which === 39){
    moveDodgerRight()
  }
})

