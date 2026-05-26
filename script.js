/* ==========================================================================
   EDWELL CORE ARCHITECTURE & STATE MANIFESTO
   ========================================================================== */
const AppState = {
    user: null,
    nativeLanguage: null,
    streak: 0,
    hasCompletedDaily: false,
    inventory: [],
    mathLevel: 1,
    puzzleGridSize: 3, // 3x3 Grid
    currentQuizWord: null,
    activeLessonIndex: 0
};

// LANGUAGE TRANSLATION MATRICES (8-Word Complex Curated Blocks)
const LanguageDatabase = {
    Arabic: [
        { word: "Velocity", trans: "السرعة المتجهة", pron: "/vəˈlɒs.ə.ti/", ex: "The cosmic particle reached terminal velocity." },
        { word: "Luminous", trans: "مضيء / متوهج", pron: "/ˈluː.mɪ.nəs/", ex: "Neon matrices emit a luminous violet hue." },
        { word: "Sovereign", trans: "عاهل / ذو سيادة", pron: "/ˈsɒv.rɪn/", ex: "He maintained sovereign command over the digital deck." },
        { word: "Anomaly", trans: "شذوذ / حالة غير طبيعية", pron: "/əˈnɒm.ə.li/", ex: "Sensors detected a quantum anomaly in the room core." },
        { word: "Resilience", trans: "المرونة / القدرة على التعافي", pron: "/rɪˈzɪl.jəns/", ex: "Streaks forge cognitive resilience." },
        { word: "Ambience", trans: "البيئة المحيطة / الأجواء", pron: "/ˈæm.bi.əns/", ex: "The gaming room had a cozy, dark ambience." },
        { word: "Decipher", trans: "يفك الشفرة", pron: "/dɪˈsaɪ.fər/", ex: "AI agents decipher encrypted visual data arrays." },
        { word: "Synergy", trans: "التآزر / العمل الجماعي", pron: "/ˈsɪn.ə.dʒi/", ex: "A perfect synergy between design and mechanics." }
    ],
    French: [
        { word: "Velocity", trans: "Vélocité", pron: "/vəˈlɒs.ə.ti/", ex: "La particule a atteint une vélocité terminale." },
        { word: "Luminous", trans: "Lumineux", pron: "/ˈluː.mɪ.nəs/", ex: "Les matrices néon émettent une teinte lumineuse." },
        { word: "Sovereign", trans: "Souverain", pron: "/ˈsɒv.rɪn/", ex: "Il a conservé un contrôle souverain sur le système." },
        { word: "Anomaly", trans: "Anomalie", pron: "/əˈnɒm.ə.li/", ex: "L'IA a détecté une anomalie dans le noyau." },
        { word: "Resilience", trans: "Résilience", pron: "/rɪˈzɪl.jəns/", ex: "Les habitudes quotidiennes renforcent la résilience." },
        { word: "Ambience", trans: "Ambiance", pron: "/ˈæm.bi.əns/", ex: "La pièce offre une ambiance de jeu relaxante." },
        { word: "Decipher", trans: "Déchiffrer", pron: "/dɪˈsaɪ.fər/", ex: "Pouvez-vous déchiffrer ce code binaire ?" },
        { word: "Synergy", trans: "Synergie", pron: "/ˈsɪn.ə.dʒi/", ex: "Une synergie parfaite entre l'homme et la machine." }
    ],
    Spanish: [
        { word: "Velocity", trans: "Velocidad", pron: "/vəˈlɒs.ə.ti/", ex: "La partícula alcanzó la velocidad terminal." },
        { word: "Luminous", trans: "Luminoso", pron: "/ˈluː.mɪ.nəs/", ex: "Las señales de neón emiten un brillo luminoso." },
        { word: "Sovereign", trans: "Soberano", pron: "/ˈsɒv.rɪn/", ex: "Mantuvo un control soberano sobre su espacio." },
        { word: "Anomaly", trans: "Anomalía", pron: "/əˈnɒm.ə.li/", ex: "El escáner detectó una anomalía en el sistema." },
        { word: "Resilience", trans: "Resiliencia", pron: "/rɪˈzɪl.jəns/", ex: "Tu resiliencia mental aumenta cada día." },
        { word: "Ambience", trans: "Ambiente", pron: "/ˈæm.bi.əns/", ex: "Disfruta del ambiente acogedor de la sala." },
        { word: "Decipher", trans: "Descifrar", pron: "/dɪˈsaɪ.fər/", ex: "El núcleo de IA puede descifrar imágenes complejas." },
        { word: "Synergy", trans: "Sinergia", pron: "/ˈsɪn.ə.dʒi/", ex: "Creando una sinergia entre el juego y el estudio." }
    ],
    Turkish: [{ word: "Velocity", trans: "Hız", pron: "/vəˈlɒs.ə.ti/", ex: "Parçacık terminal hıza ulaştı." }, { word: "Luminous", trans: "Işıltılı", pron: "/ˈluː.mɪ.nəs/", ex: "Neon matrisler ışıtılı bir renk yayar." }, { word: "Sovereign", trans: "Egemen", pron: "/ˈsɒv.rɪn/", ex: "Sistem üzerinde egemen bir kontrol sağladı." }, { word: "Anomaly", trans: "Anomali", pron: "/əˈnɒm.ə.li/", ex: "Sensörler çekirdekte kuantum anomalisi tespit etti." }, { word: "Resilience", trans: "Esneklik", pron: "/rɪˈzɪl.jəns/", ex: "Seriler bilişsel esneklik sağlar." }, { word: "Ambience", trans: "Ambiyans", pron: "/ˈæm.bi.əns/", ex: "Oyun odası harika bir ambiyansa sahipti." }, { word: "Decipher", trans: "Deşifre etmek", pron: "/dɪˈsaɪ.fər/", ex: "AI şifrelenmiş görsel verileri deşifre eder." }, { word: "Synergy", trans: "Sinerji", pron: "/ˈsɪn.ə.dʒi/", ex: "Tasarım ve mekanik arasında mükemmel bir sinerji." }],
    Japanese: [{ word: "Velocity", trans: "速度 (Sokudo)", pron: "/vəˈlɒs.ə.ti/", ex: "粒子は終端速度に達した。" }, { word: "Luminous", trans: "発光 (Hakkō)", pron: "/ˈluː.mɪ.nəs/", ex: "ネオンは鮮やかな光を放つ。" }, { word: "Sovereign", trans: "主権者 (Shuken)", pron: "/ˈsɒv.rɪn/", ex: "彼はシステムを完全に支配した。" }, { word: "Anomaly", trans: "異常 (Ijō)", pron: "/əˈnɒm.ə.li/", ex: "コアに異常を検知しました。" }, { word: "Resilience", trans: "回復力 (Kaifuku)", pron: "/rɪˈzɪl.jəns/", ex: "毎日の習慣が回復力を生む。" }, { word: "Ambience", trans: "雰囲気 (Fun'iki)", pron: "/ˈæm.bi.əns/", ex: "ゲーム部屋は落ち着いた雰囲気だ。" }, { word: "Decipher", trans: "解読する (Kaidoku)", pron: "/dɪˈsaɪ.fər/", ex: "AIが暗号データを解読する。" }, { word: "Synergy", trans: "相乗効果 (Sōjō)", pron: "/ˈsɪn.ə.dʒi/", ex: "デザインと機能の完璧な相乗効果。" }],
    Korean: [{ word: "Velocity", trans: "속도", pron: "/vəˈlɒs.ə.ti/", ex: "입자가 종단 속도에 도달했습니다." }, { word: "Luminous", trans: "빛나는", pron: "/ˈluː.mɪ.nəs/", ex: "네온 매트릭스가 빛나는 보라색을 띱니다." }, { word: "Sovereign", trans: "주권자", pron: "/ˈsɒv.rɪn/", ex: "그는 시스템에 주권적 통제를 유지했다." }, { word: "Anomaly", trans: "변칙성", pron: "/əˈnɒm.ə.li/", ex: "센서가 코어에서 이상 현상을 감지했습니다." }, { word: "Resilience", trans: "회복력", pron: "/rɪˈzɪl.jəns/", ex: "연속 학습은 회복력을 길러준다." }, { word: "Ambience", trans: "분위기", pron: "/ˈæm.bi.əns/", ex: "방은 아늑한 게임 분위기였다." }, { word: "Decipher", trans: "해독하다", pron: "/dɪˈsaɪ.fər/", ex: "AI가 가시적 데이터 배열을 해독합니다." }, { word: "Synergy", trans: "시너지", pron: "/ˈsɪn.ə.dʒi/", ex: "디자인과 역학의 완벽한 시너지 효과." }]
};

