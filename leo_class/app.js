(() => {
  "use strict";

  const storageKey = "leo-class-english-exam-v1";
  const sourceUrl = "https://sites.google.com/csps.tyc.edu.tw/digitalresource/%E8%8B%B1%E8%AA%9E%E5%B0%88%E5%8D%80/%E5%96%AE%E5%AD%97%E5%A4%A7%E6%9C%83%E8%80%83-%E4%B8%80%E5%B9%B4%E7%B4%9A?authuser=1";

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const vocab = [
    { word: "apple", zh: "蘋果", letter: "A", icon: "🍎" },
    { word: "ball", zh: "球", letter: "B", icon: "⚽" },
    { word: "cat", zh: "貓", letter: "C", icon: "🐱" },
    { word: "dog", zh: "狗", letter: "D", icon: "🐶" },
    { word: "egg", zh: "蛋", letter: "E", icon: "🥚" },
    { word: "fish", zh: "魚", letter: "F", icon: "🐟" },
    { word: "goat", zh: "山羊", letter: "G", icon: "🐐" },
    { word: "hat", zh: "帽子", letter: "H", icon: "🎩" },
    { word: "ink", zh: "墨水", letter: "I", icon: "🖋️" },
    { word: "jet", zh: "噴射機", letter: "J", icon: "✈️" },
    { word: "key", zh: "鑰匙", letter: "K", icon: "🔑" },
    { word: "lion", zh: "獅子", letter: "L", icon: "🦁" },
    { word: "map", zh: "地圖", letter: "M", icon: "🗺️" },
    { word: "net", zh: "網子", letter: "N", icon: "🕸️" },
    { word: "ox", zh: "牛", letter: "O", icon: "🐂" },
    { word: "pig", zh: "豬", letter: "P", icon: "🐷" },
    { word: "queen", zh: "女王", letter: "Q", icon: "👑" },
    { word: "red", zh: "紅色", letter: "R", icon: "🔴" },
    { word: "sun", zh: "太陽", letter: "S", icon: "☀️" },
    { word: "ten", zh: "十", letter: "T", icon: "🔟" },
    { word: "up", zh: "向上", letter: "U", icon: "⬆️" },
    { word: "van", zh: "廂型車", letter: "V", icon: "🚐" },
    { word: "wig", zh: "假髮", letter: "W", icon: "💇" },
    { word: "fox", zh: "狐狸", letter: "X", icon: "🦊" },
    { word: "yo-yo", zh: "溜溜球", letter: "Y", icon: "🪀" },
    { word: "zebra", zh: "斑馬", letter: "Z", icon: "🦓" }
  ];

  const grades = [
    { id: 1, title: "單字大會考－一年級", subtitle: "Letter Recognition · US English TTS", status: "已建立第一版", active: true },
    { id: 2, title: "單字大會考－二年級", subtitle: "Sight Words · Classroom English", status: "預留入口" },
    { id: 3, title: "單字大會考－三年級", subtitle: "Words · Picture Books · Quest", status: "預留入口" },
    { id: 4, title: "單字大會考－四年級", subtitle: "三份字表與分段測驗", status: "預留入口" },
    { id: 5, title: "單字大會考－五年級", subtitle: "Spelling · Meaning · Listening", status: "預留入口" },
    { id: 6, title: "單字大會考－六年級", subtitle: "Review · Challenge · Portfolio", status: "預留入口" }
  ];

  const stages = [
    {
      id: "letters",
      title: "Letter Recognition",
      subtitle: "A-Z 字母辨識與朗讀",
      icon: "🔤",
      badge: "Letter Scout",
      objective: "能看見大寫字母並聽見美式英文朗讀。",
      background: "assets/stage_phonics_a.png"
    },
    {
      id: "listen",
      title: "Listen & Pick",
      subtitle: "聽老師念，選出正確字母",
      icon: "🎧",
      badge: "Sound Picker",
      objective: "能聽見字母名稱並從選項中選出正確字母。",
      background: "assets/stage_phonics_b.png"
    },
    {
      id: "words",
      title: "Word Exam",
      subtitle: "單字大會考闖關",
      icon: "🏆",
      badge: "Word Champion",
      objective: "能辨認一年級 A-Z 代表單字，並聽見正確發音。",
      background: "assets/stage_phonics_c.png"
    }
  ];

  const app = document.getElementById("app");
  let state = loadState();
  let quiz = null;

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
          <button class="btn secondary" data-view="home">年級入口</button>
          <button class="btn secondary" data-view="course">一年級</button>
          <button class="btn primary" data-view="report">成果卡</button>
        </nav>
      </header>`;
  }

  function footer() {
    return `<footer class="footer">參考來源：青溪國小數位資源網「英語專區／單字大會考－一年級」 · 本頁為離線重製原型</footer>`;
  }

  function renderHome() {
    app.innerHTML = `
      ${topbar()}
      <main class="home">
        <section class="hero-copy">
          <span class="eyebrow">English Word Exam</span>
          <h1>英語大會考離線入口</h1>
          <p class="lead">學生先選年級，再進入字母辨識、聽音選字母與單字大會考。資料直接內嵌在網頁中，不使用 Google 試算表，也能放到 GitHub Pages 或協作平台。</p>
          <div class="hero-stats">
            <div class="stat"><strong>6</strong><span>年級入口</span></div>
            <div class="stat"><strong>26</strong><span>A-Z 字母</span></div>
            <div class="stat"><strong>TTS</strong><span>美式英文朗讀</span></div>
          </div>
          <button class="btn primary" data-view="grades">選擇年級</button>
        </section>
        <section class="hero-art" aria-hidden="true">
          <img src="assets/hero_student.png" alt="">
        </section>
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
              <button class="grade-card ${grade.active ? "active" : "locked"}" data-grade="${grade.id}" ${grade.active ? "" : "disabled"}>
                <span class="grade-level">${grade.id}</span>
                <div>
                  <h3>${grade.title}</h3>
                  <p>${grade.subtitle}</p>
                </div>
                <span class="grade-status">${grade.status}</span>
              </button>`).join("")}
          </div>
        </section>
      </main>
      ${footer()}`;
    bindNav();
    document.querySelectorAll("[data-grade]").forEach(button => {
      button.onclick = () => renderCourse();
    });
  }

  function renderCourse() {
    const percent = Math.round(state.completed.length / stages.length * 100);
    app.innerHTML = `
      ${topbar()}
      <main class="screen">
        <section class="panel course-layout">
          <aside class="course-side">
            <div class="character">
              <img src="assets/npc_teacher.png" alt="英語導師">
              <div>
                <span class="eyebrow">Grade 1</span>
                <h2>單字大會考－一年級</h2>
                <p>Letter Recognition · US English TTS</p>
                <div class="progress" aria-label="完成進度"><span style="width:${percent}%"></span></div>
                <p>${state.completed.length} / ${stages.length} 個任務完成</p>
              </div>
            </div>
          </aside>
          <section>
            <div class="section-title">
              <div>
                <span class="eyebrow">Exam Map</span>
                <h2>一年級任務地圖</h2>
              </div>
            </div>
            <div class="stage-map">
              ${stages.map((stage, index) => {
                const done = state.completed.includes(stage.id);
                const unlocked = index === 0 || state.completed.includes(stages[index - 1].id) || done;
                return `
                  <button class="stage-card ${done ? "done" : ""} ${unlocked ? "" : "locked"}" data-stage="${stage.id}" ${unlocked ? "" : "disabled"}>
                    <span class="stage-icon">${done ? "✅" : stage.icon}</span>
                    <div>
                      <h3>${stage.title}</h3>
                      <p>${stage.subtitle}</p>
                    </div>
                    <span class="badge-chip">${done ? stage.badge : "挑戰"}</span>
                  </button>`;
              }).join("")}
            </div>
          </section>
        </section>
      </main>
      ${footer()}`;
    bindNav();
    document.querySelectorAll("[data-stage]").forEach(button => {
      button.onclick = () => startStage(button.dataset.stage);
    });
  }

  function startStage(stageId) {
    const stage = stages.find(item => item.id === stageId);
    if (stageId === "letters") renderLetters(stage);
    if (stageId === "listen") startLetterQuiz(stage);
    if (stageId === "words") startWordQuiz(stage);
  }

  function missionShell(stage, body) {
    app.innerHTML = `
      ${topbar()}
      <main class="mission" style="background-image:url('${stage.background}')">
        <section class="mission-wrap">
          <header class="mission-head">
            <div>
              <span class="eyebrow">Grade 1 English Word Exam</span>
              <h1>${stage.title}</h1>
              <p>${stage.subtitle}</p>
            </div>
            <span class="stage-icon">${stage.icon}</span>
          </header>
          <div class="npc-line">
            <img src="assets/npc_teacher.png" alt="英語導師">
            <div><strong>English Guide：</strong>${stage.objective}</div>
          </div>
          <section class="task">${body}</section>
        </section>
      </main>
      ${footer()}`;
    bindNav();
  }

  function renderLetters(stage) {
    const body = `
      <div class="objective">點選字母可聽美式英文朗讀。這一關是大會考前的字母暖身。</div>
      <div class="task-box">
        <h2>A-Z Letter Recognition</h2>
        <div class="letter-bank">
          ${letters.map(letter => `<button class="letter-btn" data-say="${letter}">${letter}</button>`).join("")}
        </div>
        <div class="task-actions">
          <button class="btn primary" id="finishLetters">完成字母暖身</button>
          <button class="btn secondary" data-view="course">回任務地圖</button>
        </div>
        <div class="feedback info show">請點 A、B、C 試聽；若裝置沒有英文語音，系統仍可作為字母辨識練習。</div>
      </div>`;
    missionShell(stage, body);
    document.querySelectorAll("[data-say]").forEach(button => {
      button.onclick = () => {
        speak(button.dataset.say);
        button.classList.add("done");
      };
    });
    document.getElementById("finishLetters").onclick = () => completeStage(stage.id, 26, 26);
  }

  function startLetterQuiz(stage) {
    const pool = shuffle(letters).slice(0, 10);
    quiz = { stageId: stage.id, stage, type: "letter", pool, index: 0, score: 0, selected: null };
    renderQuiz();
  }

  function startWordQuiz(stage) {
    const pool = shuffle(vocab).slice(0, 12);
    quiz = { stageId: stage.id, stage, type: "word", pool, index: 0, score: 0, selected: null };
    renderQuiz();
  }

  function renderQuiz(message = "") {
    const item = quiz.pool[quiz.index];
    const isWord = quiz.type === "word";
    const correct = isWord ? item.word : item;
    const options = makeOptions(correct, isWord);
    const body = `
      <div class="objective">${isWord ? "看圖、聽單字，再選出正確英文。" : "按下朗讀，聽見字母後選出正確答案。"}</div>
      <div class="task-box">
        <p class="eyebrow">第 ${quiz.index + 1} 題 / ${quiz.pool.length} 題</p>
        <h2>${isWord ? `${item.icon}  ${item.zh}` : "Listen and pick the letter."}</h2>
        <div class="task-actions">
          <button class="btn primary" id="speakQuestion">${isWord ? "朗讀單字" : "朗讀字母"}</button>
        </div>
        <div class="option-grid">
          ${options.map(option => `<button class="option" data-answer="${option}">${option}</button>`).join("")}
        </div>
        <div class="feedback ${message ? "show info" : ""}" id="feedback">${message}</div>
        <div class="task-actions">
          <button class="btn secondary" data-view="course">回任務地圖</button>
        </div>
      </div>`;
    missionShell(quiz.stage, body);
    document.getElementById("speakQuestion").onclick = () => speak(correct);
    document.querySelectorAll("[data-answer]").forEach(button => {
      button.onclick = () => chooseAnswer(button, correct);
    });
    setTimeout(() => speak(correct), 250);
  }

  function chooseAnswer(button, correct) {
    const picked = button.dataset.answer;
    const feedback = document.getElementById("feedback");
    if (picked === correct) {
      quiz.score += 1;
      button.classList.add("correct");
      feedback.className = "feedback show good";
      feedback.textContent = "答對了！聽音、看字、做判斷，這就是大會考的核心。";
      setTimeout(nextQuestion, 650);
    } else {
      button.classList.add("wrong");
      feedback.className = "feedback show bad";
      feedback.textContent = `再聽一次。正確答案的聲音是 ${correct}.`;
      speak(correct);
    }
  }

  function nextQuestion() {
    quiz.index += 1;
    if (quiz.index >= quiz.pool.length) {
      completeStage(quiz.stageId, quiz.score, quiz.pool.length);
    } else {
      renderQuiz();
    }
  }

  function makeOptions(correct, isWord) {
    const source = isWord ? vocab.map(item => item.word) : letters;
    const wrong = shuffle(source.filter(item => item !== correct)).slice(0, 3);
    return shuffle([correct, ...wrong]);
  }

  function completeStage(stageId, score, total) {
    if (!state.completed.includes(stageId)) state.completed.push(stageId);
    state.scores[stageId] = { score, total, completedAt: new Date().toISOString() };
    saveState();
    const stage = stages.find(item => item.id === stageId);
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
    const totalScore = Object.values(state.scores).reduce((sum, item) => sum + item.score, 0);
    const totalItems = Object.values(state.scores).reduce((sum, item) => sum + item.total, 0);
    app.innerHTML = `
      ${topbar()}
      <main class="screen">
        <section class="panel">
          <span class="eyebrow">Portfolio</span>
          <h1>一年級英語大會考成果卡</h1>
          <p class="lead">這張卡記錄學生在同一台裝置上的離線練習成果。</p>
          <p>學生姓名：<input id="studentName" value="${escapeHtml(state.studentName)}" placeholder="請輸入姓名"></p>
          <div class="portfolio-grid">
            ${stages.map(stage => {
              const score = state.scores[stage.id];
              return `
                <article class="portfolio-card">
                  <h3>${stage.icon} ${stage.title}</h3>
                  <p>${stage.subtitle}</p>
                  <strong>${score ? `${score.score} / ${score.total}` : "尚未完成"}</strong>
                </article>`;
            }).join("")}
          </div>
          <div class="reward" style="margin-top:18px">
            <h2>總成績 ${totalItems ? `${totalScore} / ${totalItems}` : "尚未開始"}</h2>
            <p>${state.completed.length === stages.length ? "已完成一年級大會考第一版任務。" : "請回任務地圖繼續挑戰。"}</p>
          </div>
          <div class="task-actions">
            <button class="btn primary" onclick="window.print()">列印／另存 PDF</button>
            <button class="btn secondary" data-view="course">回任務地圖</button>
            <button class="btn danger" id="resetProgress">清除進度</button>
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
