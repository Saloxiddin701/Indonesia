//loader
window.addEventListener('load', ()=> {
    paceOptions = {
        ajax: true,
        document: true,
        eventLag: false
    };

    Pace.on('done', function() {
        $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));


        $('#preloader').delay(1500).animate({top: '-105%'}, 2000, $.bez([0.19,1,0.22,1]));
    });
})


const burger = document.querySelector('.burger')
const navbar = document.querySelector('.links')

const next = document.querySelector('.buttons .next')
const prev = document.querySelector('.buttons .prev')
const images = document.querySelectorAll('.slider-wrapper img')
let count = 0

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active')
    navbar.classList.toggle('active')
})

next.addEventListener('click', ()=> {
    images[count].classList.remove('active')
    count++
    if (count === images.length) {
        count = 0
    }
    images[count].classList.add('active')
})

prev.addEventListener('click', ()=> {
    images[count].classList.remove('active')
    if (count === 0) {
        count = images.length
    }
    count--
    images[count].classList.add('active')
})