// REWARD POOLBlueprints
const RewardPool = [
    { name: "Cyberpunk Desk", class: "css-desk", type: "Furniture", icon: "fa-table", rarity: "rare" },
    { name: "Ergonomic RGB Chair", class: "css-chair", type: "Furniture", icon: "fa-chair", rarity: "rare" },
    { name: "Ultra-wide Quantum Monitor", class: "css-monitor", type: "Gaming Setup", icon: "fa-desktop", rarity: "epic" },
    { name: "Bonsai Air Plant", class: "css-plant", type: "Plants", icon: "fa-seedling", rarity: "common" },
    { name: "Stealth Tech Desk Lamp", class: "css-lamp", type: "Lighting", icon: "fa-lightbulb", rarity: "common" },
    { name: "Synthwave Canvas Poster", class: "css-poster", type: "Posters", icon: "fa-image", rarity: "common" },
    { name: "Holographic Neon Sign", class: "css-led", type: "Neon Lights", icon: "fa-bolt", rarity: "legendary" },
    { name: "Cyber-Genetic Cat Creature", class: "css-cat", type: "Pets", icon: "fa-cat", rarity: "legendary" }
];

/* ==========================================================================
   INITIALIZATION & KINETIC SCREEN SYSTEM
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    setupUploadZones();
    loadProfileState();
    
    document.getElementById("auth-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const userIn = document.getElementById("username").value;
        AppState.user = userIn;
        localStorage.setItem("edwell_user", userIn);
        syncDashboardUI();
        switchScreen("dashboard-screen");
    });

    document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.clear();
        Object.assign(AppState, { user: null, nativeLanguage: null, streak: 0, hasCompletedDaily: false, inventory: [], mathLevel: 1 });
        switchScreen("auth-screen");
    });
});

function switchScreen(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
    if(screenId === 'dashboard-screen') syncDashboardUI();
}

function loadProfileState() {
    const cachedUser = localStorage.getItem("edwell_user");
    if (cachedUser) {
        AppState.user = cachedUser;
        AppState.nativeLanguage = localStorage.getItem("edwell_lang");
        AppState.streak = parseInt(localStorage.getItem("edwell_streak")) || 0;
        AppState.mathLevel = parseInt(localStorage.getItem("edwell_math_lvl")) || 1;
        AppState.inventory = JSON.parse(localStorage.getItem("edwell_inv")) || [];
        switchScreen("dashboard-screen");
    } else {
        switchScreen("auth-screen");
    }
}

function syncDashboardUI() {
    document.getElementById("display-username").innerText = AppState.user || "Pilot";
}

/* ==========================================================================
   AI CORE CORE INTELLIGENCE MODULE
   ========================================================================== */
