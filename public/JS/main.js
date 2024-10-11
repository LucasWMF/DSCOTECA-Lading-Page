document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.getElementById('projects-content');

    const projects = {
        title: ['Tema',
            'Projeto 1',
            'Projeto 2',
            'Projeto 3',
            'Projeto 4',
            'Projeto 5',
            'Projeto 6'],
        text: {
            'tema': [`A DSCOTECA tem como objetivo criar um ambiente interativo e envolvente para os visitantes, capturando a essência de uma discoteca na sala. A proposta inclui jogos no estilo fliperama, que remetem à época de ouro das discotecas, juntamente com elementos que celebram a música. O espaço será projetado para proporcionar uma experiência nostálgica e divertida, unindo entretenimento e cultura musical em um único local.
            <br><br>
            Neste projeto, aplicamos diversos conhecimentos adquiridos durante o nosso curso de Desenvolvimento de Sistemas. As disciplinas que selecionamos como pilares do nosso projeto foram Sistemas Embarcados, onde aprendemos a programar em C++ e a utilizar Arduinos, e Desenvolvimento de Sistemas, que nos ensinou a trabalhar com JavaScript. Além dessas matérias, empregamos também conhecimentos em Banco de Dados, Programação Web e outras áreas relevantes, ampliando assim a nossa abordagem e implementação do projeto.`],
            'project1': ['Nosso projeto consiste em um sistema de avaliação para o nosso site, onde cada feedback enviado é armazenado no banco de dados, sendo possível armazenar os feedbacks de todos os 3 dias de evento. Além disso, implementamos um sistema utilizando Arduino com um sensor de som, capaz de detectar diferentes frequências musicais (graves, médios e agudos). Para cada faixa de frequência, uma cor correspondente é emitida em formato de serpente, criando uma experiência visual interativa e sincronizada com o som.'],
            'project2': ['Este projeto explora a fusão de estilos musicais em uma discoteca inovadora. O ambiente será decorado com referências visuais da época de ouro do disco, mas com uma trilha sonora que mescla sons eletrônicos contemporâneos e clássicos da era disco. Haverá workshops semanais com DJs locais e internacionais, além de eventos temáticos que incentivam a diversidade musical e a inclusão, proporcionando uma experiência envolvente e interativa para todos os frequentadores.'],
            'project3': ['A proposta é criar uma discoteca móvel, que poderá circular por diferentes bairros da cidade, levando a diversão a várias comunidades. O projeto incluirá uma pista de dança iluminada e um sistema de som de alta qualidade, além de contar com DJs locais para trazer diferentes estilos musicais. A ideia é promover eventos semanais para reviver o espírito dos anos 70, com sessões especiais de "Noites Retrô", onde os participantes poderão compartilhar suas histórias e músicas favoritas.'],
            'project4': ['O grupo 5 desenvolveu uma experiência imersiva em fliperamas clássicos, onde as máquinas foram restauradas para seu funcionamento original. O espaço contará com uma coleção de jogos históricos, como Pac-Man, Space Invaders e Donkey Kong, todos reprogramados para uma jogabilidade autêntica. Além disso, os visitantes poderão conhecer a história do fliperama e como essas máquinas influenciaram a cultura dos videogames e da tecnologia durante as últimas décadas.'],
            'project5': ['O grupo 6 propõe um fliperama moderno, que mistura nostalgia e inovação. Serão restaurados clássicos dos anos 80 e 90, mas com o acréscimo de tecnologias atuais, como telas de toque e integração com realidade aumentada. Além disso, haverá um campeonato mensal para jogadores de diferentes idades, promovendo a interação entre gerações. O projeto visa não só resgatar a cultura do fliperama, mas também criar novas memórias, proporcionando uma experiência divertida e inclusiva.'],
            'project6': ['Este projeto cria um fliperama temático com áreas dedicadas a diferentes décadas dos jogos eletrônicos. O espaço será dividido em seções, cada uma representando uma era dos videogames: dos anos 70 até os dias atuais. A proposta inclui a criação de torneios semanais e desafios com prêmios para os campeões, incentivando a competição saudável entre os participantes. O fliperama também será um ponto de encontro para a comunidade gamer local, proporcionando uma experiência divertida e educativa.'],
        }
    };

    const projectKeys = ['tema', 'project1', 'project2', 'project3', 'project4', 'project5', 'project6'];

    let htmlContent = '';

    for (let i = 0; i < projectKeys.length; i++) {
        const projectKey = projectKeys[i]; // Obtem a chave do projeto

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
