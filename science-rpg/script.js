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
      ["鳥的翅膀","拍動空氣幫助飛行","🪽","🌬️ ⬆️"],
      ["魚的鰭","游泳、轉向與保持平衡","🐟","🌊 ↔️"],
      ["鴨的腳蹼","增加推水面積","🦆","💧 〰️"],
      ["龜的外殼","遇到危險時保護身體","🐢","🛡️"]
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
    categoryIcons:["🌊","🌳","☁️"],
    items:[
      ["流線形身體與鰭",0,"🐟"],["腳蹼與防水羽毛",0,"🦆"],
      ["強壯後腿適合跳躍",1,"🐇"],["肉墊幫助行走",1,"🐾"],
      ["翅膀與輕盈羽毛",2,"🦅"],["流線形翼面",2,"🪽"]
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
      ["體色和環境相似，降低被發現機會",true,"🦎🍃"],
      ["用硬殼或尖刺降低受傷",true,"🦔🛡️"],
      ["醒目顏色警告可能有毒或危險",true,"🐸⚠️"],
      ["任意改變天氣讓天敵消失",false,"🪄🌦️"],
      ["快速逃跑、飛行或躲入洞中",true,"🐇💨"]
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
    categoryIcons:["🌱","⚠️"],
    items:[
      ["雨水補充水庫",0,"🌧️💧"],["晴天適合曬衣",0,"☀️👕"],["微風幫助通風",0,"🍃🏠"],
      ["豪雨可能造成淹水",1,"🌧️🌊"],["烈日可能造成晒傷",1,"☀️🥵"],["強風可能吹落物品",1,"🌬️📦"]
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
    stepIcons:["🌳🌬️","🌡️👇","⏳🌡️","👁️↔️","📝°C"],
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
    forecast:[
      ["最高溫","31°C","☀️"],
      ["降雨機率","70%","🌧️"],
      ["午後天氣","雷雨","⛈️"],
      ["風勢","強風","🌬️"]
    ],
    options:[
      ["準備飲水與遮陽用品",true,"🥤🧢"],
      ["攜帶雨具並準備室內備案",true,"☂️🏠"],
      ["午後雷雨時仍到空曠處活動",false,"⛈️🏃"],
      ["固定容易被風吹動的物品",true,"🪢📦"],
      ["活動前再次查看最新預報",true,"📱🔄"]
    ],
    correctFeedback:"氣象決策成功！你已能把預報轉成具體、安全的生活行動。",
    wrongFeedback:"逐項對照高溫、降雨、雷電與強風，看看這個行動會降低還是增加風險。",
    reward:"氣象應用晶章"
  }
];

