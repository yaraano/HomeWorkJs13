const balloons = document.querySelectorAll('.box')
const checkBox = document.querySelectorAll('.checkbox')
const selectAll = document.querySelector('#selectAll')

const handleClick = (balloon, idx) => {
    balloon.classList.toggle('bgRed')
    checkBox[idx].checked = !checkBox[idx].checked
    const arrBalloons = Array.from(balloons)
    selectAll.checked = !!arrBalloons.every(el => el.classList[1] === 'bgRed')
}


checkBox.forEach(el => {
    el.addEventListener('click', () => {
        el.checked = !el.checked
    })
})


balloons.forEach((balloon, idx) =>{
    balloon.addEventListener('click' , () => handleClick(balloon , idx))
})

selectAll.addEventListener('click', () => {
    if (selectAll.checked) {
        balloons.forEach(el => el.classList.add('bgRed'))
        checkBox.forEach(el => el.checked = true)
    } else {
        balloons.forEach(el => el.classList.remove('bgRed'))
        checkBox.forEach(el => el.checked = false)
    }
})