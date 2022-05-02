const dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#FF69B4'
// dodger.style.bottom = '0px'
// dodger.style.left = '0px'

const moveDodgerLeft = () => {
    const leftNums = dodger.style.left.replace('px', '')
    const left = parseInt(leftNums, 10)
    // Prevent dodger from moving off screen
    if (left > 0) dodger.style.left = `${left - 1}px`
    console.log(`left after key press: ${left - 1}px`)
}

const moveDodgerRight = () => {
    const leftNums = dodger.style.left.replace('px', '')
    const left = parseInt(leftNums, 10)
    if (left < 360) dodger.style.left = `${left + 1}px`
    console.log(`right after key press: ${left + 41}px`)

}

// NOTE: When only one event handler is needed, you can use
// a one-off handler like: game.onclick = e => console.log(e)
// For MORE THAN ONE event handler, use addEventListener
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') moveDodgerLeft()
    else if (e.key === 'ArrowRight') moveDodgerRight()
})