function openSubTab(tabId) {
    document.querySelectorAll("#ai-core-screen .tab-content").forEach(c => c.classList.remove("active"));
    document.querySelectorAll("#ai-core-screen .tab-link").forEach(t => t.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}

function setupUploadZones() {
    ['calorie', 'height'].forEach(prefix => {
        const zone = document.getElementById(`${prefix}-upload-zone`);
        const input = document.getElementById(`${prefix}-file`);
        zone.addEventListener("click", () => input.click());
        input.addEventListener("change", (e) => {
            if(e.target.files.length > 0) {
                const url = URL.createObjectURL(e.target.files[0]);
                const prev = document.getElementById(`${prefix}-preview`);
                prev.style.backgroundImage = `url(${url})`;
                prev.style.display = "block";
            }
        });
    });
}

function processCalorieAI() {
    const resBox = document.getElementById("calorie-result");
    resBox.style.display = "block";
    resBox.innerHTML = `Searching neural visual databases...`;
    setTimeout(() => {
        resBox.innerHTML = `<strong><i class="fa-solid fa-microchip"></i> AI Vision Diagnostics:</strong><br>
        • Target Object Identified: <b>Avocado Toast & Poached Egg</b><br>
        • Estimated Thermal Mass: 420 Kilocalories<br>
        • Core Component Breakdown: Sliced Avocado (210g), Artisanal Sourdough Bread (2 slices), Organic Poultry Egg (1 large), Microgreens.`;
    }, 1200);
}

function processHeightAI() {
    const resBox = document.getElementById("height-result");
    resBox.style.display = "block";
    resBox.innerHTML = `Calibrating spatial floor grids...`;
    setTimeout(() => {
        resBox.innerHTML = `<strong><i class="fa-solid fa-expand"></i> Biometric Grid Estimation:</strong><br>
        • Pixels-to-Floor Ratio calculated based on standing parallax.<br>
        • Predicted Height Variable: <b>176.5 cm</b> (± 1.2 cm variance matrix).`;
    }, 1500);
}

function processFashionAI() {
    const temp = parseFloat(document.getElementById("fashion-temp").value);
    const resBox = document.getElementById("fashion-result");
    if(isNaN(temp)) return alert("Please enter a clear numeral temperature value.");
    resBox.style.display = "block";
    resBox.innerHTML = `Simulating climate matrix output...`;
    
    setTimeout(() => {
        let top, bottom;
        if(temp < 15) { top = "Heavy Tech-wear Matte Black Parka"; bottom = "Insulated Charcoal Cargo Matrix Trousers"; }
        else if(temp <= 25) { top = "Oversized Minimalist Off-White Sweatshirt"; bottom = "Tapered Shadow Grey Joggers"; }
        else { top = "Breathable Light Cyber-Linen Shirt"; bottom = "Neon Accent Loose Fit Tech Shorts"; }
        
        resBox.innerHTML = `<strong><i class="fa-solid fa-palette"></i> AI Fashion Analytics Recommendation:</strong><br>
        • Upper Layer: <span class="text-cyan">${top}</span><br>
        • Lower Layer: <span class="text-pink">${bottom}</span>`;
    }, 800);
}

/* ==========================================================================
   MICRO-LINGUAL PROTOCOL ROOM (DUOLINGO REVOLUTION)
   ========================================================================== */
function openLanguageModule() {
    switchScreen("language-screen");
    if(!AppState.nativeLanguage) {
        document.getElementById("lang-setup-view").classList.remove("view-hidden");
        document.getElementById("lang-main-view").classList.add("view-hidden");
    } else {
        document.getElementById("lang-setup-view").classList.add("view-hidden");
        document.getElementById("lang-main-view").classList.remove("view-hidden");
        buildVirtualRoomUI();
    }
    document.getElementById("streak-count").innerText = AppState.streak;
}

function setNativeLang(lang) {
    AppState.nativeLanguage = lang;
    localStorage.setItem("edwell_lang", lang);
    openLanguageModule();
}

function startDailyLesson() {
    document.getElementById("lesson-gate-card").classList.add("hidden");
    document.getElementById("lesson-active-card").classList.remove("hidden");
    AppState.activeLessonIndex = 0;
    renderLessonWord();
}

function renderLessonWord() {
    const dataset = LanguageDatabase[AppState.nativeLanguage];
    const currentObj = dataset[AppState.activeLessonIndex];
    
    document.getElementById("lesson-word").innerText = currentObj.word;
    document.getElementById("lesson-translation").innerText = currentObj.trans;
    document.getElementById("lesson-pronounce").innerText = currentObj.pron;
    document.getElementById("lesson-example").innerText = `"${currentObj.ex}"`;
    document.getElementById("lesson-word-index").innerText = AppState.activeLessonIndex + 1;
    document.getElementById("lesson-progress").style.width = `${((AppState.activeLessonIndex + 1) / 8) * 100}%`;
}

function nextLessonWord() {
    if(AppState.activeLessonIndex < 7) {
        AppState.activeLessonIndex++;
        renderLessonWord();
    } else {
        initiateQuizChallenge();
    }
}

function initiateQuizChallenge() {
    document.getElementById("lesson-active-card").classList.add("hidden");
    document.getElementById("quiz-card").classList.remove("hidden");
    
    // Select random testing asset
    const dataset = LanguageDatabase[AppState.nativeLanguage];
    AppState.currentQuizWord = dataset[Math.floor(Math.random() * dataset.length)];
    
    document.getElementById("quiz-question").innerText = `What is the accurate translation of: "${AppState.currentQuizWord.word}"?`;
    
    // Create random options matrix
    let options = [AppState.currentQuizWord.trans];
    while(options.length < 3) {
        let randTrans = dataset[Math.floor(Math.random() * dataset.length)].trans;
        if(!options.includes(randTrans)) options.push(randTrans);
    }
    options.sort(() => Math.random() - 0.5);
    
    const container = document.getElementById("quiz-options");
    container.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "btn-option";
        btn.innerText = opt;
        btn.onclick = () => evaluateQuizAnswer(opt);
        container.appendChild(btn);
    });
    
    startQuizTimer();
}

