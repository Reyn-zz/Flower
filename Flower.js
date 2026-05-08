const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const background = document.getElementById('background');
const flowerContainer = document.getElementById('flowerContainer');
const audioBar = document.getElementById('audioBar');
const bgMusic = document.getElementById('bgMusic');

if (noBtn) {
    const moveNoBtn = () => {
        const left = 12 + Math.random() * 76;
        const top = 20 + Math.random() * 60;
        noBtn.style.left = `${left}%`;
        noBtn.style.top = `${top}%`;
    };
    noBtn.addEventListener('mouseenter', moveNoBtn);
    noBtn.addEventListener('click', (event) => {
        event.preventDefault();
        moveNoBtn();
    });
    window.addEventListener('resize', () => {
        noBtn.style.left = '58%';
        noBtn.style.top = '60%';
    });
}
if (yesBtn && background && flowerContainer) {
    yesBtn.addEventListener('click', () => {
        noBtn.style.display = 'none';
        yesBtn.style.display = 'none';
        flowerContainer.classList.add('visible');
        if (audioBar) {
            audioBar.style.display = 'block';
        }
        if (bgMusic) {
            bgMusic.loop = true;
            bgMusic.play().catch(() => {
                // play may fail if browser blocks it; controls remain so user can start it manually
            });
        }
    });
}