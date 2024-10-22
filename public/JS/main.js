document.addEventListener('DOMContentLoaded', function () {
    const navContainer = document.querySelector('.nav-container');
    const nav = document.querySelector('nav');
    const button = document.querySelector('.button_res i');
    const navRes = document.querySelector('.nav_res')

    document.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        // Adicionar ou remover a classe 'sticky' na navbar
        if (scrollPosition != 0) {
            navContainer.classList.add('sticky');
            // navRes.classList.add('sticky');
        } else {
            navContainer.classList.remove('sticky');
            // navRes.classList.remove('sticky');
        }

        // console.log(scrollPosition);
    });

    document.querySelector('.button_res').addEventListener('click', function () {    
        if (button.classList.contains('fa-bars')) {
            button.classList.remove('fa-bars');
            button.classList.add('fa-x');
            navRes.classList.remove('disable')
            navRes.classList.add('visible')
        } else {
            button.classList.remove('fa-x');
            button.classList.add('fa-bars');
            navRes.classList.add('disable')
            navRes.classList.remove('visible')
        }
    });
    
    // Função para rolar até a seção com ajuste da altura da navbar
    // function scrollToSection(selector) {
    //     const section = document.querySelector(selector);
    //     const sectionTop = section.offsetHeight;
    //     const navHeight = nav.offsetHeight;

        // Verificar se é a seção #home para um comportamento específico
    //     if (selector === '#home') {
    //         window.scrollTo({
    //             top: 0 + navHeight, 
    //             behavior: 'smooth'
    //         });
    //     } else {
    //         window.scrollTo({
    //             top: sectionTop - navHeight,
    //             behavior: 'smooth'
    //         });
    //     }
    // }

    // Chamar a função para rolar até cada seção (se necessário)
    // scrollToSection('#home');
    // scrollToSection('#sponsor');
    // scrollToSection('#projects');
    // scrollToSection('#gallery');
    // scrollToSection('#feedback');
});


