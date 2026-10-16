let currentLang = 'en';
let userName = "Helani";
let noCount = 0;
let yesBtnScale = 1;
let noBtnScale = 1;

// Caricamento dei file audio
const meowAudio = new Audio('cat-sounds/cat-meow.mp3');
const purrAudio = new Audio('cat-sounds/cat-purr.mp3');

purrAudio.loop = true;
let isCatMoving = false;

// Imposta la data di default in modo sicuro una volta caricato il DOM
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('datePicker');
    if (dateInput) {
        dateInput.valueAsDate = new Date();
    }
});

const translations = {
    en: {
        s1Title: "Hello! 🌸",
        s1Subtitle: "I have a tiny surprise for you. What's your name?",
        s1Btn: "Let's Start ✨",
        s2Title: "Plans for us, {name}? 💕",
        s2Subtitle: "Would you like to go out for a special ice cream date with me?",
        yesBtn: "YES! 💖",
        noBtn: "No 😜",
        noMessages: ["Are you sure? 🥺", "Think about it! 💭", "Look at YES growing! 😉", "Come on, ice cream! 🍦", "You can't click me! 😜"],
        s3Title: "I knew you'd say yes! 🥰",
        s3Subtitle: "Pack your heart, our next memory is waiting...",
        opt1: "Reunion Ice Cream", opt2: "Endless Hugs", opt3: "Cozy Kitty Time",
        calLabel: "Select a day for our date: 📅",
        envTitle: "Click to open your secret note & Polaroid! ✉️",
        letterText: `"Every moment with you brings a smile to my face. Distance means so little when someone means so much!"`,
        s3Btn: "Enter Your Garden 🌺",
        s4Title: "A garden just for you, {name}! 🌸",
        s4Subtitle: "Click on the screen to bloom flowers, or pet the kitty below!",
        s4Btn: "Bloom a Flower 🌼",
        purrSounds: ["Purr... 💕", "Meow! 🌸", "Prrr... 🥰", "Meow meow! 🐾"],
        counterText: "Flowers bloomed: ",
        orbTitle: "🔮 Fortune & De-Stress Machine",
        orbDefault: "Click the orb for a sweet fortune & relax vibe!",
        fortunes: [
            "Destiny says: You owe me a kiss today! 😘",
            "Prediction: A day filled with smiles and infinite ice cream! 🍦",
            "The stars aligned: Best date ever coming soon! ✨",
            "Outcome: 100% chance of cat cuddles and happiness! 🐱"
        ],
        actFeedback: {
            icecream: "🍦 Gelato & endless hugs from Italy are waiting for you!",
            flowers: "🌸 Long walk together holding hands, recovering lost time!",
            cat: "🐱 Cuddles, purrs, and cozy relax time with kitties!"
        },
        loveToasts: ["You make me smile ✨", "So sweet! 💕", "Beautiful! 🌸", "My favorite! 🥰"]
    },
    singlish: {
        s1Title: "Ayubowan! 🌸",
        s1Subtitle: "Mata podi surprise ekak thiyenawa. Oyage nama mokadda?",
        s1Btn: "Patan gamu ✨",
        s2Title: "Apita plans thiyenawada, {name}? 💕",
        s2Subtitle: "Mawath ekka special ice cream date ekakata yanna kamathi da?",
        yesBtn: "OW! 💖",
        noBtn: "Baha 😜",
        noMessages: ["Sureda? 🥺", "Poddak hithanna! 💭", "Baha kiyanna epa! 😱", "Aney YES click karanna! 😉", "Oyatha baa mawa click karanna! 😜"],
        s3Title: "Man denagena hitiya ow kiyawi kiyala! 🥰",
        s3Subtitle: "Ape ilanga muna gahena dawasath langai...",
        opt1: "Ice Cream", opt2: "Adaren Inna", opt3: "Poocho Ekka",
        calLabel: "Ape date ekata dawasak thoranna: 📅",
        envTitle: "Podi secret note ekak thiyenawa, click karanna! ✉️",
        letterText: `"Oya ekka inna hama mohothakama mata godak sathutui. Distance means so little when someone means so much!"`,
        s3Btn: "Garden ekata yamu 🌺",
        s4Title: "{name} ta witharakma garden ekak! 🌸",
        s4Subtitle: "Screen eka touch karala mal wawanna, poosawath poddak muththu karanna!",
        s4Btn: "Malak Pop Karanna 🌼",
        purrSounds: ["Purr... 💕", "Meow! 🌸", "Prrr... 🥰", "Meow meow! 🐾"],
        counterText: "Mal pipuna: ",
        orbTitle: "🔮 Anagatha Pilibanda Hithanna",
        orbDefault: "Orb eka click karala balanna!",
        fortunes: [
            "Aney Ada mata kiss ekak denna wenawa! 😘",
            "Ada dawasa godak sathutin inna puluwan! 🍦",
            "Ape date eka supirima ekak wei! ✨",
            "Poocho ekka godak adaren inna puluwan! 🐱"
        ],
        actFeedback: {
            icecream: "🍦 Ice cream bonawa! Oyage kamathima flavor eka mokadda?",
            flowers: "🌸 Lassanama mal garden ekaka awidinnang yamu!",
            cat: "🐱 Poochanta adare karala sathutin inna thama thiyenne!"
        },
        loveToasts: ["Godak adarei 💕", "Lassanai ✨", "Supiri! 🌸", "Hitha sathutui 🥰"]
    },
    si: {
        s1Title: "ආයුබෝවන්! 🌸",
        s1Subtitle: "මා ළඟ පොඩි සප්‍රයිස් එකක් තියෙනවා. ඔයාගේ නම මොකක්ද?",
        s1Btn: "පටන් ගමු ✨",
        s2Title: "{name}, අපිට ඩේට් එකක් යමුද? 💕",
        s2Subtitle: "මාත් එක්ක ලස්සන අයිස්ක්‍රීම් ඩේට් එකකට යන්න කැමතිද?",
        yesBtn: "ඔව්! 💖",
        noBtn: "බෑ 😜",
        noMessages: ["ෂුවර්ද? 🥺", "පොඩ්ඩක් හිතන්න! 💭", "බෑ කියන්න එපා! 😱", "අනේ YES ක්ලික් කරන්න! 😉", "ඔයාට බෑ මාව ක්ලික් කරන්න! 😜"],
        s3Title: "මං දැනන් හිටියා ඔව් කියනවා කියලා! 🥰",
        s3Subtitle: "අපේ ඊළඟ සුන්දර මතකය ළඟදීම...",
        opt1: "අයිස්ක්‍රීම්", opt2: "ආදරණීය වැළඳගැනීම්", opt3: "පූසෝ",
        calLabel: "අපේ ඩේට් එකට දවසක් තෝරන්න: 📅",
        envTitle: "ඔයාට ආදරණීය පණිවිඩයක්, ක්ලික් කරන්න! ✉️",
        letterText: `"ඔයා එක්ක ඉන්න හැම මොහොතකම මට ගොඩක් සතුටුයි. දුර කියන්නේ ප්‍රශ්නයක් නෙවෙයි ආදරේ තියෙනවා නම්!"`,
        s3Btn: "මල් වත්තට යමු 🌺",
        s4Title: "{name} ට විතරක්ම මල් වත්තක්! 🌸",
        s4Subtitle: "ස්ක්‍රීන් එක ටච් කරලා මල් පිපෙන්න අරින්න, පූසව අතගාන්න!",
        s4Btn: "මලක් පිපෙන්න අරින්න 🌼",
        purrSounds: ["Purr... 💕", "මියාෆ්! 🌸", "Prrr... 🥰", "මියාෆ් මියාෆ්! 🐾"],
        counterText: "පිපුණු මල්: ",
        orbTitle: "🔮 අනාගතය ගැන අනාවැකිය",
        orbDefault: "ස්පටික බෝලය ක්ලික් කරන්න!",
        fortunes: [
            "අද මට ලස්සන හාදුවක් දෙන්න වෙනවා! 😘",
            "අයිස්ක්‍රීම් එක්ක ගොඩක් සතුටු හවසක්! 🍦",
            "අපේ ඩේට් එක ගොඩක් ලස්සන එකක් වෙයි! ✨",
            "පූසෝ එක්ක ආදරෙන් ඉන්න ලස්සන දවසක්! 🐱"
        ],
        actFeedback: {
            icecream: "🍦 අයිස්ක්‍රීම් බොමු! ඔයා ආසම ෆ්ලේවර් එක මොකක්ද?",
            flowers: "🌸 ලස්සන මල් වත්තක ඇවිදින්න යමු!",
            cat: "🐱 පූසෝ එක්ක ආදරෙන් සෙල්ලම් කරමු!"
        },
        loveToasts: ["ගොඩක් ආදරෙයි 💕", "ලස්සනයි ✨", "සුපිරි! 🌸", "සතුටුයි 🥰"]
    }
};

