document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.getElementById('projects-content');

    const projects = {
        title: ['Tema',
            'Projeto 1',
            'Projeto 2',
            'Projeto 3',
            'Projeto 4 , 5 e 6',],
        text: {
            'tema': [`A DSCOTECA tem como objetivo criar um ambiente interativo e envolvente para os visitantes, capturando a essência de uma discoteca na sala. A proposta inclui jogos no estilo fliperama, que remetem à época de ouro das discotecas, juntamente com elementos que celebram a música. O espaço será projetado para proporcionar uma experiência nostálgica e divertida, unindo entretenimento e cultura musical em um único local.
            <br><br>
            Neste projeto, aplicamos diversos conhecimentos adquiridos durante o nosso curso de Desenvolvimento de Sistemas. As disciplinas que selecionamos como pilares do nosso projeto foram Sistemas Embarcados, onde aprendemos a programar em C++ e a utilizar Arduinos, e Desenvolvimento de Sistemas, que nos ensinou a trabalhar com JavaScript. Além dessas matérias, empregamos também conhecimentos em Banco de Dados, Programação Web e outras áreas relevantes, ampliando assim a nossa abordagem e implementação do projeto.`],
            'project1': ['Este projeto explora a fusão de estilos musicais em uma discoteca inovadora. O ambiente será decorado com referências visuais da época de ouro do disco, mas com uma trilha sonora que mescla sons eletrônicos contemporâneos e clássicos da era disco. Haverá workshops semanais com DJs locais e internacionais, além de eventos temáticos que incentivam a diversidade musical e a inclusão, proporcionando uma experiência envolvente e interativa para todos os frequentadores.'],
            'project2': ['Nosso projeto consiste em um sistema de avaliação para o nosso site, onde cada feedback enviado é armazenado no banco de dados, sendo possível armazenar os feedbacks de todos os 3 dias de evento. Além disso, implementamos um sistema utilizando Arduino com um sensor de som, capaz de detectar diferentes frequências musicais (graves, médios e agudos). Para cada faixa de frequência, uma cor correspondente é emitida em formato de serpente, criando uma experiência visual interativa e sincronizada com o som.'],
            'project3': ['O nosso projeto consiste em um jogo interativo desenvolvido com Arduino e Tinkercad onde os participantes devem adivinhar a música tocada. O jogo possui dois botões e quem apertar primeiro e responder corretamente à música ganha. As melodias são reproduzidas por um buzzer piezoelétrico no Tinkercad, que permite criar notas reconhecíveis. A dinâmica é simples e empolgante, pois assim que a música inicia, os jogadores competem para pressionar o botão antes do outro e, em seguida, falar o nome da música ou do cantor.'],
            'project4': [`Os Grupos 4, 5 e 6 uniram forças para criar um mini fliperama, oferecendo uma experiência divertida e interativa.
            <br><br>
            Grupo 4 desenvolveu um jogo inspirado no clássico Super Mario, onde o desafio é evitar que o personagem colida com os tubos. Além disso, eles também foram responsáveis pelas lembrancinhas do evento entregue no projeto deles e pela decoração de alguns arcades.
            <br><br>
            Grupo 5 trouxe um jogo baseado no lendário Tetris, além de cuidar da decoração de um dos arcades e criar o site para acesso público.
            <br><br>
            Grupo 6 elaborou um jogo de fases com três níveis, permitindo que os jogadores escolham entre dois personagens. O objetivo é coletar moedas para avançar. Além disso, eles criaram um quiz que ao jogar dá acesso ao jogo Just Dance.
            <br><br>
            O evento também contará com gincanas inspiradas nas tradicionais festas americanas, garantindo ainda mais diversão para todos os participantes.`],
        }
    };

    const projectKeys = ['tema', 'project1', 'project2', 'project3', 'project4'];

    let htmlContent = '';

    for (let i = 0; i < projectKeys.length; i++) {
        const projectKey = projectKeys[i];

        htmlContent += `
            <div class="project-item">
                <h1 class="h1-project">${projects.title[i]}</h1>
                <p class="p-project">${projects.text[projectKey]?.[0] || ''}</p>
            </div>
        `;
    }

    if (htmlContent) {
        projectsContainer.innerHTML = htmlContent;
        console.log(htmlContent);
    } else {
        console.log('Deu Erro Ferrou');
    }
});