const finalQuiz = [
  {
    icon:"🦆🌊", scene:"池塘任務", question:"鴨子能在水中前進，哪一組「構造與功能」的關聯最合理？",
    options:["羽毛讓水變溫暖","腳蹼增加推水面積","鳥喙製造水流","外殼幫助飛行"], answer:1,
    tags:["structure","habitat"], relation:"構造 → 棲地活動"
  },
  {
    icon:"🐟🏜️", scene:"環境轉換", question:"如果魚離開水域，最先遇到的困難是什麼？",
    options:["身體顏色一定會消失","外殼會變得太硬","鰭不適合在陸地支撐移動","翅膀無法拍動"], answer:2,
    tags:["habitat","structure"], relation:"棲地條件 ↔ 身體構造"
  },
  {
    icon:"🦎🍃", scene:"隱身草原", question:"綠色昆蟲停在綠葉上比較不容易被發現，這同時說明了什麼？",
    options:["綠葉會讓昆蟲長出翅膀","體色能配合環境形成保護","昆蟲可以控制天氣","所有動物都只住在樹上"], answer:1,
    tags:["survival","habitat"], relation:"環境適應 → 生存策略"
  },
  {
    icon:"🐢🛡️🌧️", scene:"暴雨避難", question:"暴雨時烏龜縮進殼裡。這個行為主要運用了哪兩個概念？",
    options:["飛行構造與氣溫讀值","警告色與風向觀測","腳蹼推水與天氣預報","外殼保護與因應天氣風險"], answer:3,
    tags:["structure","survival","weatherImpact"], relation:"構造功能 → 生存與天氣因應"
  },
  {
    icon:"🌧️🏞️", scene:"晴雨生活村", question:"同樣是下雨，為什麼可能補充水庫，也可能造成淹水？",
    options:["所有雨水的結果都相同","只要下雨就不能外出","影響和雨勢、時間、地點有關","天氣名稱可以決定全部結果"], answer:2,
    tags:["weatherImpact","forecast"], relation:"天氣條件 → 生活影響"
  },
  {
    icon:"🌡️☀️", scene:"觀測塔疑案", question:"把氣溫計放在陽光直射處，讀值可能偏高。最好的修正方法是？",
    options:["用手握住液囊讓它固定","移到陰涼通風處，等待穩定再讀","立刻記下最高數字","把氣溫計放進水中"], answer:1,
    tags:["observation","weatherImpact"], relation:"觀測方法 → 資料可信度"
  },
  {
    icon:"👁️🌡️📝", scene:"科學紀錄", question:"哪一組做法最能讓兩天的氣溫資料公平比較？",
    options:["每天換工具和地點","只記得比較熱或比較冷","挑自己喜歡的數字","同地點同時段觀測並記錄條件"], answer:3,
    tags:["observation"], relation:"控制條件 → 公平比較"
  },
  {
    icon:"⛈️🌬️🎒", scene:"校外活動", question:"預報顯示午後雷雨和強風，最完整的行動是哪一個？",
    options:["只帶帽子照常到空曠處","完全不看地區與時間","準備室內備案、雨具並固定物品","看到雲再決定，不必先準備"], answer:2,
    tags:["forecast","weatherImpact"], relation:"預報資訊 → 安全決策"
  },
  {
    icon:"🐦🌬️⛈️", scene:"動物觀察日", question:"強風雷雨天要觀察鳥類，哪個推理最完整？",
    options:["鳥有翅膀，所以雷雨完全沒有影響","鳥能飛不代表任何天氣都安全，應調整觀察計畫","只要有羽毛就不用看預報","強風一定會幫助所有鳥飛行"], answer:1,
    tags:["structure","weatherImpact","forecast"], relation:"動物構造 × 天氣風險"
  },
  {
    icon:"🔬🗺️", scene:"巡護員終極任務", question:"要判斷某種動物是否適合某環境，最科學的思考順序是？",
    options:["先猜答案，再只找支持的線索","只看動物名稱就決定","觀察環境與構造，再用行為和資料驗證","每次改變很多條件，不必記錄"], answer:2,
    tags:["structure","habitat","survival","observation"], relation:"觀察證據 → 綜合推理"
  },
  {
    icon:"🐦🥜", scene:"鳥喙研究所", question:"鳥喙又短又厚，最可能適合進行哪一種活動？",
    options:["啄開堅硬種子","像吸管一樣吸花蜜","在水中當作魚鰭","包住全身抵擋攻擊"], answer:0,
    tags:["structure"], relation:"構造形狀 → 取食功能"
  },
  {
    icon:"🦅☁️", scene:"天空巡航", question:"老鷹的寬大翅膀能乘著上升氣流滑翔，這是哪一種關聯？",
    options:["警告色與天敵","外殼與防禦","翅膀構造與空中活動","腳蹼與陸地跳躍"], answer:2,
    tags:["structure","habitat"], relation:"翅膀構造 → 空中適應"
  },
  {
    icon:"🐸⚠️", scene:"彩色森林", question:"某種青蛙有非常醒目的顏色，最合理的生存作用是什麼？",
    options:["讓身體變得透明","警告天敵可能有毒或危險","控制附近的氣溫","增加在水中的推力"], answer:1,
    tags:["survival","structure"], relation:"外觀特徵 → 警告策略"
  },
  {
    icon:"🐟🐟🐟", scene:"魚群守護隊", question:"小魚聚成魚群活動，可能帶來什麼生存好處？",
    options:["讓每條魚長出硬殼","使水溫永遠不變","共同警戒並分散被捕食風險","讓魚離開水也能呼吸"], answer:2,
    tags:["survival","habitat"], relation:"群體行為 → 生存機會"
  },
  {
    icon:"🌬️🏠", scene:"強風來襲", question:"強風可能吹落陽台物品。最適合的事前準備是？",
    options:["把物品移入室內或固定","把所有窗戶完全打開","站在陽台觀察掉落方向","等物品掉落後再看預報"], answer:0,
    tags:["weatherImpact","forecast"], relation:"強風風險 → 防護行動"
  },
  {
    icon:"☀️🏃", scene:"炎熱運動日", question:"預報最高溫 35°C，戶外運動應如何調整？",
    options:["穿更厚的衣服保持熱度","選較涼時段並補充水分","完全不需要查看身體狀況","中午在無遮蔭處增加運動量"], answer:1,
    tags:["forecast","weatherImpact"], relation:"高溫預報 → 活動調整"
  },
  {
    icon:"👁️🌡️", scene:"讀值挑戰", question:"讀取氣溫計時，眼睛應放在哪裡？",
    options:["從上方向下斜看","從下方向上斜看","閉一隻眼睛隨意看","與液柱頂端保持平視"], answer:3,
    tags:["observation"], relation:"視線位置 → 正確讀值"
  },
  {
    icon:"🌧️🥤", scene:"雨量觀測站", question:"要比較兩地雨量，哪一種做法最公平？",
    options:["使用相同雨量筒並觀測相同時間","一地觀測一天，另一地觀測一小時","把雨量筒放在屋簷下","只比較地面看起來多濕"], answer:0,
    tags:["observation","weatherImpact"], relation:"一致條件 → 雨量比較"
  },
  {
    icon:"📍🕒🌦️", scene:"預報解碼", question:"查看天氣預報時，為什麼要先確認地區和時間？",
    options:["不同地點與時段的天氣可能不同","預報只對成年人有用","只要看到圖示就代表全年天氣","地區名稱會改變氣溫計構造"], answer:0,
    tags:["forecast"], relation:"地區時間 → 預報適用性"
  },
  {
    icon:"☁️🌬️📝", scene:"天空觀察簿", question:"要描述一天的天氣，哪一份紀錄最完整？",
    options:["今天感覺不錯","只畫一個太陽","記錄雲量、風、氣溫、時間與地點","只寫最高溫，不記日期"], answer:2,
    tags:["observation","forecast"], relation:"多項觀測 → 天氣描述"
  },
  {
    icon:"🌱☀️💧", scene:"環境實驗室", question:"想知道陽光是否影響植物生長，公平實驗應怎麼做？",
    options:["兩盆植物的水量、土壤相同，只改變光照","同時改變水量、土壤和光照","只觀察一天就下結論","挑長得最好的一盆當作全部結果"], answer:0,
    tags:["observation"], relation:"控制變因 → 找出影響因素"
  },
  {
    icon:"🦆🌧️🌊", scene:"濕地調查", question:"雨後濕地水位升高，鴨子的腳蹼仍有利於活動。這題連結了哪些概念？",
    options:["構造、棲地與天氣影響","警告色、氣溫計與陸地跳躍","外殼、飛行與晴天曬衣","鳥喙、雷電與控制變因"], answer:0,
    tags:["structure","habitat","weatherImpact"], relation:"身體構造 × 棲地變化"
  },
  {
    icon:"🦔🍂", scene:"落葉防衛戰", question:"刺蝟遇到危險時蜷縮身體、豎起尖刺，主要目的是什麼？",
    options:["增加飛行速度","降低被攻擊受傷的機會","改變周圍天氣","測量地面溫度"], answer:1,
    tags:["survival","structure"], relation:"身體構造 → 防禦行為"
  },
  {
    icon:"⛈️🏞️📱", scene:"河岸探險", question:"預報上游有豪雨，原訂河岸活動應如何處理？",
    options:["只看活動地點現在沒下雨就照常進行","改到安全室內並持續查看最新警報","站到河中央觀察水位","豪雨只影響植物，不影響人"], answer:1,
    tags:["forecast","weatherImpact"], relation:"區域降雨 → 下游安全"
  },
  {
    icon:"🔍📊🧠", scene:"證據法庭", question:"兩次觀測結果不同時，最科學的下一步是什麼？",
    options:["選自己喜歡的結果","檢查工具、條件與紀錄，再重複觀測","把不同資料全部刪除","立刻認定其中一人說謊"], answer:1,
    tags:["observation","forecast"], relation:"資料差異 → 檢查與驗證"
  }
];

