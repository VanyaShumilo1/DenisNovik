const burgerNode = document.querySelector('.burger')
const menuNode = document.querySelector('.menu')
const mainNode = document.querySelector('.main')

burgerNode.addEventListener('click', () => {
    if (burgerNode.classList.contains('active')) {
        menuNode.style.left = '-100%'
        burgerNode.classList.remove('active')
        mainNode.style.display = 'block'
    } else {
        menuNode.style.left = '0px'
        burgerNode.classList.add('active')
        mainNode.style.display = 'none'
    }
    
})