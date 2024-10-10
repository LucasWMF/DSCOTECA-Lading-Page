const projectTitle = document.querySelectorAll('.h1-project');
const projectText = document.querySelectorAll('.p-project');

const projects = {
    title: ['Projeto 1', 
        'Projeto 2', 
        'Projeto 3', 
        'Projeto 4', 
        'Projeto 5', 
        'Projeto 6'],
    text: {
        'project1': ['O projeto de discoteca busca criar um espaço dinâmico e interativo para os amantes da música dos anos 70 e 80. A ideia é recriar a atmosfera vibrante com iluminação colorida e trilha sonora clássica, unindo tecnologia moderna e um toque nostálgico. Será desenvolvida uma pista de dança com piso de LED que reage aos movimentos dos dançarinos, além de estações de DJ para eventos especiais, incentivando o resgate da cultura disco.'],
        'project2': ['Este projeto explora a fusão de estilos musicais em uma discoteca inovadora. O ambiente será decorado com referências visuais da época de ouro do disco, mas com uma trilha sonora que mescla sons eletrônicos contemporâneos e clássicos da era disco. Haverá workshops semanais com DJs locais e internacionais, além de eventos temáticos que incentivam a diversidade musical e a inclusão, proporcionando uma experiência envolvente e interativa para todos os frequentadores.'],
        'project3': ['A proposta é criar uma discoteca móvel, que poderá circular por diferentes bairros da cidade, levando a diversão a várias comunidades. O projeto incluirá uma pista de dança iluminada e um sistema de som de alta qualidade, além de contar com DJs locais para trazer diferentes estilos musicais. A ideia é promover eventos semanais para reviver o espírito dos anos 70, com sessões especiais de "Noites Retrô", onde os participantes poderão compartilhar suas histórias e músicas favoritas.'],
        'project4': ['O grupo 5 desenvolveu uma experiência imersiva em fliperamas clássicos, onde as máquinas foram restauradas para seu funcionamento original. O espaço contará com uma coleção de jogos históricos, como Pac-Man, Space Invaders e Donkey Kong, todos reprogramados para uma jogabilidade autêntica. Além disso, os visitantes poderão conhecer a história do fliperama e como essas máquinas influenciaram a cultura dos videogames e da tecnologia durante as últimas décadas.'],
        'project5': ['O grupo 6 propõe um fliperama moderno, que mistura nostalgia e inovação. Serão restaurados clássicos dos anos 80 e 90, mas com o acréscimo de tecnologias atuais, como telas de toque e integração com realidade aumentada. Além disso, haverá um campeonato mensal para jogadores de diferentes idades, promovendo a interação entre gerações. O projeto visa não só resgatar a cultura do fliperama, mas também criar novas memórias, proporcionando uma experiência divertida e inclusiva.'],
        'project6': ['Este projeto cria um fliperama temático com áreas dedicadas a diferentes décadas dos jogos eletrônicos. O espaço será dividido em seções, cada uma representando uma era dos videogames: dos anos 70 até os dias atuais. A proposta inclui a criação de torneios semanais e desafios com prêmios para os campeões, incentivando a competição saudável entre os participantes. O fliperama também será um ponto de encontro para a comunidade gamer local, proporcionando uma experiência divertida e educativa.'],
    }
}

for (let i = 0; i < projectTitle.length; i++) {
    projectTitle[i].innerText = projects.title[i]; // Atualiza o título
}

for (let i = 0; i < projectText.length; i++) {
    const projectKey = `project${i + 1}`; // Gera a chave 'project1', 'project2', etc.
    projectText[i].innerText = projects.text[projectKey][0]; // Atualiza o texto correspondente
}

console.log(projectText)
console.log(projectTitle)