const conceptInfo = {
  structure:{title:"動物構造與功能",icon:"🪽",stage:0,review:"回到第一關，練習從形狀推理翅膀、鰭、腳蹼與外殼的工作。"},
  habitat:{title:"構造與環境適應",icon:"🌊",stage:1,review:"回到第二關，把身體構造放進水中、陸地與空中情境判斷。"},
  survival:{title:"動物生存策略",icon:"🛡️",stage:2,review:"回到第三關，比較隱藏、防禦、警告與逃生策略。"},
  weatherImpact:{title:"天氣與生活影響",icon:"🌦️",stage:3,review:"回到第四關，分析天氣強度、時間、地點與風險。"},
  observation:{title:"正確觀測與紀錄",icon:"🌡️",stage:4,review:"回到第五關，重建位置、等待、平視與紀錄流程。"},
  forecast:{title:"氣象資訊應用",icon:"⛈️",stage:5,review:"回到第六關，把氣溫、降雨、雷電與風轉成安全行動。"}
};

const STORAGE_KEY="forest-weather-rpg-v1";
let state=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{"completed":[]}');
if(!Array.isArray(state.completed))state.completed=[];
if(state.quizResult&&state.quizResult.total!==finalQuiz.length)delete state.quizResult;
let screen="map",current=0,dialogIndex=0,typeTimer=null,typingDone=true,activeDialogText="",taskState={},quizIndex=0,quizAnswers=[];
const app=document.getElementById("app");

