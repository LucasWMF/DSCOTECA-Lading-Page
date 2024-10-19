document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header-content')
    const nav = document.querySelector('nav')
    const section = document.querySelectorAll('section')

    const scrollPosition = window.scrollY;

    if (scrollPosition != 0){
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }

    while True(){
        console.log(scrollPosition)
    }
});