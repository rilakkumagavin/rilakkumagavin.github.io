(() => {
  "use strict";

  const course = window.SOCIAL_COURSE;
  const app = document.getElementById("app");
  const storageKey = course.meta.storageKey;

  let state = loadState();
  let currentStageId = null;
  let hintLevel = 0;
  let draft = {};

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      return {
        started: Boolean(saved.started),
        completed: Array.isArray(saved.completed) ? saved.completed : [],
        records: saved.records || {},
        studentName: saved.studentName || ""
      };
    } catch {
      return { started: false, completed: [], records: {}, studentName: "" };
    }
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function getStage(id) {
    return course.stages.find(stage => stage.id === id);
  }

  function isComplete(id) {
    return state.completed.includes(id);
  }

  function isUnlocked(index) {
    return index === 0 || isComplete(course.stages[index - 1].id) || isComplete(course.stages[index].id);
  }

  function topbar() {
    return `
      <header class="topbar">
        <div class="brand">
          <span class="brand-mark">🏛️</span>
          <div><strong>${course.meta.title}</strong><small>${course.meta.subtitle}</small></div>
        </div>
        <div class="top-actions">
          <button class="btn secondary" data-nav="map">冒險地圖</button>
          <button class="btn secondary" data-nav="badges">徽章</button>
          <button class="btn primary" data-nav="report">成果卡</button>
        </div>
      </header>`;
  }

  function footer() {
    return `<footer class="footer">教材設計：${course.meta.designer} · 所有關卡內容依第4～6單元課本、教冊與習作整理</footer>`;
  }

  function renderHome() {
    app.innerHTML = `
      ${topbar()}
      <main class="screen hero-screen">
        <section class="hero-panel">
          <div class="hero-copy">
            <span class="eyebrow">三年級社會期末複習</span>
            <h1>家鄉守護者</h1>
            <h2>社會探究 RPG</h2>
            <p class="hero-story">${course.world.premise}</p>
            <div class="hero-features">
              <div class="hero-feature">🔍 觀察線索</div>
              <div class="hero-feature">🧩 操作與判斷</div>
              <div class="hero-feature">💬 說明理由</div>
            </div>
            <button class="btn primary" id="startAdventure">${state.started ? "繼續冒險" : "接受守護任務"}</button>
            <div class="designer">導師 NPC：${course.world.mentor}<br>設計者：${course.meta.designer}</div>
          </div>
          <div class="hero-art" aria-hidden="true">
            <img src="assets/hero_student.png" alt="">
          </div>
        </section>
      </main>
      ${footer()}`;
    bindGlobalNav();
    document.getElementById("startAdventure").onclick = () => {
      state.started = true;
      saveState();
      renderMap();
    };
  }

  function renderMap() {
    const completed = state.completed.length;
    const percent = Math.round(completed / course.stages.length * 100);
    app.innerHTML = `
      ${topbar()}
      <main class="screen map-screen">
        <section class="progress-card">
          <div>
            <strong>守護任務進度</strong>
            <div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div>
          </div>
          <div class="progress-number">${completed} / ${course.stages.length}</div>
        </section>
        ${course.units.map(unit => renderChapter(unit)).join("")}
      </main>
      ${footer()}`;
    bindGlobalNav();
    document.querySelectorAll("[data-stage]").forEach(button => {
      button.onclick = () => {
        const index = course.stages.findIndex(stage => stage.id === button.dataset.stage);
        if (!isUnlocked(index)) return;
        renderMission(button.dataset.stage);
      };
    });
  }

  function renderChapter(unit) {
    const stages = unit.stageIds.map(getStage);
    return `
      <section class="chapter" style="border-color:${unit.color}">
        <header class="chapter-head">
          <span class="chapter-icon">${unit.icon}</span>
          <div>
            <h2>第${unit.number}單元：${unit.title}</h2>
            <p>${unit.core}</p>
          </div>
        </header>
        <div class="map-path">
          ${stages.map(stage => {
            const index = course.stages.findIndex(item => item.id === stage.id);
            const complete = isComplete(stage.id);
            const unlocked = isUnlocked(index);
            return `
              <button class="stage-node ${complete ? "complete" : ""} ${unlocked ? "" : "locked"}" data-stage="${stage.id}">
                <span class="stage-number">${index + 1}</span>
                <span class="stage-icon">${complete ? "✅" : unlocked ? stage.icon : "🔒"}</span>
                <h3>${stage.title}</h3>
                <p>${stage.subtitle}</p>
                <span class="stage-state">${complete ? `已獲得：${stage.badge.name}` : unlocked ? "可以挑戰" : "完成前一關後解鎖"}</span>
              </button>`;
          }).join("")}
        </div>
      </section>`;
  }

  function renderMission(stageId) {
    currentStageId = stageId;
    hintLevel = 0;
    draft = { selected: new Set(), order: [], matched: new Set(), category: null, classified: new Set(), reason: "" };
    const stage = getStage(stageId);
    const index = course.stages.findIndex(item => item.id === stageId);
    const previous = state.records[stageId];

    app.innerHTML = `
      ${topbar()}
      <main class="screen mission-screen unit-${stage.unitId}">
        <div class="mission-wrap">
          <header class="mission-header">
            <div class="chapter-label">${stage.chapter} · 第${index + 1}關</div>
            <h1>${stage.icon} ${stage.title}</h1>
            <p>${stage.subtitle}</p>
          </header>
          <div class="mentor">
            <img src="assets/npc_xiaoyi.png" alt="${course.world.mentor}">
            <div><strong>${course.world.mentor}：</strong>${stage.story}</div>
          </div>
          <section class="mission-body">
            <div class="source-tag">教材來源：${stage.source.teacherGuide} · ${stage.source.textbook} · ${stage.source.workbook}</div>
            <div class="objective"><strong>本關目標：</strong>${stage.objective}</div>
            ${renderScaffold(stage)}
            <div class="task-card" id="taskCard">${renderTask(stage)}</div>
            <div class="feedback-box" id="feedbackBox"></div>
            ${previous?.completed ? `<p class="empty-note">你曾在這關完成任務，可以再次操作複習。</p>` : ""}
          </section>
        </div>
      </main>
      ${footer()}`;
    bindGlobalNav();
    bindTask(stage);
  }

  function renderScaffold(stage) {
    if (!stage.scaffold) return "";
    return `
      <section class="scaffold-card">
        <div class="scaffold-kicker">任務暖身</div>
        <h2>${stage.scaffold.title}</h2>
        <p><strong>生活連結：</strong>${stage.scaffold.lifeLink}</p>
        <p><strong>核心想法：</strong>${stage.scaffold.keyIdea}</p>
        <div class="scaffold-observe">
          ${stage.scaffold.observe.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>`;
  }

  function renderTask(stage) {
    let body = "";
    if (stage.type === "select" || stage.type === "reason") {
      body = `<div class="option-grid">${stage.options.map((option, index) =>
        `<button class="option" data-option="${index}"><strong>${String.fromCharCode(65 + index)}</strong>　${option}</button>`
      ).join("")}</div>`;
      if (stage.type === "reason") {
        body += `<div class="reason-box"><label><strong>${stage.reasonPrompt}</strong><textarea id="reasonInput" placeholder="我認為……，因為……"></textarea></label></div>`;
      }
    }
    if (stage.type === "sequence") {
      body = `<div class="sequence-list" id="sequenceList">${stage.items.map((item, index) =>
        `<div class="sequence-item" data-sequence="${index}"><span>${index + 1}</span><b>${item}</b><div class="sequence-controls"><button class="mini-btn" data-up="${index}" aria-label="上移">↑</button><button class="mini-btn" data-down="${index}" aria-label="下移">↓</button></div></div>`
      ).join("")}</div>`;
    }
    if (stage.type === "match") {
      const right = stage.pairs.map((pair, index) => ({ text: pair[1], index })).sort(() => Math.random() - .5);
      body = `<div class="match-board"><div class="match-column">${stage.pairs.map((pair, index) =>
        `<button class="match-item" data-left="${index}">${pair[0]}</button>`).join("")}</div>
        <div class="match-column">${right.map(item =>
        `<button class="match-item" data-right="${item.index}">${item.text}</button>`).join("")}</div></div>`;
    }
    if (stage.type === "classify") {
      body = `<div class="classify-layout"><div class="category-tabs">${stage.categories.map((category, index) =>
        `<button class="category-btn" data-category="${index}">${category}</button>`).join("")}</div>
        <div class="class-items">${stage.items.map((item, index) =>
        `<button class="class-item" data-class-item="${index}">${item.text}</button>`).join("")}</div></div>`;
    }
    return `
      <h2>${stage.prompt}</h2>
      ${body}
      <div class="task-actions">
        <button class="btn secondary" id="hintBtn">提示 0/3</button>
        <button class="btn primary" id="checkBtn">完成判斷</button>
        <button class="btn" data-nav="map">回地圖</button>
      </div>`;
  }

  function bindTask(stage) {
    bindGlobalNav();
    if (stage.type === "select" || stage.type === "reason") {
      document.querySelectorAll("[data-option]").forEach(button => {
        button.onclick = () => {
          const index = Number(button.dataset.option);
          draft.selected.has(index) ? draft.selected.delete(index) : draft.selected.add(index);
          button.classList.toggle("selected");
        };
      });
    }
    if (stage.type === "sequence") bindSequence(stage);
    if (stage.type === "match") bindMatch(stage);
    if (stage.type === "classify") bindClassify(stage);
    document.getElementById("hintBtn").onclick = () => showHint(stage);
    document.getElementById("checkBtn").onclick = () => checkTask(stage);
  }

  function bindSequence(stage) {
    draft.order = stage.items.map((_, index) => index);
    document.querySelectorAll("[data-up]").forEach(button => {
      button.onclick = () => moveSequence(Number(button.dataset.up), -1, stage);
    });
    document.querySelectorAll("[data-down]").forEach(button => {
      button.onclick = () => moveSequence(Number(button.dataset.down), 1, stage);
    });
  }

  function moveSequence(originalIndex, direction, stage) {
    const current = draft.order.indexOf(originalIndex);
    const target = current + direction;
    if (target < 0 || target >= draft.order.length) return;
    [draft.order[current], draft.order[target]] = [draft.order[target], draft.order[current]];
    const list = document.getElementById("sequenceList");
    list.innerHTML = draft.order.map((itemIndex, displayIndex) =>
      `<div class="sequence-item" data-sequence="${itemIndex}"><span>${displayIndex + 1}</span><b>${stage.items[itemIndex]}</b><div class="sequence-controls"><button class="mini-btn" data-up="${itemIndex}">↑</button><button class="mini-btn" data-down="${itemIndex}">↓</button></div></div>`
    ).join("");
    bindSequenceButtons(stage);
  }

  function bindSequenceButtons(stage) {
    document.querySelectorAll("[data-up]").forEach(button => button.onclick = () => moveSequence(Number(button.dataset.up), -1, stage));
    document.querySelectorAll("[data-down]").forEach(button => button.onclick = () => moveSequence(Number(button.dataset.down), 1, stage));
  }

  function bindMatch(stage) {
    let left = null;
    document.querySelectorAll("[data-left]").forEach(button => {
      button.onclick = () => {
        if (button.classList.contains("matched")) return;
        document.querySelectorAll("[data-left]").forEach(item => item.classList.remove("selected"));
        left = Number(button.dataset.left);
        button.classList.add("selected");
      };
    });
    document.querySelectorAll("[data-right]").forEach(button => {
      button.onclick = () => {
        if (left === null || button.classList.contains("matched")) {
          showFeedback("info", "請先點選左邊的一個項目，再選右邊的配對。");
          return;
        }
        const right = Number(button.dataset.right);
        if (left === right) {
          draft.matched.add(left);
          document.querySelector(`[data-left="${left}"]`).classList.add("matched");
          button.classList.add("matched");
          document.querySelector(`[data-left="${left}"]`).classList.remove("selected");
          left = null;
          showFeedback("good", `配對成功！目前完成 ${draft.matched.size}/${stage.pairs.length} 組。`);
        } else {
          button.classList.add("wrong");
          setTimeout(() => button.classList.remove("wrong"), 500);
          showFeedback("bad", "這兩項的關係不相符。先找兩邊共同的關鍵線索。");
        }
      };
    });
  }

  function bindClassify(stage) {
    document.querySelectorAll("[data-category]").forEach(button => {
      button.onclick = () => {
        draft.category = Number(button.dataset.category);
        document.querySelectorAll("[data-category]").forEach(item => item.classList.remove("active"));
        button.classList.add("active");
      };
    });
    document.querySelectorAll("[data-class-item]").forEach(button => {
      button.onclick = () => {
        const itemIndex = Number(button.dataset.classItem);
        if (draft.category === null) {
          showFeedback("info", "請先選擇上方的一個分類，再點選項目。");
          return;
        }
        if (stage.items[itemIndex].category === draft.category) {
          draft.classified.add(itemIndex);
          button.classList.add("done");
          button.disabled = true;
          button.textContent = `✓ ${button.textContent} → ${stage.categories[draft.category]}`;
          showFeedback("good", `分類正確！目前完成 ${draft.classified.size}/${stage.items.length} 項。`);
        } else {
          button.classList.add("wrong");
          setTimeout(() => button.classList.remove("wrong"), 500);
          showFeedback("bad", "這個分類還不合適。再找題目中的自然或人物行動線索。");
        }
      };
    });
  }

  function showHint(stage) {
    hintLevel = Math.min(hintLevel + 1, stage.hints.length);
    document.getElementById("hintBtn").textContent = `提示 ${hintLevel}/3`;
    showFeedback("info", `提示 ${hintLevel}：${stage.hints[hintLevel - 1]}`);
  }

  function checkTask(stage) {
    let correct = false;
    let answerLog = null;
    let reason = "";

    if (stage.type === "select" || stage.type === "reason") {
      const selected = [...draft.selected].sort((a, b) => a - b);
      const expected = [...stage.answers].sort((a, b) => a - b);
      correct = selected.length === expected.length && selected.every((value, index) => value === expected[index]);
      answerLog = selected;
      if (stage.type === "reason") {
        reason = document.getElementById("reasonInput").value.trim();
        const hasReason = reason.length >= 8 && stage.keywords.some(keyword => reason.includes(keyword));
        correct = correct && hasReason;
        if (!hasReason) showFeedback("bad", "選項可能已經找對，但還要寫出至少一句有證據的理由。");
      }
    }
    if (stage.type === "sequence") {
      correct = draft.order.every((value, index) => value === stage.order[index]);
      answerLog = [...draft.order];
    }
    if (stage.type === "match") {
      correct = draft.matched.size === stage.pairs.length;
      answerLog = [...draft.matched];
    }
    if (stage.type === "classify") {
      correct = draft.classified.size === stage.items.length;
      answerLog = [...draft.classified];
    }

    recordAttempt(stage, correct, answerLog, reason);
    if (correct) completeStage(stage);
    else if (!(stage.type === "reason" && reason.length < 8)) {
      showFeedback("bad", hintLevel ? "還有線索沒有整理正確。請依照提示再檢查一次。" : stage.feedback.wrong);
    }
  }

  function recordAttempt(stage, correct, answerLog, reason) {
    const record = state.records[stage.id] || { attempts: 0, hintLevel: 0, completed: false, answerLog: [] };
    record.attempts += 1;
    record.hintLevel = Math.max(record.hintLevel, hintLevel);
    record.answerLog.push({ correct, answer: answerLog, time: new Date().toISOString() });
    if (reason) record.reason = reason;
    state.records[stage.id] = record;
    saveState();
  }

  function completeStage(stage) {
    if (!state.completed.includes(stage.id)) state.completed.push(stage.id);
    const record = state.records[stage.id];
    record.completed = true;
    record.completedAt = new Date().toISOString();
    saveState();
    document.getElementById("taskCard").innerHTML = `
      <div class="learned-card">
        <div class="badge-big">${stage.badge.icon}</div>
        <h2>獲得「${stage.badge.name}」</h2>
        <p><strong>我學會了：</strong>${stage.learned}</p>
        <div class="task-actions" style="justify-content:center">
          <button class="btn secondary" data-nav="map">回冒險地圖</button>
          <button class="btn primary" id="nextStageBtn">${state.completed.length === course.stages.length ? "查看最終成果" : "前往下一關"}</button>
        </div>
      </div>`;
    showFeedback("good", stage.feedback.complete);
    bindGlobalNav();
    document.getElementById("nextStageBtn").onclick = () => {
      const index = course.stages.findIndex(item => item.id === stage.id);
      if (index === course.stages.length - 1) renderReport();
      else renderMission(course.stages[index + 1].id);
    };
  }

  function showFeedback(type, message) {
    const box = document.getElementById("feedbackBox");
    if (!box) return;
    box.className = `feedback-box show ${type}`;
    box.textContent = message;
  }

  function renderBadges() {
    app.innerHTML = `
      ${topbar()}
      <main class="screen map-screen">
        <section class="collection">
          <h1>知識徽章收藏</h1>
          <p>每枚徽章都代表一項已完成的社會探究能力。</p>
          <div class="badge-grid">
            ${course.badges.map(badge => {
              const earned = isComplete(badge.stageId);
              return `<div class="badge-card ${earned ? "" : "locked"}"><span>${earned ? badge.icon : "❔"}</span><strong>${badge.name}</strong><p>${earned ? getStage(badge.stageId).learned : "完成對應關卡後解鎖"}</p></div>`;
            }).join("")}
          </div>
        </section>
      </main>
      ${footer()}`;
    bindGlobalNav();
  }

  function renderReport() {
    const records = course.stages.map(stage => ({ stage, record: state.records[stage.id] || {} }));
    const attempts = records.reduce((sum, item) => sum + (item.record.attempts || 0), 0);
    const hints = records.reduce((sum, item) => sum + (item.record.hintLevel || 0), 0);
    const complete = state.completed.length;
    const title = complete === 17 ? "家鄉守護者" : complete >= 12 ? "地方探究員" : complete >= 6 ? "社會觀察員" : "守護見習生";

    app.innerHTML = `
      ${topbar()}
      <main class="screen map-screen">
        <section class="report">
          <h1>學習紀錄與成果卡</h1>
          <div class="report-grid">
            <div class="report-stat"><b>${complete}/17</b>完成關卡</div>
            <div class="report-stat"><b>${attempts}</b>總挑戰次數</div>
            <div class="report-stat"><b>${hints}</b>最高提示層級合計</div>
          </div>
          <div class="record-list">
            ${records.map(({ stage, record }, index) => `
              <div class="record-row">
                <span>${index + 1}. ${stage.title}</span>
                <span>${record.completed ? "✅ 已完成" : "⬜ 未完成"}</span>
                <span>嘗試 ${record.attempts || 0} 次</span>
              </div>`).join("")}
          </div>
          <section class="final-card">
            <div style="font-size:3.5rem">🏅</div>
            <h2>家鄉守護者學習成果卡</h2>
            <p>學生姓名：<input id="studentName" value="${escapeHtml(state.studentName)}" placeholder="請輸入姓名"></p>
            <p>目前稱號：<strong>${title}</strong></p>
            <p>完成關卡：${complete} / 17　獲得徽章：${complete} 枚</p>
            <p><strong>我的學習成果：</strong><br>${complete === 17 ? course.world.finale : "我正在練習觀察線索、整理資料、做出判斷並說明理由。"}</p>
            <p>教材設計：${course.meta.designer}</p>
          </section>
          <div class="task-actions">
            <button class="btn primary" id="printBtn">列印成果卡</button>
            <button class="btn secondary" data-nav="map">繼續挑戰</button>
            <button class="btn danger" id="resetBtn">重新開始</button>
          </div>
        </section>
      </main>
      ${footer()}`;
    bindGlobalNav();
    document.getElementById("studentName").onchange = event => {
      state.studentName = event.target.value.trim();
      saveState();
    };
    document.getElementById("printBtn").onclick = () => window.print();
    document.getElementById("resetBtn").onclick = () => {
      if (!window.confirm("確定要清除所有關卡與徽章紀錄嗎？")) return;
      localStorage.removeItem(storageKey);
      state = loadState();
      renderHome();
    };
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
  }

  function bindGlobalNav() {
    document.querySelectorAll("[data-nav]").forEach(button => {
      button.onclick = () => {
        const target = button.dataset.nav;
        if (target === "map") renderMap();
        if (target === "badges") renderBadges();
        if (target === "report") renderReport();
      };
    });
  }

  renderHome();
})();
