<!DOCTYPE html>
<html lang="pt-br">
<!-- <?php
        // echo '<h1>Teste</h1>';
        ?> -->

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2°DS-AMS | EPA 2024</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/root.css">
    <link rel="icon" href="/image/logo.png">
</head>

<body>
    <div class="container">
        <div class="nav-container">

            <nav class="navbar-content">
                <a class="navbar-logo" href="#home">
                    <img src="/image/logo.png" alt="">
                    <h2 class="dscoteca">DSCOTECA</h2>
                </a>

                <div class="navbar">
                    <ul>
                        <li class="nav-item"><a href="#sponsor" title="Teste">Patrocinadores</a></li>
                        <li class="nav-item"><a href="#projects">Projetos</a></li>
                        <li class="nav-item"><a href="#gallery">Galeria</a></li>
                        <li class="nav-item"><a href="#footer">Footer</a></li>
                        <!-- <li class="nav-item"><a href="#feedback">Feedbacks</a></li> -->
                    </ul>
                </div>

                <script>
                    document.addEventListener('DOMContentLoaded', function() {
                        const navContainer = document.querySelector('.nav-container');
                        const nav = document.querySelector('nav');
                        const button = document.querySelector('.button_res i');
                        const navRes = document.querySelector('.nav_res');

                        // Função para rolar até a seção desejada
                        function scrollToSection(selector) {
                            const section = document.querySelector(selector);
                            const navHeight = nav.offsetHeight;

                            window.scrollTo({
                                top: section.offsetTop - navHeight,
                                behavior: 'smooth'
                            });
                        }

                        // Adiciona evento de clique na navbar
                        document.querySelector('.navbar').addEventListener('click', function(event) {
                            const target = event.target.closest('a'); // Verifica se o clique foi em um link
                            if (target) {
                                event.preventDefault(); // Impede o comportamento padrão do link
                                const href = target.getAttribute('href'); // Pega o atributo href
                                scrollToSection(href); // Chama a função scrollToSection com o ID correspondente
                            }
                        });

                        // Evento para rolar até a seção 'home' se necessário
                        scrollToSection('#home');
                    });
                </script>

                <div class="navbar_res">
                    <button class="button_res">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>

            </nav>
            <nav class="nav_res disable">
                <ul>
                    <li class="nav-item">
                        <a href="#sponsor" title="Teste">Patrocinadores</a>
                    </li>
                    <li class="nav-item">
                        <a href="#projects">Projetos</a>
                    </li>
                    <li class="nav-item">
                        <a href="#gallery">Galeria</a>
                    </li>
                    <li class="nav-item">
                        <a href="#footer">Footer</a>
                    </li>
                    <!-- <li class="nav-item"> -->
                    <!-- <a href="#feedback">Feedbacks</a> -->
                    <!-- </li> -->
                </ul>
            </nav>

            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    const nav = document.querySelector('nav');

                    // Função para rolar até a seção desejada
                    function scrollToSection(selector) {
                        const section = document.querySelector(selector);
                        const navHeight = nav.offsetHeight;

                        window.scrollTo({
                            top: section.offsetTop - navHeight,
                            behavior: 'smooth'
                        });
                    }

                    // Adiciona evento de clique na navbar principal
                    document.querySelector('.navbar').addEventListener('click', function(event) {
                        const target = event.target.closest('a'); // Verifica se o clique foi em um link
                        if (target) {
                            event.preventDefault(); // Impede o comportamento padrão do link
                            const href = target.getAttribute('href'); // Pega o atributo href
                            scrollToSection(href); // Chama a função scrollToSection com o ID correspondente
                        }
                    });

                    // Adiciona evento de clique na navbar responsiva
                    document.querySelector('.nav_res').addEventListener('click', function(event) {
                        const target = event.target.closest('a'); // Verifica se o clique foi em um link
                        if (target) {
                            event.preventDefault(); // Impede o comportamento padrão do link
                            const href = target.getAttribute('href'); // Pega o atributo href
                            scrollToSection(href); // Chama a função scrollToSection com o ID correspondente
                        }
                    });

                    // Evento para rolar até a seção 'home' se necessário
                    scrollToSection('#home');
                });
            </script>
        </div>

        <header class="header-content" id="home">

            <div class="left">
                <div class="letf-texts">
                    <h1 class="start-text">2°DS-AMS </h1>
                    <h1 class="start-text">APRESENTA</h1>
                    <h1 class="dscoteca">DSCOTECA</h1>
                    <p>O 2° DS-AMS apresentará o projeto <a href="#projects">"DSCOTECA"</a> nos dias 22, 23 e 24 de
                        outubro, das 14h às 17h,
                        combinando discoteca e fliperama, e compartilhando conhecimentos do curso de Arduino.</p>
                </div>
            </div>
            <div class="right">
                <img src="/image/globo.png" alt="">
            </div>

        </header>

        <main class="main-content">
            <section class="main-section sponsor" id="sponsor">
                <h1>Patrocinadores</h1>
                <div class="sponsor-content">
                    <div class="logo1">
                        <!-- <a href="#" target="_blank"> -->
                        <img src="/image/cd sant'areia.png" alt="Logo 1">
                        <!-- </a> -->
                    </div>
                    <div class="logo2">
                        <!-- <a href="#" target="_blank"> -->
                        <img src="/image/mercado américa.png" alt="Logo 2">
                        <!-- </a> -->
                    </div>
                    <div class="logo3">
                        <!-- <a href="#" target="_blank"> -->
                        <img src="/image/niggaz.png" alt="Logo 3">
                        <!-- </a> -->
                    </div>
                    <div class="logo4">
                        <!-- <a href="https://armazemnaturalcereais.com.br" target="_blank"> -->
                        <img src="https://armazemnaturalcereais.com.br/wp-content/uploads/2020/11/cropped-logo-topo.png" alt="Logo 4">
                        <!-- </a> -->
                    </div>
                    <div class="logo5">
                        <!-- <a href="#" target="_blank"> -->
                        <img src="/image/nine.png" alt="Logo 5">
                        <!-- </a> -->
                    </div>
                    <div class="logo6">
                        <!-- <a href="#" target="_blank"> -->
                        <img src="/image/deluxe.png" alt="Logo 5">
                        <!-- </a> -->
                    </div>
                </div>
            </section>

            <section class="main-section projects" id="projects">
                <div class="right-effect">

                </div>
                <h1 class="projects-title">Projetos</h1>
                <div id="projects-content">
                    <script src="/JS/projects.js"></script>
                </div>

                <!-- <div class="project-item">
                        <h1 class="h1-project"></h1>
                        <p class="p-project"></p>
                    </div>
                    <div class="project-item">
                        <h1 class="h1-project"></h1>
                        <p class="p-project"></p>
                    </div>
                    <div class="project-item">
                        <h1 class="h1-project"></h1>
                        <p class="p-project"></p>
                    </div>
                    <div class="project-item">
                        <h1 class="h1-project"></h1>
                        <p class="p-project"></p>
                    </div>
                    <div class="project-item">
                        <h1 class="h1-project"></h1>
                        <p class="p-project"></p>
                    </div>
                    <div class="project-item">
                        <h1 class="h1-project"></h1>
                        <p class="p-project"></p>
                    </div> -->
            </section>

            <div class="gallery-content" id="gallery">
                <section class="main-section gallery-content">
                    <div class="gallery-content-text">
                        <h1>GALERIA DE FOTOS</h1>
                        <div style="gap: 1.25em; display:flex; flex-direction: column;">
                            <p>Quer adicionar sua foto nesse mural? Nos envie via <a href="https://www.instagram.com/epa_2ds_ams/" target="_blank">instagram</a> que iremos adicionar aqui.</p>
                            <p>Ao enviar sua foto, você concorda em autorizar a publicação e o uso da imagem em nosso site, sem fins lucrativos. As imagens podem ser baixadas por qualquer visitante do site. Você pode solicitar a remoção da sua imagem a qualquer momento. Agradecemos pela sua colaboração!</p>
                            <p>Basta clicar nas imagens para os botões aparecerem</p>
                            <div class="tutorial">
                                <p><i class="fa-solid fa-xmark"></i> | Fechar Modal (ou aperte ESC)</p>
                                <p>
                                    <i class="fa-brands fa-instagram"></i> | Abrir instagram da pessoa que enviou a foto (ou aperte Ctrl + I)
                                </p>
                                <p> <i class="fa-solid fa-download"></i> | Fazer Dowload da Foto (ou aperte Ctrl + D)</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery">
                        <!-- <img src="/image/imagem2.jpeg" alt="Imagem 2" class="gallery-item largeX largeY">
                        <img src="/image/imagem1.jpeg" alt="Imagem 1" class="gallery-item">
                        <img src="/image/imagem3.jpeg" alt="Imagem 3" class="gallery-item">
                        <img src="/image/imagem4.jpeg" alt="Imagem 4" class="gallery-item">
                        <img src="/image/imagem5.jpeg" alt="Imagem 5" class="gallery-item">
                        <img src="/image/imagem6.jpeg" alt="Imagem 6" class="gallery-item">
                        <img src="/image/imagem7.jpeg" alt="Imagem 7" class="gallery-item largeY">
                        <img src="/image/imagem5.jpeg" alt="Imagem 5" class="gallery-item">
                        <img src="/image/imagem6.jpeg" alt="Imagem 6" class="gallery-item">
                        <img src="/image/imagem5.jpeg" alt="Imagem 5" class="gallery-item">
                        <img src="/image/imagem6.jpeg" alt="Imagem 6" class="gallery-item"> -->
                    </div>

                    <div id="modal" class="modal">
                        <span class="close" id="close"><i class="fa-solid fa-xmark"></i></span>
                        <img class="modal-content" id="modalImage" alt="Imagem tela cheia">
                        <div id="caption"></div>
                        <a id="instagram" href="" class="instagram-button-owner" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a id="downloadLink" href="#" download class="download-button"><i class="fa-solid fa-download"></i></a>
                    </div>

                    <script src="/js/gallery.js"></script>

                </section>

                <!-- <section class="main-section gallery-content2">
                    <h1>GALERIA DOS VISITANTES</h1>

                    <div class="gallery">
                        <div class="image"></div>
                        <div class="image"></div>
                        <div class="image"></div>
                        <div class="image"></div>
                        <div class="image"></div>
                    </div>

                </section> -->
            </div>


            <!-- <section class="main-section feedback" id="feedback">
                <h1>Faça seu Feedback</h1>
                <form action="" class="feedback-form" disabled>
                    <label for="name">
                        <p class="title-form">Nome Completo</p>
                        <p>Ao responder, seu nome será registrado no nosso banco de dados e aparecerá junto com os outros feedbacks logo abaixo desse formulário.</p>
                    </label>
                    <input id="name" type="text">

                    <label for="rating">Avalie</label>
                    <div class="star-rating">
                        <input type="radio" name="rating" id="star5" value="5">
                        <label for="star5"><i class="fas fa-star"></i></label>

                        <input type="radio" name="rating" id="star4" value="4">
                        <label for="star4"><i class="fas fa-star"></i></label>

                        <input type="radio" name="rating" id="star3" value="3">
                        <label for="star3"><i class="fas fa-star"></i></label>

                        <input type="radio" name="rating" id="star2" value="2">
                        <label for="star2"><i class="fas fa-star"></i></label>

                        <input type="radio" name="rating" id="star1" value="1">
                        <label for="star1"><i class="fas fa-star"></i></label>
                    </div>

                    <label for="message">Fale sobre o que achou do projeto</label>
                    <textarea id="message" name="message" maxlength="500" oninput="updateCounter()"></textarea>
                    <p id="char-count">0/500 caracteres</p>

                    <script>
                        function updateCounter() {
                            const message = document.getElementById('message');
                            const charCount = document.getElementById('char-count');
                            const maxLength = 500;
                            const remaining = message.value.length;

                            charCount.textContent = `${remaining}/500 caracteres`;
                        }
                    </script>

                    <input type="submit" class="form-submit">
                </form>
            </section>
            <section class="main-section feedback-cards">
                <h1>Feedbacks</h1>
                <div class="cards-content">
            </div>
            </section>
        </main> -->

            <footer id="footer" class="footer-content">
                <h1>EPA 2024</h1>
                <h1>DSCOTECA - 2°DS-AMS</h1>
                <a href="https://www.instagram.com/epa_2ds_ams/" class="instagram-button" target="_blank">
                    <i class="fa-brands fa-instagram"></i> Siga-nos no Instagram
                </a>
            </footer>

            <?php
            // $PGHOST = 'ep-royal-frost-a4kh0xfk-pooler.us-east-1.aws.neon.tech';
            // $PGUSER = 'DSCOTECA_owner';
            // $PGPASSWORD = 'VJqgRHc2udj5';
            // $PGDATABASE = 'DSCOTECA';

            // $conn = new mysqli($PGHOST, $PGUSER, $PGPASSWORD, $PGDATABASE);

            // if ($conn->connect_error) {
            //     die("Conexão falhou: " . $conn->connect_error);
            // }

            // echo "Conexão bem-sucedida!";

            ?>


    </div>

</body>

</html>

<script src="/JS/main.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>