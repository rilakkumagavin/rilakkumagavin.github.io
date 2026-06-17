(() => {
  "use strict";

  const storageKey = "leo-class-english-exam-v2";
  const sourceUrl = "https://sites.google.com/csps.tyc.edu.tw/digitalresource/%E8%8B%B1%E8%AA%9E%E5%B0%88%E5%8D%80/%E5%96%AE%E5%AD%97%E5%A4%A7%E6%9C%83%E8%80%83-%E4%B8%80%E5%B9%B4%E7%B4%9A?authuser=1";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const gradeVocab = {
    1: [
      ["apple", "蘋果", "A", "🍎"], ["ball", "球", "B", "⚽"], ["cat", "貓", "C", "🐱"], ["dog", "狗", "D", "🐶"],
      ["egg", "蛋", "E", "🥚"], ["fish", "魚", "F", "🐟"], ["goat", "山羊", "G", "🐐"], ["hat", "帽子", "H", "🎩"],
      ["ink", "墨水", "I", "🖋️"], ["jet", "噴射機", "J", "✈️"], ["key", "鑰匙", "K", "🔑"], ["lion", "獅子", "L", "🦁"],
      ["map", "地圖", "M", "🗺️"], ["net", "網子", "N", "🕸️"], ["ox", "牛", "O", "🐂"], ["pig", "豬", "P", "🐷"],
      ["queen", "女王", "Q", "👑"], ["red", "紅色", "R", "🔴"], ["sun", "太陽", "S", "☀️"], ["ten", "十", "T", "🔟"],
      ["up", "向上", "U", "⬆️"], ["van", "廂型車", "V", "🚐"], ["wig", "假髮", "W", "💇"], ["fox", "狐狸", "X", "🦊"],
      ["yo-yo", "溜溜球", "Y", "🪀"], ["zebra", "斑馬", "Z", "🦓"]
    ],
    2: [
      ["book", "書", "B", "📘"], ["chair", "椅子", "C", "🪑"], ["desk", "書桌", "D", "🧑‍💻"], ["eraser", "橡皮擦", "E", "🧽"],
      ["pencil", "鉛筆", "P", "✏️"], ["ruler", "尺", "R", "📏"], ["school", "學校", "S", "🏫"], ["teacher", "老師", "T", "👩‍🏫"],
      ["bag", "書包", "B", "🎒"], ["crayon", "蠟筆", "C", "🖍️"], ["door", "門", "D", "🚪"], ["window", "窗戶", "W", "🪟"],
      ["table", "桌子", "T", "🪑"], ["paper", "紙", "P", "📄"], ["glue", "膠水", "G", "🧴"], ["box", "盒子", "B", "📦"]
    ],
    3: [
      ["mother", "媽媽", "M", "👩"], ["father", "爸爸", "F", "👨"], ["sister", "姊妹", "S", "👧"], ["brother", "兄弟", "B", "👦"],
      ["friend", "朋友", "F", "🧑"], ["happy", "開心", "H", "😊"], ["sad", "難過", "S", "😢"], ["angry", "生氣", "A", "😠"],
      ["hungry", "餓", "H", "🍽️"], ["thirsty", "渴", "T", "🥤"], ["tired", "累", "T", "😴"], ["home", "家", "H", "🏠"],
      ["park", "公園", "P", "🏞️"], ["zoo", "動物園", "Z", "🦓"], ["library", "圖書館", "L", "📚"], ["store", "商店", "S", "🏪"]
    ],
    4: [
      ["breakfast", "早餐", "B", "🍳"], ["lunch", "午餐", "L", "🍱"], ["dinner", "晚餐", "D", "🍽️"], ["rice", "飯", "R", "🍚"],
      ["noodles", "麵", "N", "🍜"], ["chicken", "雞肉", "C", "🍗"], ["vegetable", "蔬菜", "V", "🥬"], ["juice", "果汁", "J", "🧃"],
      ["water", "水", "W", "💧"], ["milk", "牛奶", "M", "🥛"], ["bread", "麵包", "B", "🍞"], ["cake", "蛋糕", "C", "🍰"],
      ["soup", "湯", "S", "🥣"], ["salad", "沙拉", "S", "🥗"], ["cookie", "餅乾", "C", "🍪"], ["fruit", "水果", "F", "🍇"]
    ],
    5: [
      ["Monday", "星期一", "M", "1️⃣"], ["Tuesday", "星期二", "T", "2️⃣"], ["Wednesday", "星期三", "W", "3️⃣"], ["Thursday", "星期四", "T", "4️⃣"],
      ["Friday", "星期五", "F", "5️⃣"], ["Saturday", "星期六", "S", "6️⃣"], ["Sunday", "星期日", "S", "7️⃣"], ["morning", "早上", "M", "🌅"],
      ["afternoon", "下午", "A", "🌤️"], ["evening", "傍晚", "E", "🌆"], ["season", "季節", "S", "🌈"], ["spring", "春天", "S", "🌸"],
      ["summer", "夏天", "S", "☀️"], ["fall", "秋天", "F", "🍂"], ["winter", "冬天", "W", "❄️"], ["weather", "天氣", "W", "🌦️"]
    ],
    6: [
      ["airport", "機場", "A", "🛫"], ["station", "車站", "S", "🚉"], ["museum", "博物館", "M", "🏛️"], ["restaurant", "餐廳", "R", "🍽️"],
      ["hospital", "醫院", "H", "🏥"], ["market", "市場", "M", "🛒"], ["mountain", "山", "M", "⛰️"], ["beach", "海灘", "B", "🏖️"],
      ["vacation", "假期", "V", "🧳"], ["ticket", "票", "T", "🎫"], ["passport", "護照", "P", "🛂"], ["suitcase", "行李箱", "S", "🧳"],
      ["delicious", "美味的", "D", "😋"], ["beautiful", "美麗的", "B", "🌄"], ["interesting", "有趣的", "I", "✨"], ["favorite", "最喜歡的", "F", "⭐"]
    ]
  };

  const grades = [
    ["單字大會考－一年級", "Letter Recognition · US English TTS", "字母辨識與基礎單字"],
    ["單字大會考－二年級", "Classroom Words · Listen & Pick", "教室與學用品"],
    ["單字大會考－三年級", "Family · Feelings · Places", "人物、感受與地點"],
    ["單字大會考－四年級", "Food · Drinks · Daily Life", "食物與日常生活"],
    ["單字大會考－五年級", "Days · Time · Seasons", "時間、星期與季節"],
    ["單字大會考－六年級", "Travel · Places · Review", "地點、旅行與總複習"]
  ].map((data, index) => ({
    id: index + 1,
    title: data[0],
    subtitle: data[1],
    focus: data[2],
    active: true
  }));

  const stageTypes = [
    { type: "study", title: "Daily Word Cards", subtitle: "看圖、聽音、每天念", icon: "🖼️", badge: "Visual Reader" },
    { type: "listen", title: "Listening Flip", subtitle: "聽朗讀，翻牌配對單字與意思", icon: "🎧", badge: "Flip Listener" },
    { type: "speak", title: "Speaking Practice", subtitle: "聽一句，跟著念三次", icon: "🗣️", badge: "Voice Builder" },
    { type: "read", title: "Reading Sentences", subtitle: "讀句子，選出應用單字", icon: "📖", badge: "Sentence Reader" },
    { type: "write", title: "Writing Quest", subtitle: "聽音後拼寫單字", icon: "✍️", badge: "Word Writer" },
    { type: "story", title: "Story Mission", subtitle: "把單字放進簡單故事", icon: "🎭", badge: "Story User" }
  ];

  const app = document.getElementById("app");
  let state = loadState();
  let currentGrade = Number(localStorage.getItem("leo-current-grade") || "1");
  let quiz = null;
  let spelling = null;
  let flip = null;

  function normalize(words) {
    return words.map(item => {
      if (Array.isArray(item)) {
        const [word, zh, letter, icon] = item;
        return { word, zh, letter, icon: icon || iconFor(word, zh) };
      }
      return {
        ...item,
        letter: item.letter || String(item.word || "").replace(/[^A-Za-z]/g, "").slice(0, 1).toUpperCase(),
        icon: item.icon || iconFor(item.word, item.zh)
      };
    });
  }

  function vocabFor(grade) {
    const external = window.LEO_WORD_DATA?.gradeVocab?.[grade];
    return normalize(external || gradeVocab[grade] || gradeVocab[1]);
  }

  function stagesFor(grade) {
    if (grade === 1) {
      return [
        { ...stageTypes[0], id: "g1-study", title: "Letter & Word Cards", subtitle: "A-Z 字母、圖像單字與 US English TTS", icon: "🔤", badge: "Letter Scout", background: "assets/stage_phonics_a.png" },
        { ...stageTypes[1], id: "g1-listen", title: "Listening Flip", subtitle: "聽老師念，翻牌配對自然發音單字", background: "assets/stage_phonics_b.png" },
        { ...stageTypes[2], id: "g1-speak", background: "assets/stage_phonics_a.png" },
        { ...stageTypes[3], id: "g1-read", background: "assets/stage_phonics_b.png" },
        { ...stageTypes[4], id: "g1-write", background: "assets/stage_phonics_c.png" },
        { ...stageTypes[5], id: "g1-story", title: "Story Mission", subtitle: "一年級故事句與單字應用", background: "assets/stage_phonics_c.png" }
      ];
    }
    return stageTypes.map((stage, index) => ({
      ...stage,
      id: `g${grade}-${stage.type}`,
      background: `assets/stage_phonics_${["a", "b", "c", "a", "b", "c"][index]}.png`
    }));
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      return {
        completed: Array.isArray(saved.completed) ? saved.completed : [],
        scores: saved.scores || {},
        studentName: saved.studentName || ""
      };
    } catch {
      return { completed: [], scores: {}, studentName: "" };
    }
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
    localStorage.setItem("leo-current-grade", String(currentGrade));
  }

  function topbar() {
    return `
      <header class="topbar">
        <div class="brand">
          <span class="brand-mark">LC</span>
          <div>
            <strong>Leo Class 英語專區</strong>
            <small>離線網頁 · GitHub Pages · 可嵌入協作平台</small>
          </div>
        </div>
        <nav class="nav-actions">
          <button class="btn secondary" data-view="home">首頁</button>
          <button class="btn secondary" data-view="grades">年級入口</button>
          <button class="btn secondary" data-view="course">目前年級</button>
          <button class="btn primary" data-view="report">成果卡</button>
        </nav>
      </header>`;
  }

  function footer() {
    return `<footer class="footer">參考來源：青溪國小數位資源網「英語專區／單字大會考」 · 本頁為離線重製原型，正式字表可直接替換資料區</footer>`;
  }

  function renderHome() {
    app.innerHTML = `
      ${topbar()}
      <main class="home">
        <section class="hero-copy">
          <span class="eyebrow">English Word Exam</span>
          <h1>英語大會考離線入口</h1>
          <p class="lead">學生先選年級，再進入視覺單字卡、聽力、跟讀、閱讀句、拼寫與故事應用。資料直接內嵌在網頁中，不使用 Google 試算表。</p>
          <div class="hero-stats">
            <div class="stat"><strong>6</strong><span>年級入口</span></div>
            <div class="stat"><strong>4 Skills</strong><span>聽說讀寫</span></div>
            <div class="stat"><strong>Daily</strong><span>每日跟讀</span></div>
          </div>
          <button class="btn primary" data-view="grades">選擇年級</button>
        </section>
        <section class="hero-art" aria-hidden="true"><img src="assets/hero_student.png" alt=""></section>
      </main>
      ${footer()}`;
    bindNav();
  }

  function renderGrades() {
    app.innerHTML = `
      ${topbar()}
      <main class="screen">
        <section class="panel">
          <div class="section-title">
            <div>
              <span class="eyebrow">Grade Select</span>
              <h2>請選擇年級</h2>
            </div>
            <a class="btn secondary" href="${sourceUrl}" target="_blank" rel="noreferrer">原始英語專區</a>
          </div>
          <div class="grade-grid">
            ${grades.map(grade => `
              <button class="grade-card active" data-grade="${grade.id}">
                <span class="grade-level">${grade.id}</span>
                <div>
                  <h3>${grade.title}</h3>
                  <p>${grade.subtitle}</p>
                  <p>${grade.focus}</p>
                </div>
                <span class="grade-status">${progressForGrade(grade.id)}</span>
              </button>`).join("")}
          </div>
        </section>
      </main>
      ${footer()}`;
    bindNav();
    document.querySelectorAll("[data-grade]").forEach(button => {
      button.onclick = () => {
        currentGrade = Number(button.dataset.grade);
        saveState();
        renderCourse();
      };
    });
  }

  function progressForGrade(grade) {
    const stages = stagesFor(grade);
    const done = stages.filter(stage => state.completed.includes(stage.id)).length;
    return done ? `${done}/${stages.length} 已完成` : "開始挑戰";
  }

  function renderCourse() {
    const grade = grades[currentGrade - 1];
    const stages = stagesFor(currentGrade);
    const done = stages.filter(stage => state.completed.includes(stage.id)).length;
    const percent = Math.round(done / stages.length * 100);
    app.innerHTML = `
      ${topbar()}
      <main class="screen">
        <section class="panel course-layout">
          <aside class="course-side">
            <div class="character">
              <img src="assets/npc_teacher.png" alt="英語導師">
              <div>
                <span class="eyebrow">Grade ${currentGrade}</span>
                <h2>${grade.title}</h2>
                <p>${grade.subtitle}</p>
                <div class="progress" aria-label="完成進度"><span style="width:${percent}%"></span></div>
                <p>${done} / ${stages.length} 個任務完成</p>
              </div>
            </div>
          </aside>
          <section>
            <div class="section-title">
              <div>
                <span class="eyebrow">Exam Map</span>
                <h2>${grade.title}</h2>
              </div>
            </div>
            <div class="stage-map">
              ${stages.map(stage => {
                const isDone = state.completed.includes(stage.id);
                return `
                  <button class="stage-card ${isDone ? "done" : ""}" data-stage="${stage.id}">
                    <span class="stage-icon">${isDone ? "✅" : stage.icon}</span>
                    <div>
                      <h3>${stage.title}</h3>
                      <p>${stage.subtitle}</p>
                    </div>
                    <span class="badge-chip">${isDone ? stage.badge : "開放測試"}</span>
                  </button>`;
              }).join("")}
            </div>
          </section>
        </section>
      </main>
      ${footer()}`;
    bindNav();
    document.querySelectorAll("[data-stage]").forEach(button => button.onclick = () => startStage(button.dataset.stage));
  }

  function startStage(stageId) {
    const stage = stagesFor(currentGrade).find(item => item.id === stageId);
    if (stage.type === "study") renderStudy(stage);
    if (stage.type === "listen") startFlipListening(stage);
    if (stage.type === "speak") renderSpeaking(stage);
    if (stage.type === "read") startQuiz(stage, "read");
    if (stage.type === "write") startSpelling(stage);
    if (stage.type === "story") renderStory(stage);
  }

  function missionShell(stage, body) {
    app.innerHTML = `
      ${topbar()}
      <main class="mission" style="background-image:url('${stage.background}')">
        <section class="mission-wrap">
          <header class="mission-head">
            <div>
              <span class="eyebrow">Grade ${currentGrade} English Word Exam</span>
              <h1>${stage.title}</h1>
              <p>${stage.subtitle}</p>
            </div>
            <span class="stage-icon">${stage.icon}</span>
          </header>
          <div class="npc-line">
            <img src="assets/npc_teacher.png" alt="英語導師">
            <div><strong>English Guide：</strong>${stage.subtitle}。先看圖，再聽音，接著說、讀、寫，最後把單字放進故事。</div>
          </div>
          <section class="task">${body}</section>
        </section>
      </main>
      ${footer()}`;
    bindNav();
  }

  function renderStudy(stage) {
    const words = currentGrade === 1 ? [...letters.map(letter => ({ word: letter, zh: "letter", icon: letter })), ...vocabFor(1)] : vocabFor(currentGrade);
    const weeklyGroups = splitIntoWeek(words);
    const today = suggestedDay();
    const body = `
      <div class="objective">${currentGrade === 1 ? "點選 A-Z 字母與單字圖卡，聽美式英文朗讀。" : "全部單字都會出現，並分成七天。每天念一組，週末可以複習全部。"}</div>
      <div class="task-box">
        <h2>${currentGrade === 1 ? "A-Z Letter & Word Cards" : "Daily Visual Word Cards"}</h2>
        <p class="daily-note">每日流程：看圖 3 秒 → 按朗讀 → 跟念 3 次 → 說出中文意思。今天建議：Day ${today}。</p>
        <div class="week-plan">
          ${weeklyGroups.map((group, index) => `
            <section class="day-section ${index + 1 === today ? "today" : ""}">
              <header>
                <strong>Day ${index + 1}</strong>
                <span>${dayName(index + 1)} · ${group.length} 個</span>
              </header>
              <div class="letter-bank">
                ${group.map(item => `
                  <button class="letter-btn visual-word-card" data-say="${item.word}" data-sentence="${sentenceFor(item, item.word)}">
                    <strong>${item.icon}</strong>
                    <span>${item.word}</span>
                    <small>${item.zh}</small>
                    <em>${sentenceFor(item, item.word)}</em>
                  </button>`).join("")}
              </div>
            </section>`).join("")}
        </div>
        <div class="task-actions">
          <button class="btn primary" id="finishStudy">完成今日跟讀</button>
          <button class="btn secondary" data-view="course">回任務地圖</button>
        </div>
        <div class="feedback info show">這一頁會列出本年級全部單字；每日只需完成一組，七天剛好跑完一輪。</div>
      </div>`;
    missionShell(stage, body);
    document.querySelectorAll("[data-say]").forEach(button => {
      button.onclick = () => {
        speak(button.dataset.say);
        setTimeout(() => speak(button.dataset.sentence), 700);
        button.classList.add("done");
      };
    });
    document.getElementById("finishStudy").onclick = () => completeStage(stage.id, words.length, words.length);
  }

  function splitIntoWeek(words) {
    const groups = Array.from({ length: 7 }, () => []);
    words.forEach((word, index) => groups[index % 7].push(word));
    return groups;
  }

  function suggestedDay() {
    const day = new Date().getDay();
    return day === 0 ? 7 : day;
  }

  function dayName(day) {
    return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][day - 1];
  }

  function startQuiz(stage, type) {
    const source = currentGrade === 1 && type === "listen" ? [...letters, ...vocabFor(1)] : vocabFor(currentGrade);
    const size = type === "story" ? Math.min(8, source.length) : Math.min(10, source.length);
    quiz = { stage, type, pool: shuffle(source).slice(0, size), index: 0, score: 0 };
    renderQuiz();
  }

  function startFlipListening(stage) {
    const source = currentGrade === 1 ? vocabFor(1) : vocabFor(currentGrade);
    const pool = shuffle(source).slice(0, Math.min(8, source.length));
    flip = {
      stage,
      pool,
      index: 0,
      score: 0,
      matched: new Set(),
      selected: []
    };
    renderFlipListening();
  }

  function renderFlipListening(message = "") {
    const target = flip.pool[flip.index];
    const distractors = shuffle(vocabFor(currentGrade).filter(item => item.word !== target.word)).slice(0, 3);
    const roundWords = shuffle([target, ...distractors]);
    const cards = shuffle([
      ...roundWords.map(item => ({ id: item.word, kind: "word", front: item.word, back: item.word })),
      ...roundWords.map(item => ({ id: item.word, kind: "meaning", front: `${item.icon} ${item.zh}`, back: `${item.icon} ${item.zh}` }))
    ]);
    flip.cards = cards;
    flip.selected = [];
    flip.matched = new Set();
    const body = `
      <div class="objective">先聽目標單字，再翻牌找出「英文單字卡」和「中文圖示卡」。配對成功才算完成聽力任務。</div>
      <div class="task-box">
        <p class="eyebrow">第 ${flip.index + 1} 題 / ${flip.pool.length} 題</p>
        <h2>Listen, Flip, Match</h2>
        <div class="task-actions">
          <button class="btn primary" id="repeatFlipWord">再聽一次</button>
        </div>
        <div class="flip-board">
          ${cards.map((card, index) => `
            <button class="flip-card" data-card-index="${index}" aria-label="翻牌">
              <span class="card-back">?</span>
              <span class="card-front">${card.front}</span>
            </button>`).join("")}
        </div>
        <div class="feedback ${message ? "show info" : "info show"}" id="feedback">${message || "聽完後，翻出正確的一組牌。"}</div>
        <div class="task-actions"><button class="btn secondary" data-view="course">回任務地圖</button></div>
      </div>`;
    missionShell(flip.stage, body);
    document.getElementById("repeatFlipWord").onclick = () => speak(target.word);
    document.querySelectorAll("[data-card-index]").forEach(button => {
      button.onclick = () => flipCard(button, target);
    });
    setTimeout(() => speak(target.word), 250);
  }

  function flipCard(button, target) {
    const index = Number(button.dataset.cardIndex);
    const card = flip.cards[index];
    if (button.classList.contains("matched") || button.classList.contains("flipped")) return;
    button.classList.add("flipped");
    flip.selected.push({ index, card, button });
    if (flip.selected.length < 2) return;

    const [a, b] = flip.selected;
    const feedback = document.getElementById("feedback");
    const isPair = a.card.id === b.card.id && a.card.kind !== b.card.kind;
    const isTarget = a.card.id === target.word && b.card.id === target.word;

    if (isPair && isTarget) {
      a.button.classList.add("matched");
      b.button.classList.add("matched");
      flip.score += 1;
      feedback.className = "feedback show good";
      feedback.textContent = `配對成功：${target.word}`;
      setTimeout(() => {
        flip.index += 1;
        if (flip.index >= flip.pool.length) completeStage(flip.stage.id, flip.score, flip.pool.length);
        else renderFlipListening();
      }, 850);
      return;
    }

    if (isPair) {
      feedback.className = "feedback show info";
      feedback.textContent = "這是一組配對，但不是剛剛聽到的單字。再聽一次目標音。";
    } else {
      feedback.className = "feedback show bad";
      feedback.textContent = "這兩張牌不是同一個單字。";
    }
    speak(target.word);
    setTimeout(() => {
      a.button.classList.remove("flipped");
      b.button.classList.remove("flipped");
      flip.selected = [];
    }, 800);
  }

  function renderQuiz(message = "") {
    const item = quiz.pool[quiz.index];
    const isLetter = typeof item === "string";
    const correct = isLetter ? item : item.word;
    const prompt = quiz.type === "read" && !isLetter ? sentenceFor(item).replace("____", "_____") : isLetter ? "Listen and pick the letter." : `${item.icon} ${item.zh}`;
    const options = makeOptions(correct, isLetter);
    const body = `
      <div class="objective">${quiz.type === "read" ? "讀完整句子，選出最適合放進空格的單字。" : "按下朗讀，聽見英文後選出正確答案。"}</div>
      <div class="task-box">
        <p class="eyebrow">第 ${quiz.index + 1} 題 / ${quiz.pool.length} 題</p>
        <h2>${prompt}</h2>
        <div class="task-actions"><button class="btn primary" id="speakQuestion">${quiz.type === "read" ? "朗讀完整句" : "朗讀"}</button></div>
        <div class="option-grid">${options.map(option => `<button class="option" data-answer="${option}">${option}</button>`).join("")}</div>
        <div class="feedback ${message ? "show info" : ""}" id="feedback">${message}</div>
        <div class="task-actions"><button class="btn secondary" data-view="course">回任務地圖</button></div>
      </div>`;
    missionShell(quiz.stage, body);
    document.getElementById("speakQuestion").onclick = () => speak(quiz.type === "read" && !isLetter ? sentenceFor(item, item.word) : correct);
    document.querySelectorAll("[data-answer]").forEach(button => button.onclick = () => chooseAnswer(button, correct));
    setTimeout(() => speak(quiz.type === "read" && !isLetter ? sentenceFor(item, item.word) : correct), 250);
  }

  function chooseAnswer(button, correct) {
    const picked = button.dataset.answer;
    const feedback = document.getElementById("feedback");
    if (picked === correct) {
      quiz.score += 1;
      button.classList.add("correct");
      feedback.className = "feedback show good";
      feedback.textContent = "答對了！";
      setTimeout(nextQuestion, 600);
    } else {
      button.classList.add("wrong");
      feedback.className = "feedback show bad";
      feedback.textContent = `再聽一次。正確答案是 ${correct}.`;
      speak(correct);
    }
  }

  function nextQuestion() {
    quiz.index += 1;
    if (quiz.index >= quiz.pool.length) completeStage(quiz.stage.id, quiz.score, quiz.pool.length);
    else renderQuiz();
  }

  function startSpelling(stage) {
    const pool = shuffle(vocabFor(currentGrade)).slice(0, 8);
    spelling = { stage, pool, index: 0, score: 0, typed: "" };
    renderSpelling();
  }

  function renderSpeaking(stage) {
    const words = shuffle(vocabFor(currentGrade)).slice(0, currentGrade === 1 ? 8 : 10);
    const body = `
      <div class="objective">不使用麥克風。學生聽一句、跟念三次，完成後按「我念完了」。教師可在旁邊抽查發音。</div>
      <div class="task-box">
        <h2>Listen, Say, Check</h2>
        <div class="letter-bank">
          ${words.map((item, index) => `
            <button class="letter-btn visual-word-card" data-speak-word="${item.word}" data-speak-index="${index}">
              <strong>${item.icon}</strong><br><span>${item.word}</span><br><small>${sentenceFor(item, item.word)}</small>
            </button>`).join("")}
        </div>
        <div class="feedback info show">每張卡：按一下聽句子，跟著念三次，再按「我念完了」。</div>
        <div class="task-actions">
          <button class="btn primary" id="finishSpeaking">我念完了</button>
          <button class="btn secondary" data-view="course">回任務地圖</button>
        </div>
      </div>`;
    missionShell(stage, body);
    const practiced = new Set();
    document.querySelectorAll("[data-speak-word]").forEach(button => {
      button.onclick = () => {
        const item = words[Number(button.dataset.speakIndex)];
        speak(sentenceFor(item, item.word));
        practiced.add(item.word);
        button.classList.add("done");
      };
    });
    document.getElementById("finishSpeaking").onclick = () => completeStage(stage.id, practiced.size, words.length);
  }

  function renderStory(stage) {
    const words = shuffle(vocabFor(currentGrade)).slice(0, currentGrade === 1 ? 4 : 5);
    const story = storyFor(currentGrade, words);
    const body = `
      <div class="objective">完成聽、說、讀、寫後，把單字放進簡單故事。先聽故事，再完成單字應用。</div>
      <div class="task-box">
        <h2>Simple Story</h2>
        <article class="story-card">
          <p>${story}</p>
        </article>
        <div class="task-actions">
          <button class="btn primary" id="readStory">朗讀故事</button>
        </div>
        <h2>Word Application</h2>
        <div class="class-grid">
          ${words.map(item => `<button class="class-btn" data-story-word="${item.word}">${item.icon} ${item.word}<br><small>${item.zh}</small></button>`).join("")}
        </div>
        <div class="feedback info show">請學生讀故事後，點選故事中出現的單字並說出中文意思。</div>
        <div class="task-actions">
          <button class="btn primary" id="finishStory">完成故事應用</button>
          <button class="btn secondary" data-view="course">回任務地圖</button>
        </div>
      </div>`;
    missionShell(stage, body);
    const used = new Set();
    document.getElementById("readStory").onclick = () => speak(story);
    document.querySelectorAll("[data-story-word]").forEach(button => {
      button.onclick = () => {
        used.add(button.dataset.storyWord);
        button.classList.add("done");
        speak(button.dataset.storyWord);
      };
    });
    document.getElementById("finishStory").onclick = () => completeStage(stage.id, used.size, words.length);
  }

  function renderSpelling() {
    const item = spelling.pool[spelling.index];
    const spellingTarget = spellingKey(item.word);
    const lettersForWord = shuffle(spellingTarget.split(""));
    const body = `
      <div class="objective">聽單字並看中文提示，依序點字母拼出英文。</div>
      <div class="task-box">
        <p class="eyebrow">第 ${spelling.index + 1} 題 / ${spelling.pool.length} 題</p>
        <h2>${item.icon} ${item.zh}</h2>
        <div class="slots"><div class="slot" id="spellingSlot">${spelling.typed || " "}</div></div>
        <div class="task-actions"><button class="btn primary" id="speakWord">朗讀單字</button><button class="btn secondary" id="clearSpelling">清除</button></div>
        <div class="letter-bank">${lettersForWord.map((letter, index) => `<button class="letter-btn" data-letter="${letter}" data-letter-index="${index}">${letter}</button>`).join("")}</div>
        <div class="feedback" id="feedback"></div>
        <div class="task-actions"><button class="btn primary" id="checkSpelling">檢查拼字</button><button class="btn secondary" data-view="course">回任務地圖</button></div>
      </div>`;
    missionShell(spelling.stage, body);
    document.getElementById("speakWord").onclick = () => speak(item.word);
    document.getElementById("clearSpelling").onclick = () => {
      spelling.typed = "";
      renderSpelling();
    };
    document.querySelectorAll("[data-letter]").forEach(button => {
      button.onclick = () => {
        spelling.typed += button.dataset.letter;
        button.disabled = true;
        button.classList.add("done");
        document.getElementById("spellingSlot").textContent = spelling.typed;
      };
    });
    document.getElementById("checkSpelling").onclick = () => checkSpelling(item);
    setTimeout(() => speak(item.word), 250);
  }

  function checkSpelling(item) {
    const feedback = document.getElementById("feedback");
    const target = spellingKey(item.word);
    if (spelling.typed.toLowerCase() === target.toLowerCase()) {
      spelling.score += 1;
      feedback.className = "feedback show good";
      feedback.textContent = "拼對了！";
      setTimeout(() => {
        spelling.index += 1;
        spelling.typed = "";
        if (spelling.index >= spelling.pool.length) completeStage(spelling.stage.id, spelling.score, spelling.pool.length);
        else renderSpelling();
      }, 650);
    } else {
      feedback.className = "feedback show bad";
      feedback.textContent = `再試一次。目標單字是 ${item.word}.`;
      speak(item.word);
    }
  }

  function makeOptions(correct, isLetter) {
    const source = isLetter ? letters : vocabFor(currentGrade).map(item => item.word);
    return shuffle([correct, ...shuffle(source.filter(item => item !== correct)).slice(0, 3)]);
  }

  function sentenceFor(item, word = "____") {
    if (item.sentence) {
      return item.sentence.replace(new RegExp(`\\b${escapeRegex(item.word)}\\b`, "i"), word);
    }
    const gradeTemplates = {
      1: `I see a ${word}.`,
      2: `This is my ${word}.`,
      3: `My ${word} is here.`,
      4: `I like ${word}.`,
      5: `I study English on ${word}.`,
      6: `I want to visit the ${word}.`
    };
    if (item.word === "happy" || item.word === "sad" || item.word === "angry" || item.word === "tired") return `I am ${word}.`;
    if (item.word === "hungry" || item.word === "thirsty") return `I am ${word}.`;
    if (["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].includes(item.word)) return `Today is ${word}.`;
    if (["spring", "summer", "fall", "winter"].includes(item.word)) return `I like ${word}.`;
    return gradeTemplates[currentGrade] || `I see a ${word}.`;
  }

  function storyFor(grade, words) {
    const wordList = words.map(item => item.word);
    if (grade === 1) return `I see a ${wordList[0]}. I see a ${wordList[1]}. The ${wordList[2]} is here. I like the ${wordList[3]}.`;
    if (grade === 2) return `This is my classroom. I have a ${wordList[0]} and a ${wordList[1]}. I put my ${wordList[2]} on the ${wordList[3]}.`;
    if (grade === 3) return `My friend is ${wordList[0]}. We go to the ${wordList[1]}. I feel ${wordList[2]} with my ${wordList[3]}.`;
    if (grade === 4) return `It is lunch time. I eat ${wordList[0]} and ${wordList[1]}. I drink ${wordList[2]}. The ${wordList[3]} is good.`;
    if (grade === 5) return `Today is ${wordList[0]}. In the ${wordList[1]}, I talk about ${wordList[2]}. My favorite season is ${wordList[3]}.`;
    return `On vacation, I go to the ${wordList[0]}. I take a ${wordList[1]} and my ${wordList[2]}. The trip is ${wordList[3]}.`;
  }

  function spellingKey(word) {
    return String(word).replace(/[^A-Za-z]/g, "");
  }

  function escapeRegex(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function iconFor(word = "", zh = "") {
    const text = `${word} ${zh}`.toLowerCase();
    if (/apple|banana|grape|fruit|orange|mango|peach|pear|papaya|guava|lemon/.test(text)) return "🍎";
    if (/rice|noodle|bread|hamburger|pizza|cake|cookie|food|lunch|dinner|breakfast|soup|salad|meat|beef|pork|chicken|fish|shrimp|ham|steak|candy|cheese|chocolate|ice cream|popcorn|薯條|食物|餐/.test(text)) return "🍽️";
    if (/mother|father|brother|sister|aunt|uncle|family|son|daughter|grand/.test(text)) return "👪";
    if (/happy|sad|angry|tired|sick|healthy|dizzy|comfortable|strong|weak|情緒|健康/.test(text)) return "😊";
    if (/red|blue|green|color|black|white|yellow|purple|pink|brown|gray|gold/.test(text)) return "🎨";
    if (/eye|ear|nose|mouth|face|hair|tooth|body|身體|頭|臉/.test(text)) return "🙂";
    if (/book|pencil|crayon|school|classroom|library|blackboard|chalk|desk|teacher|學校|文具|教室/.test(text)) return "📚";
    if (/house|room|kitchen|bathroom|bedroom|garden|door|window|home|yard|balcony|wall|floor|家|房/.test(text)) return "🏠";
    if (/cat|dog|duck|bear|cow|deer|bird|bee|ant|zebra|lion|tiger|elephant|animal|動物|魚|鳥|蟲/.test(text)) return "🐾";
    if (/monday|tuesday|wednesday|thursday|friday|saturday|sunday|morning|afternoon|evening|night|spring|summer|winter|fall|month|time|時間|季節|月份/.test(text)) return "🗓️";
    if (/shirt|coat|dress|pants|skirt|shoes|clothes|衣|褲|鞋|帽/.test(text)) return "👕";
    if (/baseball|basketball|soccer|golf|race|sport|球|嗜好/.test(text)) return "⚽";
    if (/australia|canada|egypt|france|germany|japan|korea|country|國家/.test(text)) return "🌏";
    if (/bowl|cup|dish|fork|knife|plate|spoon|chopsticks|餐具/.test(text)) return "🍴";
    if (/airplane|bus|car|train|scooter|bike|boat|station|bridge|highway|交通|車|飛機/.test(text)) return "🚌";
    if (/what|where|when|why|who|how|whose|which/.test(text)) return "❓";
    if (/i|my|me|he|she|we|they|you|his|her|our|their/.test(text)) return "💬";
    return "🔤";
  }

  function completeStage(stageId, score, total) {
    if (!state.completed.includes(stageId)) state.completed.push(stageId);
    state.scores[stageId] = { score, total, grade: currentGrade, completedAt: new Date().toISOString() };
    saveState();
    const stage = stagesFor(currentGrade).find(item => item.id === stageId);
    const body = `
      <div class="reward">
        <div class="reward-icon">🏅</div>
        <h2>獲得 ${stage.badge}</h2>
        <p>本次成績：${score} / ${total}</p>
        <p>你完成了「${stage.title}」任務。</p>
        <div class="task-actions" style="justify-content:center">
          <button class="btn secondary" data-view="course">回任務地圖</button>
          <button class="btn primary" data-view="report">查看成果卡</button>
        </div>
      </div>`;
    missionShell(stage, body);
  }

  function renderReport() {
    const stages = stagesFor(currentGrade);
    const totalScore = stages.reduce((sum, stage) => sum + (state.scores[stage.id]?.score || 0), 0);
    const totalItems = stages.reduce((sum, stage) => sum + (state.scores[stage.id]?.total || 0), 0);
    app.innerHTML = `
      ${topbar()}
      <main class="screen">
        <section class="panel">
          <span class="eyebrow">Portfolio</span>
          <h1>${currentGrade}年級英語大會考成果卡</h1>
          <p class="lead">這張卡記錄學生在同一台裝置上的離線練習成果。</p>
          <p>學生姓名：<input id="studentName" value="${escapeHtml(state.studentName)}" placeholder="請輸入姓名"></p>
          <div class="portfolio-grid">
            ${stages.map(stage => {
              const score = state.scores[stage.id];
              return `<article class="portfolio-card"><h3>${stage.icon} ${stage.title}</h3><p>${stage.subtitle}</p><strong>${score ? `${score.score} / ${score.total}` : "尚未完成"}</strong></article>`;
            }).join("")}
          </div>
          <div class="reward" style="margin-top:18px">
            <h2>總成績 ${totalItems ? `${totalScore} / ${totalItems}` : "尚未開始"}</h2>
            <p>${stages.every(stage => state.completed.includes(stage.id)) ? "已完成本年級大會考任務。" : "請回任務地圖繼續挑戰。"}</p>
          </div>
          <div class="task-actions">
            <button class="btn primary" onclick="window.print()">列印／另存 PDF</button>
            <button class="btn secondary" data-view="course">回任務地圖</button>
            <button class="btn danger" id="resetProgress">清除全部進度</button>
          </div>
        </section>
      </main>
      ${footer()}`;
    bindNav();
    document.getElementById("studentName").onchange = event => {
      state.studentName = event.target.value.trim();
      saveState();
    };
    document.getElementById("resetProgress").onclick = () => {
      if (!confirm("確定清除這台裝置上的英語大會考進度嗎？")) return;
      localStorage.removeItem(storageKey);
      state = loadState();
      renderHome();
    };
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = text.length === 1 ? .75 : .82;
    const voices = window.speechSynthesis.getVoices();
    const usVoice = voices.find(voice => /en-US/i.test(voice.lang)) || voices.find(voice => /^en/i.test(voice.lang));
    if (usVoice) utterance.voice = usVoice;
    window.speechSynthesis.speak(utterance);
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
  }

  function bindNav() {
    document.querySelectorAll("[data-view]").forEach(button => {
      button.onclick = () => {
        const view = button.dataset.view;
        if (view === "home") renderHome();
        if (view === "grades") renderGrades();
        if (view === "course") renderCourse();
        if (view === "report") renderReport();
      };
    });
  }

  renderHome();
})();
