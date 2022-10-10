const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


const body = document.querySelector('body');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body')
    iconMenu.addEventListener('click', function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        body.classList.toggle('_lock');
    });
}
