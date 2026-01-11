/**
 * AQUINOZ.py - Script Completo de Interatividade
 * Inclui: Cursor, Barra de Vida (Hearts) e Barra de XP
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos da Interface
    const cursor = document.getElementById('custom-cursor');
    const heartsContainer = document.getElementById('hearts-container');
    const expFill = document.getElementById('exp-fill');

    // --- LÓGICA DO CURSOR (PICARETA) ---
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            // Move o cursor usando a posição do mouse na janela (clientX/Y)
            // O transform: translate3d é o método mais suave e performático
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });

        // Animação de "Minerar" ao clicar
        document.addEventListener('mousedown', () => {
            cursor.style.transition = "transform 0.05s ease-in";
            // Aplica a rotação mantendo a posição atual do mouse
            cursor.style.filter = "brightness(1.2)";
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transition = "transform 0.1s ease-out";
            cursor.style.filter = "brightness(1)";
        });
    }

    // --- LÓGICA DA BARRA DE VIDA (HEARTS) ---
    function renderLifeBar() {
        if (!heartsContainer) return;

        heartsContainer.innerHTML = ''; // Limpa antes de gerar para evitar bugs
        
        const maxHearts = 10;   // Total de slots de corações
        const currentLife = 8;  // Quantos corações cheios (ex: 8 de 10)

        for (let i = 0; i < maxHearts; i++) {
            const heart = document.createElement('img');
            
            // Define se o coração é cheio ou quebrado/vazio
            if (i < currentLife) {
                heart.src = 'imagens/heart.png'; 
            } else {
                heart.src = 'imagens/broken_heart.png';
            }

            heart.className = 'heart-icon';
            // Estilo inline para garantir alinhamento caso o CSS falhe
            heart.style.width = '24px';
            heart.style.height = '24px';
            heart.style.imageRendering = 'pixelated';
            
            heartsContainer.appendChild(heart);
        }
    }

    // --- LÓGICA DA BARRA DE XP (SCROLL) ---
    function updateExpBar() {
        if (!expFill) return;

        window.addEventListener('scroll', () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            
            expFill.style.width = scrolled + "%";
            
            // Opcional: Atualiza o número do nível se houver um elemento .exp-level
            const expLevel = document.querySelector('.exp-level');
            if (expLevel) {
                expLevel.innerText = Math.floor(scrolled);
            }
        });
    }

    // --- INICIALIZAÇÃO ---
    renderLifeBar();
    updateExpBar();
    console.log("Sistema Minecraft de Aquinoz: Online");
});

// Efeito de som opcional ao clicar nos botões
function playClickSound() {
    const audio = new Audio('sons/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(e => console.log("Áudio bloqueado pelo navegador até interação do usuário."));
}

// Adiciona o som a todos os botões do site
document.querySelectorAll('.mc-button, .mc-button-sm').forEach(button => {
    button.addEventListener('click', playClickSound);
});