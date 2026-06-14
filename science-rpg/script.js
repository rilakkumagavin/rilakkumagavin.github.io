const lessons = [
  {
    id:"stage1", title:"第一關：森之構造圖鑑", subtitle:"動物構造與功能",
    background:"assets/stage1_bg.png", npc:"assets/npc_science_teacher.png", badge:"assets/badge_stage1.png",
    mapPosition:[25,38],
    dialogues:[
      "歡迎來到森語天候王國！我是自然導師露米。",
      "動物圖鑑的構造頁被魔風吹散了。翅膀、鰭、腳蹼和外殼都找不到自己的功能。",
      "先觀察構造的形狀，再想想它如何幫助動物運動或保護自己。"
    ],
    learning:"構造的形狀與位置，常和它能完成的工作有關。",
    taskType:"match",
    pairs:[
      ["鳥的翅膀","拍動空氣幫助飛行"],
      ["魚的鰭","游泳、轉向與保持平衡"],
      ["鴨的腳蹼","增加推水面積"],
      ["龜的外殼","遇到危險時保護身體"]
    ],
    correctFeedback:"太棒了！你是從構造推理功能，而不是只背動物名稱。",
    wrongFeedback:"再看看構造的形狀，想想它在水中、空中或遇到危險時能做什麼。",
    reward:"構造功能晶章"
  },
  {
    id:"stage2", title:"第二關：三界棲地之門", subtitle:"構造與環境適應",
    background:"assets/stage2_bg.png", npc:"assets/npc_science_teacher.png", badge:"assets/badge_stage2.png",
    mapPosition:[50,24],
    dialogues:[
      "前方是水域、陸地與天空交會的三界之門。",
      "動物不是住在哪裡都一樣方便；身體構造要能配合環境。",
      "請把構造線索送回最適合發揮作用的環境。"
    ],
    learning:"適應要同時連結環境條件、身體構造和活動方式。",
    taskType:"classify",
    categories:["水中活動","陸地活動","空中活動"],
    items:[
      ["流線形身體與鰭",0],["腳蹼與防水羽毛",0],
      ["強壯後腿適合跳躍",1],["肉墊幫助行走",1],
      ["翅膀與輕盈羽毛",2],["流線形翼面",2]
    ],
    correctFeedback:"分類完成！構造是否有利，要放進實際環境中判斷。",
    wrongFeedback:"這張卡片最常幫助動物在哪一種環境移動？",
    reward:"棲地適應晶章"
  },
  {
    id:"stage3", title:"第三關：隱身草原", subtitle:"動物的生存法寶",
    background:"assets/stage3_bg.png", npc:"assets/npc_science_teacher.png", badge:"assets/badge_stage3.png",
    mapPosition:[73,39],
    dialogues:[
      "隱身草原的守護光消失了，動物們需要找回自己的保護方法。",
      "有些動物藏起來，有些用硬殼防禦，也有些用醒目顏色發出警告。",
      "請找出所有真正能幫助動物生存的策略。"
    ],
    learning:"動物可能同時利用隱藏、防禦、警告、逃生與群體合作。",
    taskType:"multiSelect",
    question:"哪些是動物的生存策略？請選出全部正確答案。",
    options:[
      ["體色和環境相似，降低被發現機會",true],
      ["用硬殼或尖刺降低受傷",true],
      ["醒目顏色警告可能有毒或危險",true],
      ["任意改變天氣讓天敵消失",false],
      ["快速逃跑、飛行或躲入洞中",true]
    ],
    correctFeedback:"全部找到了！藏、擋、嚇、逃，都是不同的生存方法。",
    wrongFeedback:"想想這個方法是否真的能讓動物降低被發現、受傷或被捕食的機會。",
    reward:"生存法寶晶章"
  },
  {
    id:"stage4", title:"第四關：晴雨生活村", subtitle:"天氣對生活的影響",
    background:"assets/stage4_bg.png", npc:"assets/npc_science_teacher.png", badge:"assets/badge_stage4.png",
    mapPosition:[70,68],
    dialogues:[
      "晴雨生活村把天氣簡單分成好天氣和壞天氣，結果準備常常出錯。",
      "同一種天氣可能帶來幫助，也可能需要防範。",
      "請依實際影響分類，不要只看晴天或雨天的名稱。"
    ],
    learning:"天氣的影響和強度、時間、地點及活動有關，沒有絕對的好或壞。",
    taskType:"classify",
    categories:["可能帶來幫助","需要防範風險"],
    items:[
      ["雨水補充水庫",0],["晴天適合曬衣",0],["微風幫助通風",0],
      ["豪雨可能造成淹水",1],["烈日可能造成晒傷",1],["強風可能吹落物品",1]
    ],
    correctFeedback:"判斷正確！好的準備來自分析影響，不是只背天氣名稱。",
    wrongFeedback:"想想這個情況會提供需要的資源，還是可能造成安全問題。",
    reward:"天氣影響晶章"
  },
  {
    id:"stage5", title:"第五關：雲頂觀測塔", subtitle:"正確觀測天氣",
    background:"assets/stage5_bg.png", npc:"assets/npc_science_teacher.png", badge:"assets/badge_stage5.png",
    mapPosition:[43,70],
    dialogues:[
      "觀測塔的氣溫紀錄互相矛盾，因為研究員使用工具的方法不同。",
      "科學資料要能比較，觀測位置、操作方法和紀錄都必須正確。",
      "請重建氣溫觀測流程，讓資料恢復可信度。"
    ],
    learning:"公平觀測要使用合適工具，保持條件一致，並留下完整紀錄。",
    taskType:"sequence",
    steps:[
      "選擇陰涼通風、不受太陽直射的位置",
      "讓液囊朝下，手不要碰液囊",
      "等待酒精柱穩定",
      "眼睛平視酒精柱頂端",
      "記錄日期、時間、地點與攝氏讀值"
    ],
    correctFeedback:"流程修復完成！位置、工具、讀值與紀錄缺一不可。",
    wrongFeedback:"想想正式讀值前，工具要先放在哪裡、保持什麼狀態。",
    reward:"精準觀測晶章"
  },
  {
    id:"stage6", title:"第六關：氣象水晶塔", subtitle:"應用氣象資訊",
    background:"assets/stage6_bg.png", npc:"assets/npc_science_teacher.png", badge:"assets/badge_stage6.png",
    mapPosition:[18,69],
    dialogues:[
      "最後一座水晶塔顯示：明日最高31℃、降雨機率70%，午後可能雷雨並有強風。",
      "預報不是只看一個圖示，要先確認地區和時間，再整合溫度、雨和風。",
      "請選出適合明日校外活動的所有準備。"
    ],
    learning:"使用預報時要整合地區、時間、氣溫、降雨與風，並依風險調整計畫。",
    taskType:"multiSelect",
    question:"根據預報，哪些準備最合理？請選出全部正確答案。",
    options:[
      ["準備飲水與遮陽用品",true],
      ["攜帶雨具並準備室內備案",true],
      ["午後雷雨時仍到空曠處活動",false],
      ["固定容易被風吹動的物品",true],
      ["活動前再次查看最新預報",true]
    ],
    correctFeedback:"氣象決策成功！你已能把預報轉成具體、安全的生活行動。",
    wrongFeedback:"逐項對照高溫、降雨、雷電與強風，看看這個行動會降低還是增加風險。",
    reward:"氣象應用晶章"
  }
];

