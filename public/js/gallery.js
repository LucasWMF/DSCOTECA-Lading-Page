const gallery = [
    {
        src: "/image/imagem5.jpeg",
        alt: "Imagem 5",
        instagram: "https://www.instagram.com/instagram1/",
        largeY: true,
        largeX: true
    },
    {
        src: "/image/imagem1.jpeg",
        alt: "Imagem 1",
        instagram: "https://www.instagram.com/weareams/",
        largeY: false,
        largeX: false
    },
    {
        src: "/image/imagem2.jpeg",
        alt: "Imagem 2",
        instagram: "https://www.instagram.com/instagram1/",
        largeY: false,
        largeX: false
    },
    {
        src: "/image/imagem3.jpeg",
        alt: "Imagem 3",
        instagram: "https://www.instagram.com/instagram3/",
        largeY: false,
        largeX: false
    },
    {
        src: "/image/imagem4.jpeg",
        alt: "Imagem 4",
        instagram: "https://www.instagram.com/weareams/",
        largeY: false,
        largeX: false
    },
    {
        src: "/image/imagem6.jpeg",
        alt: "Imagem 6",
        instagram: "https://www.instagram.com/instagram3/",
        largeY: false,
        largeX: false
    },
    {
        src: "/image/imagem7.jpeg",
        alt: "Imagem 7",
        instagram: "https://www.instagram.com/instagram3/",
        largeY: true,
        largeX: false
    },
    // Adicione mais imagens conforme necessário
];

// Seleciona elementos do modal
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const caption = document.getElementById('caption');
const instagramLink = document.getElementById('instagram');
const downloadLink = document.getElementById('downloadLink');

// Cria elementos de imagem dinamicamente e adiciona ao DOM
gallery.forEach(item => {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.className = 'gallery-item'; // Classe padrão

    // Adiciona classes largeY ou largeX conforme necessário
    if (item.largeY) {
        img.classList.add('largeY');
    }
    if (item.largeX) {
        img.classList.add('largeX');
    }

    // Adiciona evento de clique para abrir o modal
    img.addEventListener('click', () => {
        modal.style.display = 'flex'; // Exibe o modal
        modalImage.src = img.src; // Define a imagem do modal
        caption.innerText = img.alt; // Define a legenda
        instagramLink.href = item.instagram; // Define o link do Instagram
        downloadLink.href = img.src; // Define o link para download
    });

    // Adiciona a imagem à galeria
    document.querySelector('.gallery').appendChild(img);
});

// Evento para fechar o modal
document.getElementById('close').addEventListener('click', () => {
    modal.style.display = 'none'; // Fecha o modal
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (event) => {
    if (!modalImage.contains(event.target) && event.target !== downloadLink && event.target !== instagramLink) {
        modal.style.display = 'none'; // Fecha o modal
    }
});