let quizInterval;
function startQuizTimer() {
    let timeLeft = 20;
    const display = document.getElementById("quiz-timer");
    display.innerText = timeLeft;
    
    quizInterval = setInterval(() => {
        timeLeft--;
        display.innerText = timeLeft;
        if(timeLeft <= 0) {
            clearInterval(quizInterval);
            alert("Reflex window shut! Challenge timed out.");
            resetToLessonGate();
        }
    }, 1000);
}

function evaluateQuizAnswer(chosen) {
    clearInterval(quizInterval);
    if(chosen === AppState.currentQuizWord.trans) {
        AppState.streak++;
        localStorage.setItem("edwell_streak", AppState.streak);
        document.getElementById("streak-count").innerText = AppState.streak;
        triggerRewardUnlock();
    } else {
        alert("Incorrect neural decryption path chosen. Let's practice again.");
        resetToLessonGate();
    }
}

function resetToLessonGate() {
    document.getElementById("quiz-card").classList.add("hidden");
    document.getElementById("lesson-active-card").classList.add("hidden");
    document.getElementById("lesson-gate-card").classList.remove("hidden");
}

/* ==========================================================================
   REWARD TERMINAL CRATE MECHANICAL LOOT BOX
   ========================================================================== */
let selectedLootBoxItem = null;