const STORAGE_KEY="forest-weather-rpg-v1";
let state=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{"completed":[]}');
let screen="map",current=0,dialogIndex=0,typeTimer=null,typingDone=true,activeDialogText="",taskState={};
const app=document.getElementById("app");

function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function topbar(){
  const badges=lessons.filter(x=>state.completed.includes(x.id)).map(x=>`<img src="${x.badge}" alt="${x.reward}">`).join("");
  return `<header class="topbar"><div class="brand"><span class="brand-mark">🔬</span><div><b>森語天候王國</b><small>自然科 RPG 冒險</small></div></div><div class="progress-card"><span>晶章 ${state.completed.length}/${lessons.length}</span><div class="mini-badges">${badges}</div></div></header>`;
}
function render(){
  clearInterval(typeTimer);
  app.className="app";
  if(screen==="map")renderMap();
  if(screen==="dialog")renderDialog();
  if(screen==="task")renderTask();
  if(screen==="reward")renderReward();
  if(screen==="ending")renderEnding();
}
function renderMap(){
  const allDone=state.completed.length===lessons.length;
  app.innerHTML=topbar()+`<main class="map-screen"><section class="map-frame"><img src="assets/map_main.png" alt="森語天候王國冒險地圖"><div class="map-title"><h1>六枚自然晶章</h1><p>跟隨露米老師，修復動物領域與天氣領域。每完成一關，就能取回一枚晶章。</p></div>${lessons.map((l,i)=>`<button class="stage-node ${state.completed.includes(l.id)?"done":""}" style="left:${l.mapPosition[0]}%;top:${l.mapPosition[1]}%" data-stage="${i}"><span class="check">✓ </span>${l.title}<small>${l.subtitle}</small></button>`).join("")}<img class="hero-on-map" src="assets/hero_student.png" alt="自然見習巡護員"></section><div class="map-actions">${allDone?`<button class="main-btn" id="seeEnding">前往王國結局</button>`:""}<button class="soft-btn" id="resetGame">重新開始</button></div></main>`;
  document.querySelectorAll("[data-stage]").forEach(b=>b.onclick=()=>startStage(+b.dataset.stage));
  document.getElementById("resetGame").onclick=()=>{if(confirm("要清除所有晶章並重新開始嗎？")){state={completed:[]};save();render()}};
  if(allDone)document.getElementById("seeEnding").onclick=()=>{screen="ending";render()};
}
function startStage(i){current=i;dialogIndex=0;taskState={};screen="dialog";render()}
function scene(inner){const l=lessons[current];return topbar()+`<main class="stage-screen"><section class="stage-scene" style="background-image:url('${l.background}')"><div class="stage-label">${l.title}｜${l.subtitle}</div>${inner}</section></main>`}
function renderDialog(){
  const l=lessons[current],text=l.dialogues[dialogIndex];
  clearInterval(typeTimer);
  app.innerHTML=scene(`<img class="npc" src="${l.npc}" alt="自然導師露米"><div class="dialog-box"><span class="speaker">自然導師・露米</span><div class="dialog-text" id="dialogText"></div><div class="dialog-actions"><button class="main-btn" id="continueDialog">${dialogIndex===l.dialogues.length-1?"接受任務":"繼續"}</button></div></div>`);
  typeText(text);
  document.getElementById("continueDialog").onclick=()=>{
    if(!typingDone){finishTyping();return}
    if(dialogIndex<l.dialogues.length-1){dialogIndex++;renderDialog()}
    else{screen="task";prepareTask();render()}
  };
}
function typeText(text){
  const el=document.getElementById("dialogText");
  let i=0;
  activeDialogText=text;
  typingDone=false;
  el.textContent="";
  const timer=setInterval(()=>{
    el.textContent+=text[i++]||"";
    if(i>=text.length){
      clearInterval(timer);
      if(typeTimer===timer)typeTimer=null;
      typingDone=true;
    }
  },28);
  typeTimer=timer;
}
function finishTyping(){
  clearInterval(typeTimer);
  typeTimer=null;
  const el=document.getElementById("dialogText");
  if(el)el.textContent=activeDialogText;
  typingDone=true;
}
function prepareTask(){
  const l=lessons[current];
  if(l.taskType==="match")taskState={left:null,matched:[]};
  if(l.taskType==="classify")taskState={category:null,done:[]};
  if(l.taskType==="multiSelect")taskState={selected:[]};
  if(l.taskType==="sequence")taskState={order:[]};
}
function taskShell(body){
  const l=lessons[current],progress=taskProgress(l);
  return scene(`<section class="task-panel"><h2>${l.title}</h2><p><strong>學習祕訣：</strong>${l.learning}</p>${body}<div class="feedback" id="feedback">依照任務說明完成挑戰。</div><div class="task-footer"><button class="soft-btn" id="backMap">回地圖</button><div class="task-meter"><span style="width:${progress}%"></span></div><button class="main-btn" id="checkTask">檢查答案</button></div></section>`);
}
function taskProgress(l){
  if(l.taskType==="match")return taskState.matched.length/l.pairs.length*100;
  if(l.taskType==="classify")return taskState.done.length/l.items.length*100;
  if(l.taskType==="multiSelect")return taskState.selected.length/l.options.length*80;
  if(l.taskType==="sequence")return taskState.order.length/l.steps.length*80;
  return 0;
}
function renderTask(){
  const l=lessons[current];
  let body="";
  if(l.taskType==="match"){
    const right=l.pairs.map((p,i)=>({text:p[1],i})).sort((a,b)=>((a.i*7+3)%l.pairs.length)-((b.i*7+3)%l.pairs.length));
    body=`<p>先點左邊的動物構造，再點右邊最適合的功能。</p><div class="match-area"><div class="match-col">${l.pairs.map((p,i)=>`<button class="match-btn ${taskState.left===i?"active":""} ${taskState.matched.includes(i)?"matched":""}" data-left="${i}">${p[0]}</button>`).join("")}</div><div class="match-col">${right.map(x=>`<button class="match-btn ${taskState.matched.includes(x.i)?"matched":""}" data-right="${x.i}">${x.text}</button>`).join("")}</div></div>`;
  }
  if(l.taskType==="classify")body=`<p>先選分類箱，再點選應放入的卡片。</p><div class="category-row">${l.categories.map((x,i)=>`<button class="category ${taskState.category===i?"active":""}" data-cat="${i}">${x}</button>`).join("")}</div><div class="task-grid">${l.items.map((x,i)=>`<button class="task-card ${taskState.done.includes(i)?"correct":""}" data-item="${i}">${x[0]}</button>`).join("")}</div>`;
  if(l.taskType==="multiSelect")body=`<p>${l.question}</p><div class="task-grid">${l.options.map((x,i)=>`<button class="task-card ${taskState.selected.includes(i)?"selected":""}" data-option="${i}">${x[0]}</button>`).join("")}</div>`;
  if(l.taskType==="sequence"){
    const bank=l.steps.map((x,i)=>({x,i})).sort((a,b)=>((a.i*3+2)%l.steps.length)-((b.i*3+2)%l.steps.length));
    body=`<p>依正確的實驗順序點選卡片。</p><img class="science-props" src="assets/science_props.png" alt="氣溫計、雨量筒、風向計與自然觀察工具"><div class="task-grid">${bank.map(v=>`<button class="task-card ${taskState.order.includes(v.i)?"correct":""}" data-step="${v.i}">${v.x}</button>`).join("")}</div><div class="sequence-list">${l.steps.map((_,i)=>`<div class="sequence-slot">${taskState.order[i]!==undefined?l.steps[taskState.order[i]]:""}</div>`).join("")}</div>`;
  }
  app.innerHTML=taskShell(body);bindTask();
}
function setFeedback(text,bad=false){
  const el=document.getElementById("feedback");el.textContent=text;el.style.background=bad?"#fde7e7":"#e9f2d2";
}
function bindTask(){
  const l=lessons[current];
  document.getElementById("backMap").onclick=()=>{screen="map";render()};
  document.getElementById("checkTask").onclick=checkTask;
  document.querySelectorAll("[data-left]").forEach(b=>b.onclick=()=>{if(taskState.matched.includes(+b.dataset.left))return;taskState.left=+b.dataset.left;renderTask()});
  document.querySelectorAll("[data-right]").forEach(b=>b.onclick=()=>{
    const r=+b.dataset.right;
    if(taskState.left===null||taskState.matched.includes(r))return;
    if(r===taskState.left){taskState.matched.push(r);taskState.left=null;renderTask();setFeedback("配對成功！繼續找下一組。")}
    else{setFeedback(l.wrongFeedback,true);b.classList.add("wrong")}
  });
  document.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{taskState.category=+b.dataset.cat;renderTask()});
  document.querySelectorAll("[data-item]").forEach(b=>b.onclick=()=>{
    const i=+b.dataset.item;if(taskState.done.includes(i))return;
    if(taskState.category===null){setFeedback("請先選一個分類箱。",true);return}
    if(l.items[i][1]===taskState.category){taskState.done.push(i);renderTask();setFeedback("分類正確！")}
    else{setFeedback(l.wrongFeedback,true);b.classList.add("wrong")}
  });
  document.querySelectorAll("[data-option]").forEach(b=>b.onclick=()=>{const i=+b.dataset.option;taskState.selected=taskState.selected.includes(i)?taskState.selected.filter(x=>x!==i):[...taskState.selected,i];renderTask()});
  document.querySelectorAll("[data-step]").forEach(b=>b.onclick=()=>{const i=+b.dataset.step;if(taskState.order.includes(i))return;taskState.order.push(i);renderTask()});
}
function checkTask(){
  const l=lessons[current];let ok=false;
  if(l.taskType==="match")ok=taskState.matched.length===l.pairs.length;
  if(l.taskType==="classify")ok=taskState.done.length===l.items.length;
  if(l.taskType==="multiSelect"){
    const correct=l.options.map((x,i)=>x[1]?i:null).filter(x=>x!==null);
    ok=correct.length===taskState.selected.length&&correct.every(x=>taskState.selected.includes(x));
  }
  if(l.taskType==="sequence")ok=taskState.order.length===l.steps.length&&taskState.order.every((x,i)=>x===i);
  if(ok){if(!state.completed.includes(l.id)){state.completed.push(l.id);save()}screen="reward";render()}
  else{
    setFeedback(l.wrongFeedback,true);
    if(l.taskType==="sequence"){taskState.order=[];setTimeout(renderTask,900)}
  }
}
function renderReward(){
  const l=lessons[current],allDone=state.completed.length===lessons.length;
  app.innerHTML=scene(`<section class="task-panel reward"><img src="${l.badge}" alt="${l.reward}"><div><p>任務完成</p><h2>獲得「${l.reward}」！</h2><p>${l.correctFeedback}</p><button class="main-btn" id="rewardNext">${allDone?"開啟王國結局":"帶著晶章回地圖"}</button></div></section>`);
  document.getElementById("rewardNext").onclick=()=>{screen=allDone?"ending":"map";render()};
}
function renderEnding(){
  app.innerHTML=topbar()+`<main class="ending" style="background-image:url('assets/ending_complete.png')"><section class="ending-card"><h1>自然王國修復完成！</h1><p>你運用觀察、分類、證據與科學方法，找回六枚自然晶章。從今天起，你就是能理解動物、觀測天氣並做出安全決定的「自然晶章巡護員」！</p><div class="badge-rack">${lessons.map(l=>`<img src="${l.badge}" alt="${l.reward}">`).join("")}</div><button class="main-btn" id="endingMap">回到冒險地圖</button> <button class="soft-btn" id="endingReset">重新開始</button></section></main>`;
  document.getElementById("endingMap").onclick=()=>{screen="map";render()};
  document.getElementById("endingReset").onclick=()=>{state={completed:[]};save();screen="map";render()};
}
render();
