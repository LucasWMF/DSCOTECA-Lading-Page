document.addEventListener('DOMContentLoaded', function () {
    const navContainer = document.querySelector('.nav-container');
    const nav = document.querySelector('nav');
    const button = document.querySelector('.button_res i');
    const navRes = document.querySelector('.nav_res');

    document.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        // Adicionar ou remover a classe 'sticky' na navbar
        if (scrollPosition !== 0) {
            navContainer.classList.add('sticky');
            // navRes.classList.add('sticky');
        } else {
            navContainer.classList.remove('sticky');
            // navRes.classList.remove('sticky');
        }
    });
    
    document.querySelector('.button_res').addEventListener('click', function () {
        if (button.classList.contains('fa-bars')) {
            button.classList.remove('fa-bars');
            button.classList.add('fa-x');
            navRes.classList.remove('disable');
            navRes.classList.add('visible');
        } else {
            button.classList.remove('fa-x');
            button.classList.add('fa-bars');
            navRes.classList.add('disable');
            navRes.classList.remove('visible');
        }
    });
});

console.log(`Desenvolvido por Lucas Wagner de Melo Fogaça`)
console.log(`Finalizado: 24/10/2024`)
console.log(`Finalidade: Projeto EPA (Etec de Portas Abertas) da escola Etec Sales Gomes`)

//     function scrollToSection(selector) {
//         const section = document.querySelector(selector);
//         const sectionTop = section.offsetHeight; // Use offsetTop para pegar a posição da seção
//         const navHeight = nav.offsetHeight;

//         window.scrollTo({
//             top: sectionTop - navHeight, // Corrige a posição considerando a altura da navbar
//             behavior: 'smooth'
//         });
//     }

//     // Adiciona eventos de clique para as seções
//     document.querySelector('#home').addEventListener('click', () => scrollToSection('#home'));
//     document.querySelector('#sponsor').addEventListener('click', () => scrollToSection('#sponsor'));
//     document.querySelector('#projects').addEventListener('click', () => scrollToSection('#projects'));
//     document.querySelector('#gallery').addEventListener('click', () => scrollToSection('#gallery'));
//     document.querySelector('#feedback').addEventListener('click', () => scrollToSection('#feedback'));
// });