let currentActivityType = 'icecream';

function selectOption(card, type) {
    document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    currentActivityType = type;

    const feedback = document.getElementById('activityBox');
    if (feedback) {
        feedback.style.display = 'block';
        feedback.textContent = translations[currentLang].actFeedback[type];
    }
}

// Funzione setLanguage "Safe": non fallisce se un elemento HTML non esiste
function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.top-btn').forEach(btn => {
        if (btn.id.startsWith('lang-')) btn.classList.remove('active');
    });
    
    const activeLangBtn = document.getElementById(`lang-${lang}`);
    if (activeLangBtn) activeLangBtn.classList.add('active');

    const t = translations[lang];

    const safeSetText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    safeSetText('s1-title', t.s1Title);
    safeSetText('s1-subtitle', t.s1Subtitle);
    safeSetText('s1-btn', t.s1Btn);

    safeSetText('s2-title', t.s2Title.replace('{name}', userName));
    safeSetText('s2-subtitle', t.s2Subtitle);
    safeSetText('yesBtn', t.yesBtn);
    safeSetText('noBtn', t.noBtn);

    safeSetText('s3-title', t.s3Title);
    safeSetText('s3-subtitle', t.s3Subtitle);
    safeSetText('opt1', t.opt1);
    safeSetText('opt2', t.opt2);
    safeSetText('opt3', t.opt3);
    safeSetText('calLabel', t.calLabel);
    safeSetText('env-title', t.envTitle);
    
    const letterMsg = document.querySelector('.letter-message');
    if (letterMsg) letterMsg.textContent = t.letterText;

    safeSetText('s3-btn', t.s3Btn);

    safeSetText('s4-title', t.s4Title.replace('{name}', userName));
    safeSetText('s4-subtitle', t.s4Subtitle);
    safeSetText('s4-btn', t.s4Btn);

    safeSetText('orbTitle', t.orbTitle);
    safeSetText('fortuneText', t.orbDefault);

    const activityBox = document.getElementById('activityBox');
    if (activityBox) activityBox.textContent = t.actFeedback[currentActivityType];
    
    updateCounterDisplay();
}