function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function topbar(){
  const badges=lessons.filter(x=>state.completed.includes(x.id)).map(x=>`<img src="${x.badge}" alt="${x.reward}">`).join("");
  return `<header class="topbar"><div class="brand"><span class="brand-mark">🔬</span><div><b>森語天候王國</b><small>自然科 RPG 冒險</small><span class="designer-credit">設計者：Gavin Huang</span></div></div><div class="progress-card"><span>晶章 ${state.completed.length}/${lessons.length}</span><div class="mini-badges">${badges}</div></div></header>`;
}
function render(){
  clearInterval(typeTimer);
  app.className="app";
  if(screen==="map")renderMap();
  if(screen==="dialog")renderDialog();
  if(screen==="task")renderTask();
  if(screen==="reward")renderReward();
  if(screen==="quizIntro")renderQuizIntro();
  if(screen==="quiz")renderQuiz();
  if(screen==="diagnosis")renderDiagnosis();
  if(screen==="ending")renderEnding();
}
function renderMap(){
  const allDone=state.completed.length===lessons.length;
  app.innerHTML=topbar()+`<main class="map-screen"><section class="map-frame"><img src="assets/map_main.png" alt="森語天候王國冒險地圖"><div class="map-title"><h1>六枚自然晶章</h1><p>跟隨露米老師，修復動物領域與天氣領域。每完成一關，就能取回一枚晶章。</p></div>${lessons.map((l,i)=>`<button class="stage-node ${state.completed.includes(l.id)?"done":""}" style="left:${l.mapPosition[0]}%;top:${l.mapPosition[1]}%" data-stage="${i}"><span class="check">✓ </span>${l.title}<small>${l.subtitle}</small></button>`).join("")}<img class="hero-on-map" src="assets/hero_student.png" alt="自然見習巡護員"></section><div class="map-actions">${allDone?`<button class="main-btn" id="startFinalQuiz">開始總測驗與離線診斷</button>${state.quizResult?`<button class="soft-btn" id="seeDiagnosis">查看上次診斷</button>`:""}`:""}<button class="soft-btn" id="resetGame">重新開始</button></div></main>`;
  document.querySelectorAll("[data-stage]").forEach(b=>b.onclick=()=>startStage(+b.dataset.stage));
  document.getElementById("resetGame").onclick=()=>{if(confirm("要清除所有晶章並重新開始嗎？")){state={completed:[]};save();render()}};
  if(allDone){
    document.getElementById("startFinalQuiz").onclick=()=>{screen="quizIntro";render()};
    if(state.quizResult)document.getElementById("seeDiagnosis").onclick=()=>{screen="diagnosis";render()};
  }
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
function visual(icon,text){
  return `<span class="visual-icon" aria-hidden="true">${icon||"🔎"}</span><span class="visual-text">${text}</span>`;
}
function forecastBoard(items){
  if(!items)return "";
  return `<section class="forecast-board" aria-label="明日天氣預報">${items.map(x=>`<div class="forecast-tile"><span aria-hidden="true">${x[2]}</span><small>${x[0]}</small><strong>${x[1]}</strong></div>`).join("")}</section>`;
}
function renderTask(){
  const l=lessons[current];
  let body="";
  if(l.taskType==="match"){
    const right=l.pairs.map((p,i)=>({text:p[1],icon:p[3],i})).sort((a,b)=>((a.i*7+3)%l.pairs.length)-((b.i*7+3)%l.pairs.length));
    body=`<p>觀察圖形：先點左邊的動物構造，再點右邊最適合的動作或功能。</p><div class="visual-legend"><span>身體構造</span><b>配對</b><span>動作與功能</span></div><div class="match-area"><div class="match-col">${l.pairs.map((p,i)=>`<button class="match-btn visual-card ${taskState.left===i?"active":""} ${taskState.matched.includes(i)?"matched":""}" data-left="${i}">${visual(p[2],p[0])}</button>`).join("")}</div><div class="match-col">${right.map(x=>`<button class="match-btn visual-card ${taskState.matched.includes(x.i)?"matched":""}" data-right="${x.i}">${visual(x.icon,x.text)}</button>`).join("")}</div></div>`;
  }
  if(l.taskType==="classify")body=`<p>先選一個圖像分類箱，再點選應放入的卡片。</p><div class="category-row">${l.categories.map((x,i)=>`<button class="category ${taskState.category===i?"active":""}" data-cat="${i}"><span aria-hidden="true">${l.categoryIcons?.[i]||"📦"}</span>${x}</button>`).join("")}</div><div class="task-grid visual-grid">${l.items.map((x,i)=>`<button class="task-card visual-card ${taskState.done.includes(i)?"correct":""}" data-item="${i}">${visual(x[2],x[0])}</button>`).join("")}</div>`;
  if(l.taskType==="multiSelect")body=`${forecastBoard(l.forecast)}<p>${l.question}</p><div class="task-grid visual-grid">${l.options.map((x,i)=>`<button class="task-card visual-card ${taskState.selected.includes(i)?"selected":""}" data-option="${i}">${visual(x[2],x[0])}</button>`).join("")}</div>`;
  if(l.taskType==="sequence"){
    const bank=l.steps.map((x,i)=>({x,i})).sort((a,b)=>((a.i*3+2)%l.steps.length)-((b.i*3+2)%l.steps.length));
    body=`<p>看圖判斷動作，依正確的實驗順序點選卡片。</p><img class="science-props" src="assets/science_props.png" alt="氣溫計、雨量筒、風向計與自然觀察工具"><div class="task-grid visual-grid">${bank.map(v=>`<button class="task-card visual-card ${taskState.order.includes(v.i)?"correct":""}" data-step="${v.i}">${visual(l.stepIcons[v.i],v.x)}</button>`).join("")}</div><div class="sequence-list">${l.steps.map((_,i)=>`<div class="sequence-slot">${taskState.order[i]!==undefined?`${l.stepIcons[taskState.order[i]]} ${l.steps[taskState.order[i]]}`:""}</div>`).join("")}</div>`;
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
  app.innerHTML=scene(`<section class="task-panel reward"><img src="${l.badge}" alt="${l.reward}"><div><p>任務完成</p><h2>獲得「${l.reward}」！</h2><p>${l.correctFeedback}</p><button class="main-btn" id="rewardNext">${allDone?"前往自然晶章總測驗":"帶著晶章回地圖"}</button></div></section>`);
  document.getElementById("rewardNext").onclick=()=>{screen=allDone?"quizIntro":"map";render()};
}
function renderQuizIntro(){
  app.innerHTML=topbar()+`<main class="quiz-screen"><section class="quiz-card quiz-intro"><div class="quiz-orb">🧠✨</div><p class="eyebrow">終局任務</p><h1>自然晶章總測驗</h1><p>${finalQuiz.length} 題情境題會把六個單元連在一起。完成後，裝置內的診斷規則會根據錯題、概念標籤與跨題關聯，推估需要優先複習的單元。</p><div class="offline-note"><strong>🔒 完全離線</strong><span>不傳送答案、不連接外部 AI；判斷由網頁內的加權規則完成。</span></div><div class="relation-preview">${Object.values(conceptInfo).map(x=>`<span>${x.icon} ${x.title}</span>`).join("")}</div><button class="main-btn" id="beginQuiz">開始 ${finalQuiz.length} 題總測驗</button> <button class="soft-btn" id="quizBackMap">回地圖</button></section></main>`;
  document.getElementById("beginQuiz").onclick=()=>{quizIndex=0;quizAnswers=[];screen="quiz";render()};
  document.getElementById("quizBackMap").onclick=()=>{screen="map";render()};
}
function renderQuiz(){
  const q=finalQuiz[quizIndex],selected=quizAnswers[quizIndex];
  app.innerHTML=topbar()+`<main class="quiz-screen"><section class="quiz-card"><div class="quiz-progress"><span style="width:${(quizIndex+1)/finalQuiz.length*100}%"></span></div><div class="quiz-count">第 ${quizIndex+1} 題／共 ${finalQuiz.length} 題</div><div class="relation-chip">🔗 ${q.relation}</div><div class="quiz-scene-icon" aria-hidden="true">${q.icon}</div><p class="eyebrow">${q.scene}</p><h2>${q.question}</h2><div class="quiz-options">${q.options.map((x,i)=>`<button class="quiz-option ${selected===i?"selected":""}" data-quiz-option="${i}"><span>${String.fromCharCode(65+i)}</span>${x}</button>`).join("")}</div><div class="quiz-actions"><button class="soft-btn" id="quizPrevious" ${quizIndex===0?"disabled":""}>上一題</button><button class="main-btn" id="quizNext">${quizIndex===finalQuiz.length-1?"完成並產生診斷":"下一題"}</button></div><p class="quiz-hint" id="quizHint">${selected===undefined?"請選擇一個最完整的答案。":"已選擇答案，可以繼續。"}</p></section></main>`;
  document.querySelectorAll("[data-quiz-option]").forEach(b=>b.onclick=()=>{quizAnswers[quizIndex]=+b.dataset.quizOption;renderQuiz()});
  document.getElementById("quizPrevious").onclick=()=>{if(quizIndex>0){quizIndex--;renderQuiz()}};
  document.getElementById("quizNext").onclick=()=>{
    if(quizAnswers[quizIndex]===undefined){document.getElementById("quizHint").textContent="先觀察圖示和情境，再選一個答案。";return}
    if(quizIndex<finalQuiz.length-1){quizIndex++;renderQuiz()}
    else{state.quizResult=diagnoseQuiz(quizAnswers);save();screen="diagnosis";render()}
  };
}
function diagnoseQuiz(answers){
  const concepts={};
  Object.keys(conceptInfo).forEach(k=>concepts[k]={earned:0,total:0,wrong:0,questions:[]});
  let correct=0;
  finalQuiz.forEach((q,i)=>{
    const ok=answers[i]===q.answer;
    if(ok)correct++;
    q.tags.forEach((tag,tagIndex)=>{
      const weight=tagIndex===0?2:1;
      concepts[tag].total+=weight;
      if(ok)concepts[tag].earned+=weight;
      else{concepts[tag].wrong+=weight;concepts[tag].questions.push(i+1)}
    });
  });
  const ranked=Object.entries(concepts).map(([id,x])=>({
    id,score:x.total?Math.round(x.earned/x.total*100):100,
    wrong:x.wrong,questions:[...new Set(x.questions)]
  })).sort((a,b)=>a.score-b.score||b.wrong-a.wrong);
  const relations={};
  finalQuiz.forEach((q,i)=>{
    if(answers[i]!==q.answer&&q.tags.length>1)relations[q.relation]=(relations[q.relation]||0)+1;
  });
  return {answers,correct,total:finalQuiz.length,ranked,relations,createdAt:new Date().toISOString()};
}
function renderDiagnosis(){
  const result=state.quizResult;
  if(!result){screen="quizIntro";render();return}
  const priority=result.ranked.filter(x=>x.score<80).slice(0,3);
  const strengths=result.ranked.filter(x=>x.score>=80).reverse();
  const relationRows=Object.entries(result.relations).sort((a,b)=>b[1]-a[1]);
  const headline=result.correct>=9?"自然推理非常穩定":result.correct>=7?"基礎穩定，少數關聯要補強":result.correct>=5?"部分概念需要重新連結":"建議依診斷順序重新闖關";
  app.innerHTML=topbar()+`<main class="quiz-screen diagnosis-screen"><section class="quiz-card diagnosis-card"><p class="eyebrow">離線智慧診斷報告</p><div class="score-ring" style="--score:${result.correct/result.total*360}deg"><strong>${result.correct}<small>／${result.total}</small></strong></div><h1>${headline}</h1><p>這是規則式推估，不是醫療或正式能力鑑定。系統依主要概念 2 分、關聯概念 1 分加權，找出錯題集中處。</p><h2>概念雷達</h2><div class="concept-bars">${result.ranked.map(x=>{const c=conceptInfo[x.id];return `<div class="concept-row"><span>${c.icon} ${c.title}</span><div><i style="width:${x.score}%"></i></div><b>${x.score}%</b></div>`}).join("")}</div><h2>優先複習預測</h2><div class="diagnosis-grid">${priority.length?priority.map((x,i)=>{const c=conceptInfo[x.id];return `<article class="review-card"><span class="priority">優先 ${i+1}</span><div class="review-icon">${c.icon}</div><h3>${c.title}</h3><p>${c.review}</p><small>關聯錯題：${x.questions.length?`第 ${x.questions.join("、")} 題`:"綜合表現"}</small><button class="soft-btn" data-review-stage="${c.stage}">回到這一關複習</button></article>`}).join(""):`<article class="review-card strong-card"><div class="review-icon">🏆</div><h3>沒有明顯弱項</h3><p>六個單元的關聯表現都達到 80%，可以挑戰重新測驗保持熟練。</p></article>`}</div>${relationRows.length?`<h2>需要重新連結的概念</h2><div class="relation-results">${relationRows.map(x=>`<span>🔗 ${x[0]} <b>${x[1]} 題</b></span>`).join("")}</div>`:""}${strengths.length?`<p class="strength-line"><strong>目前較穩定：</strong>${strengths.map(x=>conceptInfo[x.id].title).join("、")}</p>`:""}<div class="diagnosis-actions"><button class="main-btn" id="finishAdventure">開啟王國結局</button><button class="soft-btn" id="retryQuiz">重新測驗</button><button class="soft-btn" id="diagnosisMap">回地圖</button></div></section></main>`;
  document.querySelectorAll("[data-review-stage]").forEach(b=>b.onclick=()=>startStage(+b.dataset.reviewStage));
  document.getElementById("finishAdventure").onclick=()=>{screen="ending";render()};
  document.getElementById("retryQuiz").onclick=()=>{quizIndex=0;quizAnswers=[];screen="quiz";render()};
  document.getElementById("diagnosisMap").onclick=()=>{screen="map";render()};
}
function renderEnding(){
  app.innerHTML=topbar()+`<main class="ending" style="background-image:url('assets/ending_complete.png')"><section class="ending-card"><h1>自然王國修復完成！</h1><p>你完成六關與跨單元總測驗，運用觀察、分類、證據與科學方法找回所有自然晶章。從今天起，你就是能連結知識並做出安全決定的「自然晶章巡護員」！</p><div class="badge-rack">${lessons.map(l=>`<img src="${l.badge}" alt="${l.reward}">`).join("")}</div>${state.quizResult?`<p><strong>總測驗：${state.quizResult.correct}／${state.quizResult.total}</strong></p><button class="main-btn" id="endingDiagnosis">查看診斷報告</button>`:""} <button class="soft-btn" id="endingMap">回到冒險地圖</button> <button class="soft-btn" id="endingReset">重新開始</button></section></main>`;
  if(state.quizResult)document.getElementById("endingDiagnosis").onclick=()=>{screen="diagnosis";render()};
  document.getElementById("endingMap").onclick=()=>{screen="map";render()};
  document.getElementById("endingReset").onclick=()=>{state={completed:[]};save();screen="map";render()};
}
render();
