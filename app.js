const brackrop = document.querySelector('.brackdrop')
const mobile = document.querySelector('.mobile')
const mainBtn = document.querySelector('.mainBtn')
const exit = document.querySelector('.exit')

mainBtn.addEventListener('click', function() {
    brackrop.style.display = 'block'
    mobile.style.display = 'block'
})

brackrop.addEventListener('click', function() {
    brackrop.style.display = 'none'
    mobile.style.display = 'none'
})

exit.addEventListener('click', function() {
    brackrop.style.display = 'none'
    mobile.style.display = 'none'
})
