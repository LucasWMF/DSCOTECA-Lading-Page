const gallery = [
    {
        src: "/image/imagem5.jpeg",
        alt: "Imagem 5",
        instagramUser: "epa_2ds_ams",
        largeY: true,
        largeX: true
    },
    {
        src: "/image/imagem1.jpeg",
        alt: "Imagem 1",
        instagramUser: "epa_2ds_ams",
        largeY: false,
        largeX: false
    },
    {
        src: "/image/imagem2.jpeg",
        alt: "Imagem 2",
        instagramUser: "epa_2ds_ams",
        largeY: false,
        largeX: false
    },
    {
        src: "/image/imagem3.jpeg",
        alt: "Imagem 3",
        instagramUser: "epa_2ds_ams",
        largeY: false,
        largeX: false
    },
    {
        src: "/image/imagem4.jpeg",
        alt: "Imagem 4",
        instagramUser: "epa_2ds_ams",
        largeY: false,
        largeX: false
    },
    {
        src: "/image/imagem6.jpeg",
        alt: "Imagem 6",
        instagramUser: "epa_2ds_ams",
        largeY: false,
        largeX: false
    },
    {
        src: "/image/imagem7.jpeg",
        alt: "Imagem 7",
        instagramUser: "epa_2ds_ams",
        largeY: true,
        largeX: false
    }
];

// Seleciona elementos do modal
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const caption = document.getElementById('caption');
const instagram = document.getElementById('instagram');
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

        let instagram = `https://www.instagram.com/${item.instagramUser}/`; // Define o link do Instagram
        instagram.href = `https://www.instagram.com/${item.instagramUser}/`; // Define o link do Instagram
        // console.log(item.instagramUser)
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
    if (!modalImage.contains(event.target) && event.target !== downloadLink && event.target !== instagram) {
        modal.style.display = 'none'; // Fecha o modal
    }
});

// Atalhos de teclado
document.addEventListener('keydown', (event) => {
    // Fechar modal com ESC
    if (event.key === 'Escape') {
        modal.style.display = 'none'; // Fecha o modal
    }

    // Download com Ctrl + D
    if (event.ctrlKey && event.key.toLowerCase() === 'd') {
        event.preventDefault(); // Impede a ação padrão do navegador (favoritar página)
        downloadLink.click(); // Simula o clique no link de download
    }

    // Abrir Instagram com Ctrl + I
    if (modal.style.display === 'flex' && event.ctrlKey && event.key.toLowerCase() === 'i') {
        event.preventDefault(); // Impede a ação padrão do navegador
        // console.log('AAAA')

        // Pega o link do Instagram baseado na imagem atual do modal
        if (instagram) {
            window.open(`https://www.instagram.com/${instagram}/`, '_blank'); // Abre o link do Instagram em uma nova aba
        }
    }
});