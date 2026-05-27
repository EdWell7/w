/* ==========================================================================
   EDWELL CORE ARCHITECTURE & STATE MANIFESTO
   ========================================================================== */
const AppState = {
    user: null,
    authMode: 'login', // 'login' or 'register'
    nativeLanguage: null,
    streak: 0,
    hasCompletedDaily: false,
    inventory: [],
    mathLevel: 1,
    puzzleGridSize: 3, 
    currentQuizWord: null,
    activeLessonIndex: 0,
    currentDailyLessonWords: [] // Dynamically simulated by AI Matrix Engine
};

// COMPREHENSIVE CYBERNETIC LEXICON DATABASE (The AI Word Synthesizer Reservoir)
const AICognitiveLexicon = [
    { word: "Velocity", translations: { Arabic: "السرعة المتجهة", French: "Vélocité", Spanish: "Velocidad", Turkish: "Hız", Japanese: "速度 (Sokudo)", Korean: "속도" }, pron: "/vəˈlɒs.ə.ti/", ex: "The cosmic particle reached terminal velocity." },
    { word: "Luminous", translations: { Arabic: "مضيء / متوهج", French: "Lumineux", Spanish: "Luminoso", Turkish: "Işıltılı", Japanese: "発光 (Hakkō)", Korean: "빛나는" }, pron: "/ˈluː.mɪ.nəs/", ex: "Neon matrices emit a luminous violet hue." },
    { word: "Sovereign", translations: { Arabic: "ذو سيادة", French: "Souverain", Spanish: "Soberano", Turkish: "Egemen", Japanese: "主権者 (Shuken)", Korean: "주권자" }, pron: "/ˈsɒv.rɪn/", ex: "He maintained sovereign command over the deck." },
    { word: "Anomaly", translations: { Arabic: "حالة غير طبيعية", French: "Anomalie", Spanish: "Anomalía", Turkish: "Anomali", Japanese: "異常 (Ijō)", Korean: "변칙성" }, pron: "/əˈnɒm.ə.li/", ex: "Sensors detected a quantum anomaly in the room core." },
    { word: "Resilience", translations: { Arabic: "المرونة / التعافي", French: "Résilience", Spanish: "Resiliencia", Turkish: "Esneklik", Japanese: "回復力 (Kaifuku)", Korean: "회복력" }, pron: "/rɪˈzɪl.jəns/", ex: "Daily training streaks forge cognitive resilience." },
    { word: "Ambience", translations: { Arabic: "الأجواء المحيطة", French: "Ambiance", Spanish: "Ambiente", Turkish: "Ambiyans", Japanese: "雰囲気 (Fun'iki)", Korean: "분위기" }, pron: "/ˈæm.bi.əns/", ex: "The gaming room had a cozy, dark ambience." },
    { word: "Decipher", translations: { Arabic: "يفك الشفرة", French: "Déchiffrer", Spanish: "Descifrar", Turkish: "Deşifre etmek", Japanese: "解読する (Kaidoku)", Korean: "해독하다" }, pron: "/dɪˈsaɪ.fər/", ex: "AI agents decipher encrypted visual data arrays." },
    { word: "Synergy", translations: { Arabic: "التآزر", French: "Synergie", Spanish: "Sinergia", Turkish: "Sinerji", Japanese: "相乗効果 (Sōjō)", Korean: "시너지" }, pron: "/ˈsɪn.ə.dʒi/", ex: "A perfect synergy between design and mechanics." },
    { word: "Paradigm", translations: { Arabic: "نموذج فكري", French: "Paradigme", Spanish: "Paradigma", Turkish: "Paradigma", Japanese: "パラダイム", Korean: "패러다임" }, pron: "/ˈpær.ə.daɪm/", ex: "This system shifts the learning paradigm entirely." },
    { word: "Ephemeral", translations: { Arabic: "زائل / عابر", French: "Éphémère", Spanish: "Efímero", Turkish: "Geçici", Japanese: "儚い (Hakanai)", Korean: "덧없는" }, pron: "/ɪˈfem.ər.əl/", ex: "Do not let your focus become an ephemeral event." },
    { word: "Catalyst", translations: { Arabic: "محفز", French: "Catalyseur", Spanish: "Catalizador", Turkish: "Katalizör", Japanese: "触媒 (Shokubai)", Korean: "촉매" }, pron: "/ˈkæt.əl.ɪst/", ex: "EdWell is the perfect catalyst for micro-habits." },
    { word: "Cognitive", translations: { Arabic: "إدراكي / معرفي", French: "Cognitif", Spanish: "Cognitivo", Turkish: "Bilişsel", Japanese: "認知の (Ninji no)", Korean: "인지적" }, pron: "/ˈkɒɡ.nə.tɪv/", ex: "Unlock high-level cognitive brain function." },
    { word: "Synthesis", translations: { Arabic: "تركيب / دمج", French: "Synthèse", Spanish: "Síntesis", Turkish: "Sentez", Japanese: "合成 (Gōsei)", Korean: "합성" }, pron: "/ˈsɪn.θə.sɪs/", ex: "The synthesis of art and sound produces pure calm." },
    { word: "Audacious", translations: { Arabic: "جريء / مقدام", French: "Audacieux", Spanish: "Audaz", Turkish: "Cesur", Japanese: "大胆な (Daitanna)", Korean: "대담한" }, pron: "/ɔːˈdeɪ.ʃəs/", ex: "An audacious plan to master skills in single minutes." },
    { word: "Fluctuation", translations: { Arabic: "تقلب / تذبذب", French: "Fluctuation", Spanish: "Fluctuación", Turkish: "Dalgalanma", Japanese: "変動 (Hendō)", Korean: "변동" }, pron: "/ˌflʌk.tʃuˈeɪ.ʃən/", ex: "The temperature fluctuation modifies our fashion choices." },
    { word: "Pragmatic", translations: { Arabic: "عملي / واقعي", French: "Pragmatique", Spanish: "Pragmático", Turkish: "Pratik", Japanese: "実用的な", Korean: "실용적인" }, pron: "/præɡˈmæt.ɪk/", ex: "Taking small daily actions is a pragmatic approach." }
];