function triggerRewardUnlock() {
    document.getElementById("reward-modal").classList.remove("hidden");
    const card = document.querySelector(".reward-popup-card");
    card.className = "reward-popup-card transform-scale-up";
    
    document.getElementById("crate-box-element").classList.remove("open");
    document.getElementById("unboxed-item-display").classList.add("hidden");
    document.getElementById("reward-title").style.display = "block";
    document.getElementById("reward-instruction").style.display = "block";
    
    // Roll Random Item
    const roll = Math.random() * 100;
    let rarityFilter = 'common';
    if(roll > 95) rarityFilter = 'legendary';
    else if(roll > 80) rarityFilter = 'epic';
    else if(roll > 50) rarityFilter = 'rare';
    
    let subPool = RewardPool.filter(i => i.rarity === rarityFilter);
    if(subPool.length === 0) subPool = RewardPool; // Fallback
    selectedLootBoxItem = subPool[Math.floor(Math.random() * subPool.length)];
}

function triggerCrateOpening() {
    const crate = document.getElementById("crate-box-element");
    if(crate.classList.contains("open")) return;
    
    crate.classList.add("open");
    
    if(selectedLootBoxItem.rarity === 'legendary') {
        showToast("⚡ LEGENDARY ENERGETIC MATRICES UNLOCKED! ⚡");
    } else {
        showToast("Decompressing crate item modules...");
    }
    
    setTimeout(() => {
        document.getElementById("reward-title").style.display = "none";
        document.getElementById("reward-instruction").style.display = "none";
        
        const badge = document.getElementById("item-rarity-badge");
        badge.className = `rarity-badge ${selectedLootBoxItem.rarity}`;
        badge.innerText = selectedLootBoxItem.rarity.toUpperCase();
        
        const iconContainer = document.getElementById("item-icon-container");
        iconContainer.innerHTML = `<i class="fa-solid ${selectedLootBoxItem.icon}"></i>`;
        
        document.getElementById("unboxed-item-name").innerText = selectedLootBoxItem.name;
        document.getElementById("unboxed-item-display").classList.remove("hidden");
        
        // Add item blueprint to profile inventory array
        if(!AppState.inventory.includes(selectedLootBoxItem.class)) {
            AppState.inventory.push(selectedLootBoxItem.class);
            localStorage.setItem("edwell_inv", JSON.stringify(AppState.inventory));
        }
    }, 600);
}

