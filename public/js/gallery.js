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
    },
    // Adicione mais imagens conforme necessário
];

// Seleciona elementos do modal
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const caption = document.getElementById('caption');
const instagramLink = document.getElementById('instagram');
const downloadLink = document.getElementById('downloadLink');
const instagramUserInput = document.getElementById('instagramUser');

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

        // Obtém o nome de usuário do input e constrói o link do Instagram
        const instagramUser = instagramUserInput.value.trim();
        if (instagramUser) {
            instagramLink.href = `https://www.instagram.com/${instagramUser}/`; // Define o link do Instagram
        } else {
            instagramLink.href = `https://www.instagram.com/${item.instagramUser}/`; // Define o link do Instagram padrão
        }

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