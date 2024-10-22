<!DOCTYPE html>
<html lang="pt-br">
<?php
    echo '<h1>Teste<h1>';
?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2°DS-AMS | EPA 2024</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/root.css">
    <link rel="icon" href="/img/logo.png">
</head>

<body>
    <div class="container">
        <div class="nav-container">

            <nav class="navbar-content">
                <a class="navbar-logo" href="#home">
                    <img src="/assets/img/logo.png" alt="">
                    <h2 class="dscoteca">DSCOTECA</h2>
                </a>

                <div class="navbar">
                    <ul>
                        <li class="nav-item"><a href="#sponsor" title="Teste">Patrocinadores</a></li>
                        <li class="nav-item"><a href="#projects">Projetos</a></li>
                        <li class="nav-item"><a href="#gallery">Galeria</a></li>
                        <li class="nav-item"><a href="#feedback">Feedbacks</a></li>
                    </ul>
                </div>

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
                        <a href="#feedback">Feedbacks</a>
                    </li>
                </ul>
            </nav>
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
                <img src="/assets/img/globo.png" alt="">
            </div>

        </header>

        <main class="main-content">
            <section class="main-section sponsor" id="sponsor">
                <h1>Patrocinadores</h1>
                <div class="sponsor-content">
                    <div class="logo1">
                        <!-- <a href="#" target="_blank"> -->
                        <img src="/assets/img/cd sant'areia.png" alt="Logo 1">
                        <!-- </a> -->
                    </div>
                    <div class="logo2">
                        <!-- <a href="#" target="_blank"> -->
                        <img src="/assets/img/mercado américa.png" alt="Logo 2">
                        <!-- </a> -->
                    </div>
                    <div class="logo3">
                        <!-- <a href="#" target="_blank"> -->
                        <img src="/assets/img/niggaz.png" alt="Logo 3">
                        <!-- </a> -->
                    </div>
                    <div class="logo4">
                        <!-- <a href="https://armazemnaturalcereais.com.br" target="_blank"> -->
                        <img src="https://armazemnaturalcereais.com.br/wp-content/uploads/2020/11/cropped-logo-topo.png" alt="Logo 4">
                        <!-- </a> -->
                    </div>
                    <div class="logo5">
                        <!-- <a href="#" target="_blank"> -->
                        <img src="/assets/img/nine.png" alt="Logo 5">
                        <!-- </a> -->
                    </div>
                    <div class="logo6">
                        <!-- <a href="#" target="_blank"> -->
                        <img src="/assets/img/deluxe.png" alt="Logo 5">
                        <!-- </a> -->
                    </div>
                </div>
            </section>

            <section class="main-section projects" id="projects">
                <div class="right-effect">

                </div>
                <h1 class="projects-title">Projetos</h1>
                <div id="projects-content">
                    <script src="/assets/js/projects.js"></script>
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
                <section class="main-section gallery-content1">
                    <h1>GALERIA DE FOTOS</h1>

                    <div class="gallery">
                        <h1>EM BREVE!</h1>
                    </div>

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


            <section class="main-section feedback" id="feedback">
                <h1>Faça seu Feedback</h1>
                <form action="" class="feedback-form" disabled>
                    <label for="name">
                        <h2>Nome Completo</h2>
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
            <!-- <section class="main-section feedback-cards">
                <h1>Feedbacks</h1>
                <div class="cards-content"> -->

            <!-- <p class="number-count">001</p> -->
            <!-- <div class="card">
                        <div class="content-user">
                            <img src="/assets/img/logo.png" alt="">
                            <div class="cards-title-name">
                                <h3 class="title-cards-user">USUÁRIO</h3>
                                <p class="card-name">NOME</p>
                            </div>
                        </div>
                        <h3 class="title-cards-note">NOTA</h3>
                        <div class="stars">
                            <i class="fas fa-star active-star"></i>
                            <i class="fas fa-star active-star"></i>
                            <i class="fas fa-star active-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h3 class="title-cards-note">AVALIAÇÃO</h3>
                        <p class="card-text">Este é um exemplo de texto que contém exatamente quinhentos caracteres com
                            espaços. A ideia é
                            mostrar como um texto longo pode ser estruturado, mantendo a contagem correta de caracteres.
                            Essa abordagem é útil em diversas situações, como em formulários de feedback ou comentários,
                            onde é necessário manter um limite específico. Ao utilizar a contagem de caracteres, podemos
                            garantir que a informação seja transmitida de maneira eficaz, sem exceder os limites
                            estabelecidos para o espaço disponível. Isso é essencial para uma comunicação clara e
                            objetiva.
                        </p>
                    </div> -->
            <!-- </div> -->
            </section>
        </main>

        <footer class="footer-content">
            <h1>EPA 2024</h1>
            <h1>DSCOTECA - 2°DS-AMS</h1>
            <a href="https://www.instagram.com/epa_2ds_ams/" class="instagram-button" target="_blank">
                <i class="fa-brands fa-instagram"></i> Siga-nos no Instagram
            </a>
        </footer>

    </div>

</body>

</html>

<script src="/JS/main.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>