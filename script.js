document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('custom-cursor');
    const heartsContainer = document.getElementById('hearts-container');
    const expFill = document.getElementById('exp-fill');

    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });

        document.addEventListener('mousedown', () => {
            cursor.style.filter = "brightness(1.2)";
        });

        document.addEventListener('mouseup', () => {
            cursor.style.filter = "brightness(1)";
        });
    }

    function renderLifeBar() {
        if (!heartsContainer) return;

        heartsContainer.innerHTML = ''; 
        const maxHearts = 10;
        const currentLife = 8;

        for (let i = 0; i < maxHearts; i++) {
            const heart = document.createElement('img');
            heart.src = i < currentLife ? 'imagens/heart.png' : 'imagens/broken_heart.png';
            heart.className = 'heart-icon';
            heart.style.width = '24px';
            heart.style.height = '24px';
            heart.style.imageRendering = 'pixelated';
            heartsContainer.appendChild(heart);
        }
    }

    function updateExpBar() {
        if (!expFill) return;
        window.addEventListener('scroll', () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            expFill.style.width = scrolled + "%";
            const expLevel = document.querySelector('.exp-level');
            if (expLevel) expLevel.innerText = Math.floor(scrolled);
        });
    }

    renderLifeBar();
    updateExpBar();
});