function goToStep2() {
    const inputEl = document.getElementById('userNameInput');
    if (inputEl) {
        const input = inputEl.value.trim();
        if (input !== "") userName = input;
    }
    
    setLanguage(currentLang);
    
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    if (step1) step1.classList.remove('active');
    if (step2) step2.classList.add('active');
    
    initNoBtn();
}

function initNoBtn() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    if (!noBtn || !yesBtn) return;

    const moveNoBtn = (e) => {
        if (e) e.preventDefault();
        noCount++;
        noBtnScale = Math.max(0.3, noBtnScale - 0.1);
        yesBtnScale += 0.22;

        yesBtn.style.transform = `scale(${yesBtnScale})`;
        noBtn.style.transform = `scale(${noBtnScale})`;

        noBtn.style.position = 'absolute';

        const t = translations[currentLang];
        const msgIndex = Math.min(noCount - 1, t.noMessages.length - 1);
        noBtn.textContent = t.noMessages[msgIndex];

        const group = document.getElementById('buttonGroup');
        if (group) {
            const rect = group.getBoundingClientRect();
            const randomX = (Math.random() - 0.5) * (rect.width - 120);
            const randomY = (Math.random() - 0.5) * (rect.height - 50);

            noBtn.style.left = `${randomX}px`;
            noBtn.style.top = `${randomY}px`;
        }
    };

    noBtn.replaceWith(noBtn.cloneNode(true));
    const newNoBtn = document.getElementById('noBtn');

    newNoBtn.addEventListener('mouseover', moveNoBtn);
    newNoBtn.addEventListener('touchstart', moveNoBtn, { passive: false });
    newNoBtn.addEventListener('click', moveNoBtn);
}

// --- GO TO STEP 3 CON ANIMAZIONE BIGLIETTO AEREO ORIZZONTALE ---
function goToStep3() {
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    if (step2) step2.classList.remove('active');
    if (step3) step3.classList.add('active');

    // Imposta il nome del passeggero sul biglietto
    const passengerEl = document.getElementById('passengerName');
    if (passengerEl) passengerEl.textContent = userName;

    // Attiva l'animazione di volo 3D del biglietto orizzontale
    const ticket = document.querySelector('.boarding-pass-horizontal');
    if (ticket) {
        ticket.style.animation = 'none';
        ticket.offsetHeight; // Reflow per resettare l'animazione
        ticket.style.animation = 'flyAndLanding 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
    }
}

