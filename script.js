// Script para carregar mais postagens ao clicar no botão "Carregar mais"
document.addEventListener("DOMContentLoaded", function () {
    const loadMoreBtn = document.querySelector(".load-more-btn");
    const container = document.querySelector(".container");
  
    // Simulação de novas postagens
    const newPosts = `
      <article class="box">
        <div class="profile-info">
          <img src="images/fofo.jpg" alt="Foto de perfil" class="profile-pic">
          <span class="profile-name">@henriquearaujooficial</span>
        </div>
        <figure class="post-image">
          <img src="images/FotoInsta.png" alt="Postagem do Instagram">
        </figure>
        <footer class="post-footer">
          <a href="https://www.instagram.com/henriquearaujooficial/" class="view-more">Ver mais no Instagram</a>
          <div class="social-icons">
            <span class="heart-icon">❤️</span>
            <span class="message-icon">💬</span>
            <span class="share-icon">🔗</span>
          </div>
        </footer>
      </article>
    `;

    // Evento para carregar mais postagens
    loadMoreBtn.addEventListener("click", function () {
        for (let i = 0; i < 3; i++) {
            container.insertAdjacentHTML('beforeend', newPosts);
        }
    });
});

// Script para rolar suavemente até a seção do banner ao clicar em "Saiba Mais"
const saibaMaisBtn = document.querySelector('.saiba-mais-btn');
saibaMaisBtn.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.banner-container').scrollIntoView({
        behavior: 'smooth'
    });
});