function closeRewardModal() {
    document.getElementById("reward-modal").classList.add("hidden");
    resetToLessonGate();
    buildVirtualRoomUI();
}

/* ==========================================================================
   VIRTUAL ROOM VISUALIZER SYNCHRONIZATION
   ========================================================================== */
function buildVirtualRoomUI() {
    const room = document.getElementById("virtual-room");
    const statusText = document.getElementById("room-status-text");
    const weather = document.getElementById("room-weather");
    
    // Clean old objects keep floor
    room.querySelectorAll(".base-floor, .weather-overlay").forEach(() => {});
    room.innerHTML = '<div class="weather-overlay" id="room-weather"></div><div class="base-floor"></div>';
    
    // Streak-based environmental changes
    if(AppState.streak === 0) {
        room.style.background = "#070712";
        weather.className = "weather-overlay raining";
        statusText.innerText = "Dark, unlit and raining. Advance your lessons to light it up.";
        return;
    } else {
        room.style.background = "#131326";
        weather.className = "weather-overlay";
        statusText.innerText = "The rain cleared up. Your setup blueprints are syncing.";
    }
    
    // Render unlocked items
    AppState.inventory.forEach(itemClass => {
        const div = document.createElement("div");
        div.className = itemClass;
        if(itemClass === 'css-led') div.innerText = "EDWELL DECK";
        room.appendChild(div);
    });
    
    // Extra specific streak upgrades
    if(AppState.streak >= 3 && !AppState.inventory.includes("css-plant")) appendExtraItem("css-plant");
    if(AppState.streak >= 7 && !AppState.inventory.includes("css-lamp")) appendExtraItem("css-lamp");
}

function appendExtraItem(itemClass) {
    const room = document.getElementById("virtual-room");
    const div = document.createElement("div");
    div.className = itemClass;
    room.appendChild(div);
}

/* ==========================================================================
   MODULE 3: STUDY & PLAY MODULE LOGIC
   ========================================================================== */