// REWARD BLUEPRINTS
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
   AUTHENTICATION SYSTEM (SIGN IN & SIGN UP PROGRESS PRESERVATION)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    setupUploadZones();
    loadProfileState();
    
    document.getElementById("auth-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const usernameIn = document.getElementById("username").value.trim();
        const passwordIn = document.getElementById("password").value;
        
        if (AppState.authMode === 'register') {
            // Sign Up Path
            if (localStorage.getItem(`edwell_user_${usernameIn}`)) {
                alert("Identity already synced! Choose another username.");
                return;
            }
            const newUserObj = { username: usernameIn, password: passwordIn, streak: 0, mathLevel: 1, inventory: [], nativeLanguage: null };
            localStorage.setItem(`edwell_user_${usernameIn}`, JSON.stringify(newUserObj));
            showToast("Account Generated Successfully!");
        } else {
            // Sign In Path
            const record = localStorage.getItem(`edwell_user_${usernameIn}`);
            if (!record) {
                alert("Account database entry not found. Try signing up.");
                return;
            }
            const parsed = JSON.parse(record);
            if (parsed.password !== passwordIn) {
                alert("Security code handshake failed! Wrong password.");
                return;
            }
        }
        
        // Log user into active context
        AppState.user = usernameIn;
        localStorage.setItem("edwell_active_session", usernameIn);
        hydrateUserProgress();
        syncDashboardUI();
        switchScreen("dashboard-screen");
    });

    document.getElementById("logout-btn").addEventListener("click", () => {
        saveCurrentUserProgressToStorage();
        localStorage.removeItem("edwell_active_session");
        Object.assign(AppState, { user: null, nativeLanguage: null, streak: 0, hasCompletedDaily: false, inventory: [], mathLevel: 1, currentDailyLessonWords: [] });
        switchScreen("auth-screen");
    });
});

