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
            'project4': [`O Grupo 4, 5 e 6 uniu forças para desenvolver um mini fliperama, que inclui:
<br><br>
Grupo 4: Criou um jogo inspirado no Super Mario, onde o objetivo é evitar que o personagem bata nos tubos. Também ficou responsável pelas lembrancinhas.
<br><br>
Grupo 5: Desenvolveu um jogo baseado no clássico Tetris, cuidou da decoração dos arcades e do desenvolvimento do site para acesso público.
<br><br>
Grupo 6: Contribuiu com a elaboração de um jogo de fases, que possui três níveis e permite ao jogador escolher entre dois personagens. O objetivo é coletar moedas para avançar, além de incluir um quiz para acessar o Just Dance, onde é necessário acertar pelo menos cinco perguntas.
<br><br>
Além disso, foram planejadas gincanas inspiradas em festas americanas para aumentar a diversão do evento.`],
            // 'project5': [''],
            // 'project6': ['Nosso projeto é um emocionante jogo de fases, dividido em três níveis desafiadores. Os jogadores podem escolher entre dois personagens distintos para explorar cada fase. Desenvolvido com a ferramenta Game Maker, o objetivo principal é coletar moedas para avançar nas etapas. Além disso, incluímos um quiz interativo que serve como chave de acesso para o jogo Just Dance, proporcionando uma experiência única e divertida. Prepare-se para desafios envolventes e surpresas a cada fase, testando suas habilidades enquanto se diverte!'],
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