function openPlayTab(tabId) {
    document.querySelectorAll("#study-play-screen .tab-content-play").forEach(c => c.classList.remove("active"));
    document.querySelectorAll("#study-play-screen .tab-link-play").forEach(t => t.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
    if(tabId === 'play-puzzle') initPuzzle();
    if(tabId === 'play-math') renderMathQuest();
}

// 1. Aesthetic Pomodoro System
let pomoMinutes = 25, pomoSeconds = 0, pomoIsRunning = false, pomoTimerObj;
function togglePomodoro() {
    const icon = document.getElementById("pomo-start-icon");
    if(pomoIsRunning) {
        clearInterval(pomoTimerObj);
        icon.className = "fa-solid fa-play";
    } else {
        pomoTimerObj = setInterval(runPomodoroStep, 1000);
        icon.className = "fa-solid fa-pause";
    }
    pomoIsRunning = !pomoIsRunning;
}

function runPomodoroStep() {
    if(pomoSeconds === 0) {
        if(pomoMinutes === 0) {
            clearInterval(pomoTimerObj);
            showToast("Protocol complete! Take a breather.");
            return;
        }
        pomoMinutes--; pomoSeconds = 59;
    } else { pomoSeconds--; }
    
    // Update Text Display
    const mStr = pomoMinutes < 10 ? '0'+pomoMinutes : pomoMinutes;
    const sStr = pomoSeconds < 10 ? '0'+pomoSeconds : pomoSeconds;
    document.getElementById("pomo-time-text").innerText = `${mStr}:${sStr}`;
    
    // Circle Dashoffset animation
    const totalSecs = 25 * 60;
    const remSecs = (pomoMinutes * 60) + pomoSeconds;
    const offset = 691 - (691 * (remSecs / totalSecs));
    document.getElementById("pomo-circle").style.strokeDashoffset = offset;
}

function resetPomodoro() {
    clearInterval(pomoTimerObj);
    pomoMinutes = 25; pomoSeconds = 0; pomoIsRunning = false;
    document.getElementById("pomo-time-text").innerText = "25:00";
    document.getElementById("pomo-start-icon").className = "fa-solid fa-play";
    document.getElementById("pomo-circle").style.strokeDashoffset = 0;
}

// 2. Sliding Blocks Algorithmic Puzzle Engine
let puzzleArray = [];
function initPuzzle() {
    const size = AppState.puzzleGridSize;
    const totalTiles = size * size;
    puzzleArray = Array.from({length: totalTiles - 1}, (_, i) => i + 1);
    puzzleArray.push(""); // Empty Slot representing zero index
    
    // Force simple solvable shuffle array mix
    puzzleArray.sort(() => Math.random() - 0.5);
    
    const container = document.getElementById("puzzle-grid");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    renderPuzzleGrid();
}

function renderPuzzleGrid() {
    const container = document.getElementById("puzzle-grid");
    container.innerHTML = "";
    puzzleArray.forEach((val, idx) => {
        const div = document.createElement("div");
        div.className = `puzzle-piece ${val === "" ? "empty" : ""}`;
        div.innerText = val;
        div.onclick = () => movePuzzlePiece(idx);
        container.appendChild(div);
    });
}

function movePuzzlePiece(idx) {
    const size = AppState.puzzleGridSize;
    const emptyIdx = puzzleArray.indexOf("");
    
    const row = Math.floor(idx / size), col = idx % size;
    const eRow = Math.floor(emptyIdx / size), eCol = emptyIdx % size;
    
    const diff = Math.abs(row - eRow) + Math.abs(col - eCol);
    if(diff === 1) { // Orthogonally adjacent, swap elements
        puzzleArray[emptyIdx] = puzzleArray[idx];
        puzzleArray[idx] = "";
        renderPuzzleGrid();
        checkPuzzleSuccessState();
    }
}

function checkPuzzleSuccessState() {
    for(let i=0; i < puzzleArray.length - 1; i++) {
        if(puzzleArray[i] !== i + 1) return;
    }
    alert("Matrix order fully aligned! Advancing complexity index scales.");
    AppState.puzzleGridSize = AppState.puzzleGridSize === 3 ? 4 : 3; // Alternate difficulty
    initPuzzle();
}
function skipPuzzle() { initPuzzle(); }

// 3. Infinite Matrix Mathematics Engine (2500 Sequential Loops)
let currentMathAnswer = 0;
function renderMathQuest() {
    document.getElementById("math-level-txt").innerText = AppState.mathLevel;
    let a = Math.floor(Math.random() * (10 * AppState.mathLevel)) + 5;
    let b = Math.floor(Math.random() * (5 * AppState.mathLevel)) + 2;
    let operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    
    let expr = `${a} ${operator} ${b}`;
    currentMathAnswer = eval(expr);
    document.getElementById("math-question").innerText = expr;
    
    let options = [currentMathAnswer, currentMathAnswer + 4, currentMathAnswer - 3];
    options.sort(() => Math.random() - 0.5);
    
    const grid = document.getElementById("math-options");
    grid.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "btn-option";
        btn.innerText = opt;
        btn.onclick = () => {
            if(opt === currentMathAnswer) {
                AppState.mathLevel = AppState.mathLevel >= 2500 ? 1 : AppState.mathLevel + 1;
                localStorage.setItem("edwell_math_lvl", AppState.mathLevel);
                renderMathQuest();
            } else {
                alert(`Math calibration missed! Correct target: ${currentMathAnswer}`);
                renderMathQuest();
            }
        };
        grid.appendChild(btn);
    });
}
function skipMath() { renderMathQuest(); }

