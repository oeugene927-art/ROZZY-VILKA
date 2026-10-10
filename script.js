const navButtons = document.querySelectorAll('.nav-btn');

function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach((tab) => tab.classList.remove('active'));

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach((btn) => btn.classList.remove('active'));

    const targetTab = document.getElementById(`${tabName}-tab`);
    if (targetTab) targetTab.classList.add('active');

    const activeButton = Array.from(buttons).find((btn) => btn.dataset.tab === tabName);
    if (activeButton) activeButton.classList.add('active');
}

navButtons.forEach((button) => {
    button.addEventListener('click', () => showTab(button.dataset.tab));
});

window.addEventListener('DOMContentLoaded', () => {
    showTab('success');
});

const sweetWords = [
    'SUCCESS IS COMING ✨',
    'YOU ARE DESTINED TO SHINE 🌟',
    'YOUR DREAMS ARE VALID 💫',
    'KEEP RISING HIGH 🚀',
    'VICTORY IS YOURS 🏆',
    'BRILLIANT FUTURE AHEAD 💖',
    'YOU ARE CAPABLE 💪',
    'GO AFTER GREATNESS 🌈',
    'YOUR HARD WORK PAYS OFF 🔥',
    'SOAR TO NEW HEIGHTS 🕊️'
];

const colors = ['#1d4ed8', '#7c3aed', '#ec4899', '#fbbf24', '#a3e635', '#0ea5e9'];

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

    if (bg === '#fbbf24' || bg === '#a3e635') {
        el.style.color = '#111827';
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
    ribbon.style.boxShadow = `0 0 12px ${color}`;
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