function switchAuthMode(mode) {
    AppState.authMode = mode;
    document.querySelectorAll(".auth-tab-btn").forEach(b => b.classList.remove("active"));
    if (mode === 'login') {
        document.getElementById("tab-login").classList.add("active");
        document.getElementById("auth-subtitle").innerText = "Log back into your tailored haven";
        document.getElementById("auth-submit-btn").innerText = "Enter Dimension";
    } else {
        document.getElementById("tab-register").classList.add("active");
        document.getElementById("auth-subtitle").innerText = "Establish a new localized neural node";
        document.getElementById("auth-submit-btn").innerText = "Forge New Node";
    }
}

function loadProfileState() {
    const activeUser = localStorage.getItem("edwell_active_session");
    if (activeUser) {
        AppState.user = activeUser;
        hydrateUserProgress();
        switchScreen("dashboard-screen");
    } else {
        switchScreen("auth-screen");
    }
}

function hydrateUserProgress() {
    const record = localStorage.getItem(`edwell_user_${AppState.user}`);
    if (record) {
        const parsed = JSON.parse(record);
        AppState.nativeLanguage = parsed.nativeLanguage || null;
        AppState.streak = parseInt(parsed.streak) || 0;
        AppState.mathLevel = parseInt(parsed.mathLevel) || 1;
        AppState.inventory = parsed.inventory || [];
    }
}

function saveCurrentUserProgressToStorage() {
    if (!AppState.user) return;
    const record = localStorage.getItem(`edwell_user_${AppState.user}`);
    if (record) {
        const parsed = JSON.parse(record);
        parsed.nativeLanguage = AppState.nativeLanguage;
        parsed.streak = AppState.streak;
        parsed.mathLevel = AppState.mathLevel;
        parsed.inventory = AppState.inventory;
        localStorage.setItem(`edwell_user_${AppState.user}`, JSON.stringify(parsed));
    }
}

function switchScreen(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
    if(screenId === 'dashboard-screen') syncDashboardUI();
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
        if (!zone || !input) return;
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
   PROCEDURAL AI LANGUAGE CORE HUB (ANTI-REPETITION ARCHITECTURE)
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
    saveCurrentUserProgressToStorage();
    openLanguageModule();
}

// Pseudo-Random Generative AI Deterministic Word Compiler
function generateAILessonDataset() {
    // Shuffling vocabulary to prevent same-day loops, using streak to scale linguistic tiers
    let localPool = [...AICognitiveLexicon];
    localPool.sort(() => Math.random() - 0.5);
    
    // Choose exactly 8 distinct items for the active study session
    AppState.currentDailyLessonWords = localPool.slice(0, 8);
}

function startDailyLesson() {
    generateAILessonDataset();
    document.getElementById("lesson-gate-card").classList.add("hidden");
    document.getElementById("lesson-active-card").classList.remove("hidden");
    AppState.activeLessonIndex = 0;
    renderLessonWord();
}