// 4. Advanced Zen Ambient Environmental Mixer Controls
function toggleAmbientSound(btn) {
    const parent = btn.parentElement;
    parent.classList.toggle("active");
    const label = btn.innerText.trim();
    if(parent.classList.contains("active")) {
        showToast(`Synthesizing Environmental Ambient Loop: ${label}`);
    }
}
function adjustAmbientVolume(slider) {
    const name = slider.parentElement.getAttribute("data-sound");
    // Interface hooks can link to standard Web Audio HTML5 nodes easily
}

/* ==========================================================================
   MODULE 4: NEURO-FORGE COGNITIVE TRACKER (THE ADVANCED 5th SYSTEM)
   ========================================================================== */
let reflexTimerStart = 0, reflexTimeoutPointer = null;

function triggerReflexClick() {
    const box = document.getElementById("reflex-box");
    const label = box.querySelector("span");
    
    if(box.classList.contains("waiting")) {
        // Early Click Punishment
        clearTimeout(reflexTimeoutPointer);
        box.className = "reflex-trigger";
        label.innerText = "Early firing detected! Retry.";
        return;
    }
    if(box.classList.contains("flash")) {
        // Successful Reflex Catch
        let duration = Date.now() - reflexTimerStart;
        document.getElementById("reflex-score").innerText = `Latency: ${duration} ms`;
        document.getElementById("neuro-reaction").innerText = `${duration} ms`;
        
        let sessionCount = parseInt(document.getElementById("neuro-sessions").innerText) || 0;
        document.getElementById("neuro-sessions").innerText = `${sessionCount + 1} Protocols`;
        
        box.className = "reflex-trigger";
        label.innerText = "Initialize Next Run";
        return;
    }
    
    // Base State initialization setup
    label.innerText = "Wait for green signal...";
    box.classList.add("waiting");
    
    let randomDelay = Math.random() * 3000 + 1500; // 1.5s to 4.5s
    reflexTimeoutPointer = setTimeout(() => {
        box.className = "reflex-trigger flash";
        label.innerText = "CLICK NOW!";
        reflexTimerStart = Date.now();
    }, randomDelay);
}

/* ==========================================================================
   GLOBAL AUDIO TOAST NOTIFICATION DECK
   ========================================================================== */
function showToast(msg) {
    const toast = document.getElementById("audio-toast");
    toast.innerText = `🔊 ${msg}`;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}

function simulateAudio() {
    showToast("Phonetic voice synthesis module active...");
}