const lessons = [
  {
    id:"stage1",chapter:1,title:"第1關：動物圖鑑啟動",subtitle:"先觀察，再命名",background:"assets/stage1_bg.png",npc:"assets/npc_science_teacher.png",badge:"assets/badge_stage1.png",reward:"觀察徽章",rewardIcon:"🔎",
    dialogues:["森林圖鑑失去動物資料了！","先別急著分類，真正的解說員會先說出「我看到了什麼」。","觀察外形、辨認名稱，再完成第一張動物觀察卡。"],
    learning:"觀察要先看外形，再用看到的證據說明。",
    taskType:"guidedQuiz",
    questions:[
      {icon:"🦆",prompt:"這隻動物有扁嘴、羽毛和腳蹼，牠是誰？",options:["兔子","鴨子","蜥蜴","蚯蚓"],answer:1,explain:"扁嘴、羽毛和腳蹼是鴨子的外形線索。"},
      {icon:"🦆🔍",prompt:"觀察鴨子，可以直接看到哪些特徵？",options:["有羽毛和兩隻腳","會預測明天天氣","最喜歡的食物","出生日期"],answer:0,explain:"外形特徵是眼睛可以直接觀察到的證據。"},
      {icon:"🪶🦶",prompt:"哪一份紀錄最像科學觀察？",options:["牠很可愛","我猜牠跑很快","牠有羽毛、扁嘴和腳蹼","牠一定每天游泳"],answer:2,explain:"科學觀察要記下真正看到的特徵。"}
    ],
    hints:["再仔細看圖中的嘴、羽毛和腳。","選擇眼睛能直接看到的特徵。","扁嘴、羽毛、腳蹼都是重要線索。"],
    misconception:"觀察不是猜測。先記下看到的外形，再進一步推理。",
    summary:"我學會了：觀察動物時，要先記錄真正看到的外形特徵。"
  },
  {
    id:"stage2",chapter:1,title:"第2關：身體構造標記挑戰",subtitle:"頭、軀幹、肢與尾巴",background:"assets/stage1_bg.png",npc:"assets/npc_science_teacher.png",badge:"assets/badge_stage2.png",reward:"構造徽章",rewardIcon:"🧩",
    dialogues:["動物醫生需要一張清楚的身體構造圖。","頭、軀幹和肢是常見的主要構造，不同動物還有翅膀、鰭和尾巴。","請依圖中的位置完成標記。"],
    learning:"構造名稱要和它在身體上的位置連起來。",
    taskType:"guidedQuiz",
    questions:[
      {icon:"🐇 ①頭 ②身體 ③腳 ④尾",prompt:"兔子的腳屬於哪一類主要構造？",options:["頭","軀幹","肢","尾巴"],answer:2,explain:"兔子的四肢連接軀幹，幫助行走和跳躍。"},
      {icon:"🐦🪽",prompt:"鳥的翅膀可以看成特別的哪一類構造？",options:["肢","頭","軀幹","嘴"],answer:0,explain:"翅膀是鳥類特化的前肢，可以幫助飛行。"},
      {icon:"🐟〰️",prompt:"魚身上幫助游泳、轉向和平衡的構造是？",options:["毛","鰭","腳蹼","翅膀"],answer:1,explain:"魚的鰭長在軀幹周圍，能幫助游泳與轉向。"}
    ],
    hints:["看看這個構造長在身體哪個位置。","想想它是連接軀幹、幫助移動的部分嗎？","翅膀是前肢，鰭則是魚的重要運動構造。"],
    misconception:"翅膀不是裝飾，它也是鳥類的肢，具有飛行功能。",
    summary:"我學會了：動物常有頭、軀幹和肢，還可能有翅膀、鰭或尾巴。"
  },
  {
    id:"stage3",chapter:1,title:"第3關：構造功能配對戰",subtitle:"把正確裝備交給動物",background:"assets/stage2_bg.png",npc:"assets/npc_science_teacher.png",badge:"assets/badge_stage3.png",reward:"功能徽章",rewardIcon:"⚙️",
    dialogues:["森林道路被構造封印擋住了。","每一種構造都有工作，不是只長得不一樣。","把正確的構造裝備和功能配對，動物才能前進。"],
    learning:"動物的身體構造具有功能，能幫助移動、攀爬或保護。",
    taskType:"match",
    pairs:[
      ["魚的鰭","幫助游泳與轉向","🐟","🌊↔️"],["鳥的翅膀","幫助飛行","🪽","☁️⬆️"],["鴨腳的蹼","增加推水面積","🦆","💧〰️"],
      ["貓腳的肉墊","減輕衝擊與腳步聲","🐾","🔇"],["樹蛙腳的吸盤","吸附葉片或樹枝","🐸","🍃🧲"],["蜥蜴的爪子","抓住表面幫助攀爬","🦎","🧗"]
    ],
    hints:["先觀察構造的形狀。","想想這個形狀如何幫助動物移動。","蹼推水、吸盤吸附、肉墊減輕衝擊。"],
    misconception:"構造不是裝飾；形狀、位置和功能會互相配合。",
    summary:"我學會了：不同身體構造有不同功能，能幫助動物活動。"
  },
  {
    id:"stage4",chapter:1,title:"第4關：動物住哪裡",subtitle:"構造與生活環境",background:"assets/stage2_bg.png",npc:"assets/npc_science_teacher.png",badge:"assets/badge_stage4.png",reward:"環境徽章",rewardIcon:"🏞️",
    dialogues:["森林、池塘、泥土和樹上的入口混在一起了。","動物適合的環境，常和牠的構造及移動方式有關。","請幫動物回家，並讀出牠適合這裡的理由。"],
    learning:"判斷棲地時，要把環境、構造與活動方式一起思考。",
    taskType:"classify",categories:["水中","水邊","土裡","樹上","陸地"],categoryIcons:["🌊","🏞️","🟫","🌳","🌿"],
    items:[["魚：用鰭游泳",0,"🐟"],["鴨：腳蹼可划水",1,"🦆"],["青蛙：可在水邊活動",1,"🐸"],["蚯蚓：柔軟身體能鑽動",2,"🪱"],["鳥：腳爪能抓住樹枝",3,"🐦"],["樹蛙：吸盤可吸附葉片",3,"🐸🍃"],["兔：強壯後腿在地面跳躍",4,"🐇"],["狗：四肢適合地面行走",4,"🐕"]],
    hints:["先看環境中有水、土或樹嗎？","再看動物用什麼構造移動。","鴨有蹼適合水邊；蚯蚓柔軟，適合土裡。"],
    misconception:"不是每種動物都能住在任何地方；構造要能配合環境。",
    summary:"我學會了：動物的構造和生活環境有關。"
  },
  {
    id:"stage5",chapter:1,title:"第5關：生存法寶迷宮",subtitle:"找出藏在環境中的動物",background:"assets/stage3_bg.png",npc:"assets/npc_science_teacher.png",badge:"assets/badge_stage5.png",reward:"保護徽章",rewardIcon:"🛡️",
    dialogues:["迷宮裡有天敵出沒，許多動物藏進環境中了。","有些顏色用來隱藏，有些鮮豔顏色則是警告。","找出牠們，再說明這種外形如何幫助生存。"],
    learning:"身體顏色或形態可能幫助躲藏、捕食或警告敵人。",
    taskType:"guidedQuiz",
    questions:[
      {icon:"🌳🦎",prompt:"蜥蜴的顏色和樹幹相似，最可能帶來什麼好處？",options:["比較不容易被發現","一定能控制風向","會長出腳蹼","可以測量雨量"],answer:0,explain:"顏色和環境相似能降低被天敵發現的機會。"},
      {icon:"🍃🐸",prompt:"綠色樹蛙躲在葉片上，運用的是哪種生存方法？",options:["警告色","保護色","群體合作","改變天氣"],answer:1,explain:"綠色身體和葉片相似，是保護色。"},
      {icon:"🐸⚠️",prompt:"某些有毒動物顏色鮮豔，可能是在做什麼？",options:["警告掠食者不要靠近","讓自己完全隱形","測量氣溫","增加划水面積"],answer:0,explain:"鮮豔顏色可能是警告訊號，不一定是為了好看。"}
    ],
    hints:["先比較動物和背景的顏色。","相似顏色常用來躲藏；鮮豔顏色可能是警告。","樹蛙的綠色是保護色，有毒動物的鮮色可能是警告色。"],
    misconception:"動物顏色不只是好看，也可能幫助躲藏或警告敵人。",
    summary:"我學會了：動物的顏色和形態能成為保護自己的生存法寶。"
  },
  {
    id:"stage6",chapter:2,title:"第6關：今日天氣觀察站",subtitle:"太陽、雲、雨、風與冷熱",background:"assets/stage4_bg.png",npc:"assets/npc_science_teacher.png",badge:"assets/badge_stage6.png",reward:"天氣觀察徽章",rewardIcon:"🌦️",
    dialogues:["天候王國的天氣水晶失去今日資料了。","天氣不只看晴或雨，還要觀察太陽、雲、風和身體的冷熱感覺。","恢復觀測資料，並選出適合的生活行動。"],
    learning:"綜合太陽、雲、雨、風和冷熱，才能描述天氣。",
    taskType:"guidedQuiz",
    questions:[
      {icon:"☀️☁️🍃",prompt:"天空有太陽、雲少，樹葉微微飄動。哪個描述最完整？",options:["晴天、有微風","只知道很熱","一定會下豪雨","完全沒有天氣"],answer:0,explain:"太陽、雲量和樹葉飄動都能提供天氣線索。"},
      {icon:"☀️🥵",prompt:"晴朗炎熱時，戶外活動最需要什麼？",options:["補充水分並遮陽","穿厚外套跑步","站在大太陽下不休息","不用注意身體感覺"],answer:0,explain:"炎熱時要補充水分、遮陽並適度休息。"},
      {icon:"🌬️🧥",prompt:"風變大、身體覺得涼時，可以怎麼做？",options:["增加合適衣物","把物品放到風口","完全不理會","只看太陽不看風"],answer:0,explain:"風和冷熱感覺會影響穿著與生活安排。"}
    ],
    hints:["看看天空，也看看樹葉或旗子。","把觀察到的天氣和生活選擇連起來。","炎熱要補水遮陽，風大或涼冷要調整衣物。"],
    misconception:"判斷天氣不能只看太陽，還要觀察雲、雨、風和冷熱。",
    summary:"我學會了：觀察太陽、雲、雨、風和冷熱，可以知道天氣狀況。"
  },
  {
    id:"stage7",chapter:2,title:"第7關：氣溫計訓練所",subtitle:"正確測量一天氣溫",background:"assets/stage5_bg.png",npc:"assets/npc_science_teacher.png",badge:"assets/badge_stage1.png",reward:"測量徽章",rewardIcon:"🌡️",
    dialogues:["小主播的氣溫紀錄不準確，預報差點出錯。","測量地點、拿法、等待和讀值方式都會影響結果。","請重建正確流程。"],
    learning:"氣溫計要放在陰涼通風處，等待穩定並平視讀值。",
    taskType:"sequence",
    steps:["選擇陰涼通風、不受太陽直射的位置","讓液囊朝下，手不要碰液囊","等待酒精柱穩定","眼睛平視酒精柱頂端","記錄上午、中午、下午的時間與氣溫"],
    stepIcons:["🌳🌬️","🌡️👇","⏳🌡️","👁️↔️","📝🕒"],
    hints:["先選不受太陽直接照射的位置。","工具放好後要等待數值穩定。","陰涼通風、別碰液囊、等待、平視、完整記錄。"],
    misconception:"太陽直射或手碰液囊都可能讓氣溫讀值不準。",
    summary:"我學會了：正確測量氣溫要選對地點、拿對工具、平視並記錄。"
  },
  {
    id:"stage8",chapter:2,title:"第8關：雲量與雨量實驗室",subtitle:"選工具、地點與讀值",background:"assets/stage5_bg.png",npc:"assets/npc_science_teacher.png",badge:"assets/badge_stage2.png",reward:"雨量徽章",rewardIcon:"🌧️",
    dialogues:["雨量精靈收到的資料忽高忽低。","原來有人把容器放在屋簷和樹下，雨水被擋住了。","請選出正確工具與空曠地點。"],
    learning:"雨量要在空曠處用平底直筒容器收集，再測量雨水高度。",
    taskType:"guidedQuiz",
    questions:[
      {icon:"🌧️🥤",prompt:"哪一種容器最適合收集並比較雨量？",options:["平底直筒容器","寬口淺盤","有洞的籃子","形狀不規則的袋子"],answer:0,explain:"平底直筒容器的粗細一致，方便用水高比較雨量。"},
      {icon:"🌳🏠🌧️",prompt:"哪個地點最適合放雨量容器？",options:["屋簷下","大樹下","空曠草地","司令臺內"],answer:2,explain:"空曠處較不會被屋簷、樹葉或建築物遮擋雨水。"},
      {icon:"📏💧",prompt:"收集雨水後，要用什麼表示雨量？",options:["雨水顏色","容器重量名稱","雨水高度","天空亮度"],answer:2,explain:"可以測量容器中雨水的高度來表示雨量。"}
    ],
    hints:["先看容器底部和側面是否規則。","想想哪裡不會被屋簷、樹葉擋雨。","平底直筒容器放在空曠處，再量雨水高度。"],
    misconception:"屋簷和樹葉會擋住雨水，在下面測到的雨量不準。",
    summary:"我學會了：測量雨量要在空曠處使用平底直筒容器。"
  },
  {
    id:"stage9",chapter:2,title:"第9關：風向風力偵查隊",subtitle:"風從哪裡來？",background:"assets/stage6_bg.png",npc:"assets/npc_science_teacher.png",badge:"assets/badge_stage3.png",reward:"風力徽章",rewardIcon:"🧭",
    dialogues:["風之龍捲把方向線索吹亂了。","記住：風向是風吹來的方向，不是紙條飄去的方向。","觀察紙條位置，找出風向與風力。"],
    learning:"紙條飄動的相反方向是風向；飄得越高通常表示風越強。",
    taskType:"guidedQuiz",
    questions:[
      {icon:"西 ➜ 🎏 ➜ 東",prompt:"紙條向東飄，風是從哪裡吹來？",options:["東風","西風","南風","無風"],answer:1,explain:"紙條往東飄，表示風從西方吹來，所以是西風。"},
      {icon:"🎏⬆️📍",prompt:"紙條飄得高於強風記號，表示什麼？",options:["無風","弱風","強風","正在下雨"],answer:2,explain:"紙條被吹得越高，表示風力越強。"},
      {icon:"📅📍🕒🧭",prompt:"哪一份風的紀錄最完整？",options:["今天有風","西風","6月14日、操場、10點、西風、弱風","紙條很好看"],answer:2,explain:"完整紀錄要包含日期、地點、時間、風向和風力。"}
    ],
    hints:["不要只看紙條飄去哪裡。","風向是風吹來的方向，所以要看相反邊。","紙條往東飄是西風；位置越高，風力越強。"],
    misconception:"紙條向東飄不是東風；風向要用風吹來的方向命名。",
    summary:"我學會了：紙條飄動方向的相反方向才是風向。"
  },
  {
    id:"stage10",chapter:2,title:"第10關：天氣小主播總挑戰",subtitle:"整理資料並完成播報",background:"assets/stage6_bg.png",npc:"assets/npc_science_teacher.png",badge:"assets/badge_stage4.png",reward:"預報徽章",rewardIcon:"🎙️",
    dialogues:["最後試煉是把觀測資料整理成大家聽得懂的播報。","一份完整紀錄要有日期、地點、時間、天氣、氣溫、風向和風力。","選擇資料並產生你的天氣播報稿。"],
    learning:"整理完整觀測資料，才能清楚分享天氣並提出生活提醒。",
    taskType:"broadcast",
    hints:["先把日期、地點和時間補完整。","再加入天氣、氣溫、風向和風力。","最後根據天氣選擇合適的生活提醒。"],
    misconception:"只說晴天還不夠；完整播報需要時間、地點與多項觀測資料。",
    summary:"我學會了：整理觀測紀錄，可以完成清楚又有用的天氣播報。"
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
  structure:{title:"動物構造與功能",icon:"🪽",stage:2,review:"回到第3關，練習把鰭、翅膀、蹼、肉墊、吸盤和爪子連到功能。"},
  habitat:{title:"構造與環境適應",icon:"🌊",stage:3,review:"回到第4關，把動物的構造、移動方式和生活環境連起來。"},
  survival:{title:"動物生存策略",icon:"🛡️",stage:4,review:"回到第5關，比較保護色、警告色和防禦方式。"},
  weatherImpact:{title:"天氣與生活影響",icon:"🌦️",stage:5,review:"回到第6關，綜合太陽、雲、雨、風和冷熱做生活決定。"},
  observation:{title:"正確觀測與紀錄",icon:"🌡️",stage:6,review:"回到第7至9關，練習氣溫、雨量、風向風力的正確觀測。"},
  forecast:{title:"氣象資訊應用",icon:"⛈️",stage:9,review:"回到第10關，把完整觀測資料整理成天氣播報與提醒。"}
};

const STORAGE_KEY="forest-weather-rpg-v2";
let state=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{"completed":[]}');
if(!Array.isArray(state.completed))state.completed=[];
if(state.quizResult&&state.quizResult.total!==finalQuiz.length)delete state.quizResult;
let screen="map",current=0,dialogIndex=0,typeTimer=null,typingDone=true,activeDialogText="",taskState={},quizIndex=0,quizAnswers=[];
const app=document.getElementById("app");

function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function currentTitle(){
  const n=state.completed.length;
  if(n>=10)return "森語天候王國守護者";
  if(n>=8)return "天氣小主播";
  if(n>=5)return "初級天氣觀測員";
  if(n>=2)return "森林動物解說員";
  return "初級動物觀察員";
}
function topbar(){
  const badges=lessons.filter(x=>state.completed.includes(x.id)).map(x=>`<span title="${x.reward}">${x.rewardIcon}</span>`).join("");
  return `<header class="topbar"><div class="brand"><span class="brand-mark">🔬</span><div><b>森語天候王國</b><small>${currentTitle()}</small><span class="designer-credit">設計者：Gavin Huang</span></div></div><div class="progress-card"><span>任務 ${state.completed.length}/${lessons.length}</span><div class="mini-badges">${badges}</div></div></header>`;
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
  if(screen==="portfolio")renderPortfolio();
  if(screen==="ending")renderEnding();
}
function renderMap(){
  const allDone=state.completed.length===lessons.length;
  const chapter=(number,title,subtitle)=>`<section class="chapter-panel chapter-${number}"><div class="chapter-heading"><span>第 ${number} 章</span><div><h2>${title}</h2><p>${subtitle}</p></div></div><div class="chapter-stages">${lessons.map((l,i)=>{
    if(l.chapter!==number)return "";
    const done=state.completed.includes(l.id),unlocked=i===0||state.completed.includes(lessons[i-1].id);
    return `<button class="chapter-stage ${done?"done":""} ${unlocked?"":"locked"}" data-stage="${i}" ${unlocked?"":"disabled"}><span class="stage-number">${done?"✓":i+1}</span><span><b>${l.title.replace(/^第\d+關：/,"")}</b><small>${unlocked?l.subtitle:"完成上一關後解鎖"}</small></span><em>${l.rewardIcon}</em></button>`;
  }).join("")}</div></section>`;
  app.innerHTML=topbar()+`<main class="map-screen"><section class="adventure-map"><img class="adventure-bg" src="assets/map_main.png" alt="森語天候王國冒險地圖"><div class="map-title"><h1>學會後才能闖關</h1><p>每關先觀察與操作，再說明理由。完成學習總結後，下一關才會解鎖。</p></div><div class="chapter-grid">${chapter(1,"動物森林調查隊","第3單元：我是動物解說員")}${chapter(2,"天候王國觀測員","第4單元：天氣變變變")}</div><img class="hero-on-map" src="assets/hero_student.png" alt="自然見習巡護員"></section><div class="map-actions">${allDone?`<button class="main-btn" id="startFinalQuiz">開始25題總測驗與離線診斷</button><button class="soft-btn" id="seePortfolio">查看我的成果卡</button>${state.quizResult?`<button class="soft-btn" id="seeDiagnosis">查看上次診斷</button>`:""}`:""}<button class="soft-btn" id="resetGame">重新開始</button></div></main>`;
  document.querySelectorAll("[data-stage]:not(:disabled)").forEach(b=>b.onclick=()=>startStage(+b.dataset.stage));
  document.getElementById("resetGame").onclick=()=>{if(confirm("要清除所有晶章並重新開始嗎？")){state={completed:[]};save();render()}};
  if(allDone){
    document.getElementById("startFinalQuiz").onclick=()=>{screen="quizIntro";render()};
    document.getElementById("seePortfolio").onclick=()=>{screen="portfolio";render()};
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
  const base={hintLevel:0,message:"先觀察畫面，再開始操作。",messageBad:false};
  if(l.taskType==="guidedQuiz")taskState={...base,question:0,answers:[],resolved:false};
  if(l.taskType==="match")taskState={...base,left:null,matched:[]};
  if(l.taskType==="classify")taskState={...base,category:null,done:[]};
  if(l.taskType==="multiSelect")taskState={...base,selected:[]};
  if(l.taskType==="sequence")taskState={...base,order:[]};
  if(l.taskType==="broadcast")taskState={...base,broadcast:{date:"6月14日",place:"操場",time:"上午10點",weather:"晴天",temp:"30℃",windDir:"西南風",windForce:"弱風",reminder:"天氣炎熱，戶外活動要補充水分。"}};
}
function taskShell(body){
  const l=lessons[current],progress=taskProgress(l);
  const hint=taskState.hintLevel?l.hints[Math.min(taskState.hintLevel-1,l.hints.length-1)]:"";
  const actionLabel=l.taskType==="guidedQuiz"
    ?(!taskState.resolved?"檢查這一題":taskState.question===l.questions.length-1?"整理我學會的內容":"下一個觀察")
    :"完成任務";
  return scene(`<section class="task-panel"><div class="task-kicker">任務流程：觀察 → 操作 → 判斷 → 說明理由</div><h2>${l.title}</h2><p><strong>學習祕訣：</strong>${l.learning}</p>${body}<div class="hint-box ${hint?"show":""}" id="hintBox">${hint?`💡 提示 ${taskState.hintLevel}：${hint}`:"需要幫忙時，可以逐層查看提示。"}</div><div class="feedback ${taskState.messageBad?"bad":""}" id="feedback">${taskState.message}</div><div class="task-footer"><button class="soft-btn" id="backMap">回地圖</button><button class="hint-btn" id="showHint">提示 ${Math.min(taskState.hintLevel+1,3)}/3</button><div class="task-meter"><span style="width:${progress}%"></span></div><button class="main-btn" id="checkTask">${actionLabel}</button></div></section>`);
}
function taskProgress(l){
  if(l.taskType==="guidedQuiz")return (taskState.answers.length+(taskState.resolved?1:0))/l.questions.length*100;
  if(l.taskType==="match")return taskState.matched.length/l.pairs.length*100;
  if(l.taskType==="classify")return taskState.done.length/l.items.length*100;
  if(l.taskType==="multiSelect")return taskState.selected.length/l.options.length*80;
  if(l.taskType==="sequence")return taskState.order.length/l.steps.length*80;
  if(l.taskType==="broadcast")return Object.values(taskState.broadcast).filter(Boolean).length/8*100;
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
  if(l.taskType==="guidedQuiz"){
    const q=l.questions[taskState.question],selected=taskState.selected;
    body=`<div class="guided-progress">學習任務 ${taskState.question+1}／${l.questions.length}</div><div class="guided-scene" aria-hidden="true">${q.icon}</div><h3 class="guided-question">${q.prompt}</h3><div class="guided-options">${q.options.map((x,i)=>`<button class="guided-option ${selected===i?"selected":""} ${taskState.resolved&&i===q.answer?"correct":""}" data-guided="${i}" ${taskState.resolved?"disabled":""}><span>${String.fromCharCode(65+i)}</span>${x}</button>`).join("")}</div>${taskState.resolved?`<div class="reason-box"><strong>為什麼？</strong>${q.explain}<button class="main-btn" id="nextGuided">${taskState.question===l.questions.length-1?"整理我學會的內容":"下一個觀察"}</button></div>`:""}`;
  }
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
  if(l.taskType==="broadcast"){
    const b=taskState.broadcast;
    const field=(key,label,options)=>`<label><span>${label}</span><select data-broadcast="${key}">${options.map(x=>`<option ${b[key]===x?"selected":""}>${x}</option>`).join("")}</select></label>`;
    body=`<div class="broadcast-studio"><div class="broadcast-icon">🎙️🌦️</div><div class="broadcast-fields">${field("date","日期",["6月14日","6月15日"])}${field("place","地點",["操場","教室外走廊","公園"])}${field("time","時間",["上午10點","中午12點","下午3點"])}${field("weather","天氣",["晴天","陰天","雨天"])}${field("temp","氣溫",["24℃","30℃","35℃"])}${field("windDir","風向",["西南風","北風","東風"])}${field("windForce","風力",["無風","弱風","強風"])}${field("reminder","生活提醒",["天氣炎熱，戶外活動要補充水分。","可能下雨，記得攜帶雨具。","風力較強，要固定容易吹動的物品。"])}</div><div class="broadcast-preview"><strong>播報稿預覽</strong><p>${broadcastText(b)}</p></div></div>`;
  }
  app.innerHTML=taskShell(body);bindTask();
}
function setFeedback(text,bad=false){
  taskState.message=text;taskState.messageBad=bad;
  const el=document.getElementById("feedback");if(el){el.textContent=text;el.classList.toggle("bad",bad)}
}
function broadcastText(b){return `大家好，我是今天的天氣小主播。${b.date}${b.time}，我在${b.place}觀測到${b.weather}，氣溫是${b.temp}，風向是${b.windDir}，風力是${b.windForce}。提醒大家：${b.reminder}`}
function bindTask(){
  const l=lessons[current];
  document.getElementById("backMap").onclick=()=>{screen="map";render()};
  document.getElementById("checkTask").onclick=checkTask;
  document.getElementById("showHint").onclick=()=>{
    taskState.hintLevel=Math.min(3,taskState.hintLevel+1);
    taskState.message="提示會帶你觀察線索，不會直接替你作答。";
    taskState.messageBad=false;
    renderTask();
  };
  document.querySelectorAll("[data-guided]").forEach(b=>b.onclick=()=>{
    taskState.selected=+b.dataset.guided;
    taskState.message="已選擇答案。請按「檢查這一題」，並準備說明理由。";
    taskState.messageBad=false;
    renderTask();
  });
  const nextGuided=document.getElementById("nextGuided");
  if(nextGuided)nextGuided.onclick=advanceGuided;
  document.querySelectorAll("[data-left]").forEach(b=>b.onclick=()=>{if(taskState.matched.includes(+b.dataset.left))return;taskState.left=+b.dataset.left;renderTask()});
  document.querySelectorAll("[data-right]").forEach(b=>b.onclick=()=>{
    const r=+b.dataset.right;
    if(taskState.left===null||taskState.matched.includes(r))return;
    if(r===taskState.left){taskState.matched.push(r);taskState.left=null;taskState.message="配對成功！請繼續觀察下一組。";taskState.messageBad=false;renderTask()}
    else{taskState.message=l.misconception;taskState.messageBad=true;b.classList.add("wrong");setFeedback(l.misconception,true)}
  });
  document.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{taskState.category=+b.dataset.cat;renderTask()});
  document.querySelectorAll("[data-item]").forEach(b=>b.onclick=()=>{
    const i=+b.dataset.item;if(taskState.done.includes(i))return;
    if(taskState.category===null){setFeedback("請先選一個環境，再選動物。",true);return}
    if(l.items[i][1]===taskState.category){taskState.done.push(i);taskState.message=`分類正確！${l.items[i][0]}`;taskState.messageBad=false;renderTask()}
    else{setFeedback(l.misconception,true);b.classList.add("wrong")}
  });
  document.querySelectorAll("[data-option]").forEach(b=>b.onclick=()=>{const i=+b.dataset.option;taskState.selected=taskState.selected.includes(i)?taskState.selected.filter(x=>x!==i):[...taskState.selected,i];renderTask()});
  document.querySelectorAll("[data-step]").forEach(b=>b.onclick=()=>{const i=+b.dataset.step;if(taskState.order.includes(i))return;taskState.order.push(i);renderTask()});
  document.querySelectorAll("[data-broadcast]").forEach(el=>el.onchange=()=>{
    taskState.broadcast[el.dataset.broadcast]=el.value;
    taskState.message="資料已更新，請讀一次播報稿，確認內容完整。";
    taskState.messageBad=false;
    renderTask();
  });
}
function checkTask(){
  const l=lessons[current];let ok=false;
  if(l.taskType==="guidedQuiz"){
    if(taskState.resolved){advanceGuided();return}
    if(taskState.selected===undefined){setFeedback("先選一個答案，再檢查理由。",true);return}
    const q=l.questions[taskState.question];
    if(taskState.selected===q.answer){
      taskState.resolved=true;taskState.message="判斷正確！現在閱讀「為什麼」，把觀察變成解釋。";taskState.messageBad=false;renderTask();
    }else{
      taskState.hintLevel=Math.min(3,taskState.hintLevel+1);
      taskState.message=l.misconception;taskState.messageBad=true;renderTask();
    }
    return;
  }
  if(l.taskType==="match")ok=taskState.matched.length===l.pairs.length;
  if(l.taskType==="classify")ok=taskState.done.length===l.items.length;
  if(l.taskType==="multiSelect"){
    const correct=l.options.map((x,i)=>x[1]?i:null).filter(x=>x!==null);
    ok=correct.length===taskState.selected.length&&correct.every(x=>taskState.selected.includes(x));
  }
  if(l.taskType==="sequence")ok=taskState.order.length===l.steps.length&&taskState.order.every((x,i)=>x===i);
  if(l.taskType==="broadcast")ok=Object.values(taskState.broadcast).every(Boolean);
  if(ok)completeLesson();
  else{
    taskState.hintLevel=Math.min(3,taskState.hintLevel+1);
    setFeedback(l.misconception,true);
    if(l.taskType==="sequence"){taskState.order=[];setTimeout(renderTask,900)}
  }
}
function advanceGuided(){
  const l=lessons[current],q=l.questions[taskState.question];
  if(!taskState.resolved)return;
  taskState.answers.push({question:taskState.question,answer:taskState.selected,correct:taskState.selected===q.answer});
  if(taskState.question<l.questions.length-1){
    taskState.question++;taskState.selected=undefined;taskState.resolved=false;taskState.hintLevel=0;
    taskState.message="先觀察新的情境，再做判斷。";taskState.messageBad=false;renderTask();
  }else completeLesson();
}
function completeLesson(){
  const l=lessons[current];
  if(!state.completed.includes(l.id))state.completed.push(l.id);
  if(l.id==="stage1")state.animalCard={name:"鴨子",icon:"🦆",features:"扁嘴、羽毛、兩隻腳和腳蹼",structure:"腳上的蹼",habitat:"水邊",function:"增加推水面積，幫助划水",survival:"羽毛防水，能在水邊活動"};
  if(l.id==="stage10")state.weatherCard={...taskState.broadcast,text:broadcastText(taskState.broadcast)};
  save();screen="reward";render();
}
function renderReward(){
  const l=lessons[current],allDone=state.completed.length===lessons.length;
  app.innerHTML=scene(`<section class="task-panel reward"><div class="knowledge-badge"><img src="${l.badge}" alt="${l.reward}"><span>${l.rewardIcon}</span></div><div><p>任務完成 · 稱號：${currentTitle()}</p><h2>獲得「${l.reward}」！</h2><div class="learned-summary"><strong>我學會了</strong><p>${l.summary.replace(/^我學會了：/,"")}</p></div><div class="concept-fix"><strong>觀念修正</strong><p>${l.misconception}</p></div><button class="main-btn" id="rewardNext">${allDone?"查看成果卡":"回地圖解鎖下一關"}</button></div></section>`);
  document.getElementById("rewardNext").onclick=()=>{screen=allDone?"portfolio":"map";render()};
}
function renderPortfolio(){
  const a=state.animalCard||{name:"鴨子",icon:"🦆",features:"扁嘴、羽毛、兩隻腳和腳蹼",structure:"腳上的蹼",habitat:"水邊",function:"增加推水面積，幫助划水",survival:"羽毛防水，能在水邊活動"};
  const w=state.weatherCard||{date:"6月14日",place:"操場",time:"上午10點",weather:"晴天",temp:"30℃",windDir:"西南風",windForce:"弱風",reminder:"天氣炎熱，戶外活動要補充水分。"};
  const weatherText=w.text||broadcastText(w);
  app.innerHTML=topbar()+`<main class="portfolio-screen"><section class="portfolio-wrap"><p class="eyebrow">學習成果</p><h1>我的自然任務成果卡</h1><p>這兩張卡記錄你從觀察、操作、判斷到說明理由的學習成果。</p><div class="portfolio-grid"><article class="result-card animal-result"><div class="result-card-head"><span>${a.icon}</span><div><small>成果卡 1</small><h2>我的動物解說卡</h2></div></div><dl><dt>動物名稱</dt><dd>${a.name}</dd><dt>外形特徵</dt><dd>${a.features}</dd><dt>重要構造</dt><dd>${a.structure}</dd><dt>生活環境</dt><dd>${a.habitat}</dd><dt>構造功能</dt><dd>${a.function}</dd><dt>生存法寶</dt><dd>${a.survival}</dd></dl><p class="card-summary">動物的構造、功能、環境和生存方式會互相配合。</p></article><article class="result-card weather-result"><div class="result-card-head"><span>🎙️</span><div><small>成果卡 2</small><h2>我的天氣主播卡</h2></div></div><dl><dt>日期時間</dt><dd>${w.date} ${w.time}</dd><dt>地點</dt><dd>${w.place}</dd><dt>天氣氣溫</dt><dd>${w.weather}，${w.temp}</dd><dt>風向風力</dt><dd>${w.windDir}，${w.windForce}</dd><dt>生活提醒</dt><dd>${w.reminder}</dd></dl><blockquote>${weatherText}</blockquote></article></div><div class="portfolio-actions"><button class="main-btn" id="portfolioQuiz">進入25題總測驗</button><button class="soft-btn" id="printPortfolio">列印／另存PDF</button><button class="soft-btn" id="portfolioMap">回地圖</button></div><p class="portfolio-credit">設計者：Gavin Huang</p></section></main>`;
  document.getElementById("portfolioQuiz").onclick=()=>{screen="quizIntro";render()};
  document.getElementById("printPortfolio").onclick=()=>window.print();
  document.getElementById("portfolioMap").onclick=()=>{screen="map";render()};
}
function renderQuizIntro(){
  app.innerHTML=topbar()+`<main class="quiz-screen"><section class="quiz-card quiz-intro"><div class="quiz-orb">🧠✨</div><p class="eyebrow">終局任務</p><h1>自然晶章總測驗</h1><p>${finalQuiz.length} 題情境題會把兩章的六個核心概念連在一起。完成後，裝置內的診斷規則會根據錯題、概念標籤與跨題關聯，推估需要優先複習的單元。</p><div class="offline-note"><strong>🔒 完全離線</strong><span>不傳送答案、不連接外部 AI；判斷由網頁內的加權規則完成。</span></div><div class="relation-preview">${Object.values(conceptInfo).map(x=>`<span>${x.icon} ${x.title}</span>`).join("")}</div><button class="main-btn" id="beginQuiz">開始 ${finalQuiz.length} 題總測驗</button> <button class="soft-btn" id="quizPortfolio">查看成果卡</button> <button class="soft-btn" id="quizBackMap">回地圖</button></section></main>`;
  document.getElementById("beginQuiz").onclick=()=>{quizIndex=0;quizAnswers=[];screen="quiz";render()};
  document.getElementById("quizPortfolio").onclick=()=>{screen="portfolio";render()};
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
  const ratio=result.correct/result.total;
  const headline=ratio>=.9?"自然推理非常穩定":ratio>=.7?"基礎穩定，少數關聯要補強":ratio>=.5?"部分概念需要重新連結":"建議依診斷順序重新闖關";
  app.innerHTML=topbar()+`<main class="quiz-screen diagnosis-screen"><section class="quiz-card diagnosis-card"><p class="eyebrow">離線智慧診斷報告</p><div class="score-ring" style="--score:${result.correct/result.total*360}deg"><strong>${result.correct}<small>／${result.total}</small></strong></div><h1>${headline}</h1><p>這是規則式推估，不是醫療或正式能力鑑定。系統依主要概念 2 分、關聯概念 1 分加權，找出錯題集中處。</p><h2>概念雷達</h2><div class="concept-bars">${result.ranked.map(x=>{const c=conceptInfo[x.id];return `<div class="concept-row"><span>${c.icon} ${c.title}</span><div><i style="width:${x.score}%"></i></div><b>${x.score}%</b></div>`}).join("")}</div><h2>優先複習預測</h2><div class="diagnosis-grid">${priority.length?priority.map((x,i)=>{const c=conceptInfo[x.id];return `<article class="review-card"><span class="priority">優先 ${i+1}</span><div class="review-icon">${c.icon}</div><h3>${c.title}</h3><p>${c.review}</p><small>關聯錯題：${x.questions.length?`第 ${x.questions.join("、")} 題`:"綜合表現"}</small><button class="soft-btn" data-review-stage="${c.stage}">回到這一關複習</button></article>`}).join(""):`<article class="review-card strong-card"><div class="review-icon">🏆</div><h3>沒有明顯弱項</h3><p>六個單元的關聯表現都達到 80%，可以挑戰重新測驗保持熟練。</p></article>`}</div>${relationRows.length?`<h2>需要重新連結的概念</h2><div class="relation-results">${relationRows.map(x=>`<span>🔗 ${x[0]} <b>${x[1]} 題</b></span>`).join("")}</div>`:""}${strengths.length?`<p class="strength-line"><strong>目前較穩定：</strong>${strengths.map(x=>conceptInfo[x.id].title).join("、")}</p>`:""}<div class="diagnosis-actions"><button class="main-btn" id="finishAdventure">開啟王國結局</button><button class="soft-btn" id="retryQuiz">重新測驗</button><button class="soft-btn" id="diagnosisMap">回地圖</button></div></section></main>`;
  document.querySelectorAll("[data-review-stage]").forEach(b=>b.onclick=()=>startStage(+b.dataset.reviewStage));
  document.getElementById("finishAdventure").onclick=()=>{screen="ending";render()};
  document.getElementById("retryQuiz").onclick=()=>{quizIndex=0;quizAnswers=[];screen="quiz";render()};
  document.getElementById("diagnosisMap").onclick=()=>{screen="map";render()};
}
function renderEnding(){
  app.innerHTML=topbar()+`<main class="ending" style="background-image:url('assets/ending_complete.png')"><section class="ending-card"><h1>森語天候王國守護者！</h1><p>你完成兩章十關、學習成果卡與跨單元總測驗。你不只答對題目，也能觀察、操作、判斷、說明理由並整理科學資料。</p><div class="badge-rack">${lessons.map(l=>`<span title="${l.reward}">${l.rewardIcon}</span>`).join("")}</div>${state.quizResult?`<p><strong>總測驗：${state.quizResult.correct}／${state.quizResult.total}</strong></p><button class="main-btn" id="endingDiagnosis">查看診斷報告</button>`:""} <button class="soft-btn" id="endingPortfolio">成果卡</button> <button class="soft-btn" id="endingMap">回到冒險地圖</button> <button class="soft-btn" id="endingReset">重新開始</button></section></main>`;
  if(state.quizResult)document.getElementById("endingDiagnosis").onclick=()=>{screen="diagnosis";render()};
  document.getElementById("endingPortfolio").onclick=()=>{screen="portfolio";render()};
  document.getElementById("endingMap").onclick=()=>{screen="map";render()};
  document.getElementById("endingReset").onclick=()=>{state={completed:[]};save();screen="map";render()};
}
render();