function renderLessonWord() {
    const currentObj = AppState.currentDailyLessonWords[AppState.activeLessonIndex];
    
    document.getElementById("lesson-word").innerText = currentObj.word;
    document.getElementById("lesson-translation").innerText = currentObj.translations[AppState.nativeLanguage] || currentObj.word;
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
    
    // Pick target word out of current active batch
    AppState.currentQuizWord = AppState.currentDailyLessonWords[Math.floor(Math.random() * 8)];
    const targetTranslation = AppState.currentQuizWord.translations[AppState.nativeLanguage];
    
    document.getElementById("quiz-question").innerText = `What is the accurate translation of: "${AppState.currentQuizWord.word}"?`;
    
    let options = [targetTranslation];
    while(options.length < 3) {
        let randItem = AICognitiveLexicon[Math.floor(Math.random() * AICognitiveLexicon.length)];
        let randTrans = randItem.translations[AppState.nativeLanguage];
        if(!options.includes(randTrans)) options.push(randTrans);
    }
    options.sort(() => Math.random() - 0.5);
    
    const container = document.getElementById("quiz-options");
    container.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "btn-option";
        btn.innerText = opt;
        btn.onclick = () => evaluateQuizAnswer(opt, targetTranslation);
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

function evaluateQuizAnswer(chosen, correctTarget) {
    clearInterval(quizInterval);
    if(chosen === correctTarget) {
        AppState.streak++;
        saveCurrentUserProgressToStorage();
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
    
    const roll = Math.random() * 100;
    let rarityFilter = 'common';
    if(roll > 95) rarityFilter = 'legendary';
    else if(roll > 80) rarityFilter = 'epic';
    else if(roll > 50) rarityFilter = 'rare';
    
    let subPool = RewardPool.filter(i => i.rarity === rarityFilter);
    if(subPool.length === 0) subPool = RewardPool; 
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
        
        if(!AppState.inventory.includes(selectedLootBoxItem.class)) {
            AppState.inventory.push(selectedLootBoxItem.class);
            saveCurrentUserProgressToStorage();
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
    
    room.innerHTML = '<div class="weather-overlay" id="room-weather"></div><div class="base-floor"></div>';
    
    if(AppState.streak === 0) {
        room.style.background = "#070712";
        document.getElementById("room-weather").className = "weather-overlay raining";
        statusText.innerText = "Dark, unlit and raining. Advance your lessons to light it up.";
        return;
    } else {
        room.style.background = "#131326";
        document.getElementById("room-weather").className = "weather-overlay";
        statusText.innerText = "The rain cleared up. Your setup blueprints are syncing.";
    }
    
    AppState.inventory.forEach(itemClass => {
        const div = document.createElement("div");
        div.className = itemClass;
        if(itemClass === 'css-led') div.innerText = "EDWELL DECK";
        room.appendChild(div);
    });
    
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
    
    const mStr = pomoMinutes < 10 ? '0'+pomoMinutes : pomoMinutes;
    const sStr = pomoSeconds < 10 ? '0'+pomoSeconds : pomoSeconds;
    document.getElementById("pomo-time-text").innerText = `${mStr}:${sStr}`;
    
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
    puzzleArray.push(""); 
    
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
    if(diff === 1) { 
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
    AppState.puzzleGridSize = AppState.puzzleGridSize === 3 ? 4 : 3; 
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
                saveCurrentUserProgressToStorage();
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

// 4. Advanced Zen Ambient Mixer
function toggleAmbientSound(btn) {
    const parent = btn.parentElement;
    parent.classList.toggle("active");
    const label = btn.innerText.trim();
    if(parent.classList.contains("active")) {
        showToast(`Synthesizing Ambient Loop: ${label}`);
    }
}
function adjustAmbientVolume(slider) {}

/* ==========================================================================
   MODULE 4: NEURO-FORGE COGNITIVE TRACKER
   ========================================================================== */
let reflexTimerStart = 0, reflexTimeoutPointer = null;

function triggerReflexClick() {
    const box = document.getElementById("reflex-box");
    const label = box.querySelector("span");
    
    if(box.classList.contains("waiting")) {
        clearTimeout(reflexTimeoutPointer);
        box.className = "reflex-trigger";
        label.innerText = "Early firing detected! Retry.";
        return;
    }
    if(box.classList.contains("flash")) {
        let duration = Date.now() - reflexTimerStart;
        document.getElementById("reflex-score").innerText = `Latency: ${duration} ms`;
        document.getElementById("neuro-reaction").innerText = `${duration} ms`;
        
        let sessionCount = parseInt(document.getElementById("neuro-sessions").innerText) || 0;
        document.getElementById("neuro-sessions").innerText = `${sessionCount + 1} Protocols`;
        
        box.className = "reflex-trigger";
        label.innerText = "Initialize Next Run";
        return;
    }
    
    label.innerText = "Wait for green signal...";
    box.classList.add("waiting");
    
    let randomDelay = Math.random() * 3000 + 1500; 
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
