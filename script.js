// Tab Navigation
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const targetTab = document.getElementById(`${tabName}-tab`);
    if (targetTab) targetTab.classList.add('active');

    const activeButton = Array.from(buttons).find(btn => 
        btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabName)
    );
    if (activeButton) activeButton.classList.add('active');
}

window.addEventListener('DOMContentLoaded', () => {
    showTab('success');
});

// Success Words Array
const sweetWords = [
    "ROZZY YOU WILL SHINE ✨",
    "KCSE SUCCESS IS YOURS 🏆",
    "YOU ARE AMAZING 💖",
    "BRIGHT FUTURE AHEAD 🌟",
    "BESTIE FOR LIFE 👭",
    "YOU ARE CAPABLE 💪",
    "DESTINED FOR GREATNESS 🚀",
    "KEEP FLYING HIGH 🕊️",
    "YOUR DREAMS ARE REAL 🌈",
    "WINNER ENERGY 🔥"
];

// Color Palette
const colors = ["#1f3bff", "#ff79c6", "#ffd166", "#8efc73", "#5a2bd6", "#ff4da6"];

// Magic Trigger Function on Button Click
function triggerMagic(event) {
    const btn = event.currentTarget;
    const rect = btn.getBoundingClientRect();

    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    for (let i = 0; i < 12; i++) {
        createWord(startX, startY);
    }

    for (let j = 0; j < 16; j++) {
        createRibbon(startX, startY);
    }
}

function createWord(x, y) {
    const el = document.createElement('div');
    el.className = 'flying-word';

    el.textContent = sweetWords[Math.floor(Math.random() * sweetWords.length)];
    const bg = colors[Math.floor(Math.random() * colors.length)];
    el.style.backgroundColor = bg;

    if (bg === '#8efc73' || bg === '#ffd166') {
        el.style.color = '#111';
    }

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    const dx = (Math.random() - 0.5) * 500;
    const dy = -Math.random() * 450 - 100;
    const rot = (Math.random() - 0.5) * 60;

    el.style.setProperty('--dx', `${dx}px`);
    el.style.setProperty('--dy', `${dy}px`);
    el.style.setProperty('--rot', `${rot}deg`);

    document.body.appendChild(el);

    setTimeout(() => el.remove(), 2500);
}

function createRibbon(x, y) {
    const ribbon = document.createElement('div');
    ribbon.className = 'flying-ribbon';

    const color = colors[Math.floor(Math.random() * colors.length)];
    ribbon.style.backgroundColor = color;
    ribbon.style.boxShadow = `0 0 10px ${color}`;

    ribbon.style.left = `${x}px`;
    ribbon.style.top = `${y}px`;

    const dx = (Math.random() - 0.5) * 600;
    const dy = (Math.random() - 0.5) * 500 - 100;
    const rot = (Math.random() - 0.5) * 360;

    ribbon.style.setProperty('--dx', `${dx}px`);
    ribbon.style.setProperty('--dy', `${dy}px`);
    ribbon.style.setProperty('--rot', `${rot}deg`);

    document.body.appendChild(ribbon);

    setTimeout(() => ribbon.remove(), 2800);
}