// --- CALCOLO COUNTDOWN D'ATTESA ---
function updateCountdown() {
    const datePicker = document.getElementById('datePicker');
    const countdownBox = document.getElementById('countdownBox');
    if (!datePicker || !countdownBox) return;

    if (!datePicker.value) {
        countdownBox.textContent = "✈️ Select a date to calculate days left!";
        return;
    }

    const selectedDate = new Date(datePicker.value);
    const today = new Date();
    
    selectedDate.setHours(0,0,0,0);
    today.setHours(0,0,0,0);

    const diffTime = selectedDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        countdownBox.textContent = "🎉 IT'S TODAY! No more distance, finally together! 💕";
    } else if (diffDays > 0) {
        countdownBox.textContent = `⏳ Only ${diffDays} days left until I get to hug you again! 🥰`;
    } else {
        countdownBox.textContent = "✨ Counting every single day until we meet again!";
    }
}

function toggleLetter() {
    const text = document.getElementById('letterText');
    if (text) {
        text.style.display = (text.style.display === 'block') ? 'none' : 'block';
    }
}

function sendWhatsAppMessage() {
    const dateInput = document.getElementById('datePicker');
    const dateVal = dateInput ? dateInput.value : '';
    const text = encodeURIComponent(`Ciao Kevin! Ho detto SÌ sul tuo sito! 🥰 Ci vediamo il ${dateVal} per la nostra attività (${currentActivityType})! 🍦🌸✨`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function addToGoogleCalendar() {
    const dateInput = document.getElementById('datePicker');
    const dateVal = dateInput ? dateInput.value : '';
    if (!dateVal) return;
    const formattedDate = dateVal.replace(/-/g, '');
    const title = encodeURIComponent(`Appuntamento Speciale con Kevin 🍦🌸`);
    const details = encodeURIComponent(`Attività: ${currentActivityType}! Non vedo l'ora 🥰`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formattedDate}T160000Z/${formattedDate}T180000Z&details=${details}`;
    window.open(url, '_blank');
}

function revealFortune() {
    const fortunes = translations[currentLang].fortunes;
    const textEl = document.getElementById('fortuneText');
    if (textEl) {
        textEl.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];
    }
}

function goToGarden() {
    const step3 = document.getElementById('step3');
    const step4 = document.getElementById('step4');
    const homeBtn = document.getElementById('homeBtn');

    if (step3) step3.classList.remove('active');
    if (step4) step4.style.display = 'flex';
    if (homeBtn) homeBtn.style.display = 'inline-block';

    initGardenCanvas();
}

function resetToHome() {
    const step4 = document.getElementById('step4');
    const homeBtn = document.getElementById('homeBtn');
    if (step4) step4.style.display = 'none';
    if (homeBtn) homeBtn.style.display = 'none';
    
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    const step1 = document.getElementById('step1');
    if (step1) step1.classList.add('active');

    noCount = 0;
    yesBtnScale = 1;
    noBtnScale = 1;
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    if (yesBtn && noBtn) {
        yesBtn.style.transform = 'scale(1)';
        noBtn.style.transform = 'scale(1)';
        noBtn.style.position = 'relative';
        noBtn.style.left = 'auto';
        noBtn.style.top = 'auto';
    }
}

// --- INTERAZIONE TAP / CLICK E PASSEGGIATA DEL GATTO ---
function startPetting(e) {
    petAndWalkCat(e);
}

function stopPetting(e) {
    if (e) e.stopPropagation();
}

function petAndWalkCat(e) {
    if (e) e.stopPropagation();
    if (isCatMoving) return;

    isCatMoving = true;
    const container = document.getElementById('catContainer');
    const bubble = document.getElementById('purrBubble');
    const sounds = translations[currentLang].purrSounds;

    if (!container || !bubble) return;

    purrAudio.currentTime = 0;
    purrAudio.play().catch(err => console.log("Audio blocked:", err));

    if ("vibrate" in navigator) navigator.vibrate([100, 50, 100]);

    container.classList.add('purring');
    bubble.textContent = sounds[Math.floor(Math.random() * sounds.length)];
    bubble.classList.add('show');

    for (let i = 0; i < 4; i++) {
        spawnPetalOrHeart(window.innerWidth / 2 + (Math.random() - 0.5) * 120, window.innerHeight - 120);
    }

    container.classList.remove('walk-left');
    container.classList.add('walk-right');

    setTimeout(() => {
        container.classList.remove('walk-right');
        container.classList.add('walk-left');

        setTimeout(() => {
            container.classList.remove('walk-left');
            container.classList.remove('purring');
            bubble.classList.remove('show');

            purrAudio.pause();
            purrAudio.currentTime = 0;

            meowAudio.currentTime = 0;
            meowAudio.play().catch(err => console.log("Meow blocked:", err));

            isCatMoving = false;
        }, 1100);
    }, 1000);
}

let audioCtx, musicPlaying = false;
function toggleAudio() {
    const btn = document.getElementById('audioToggle');
    if (!musicPlaying) {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        musicPlaying = true;
        if (btn) btn.textContent = "🔊 Playing";
        playLullaby();
    } else {
        musicPlaying = false;
        if (btn) btn.textContent = "🎵 Music";
    }
}

function playLullaby() {
    if (!musicPlaying) return;
    const notes = [261.63, 329.63, 392.00, 523.25, 440.00, 349.23];
    let i = 0;
    const loop = setInterval(() => {
        if (!musicPlaying) { clearInterval(loop); return; }
        let osc = audioCtx.createOscillator();
        let gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[i % notes.length], audioCtx.currentTime);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 1.5);
        i++;
    }, 800);
}

let canvas, ctx;
let flowers = [];
let particles = [];
let flowerCount = 0;

function initGardenCanvas() {
    canvas = document.getElementById('gardenCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    window.addEventListener('click', (e) => {
        if (e.target.closest('.interactive-note') || e.target.closest('.cat-container') || e.target.closest('.top-controls')) return;
        addFlower(e.clientX, e.clientY);
        showLoveToast(e.clientX, e.clientY);
    });

    if (flowers.length === 0) {
        for (let i = 0; i < 8; i++) {
            const x = Math.random() * canvas.width;
            const y = canvas.height - 50 - Math.random() * 150;
            addFlower(x, y, false);
        }
    }

    animate();
}

function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Flower {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.maxSize = 22 + Math.random() * 18;
        this.currentSize = 0;
        this.petalColor = ['#ff85a1', '#ff477e', '#f72585', '#ffb703', '#ff99c8'][Math.floor(Math.random() * 5)];
        this.centerColor = '#ffea00';
        this.petals = 5 + Math.floor(Math.random() * 3);
        this.growthSpeed = 0.9 + Math.random() * 0.6;
    }

    draw() {
        if (this.currentSize < this.maxSize) this.currentSize += this.growthSpeed;

        ctx.save();
        ctx.translate(this.x, this.y);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-8, 40, 0, canvas.height - this.y);
        ctx.strokeStyle = '#2b9348';
        ctx.lineWidth = 3.5;
        ctx.stroke();

        for (let i = 0; i < this.petals; i++) {
            const angle = (Math.PI * 2 / this.petals) * i;
            const px = Math.cos(angle) * (this.currentSize * 0.75);
            const py = Math.sin(angle) * (this.currentSize * 0.75);

            ctx.beginPath();
            ctx.arc(px, py, this.currentSize * 0.55, 0, Math.PI * 2);
            ctx.fillStyle = this.petalColor;
            ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(0, 0, this.currentSize * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = this.centerColor;
        ctx.fill();

        ctx.restore();
    }
}

function addFlower(x, y, countIt = true) { 
    flowers.push(new Flower(x, y));
    if (countIt) {
        flowerCount++;
        updateCounterDisplay();
    }
}

function updateCounterDisplay() {
    const t = translations[currentLang];
    const counterEl = document.getElementById('gardenCounter');
    if (counterEl) {
        counterEl.textContent = `${t.counterText} ${flowerCount + 8} 🌸`;
    }
}

function spawnRandomFlower() {
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight - 80 - Math.random() * 180;
    addFlower(x, y);
    showLoveToast(x, y);
}

function showLoveToast(x, y) {
    const toasts = translations[currentLang].loveToasts;
    const toast = document.createElement('div');
    toast.className = 'love-toast';
    toast.textContent = toasts[Math.floor(Math.random() * toasts.length)];
    
    const leftPos = Math.min(window.innerWidth - 150, Math.max(20, x - 50));
    const topPos = Math.max(100, y - 40);
    
    toast.style.left = `${leftPos}px`;
    toast.style.top = `${topPos}px`;
    
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1500);
}

function spawnPetalOrHeart(x, y) {
    particles.push({
        x: x,
        y: y,
        size: 8 + Math.random() * 8,
        vy: -1.2 - Math.random() * 2,
        vx: (Math.random() - 0.5) * 2,
        opacity: 1,
        symbol: Math.random() > 0.4 ? '🌸' : '💖'
    });
}

function animate() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flowers.forEach(flower => flower.draw());

    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= 0.015;

        ctx.font = `${p.size}px Arial`;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillText(p.symbol, p.x, p.y);
        ctx.globalAlpha = 1;

        if (p.opacity <= 0) particles.splice(i, 1);
    }

    requestAnimationFrame(animate);
}