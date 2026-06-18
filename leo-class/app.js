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
    { type: "story", title: "Sentence Builder", subtitle: "用生字組成有意義的句子", icon: "🎭", badge: "Sentence Builder" }
  ];

  const app = document.getElementById("app");
  let state = loadState();
  let currentGrade = Number(localStorage.getItem("leo-current-grade") || "1");
  let quiz = null;
  let spelling = null;
  let flip = null;
  let currentView = "home";

  const exactWordVisuals = {
    ant: "🐜",
    ankle: "🦶",
    apple: "🍎",
    arm: "💪",
    aunt: "👩",
    ax: "🪓",
    back: "🧍",
    bag: "🎒",
    banana: "🍌",
    bean: "🫘",
    beard: "🧔",
    beef: "🥩",
    bed: "🛏️",
    bird: "🐦",
    black: "⚫",
    blue: "🔵",
    body: "🧍",
    bone: "🦴",
    box: "📦",
    bread: "🍞",
    brother: "👦",
    brown: "🟤",
    bun: "🥯",
    burger: "🍔",
    cab: "🚕",
    cabbage: "🥬",
    cap: "🧢",
    carrot: "🥕",
    cat: "🐱",
    cereal: "🥣",
    chicken: "🍗",
    chin: "🙂",
    color: "🎨",
    corn: "🌽",
    cousin: "🧑",
    dad: "👨",
    daughter: "👧",
    desk: "🪑",
    dumpling: "🥟",
    ear: "👂",
    egg: "🥚",
    elf: "🧝",
    eight: "8️⃣",
    eighteen: "🔢",
    eleven: "🔢",
    eye: "👁️",
    face: "🙂",
    family: "👪",
    father: "👨",
    fan: "🌀",
    fifteen: "🔢",
    finger: "☝️",
    fish: "🐟",
    five: "5️⃣",
    fix: "🛠️",
    food: "🍽️",
    foot: "🦶",
    forty: "🔢",
    four: "4️⃣",
    fourteen: "🔢",
    fox: "🦊",
    frenchfries: "🍟",
    fruit: "🍎",
    gift: "🎁",
    girl: "👧",
    golden: "🟡",
    grandfather: "👴",
    grandmother: "👵",
    granddaughter: "👧",
    grandson: "👦",
    grape: "🍇",
    gray: "⚪",
    green: "🟢",
    guava: "🍐",
    hair: "💇",
    hand: "✋",
    hat: "🎩",
    head: "🙂",
    heart: "❤️",
    hip: "🧍",
    hippo: "🦛",
    hundred: "💯",
    husband: "👨",
    insect: "🐞",
    ink: "🖋️",
    jam: "🍓",
    jet: "✈️",
    kid: "🧒",
    knee: "🦵",
    kit: "🧰",
    lap: "🧎",
    leg: "🦵",
    lemon: "🍋",
    lettuce: "🥬",
    lip: "👄",
    log: "🪵",
    mango: "🥭",
    mat: "▭",
    meat: "🥩",
    mitt: "🧤",
    mother: "👩",
    mouth: "👄",
    nail: "💅",
    nap: "😴",
    neck: "🧣",
    nephew: "👦",
    niece: "👧",
    nine: "9️⃣",
    nineteen: "🔢",
    ninety: "🔢",
    nose: "👃",
    nest: "🪺",
    nut: "🥜",
    one: "1️⃣",
    onion: "🧅",
    orange: "🟠",
    ox: "🐂",
    pad: "📝",
    papaya: "🍈",
    parents: "👪",
    parent: "👪",
    peach: "🍑",
    pear: "🍐",
    pet: "🐶",
    pineapple: "🍍",
    pink: "🌸",
    potato: "🥔",
    pumpkin: "🎃",
    purple: "🟣",
    queen: "👑",
    quilt: "🛏️",
    rat: "🐀",
    red: "🔴",
    relatives: "👪",
    relative: "👪",
    rock: "🪨",
    sack: "🛍️",
    seven: "7️⃣",
    seventeen: "🔢",
    seventy: "🔢",
    shoulder: "🤷",
    sister: "👧",
    six: "6️⃣",
    sixteen: "🔢",
    sixty: "🔢",
    skin: "✋",
    sit: "🪑",
    son: "👦",
    stomach: "🤰",
    strawberry: "🍓",
    tag: "🏷️",
    tangerine: "🍊",
    ten: "🔟",
    thirteen: "🔢",
    thirty: "🔢",
    thousand: "🔢",
    three: "3️⃣",
    throat: "🗣️",
    thumb: "👍",
    top: "⬆️",
    tomato: "🍅",
    tongue: "👅",
    tooth: "🦷",
    toe: "🦶",
    twelve: "🔢",
    twenty: "🔢",
    two: "2️⃣",
    umbrella: "☂️",
    uncle: "👨",
    van: "🚐",
    vegetable: "🥬",
    vet: "🩺",
    watermelon: "🍉",
    wet: "💧",
    white: "⚪",
    wife: "👩",
    wig: "💇",
    yam: "🍠",
    yellow: "🟨",
    zebra: "🦓",
    zero: "0️⃣",
    zip: "🤐"
  };

  const grammarVisuals = {
    a: "①",
    an: "①",
    am: "=",
    are: "=",
    by: "↔",
    can: "✓",
    has: "+",
    have: "+",
    i: "👤",
    in: "📍",
    is: "=",
    my: "👤",
    on: "⬆️",
    the: "🔗",
    this: "👉",
    to: "➡️",
    up: "⬆️",
    your: "👤"
  };

  Object.assign(exactWordVisuals, {
    airplaneplane: "✈️",
    ambulance: "🚑",
    australia: "🇦🇺",
    autumnfall: "🍂",
    badminton: "🏸",
    bark: "🗣️",
    baseball: "⚾",
    basketball: "🏀",
    bat: "🦇",
    bee: "🐝",
    bicyclebike: "🚲",
    bite: "🦷",
    blanket: "🛏️",
    boat: "⛵",
    bowl: "🥣",
    bowling: "🎳",
    bridge: "🌉",
    bug: "🐛",
    bus: "🚌",
    busstop: "🚏",
    butterfly: "🦋",
    canada: "🇨🇦",
    car: "🚗",
    chopsticks: "🥢",
    classroom: "🏫",
    cockroach: "🪳",
    cold: "🤧",
    comfortable: "😌",
    cough: "😷",
    crab: "🦀",
    cup: "☕",
    cure: "🩺",
    death: "🕯️",
    dish: "🍽️",
    dizzy: "😵‍💫",
    dolphin: "🐬",
    dodgeball: "🏐",
    dragon: "🐉",
    egypt: "🇪🇬",
    fever: "🌡️",
    flu: "🤒",
    football: "🏈",
    fork: "🍴",
    france: "🇫🇷",
    frisbee: "🥏",
    germany: "🇩🇪",
    glass: "🥛",
    golf: "⛳",
    greece: "🇬🇷",
    headache: "🤕",
    health: "❤️",
    healthy: "💪",
    helicopter: "🚁",
    highway: "🛣️",
    ill: "🤒",
    italy: "🇮🇹",
    japan: "🇯🇵",
    jeep: "🚙",
    knife: "🔪",
    life: "🌱",
    medicine: "💊",
    mexico: "🇲🇽",
    mosquito: "🦟",
    mrt: "🚇",
    napkin: "🧻",
    painful: "🤕",
    pale: "😟",
    plate: "🍽️",
    race: "🏃",
    railway: "🛤️",
    russia: "🇷🇺",
    saucer: "🍽️",
    shark: "🦈",
    ship: "🚢",
    shoe: "👟",
    shoes: "👟",
    shrimp: "🦐",
    sick: "🤒",
    snail: "🐌",
    snake: "🐍",
    soccer: "⚽",
    sorethroat: "🗣️",
    southkorea: "🇰🇷",
    spoon: "🥄",
    spider: "🕷️",
    stomachache: "🤰",
    straw: "🥤",
    strong: "💪",
    subway: "🚇",
    swallow: "💊",
    tabletennis: "🏓",
    tail: "🐕",
    tank: "🚜",
    taxi: "🚕",
    thailand: "🇹🇭",
    theuk: "🇬🇧",
    theusa: "🇺🇸",
    tired: "😴",
    toothache: "🦷",
    train: "🚆",
    trainstation: "🚉",
    truck: "🚚",
    turtle: "🐢",
    volleyball: "🏐",
    weak: "😓",
    well: "😊",
    whale: "🐋",
    wing: "🪽",
    worm: "🪱"
  });

  Object.assign(exactWordVisuals, {
    august: "📅",
    art: "🎨",
    bad: "👎",
    barbecue: "🍖",
    basket: "🧺",
    belt: "🧷",
    brave: "🦸",
    bucket: "🪣",
    butter: "🧈",
    camp: "⛺",
    candle: "🕯️",
    cassette: "📼",
    class: "🏫",
    classleader: "🧑‍🏫",
    classmate: "🧑‍🤝‍🧑",
    clean: "🧹",
    clock: "🕒",
    coffee: "☕",
    cola: "🥤",
    comb: "💇",
    computer: "💻",
    cook: "🍳",
    crazy: "😵‍💫",
    cream: "🥛",
    dance: "💃",
    december: "📅",
    dessert: "🍰",
    donkey: "🫏",
    doughnut: "🍩",
    draw: "🎨",
    dryer: "💨",
    eagle: "🦅",
    eat: "🍽️",
    eraser: "🧽",
    february: "📅",
    freezer: "🧊",
    frog: "🐸",
    full: "😋",
    funny: "😄",
    gate: "🚪",
    glasses: "👓",
    glove: "🧤",
    glue: "🧴",
    goat: "🐐",
    good: "👍",
    goose: "🪿",
    gym: "🏟️",
    hall: "🚪",
    horse: "🐴",
    hot: "🌶️",
    hungry: "😋",
    jacket: "🧥",
    january: "📅",
    jog: "🏃",
    july: "📅",
    june: "📅",
    kangaroo: "🦘",
    key: "🔑",
    koala: "🐨",
    lamb: "🐑",
    lamp: "💡",
    lazy: "😴",
    letter: "✉️",
    lonely: "😔",
    mad: "😡",
    map: "🗺️",
    march: "📅",
    marker: "🖊️",
    mask: "😷",
    math: "➕",
    may: "📅",
    monster: "👾",
    monkey: "🐒",
    mouse: "🐭",
    nervous: "😰",
    needle: "🪡",
    november: "📅",
    noon: "☀️",
    october: "📅",
    oven: "🔥",
    page: "📄",
    pan: "🍳",
    panda: "🐼",
    paper: "📄",
    parrot: "🦜",
    pepper: "🌶️",
    pe: "🏃",
    pen: "🖊️",
    phone: "☎️",
    playground: "🛝",
    pot: "🍲",
    proud: "😌",
    puppy: "🐶",
    road: "🛣️",
    roller: "🛼",
    rollerskate: "🛼",
    roof: "🏠",
    rude: "😠",
    ruler: "📏",
    run: "🏃",
    salt: "🧂",
    september: "📅",
    seesaw: "🛝",
    smart: "🧠",
    snack: "🍪",
    soap: "🧼",
    soda: "🥤",
    socks: "🧦",
    sofa: "🛋️",
    soysauce: "🍶",
    speaker: "🔊",
    stove: "🔥",
    street: "🛣️",
    student: "🧑‍🎓",
    sugar: "🍬",
    swan: "🦢",
    table: "🪑",
    tape: "📼",
    tea: "🍵",
    teapot: "🫖",
    telephone: "☎️",
    that: "👉",
    those: "👉",
    tofu: "⬜",
    trashcan: "🗑️",
    tub: "🛁",
    tube: "🧪",
    turkey: "🦃",
    underwear: "👕",
    us: "👥",
    vest: "🦺",
    wash: "🧼",
    watch: "⌚",
    water: "💧",
    wok: "🍳",
    wolf: "🐺"
  });

  const exactSentenceZh = {
    "A cat takes a nap by the nest.": "一隻貓在巢旁小睡。",
    "An ant is on the ax.": "一隻螞蟻在斧頭上。",
    "I can fix the fan.": "我可以修理電扇。",
    "The kid has a kit.": "這個小孩有一個工具包。",
    "I sit on the sack.": "我坐在袋子上。",
    "A fox is on the box.": "一隻狐狸在盒子上。",
    "A bag is on the bed.": "一個袋子在床上。",
    "The girl has a gift.": "這個女孩有一份禮物。",
    "A log is on my lap.": "一根原木在我的大腿上。",
    "A bird is on the ox.": "一隻鳥在公牛上。",
    "A tag is on the top.": "一個標籤在上方。",
    "I like the yellow yam.": "我喜歡黃色的山藥。",
    "My uncle has an umbrella.": "我的叔叔有一把雨傘。",
    "A cap is on the cab.": "一頂鴨舌帽在計程車上。",
    "A hat is on the hippo.": "一頂帽子在河馬上。",
    "A mitt is on the mat.": "一隻手套在墊子上。",
    "My pet is on the pad.": "我的寵物在便條本上。",
    "Zip up your zebra bag.": "把你的斑馬袋拉上拉鍊。",
    "Dad is by the desk.": "爸爸在書桌旁邊。",
    "An insect is on the ink.": "一隻昆蟲在墨水上。",
    "The queen has a quilt.": "皇后有一條棉被。",
    "The vet is in the van.": "獸醫在廂型車裡。",
    "A rat is on the rock.": "一隻老鼠在石頭上。",
    "My wig is wet.": "我的假髮濕了。",
    "The elf has an egg.": "小精靈有一顆蛋。",
    "A jet is by the jam.": "一架噴射機在果醬旁邊。"
  };

  const grade3FamilyPlural = new Set(["parent(s)", "relative(s)"]);
  const grade3Numbers = new Set(["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred", "thousand"]);
  const grade3Colors = new Set(["black", "blue", "brown", "color", "golden", "gray", "green", "orange", "pink", "purple", "red", "white", "yellow"]);
  const grade3Feelings = new Set(["angry", "bad", "brave", "crazy", "evil", "funny", "good", "happy", "kind", "lazy", "lonely", "mad", "nervous", "proud", "rude", "sad", "smart"]);
  const grade3FaceParts = new Set(["beard", "chin", "ear", "eye", "face", "hair", "lip", "mouth", "nose", "tongue", "tooth"]);
  const grade3BodyParts = new Set(["ankle", "arm", "back", "body", "bone", "finger", "foot", "hand", "head", "hip", "knee", "leg", "nail", "neck", "shoulder", "skin", "throat", "thumb", "toe", "heart", "stomach"]);
  const grade3Produce = new Set(["fruit", "apple", "banana", "grape", "guava", "lemon", "mango", "orange", "papaya", "peach", "pear", "pineapple", "strawberry", "tangerine", "tomato", "watermelon", "vegetable", "bean", "cabbage", "carrot", "corn", "lettuce", "nut", "onion", "potato", "pumpkin"]);
  const grade3Foods = new Set(["meat", "beef", "bread", "bun", "burger", "cereal", "chicken", "dumpling", "egg", "fish", "food", "French fries"]);

  const grade4Meals = new Set(["breakfast", "brunch", "dinner", "lunch", "meal", "snack"]);
  const grade4Foods = new Set(["ham", "hamburger", "pizza", "pork", "rice", "salad", "sandwich", "seafood", "shrimp", "soup", "steak", "tofu"]);
  const grade4Drinks = new Set(["beer", "coffee", "cola", "drink", "juice", "milk", "milk shake", "soda", "tea", "water"]);
  const grade4Desserts = new Set(["cake", "candy", "cheese", "chocolate", "cookie", "dessert", "doughnut", "ice cream", "pie", "popcorn"]);
  const grade4Seasonings = new Set(["butter", "cream", "jam", "oil", "pepper", "soy-sauce", "salt", "sugar", "vinegar"]);
  const grade4FoodFeelings = new Set(["hungry", "full", "thirsty"]);
  const grade4Tastes = new Set(["bitter", "hot", "sour", "sweet", "yummy"]);
  const grade4FoodActions = new Set(["cook", "eat", "order"]);
  const grade4Times = new Set(["morning", "noon", "afternoon", "evening", "night"]);
  const grade4Days = new Set(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "week", "weekday", "weekend"]);
  const grade4Months = new Set(["month", "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]);
  const grade4Seasons = new Set(["season", "spring", "summer", "autumn (fall)", "winter"]);
  const grade4Clothes = new Set(["coat", "dress", "jacket", "jeans", "pants", "raincoat", "shirt", "t-shirt", "shorts", "skirt", "sweater", "swimsuit", "uniform", "underwear", "vest"]);
  const grade4Accessories = new Set(["bag", "belt", "cap", "comb", "glove", "hat", "mask", "ring", "scarf", "shoe(s)", "slippers", "sneakers", "socks", "tie", "umbrella"]);
  const grade4Sports = new Set(["badminton", "baseball", "basketball", "dodge ball", "football", "frisbee", "golf", "race", "soccer", "softball", "table tennis", "tennis", "volleyball"]);
  const grade4Activities = new Set(["barbecue", "bowling", "camp", "dance", "draw", "hike", "jog", "picnic", "roller skate", "run", "sing"]);
  const grade4HouseRooms = new Set(["house", "basement", "bathroom", "bedroom", "dining room", "garden", "hall", "kitchen", "living room", "room"]);

  const grade5HouseParts = new Set(["study", "yard", "balcony", "door", "floor", "gate", "roof", "stairs", "wall", "window"]);
  const grade5Furniture = new Set(["bed", "chair", "desk", "drawer", "lamp", "light", "mirror", "shelf", "sink", "sofa", "table", "tub"]);
  const grade5HomeItems = new Set(["blanket", "carpet", "hanger", "pillow", "sheet", "toothbrush", "soap", "towel"]);
  const grade5Appliances = new Set(["air conditioner", "camera", "cassette", "computer", "dresser", "dryer", "fan", "flashlight", "freezer", "heater", "machine", "microwave", "oven", "radio", "refrigerator", "speaker", "stove", "tape", "telephone", "phone", "television (tv)", "video", "printer"]);
  const grade5Tools = new Set(["basket", "brick", "bucket", "candle", "hammer", "housework", "key", "mat", "needle", "pan", "pot", "teapot", "umbrella", "toilet", "trash can", "wok", "tube"]);
  const grade5HomeActions = new Set(["build", "clean", "design", "fix", "repair", "sweep", "wash"]);
  const grade5Places = new Set(["address", "road", "street", "classroom", "gym", "playground", "library", "class", "seesaw", "slide", "blackboard"]);
  const grade5SchoolItems = new Set(["book", "chalk", "crayon", "diary", "eraser", "glasses", "glue", "ink", "letter", "map", "marker", "notebook", "page", "paper", "pen", "pencil", "ruler"]);
  const grade5Subjects = new Set(["art", "chinese", "english", "math", "music", "pe", "science", "social science"]);
  const grade5People = new Set(["class leader", "classmate", "friend", "student", "teacher"]);
  const grade5Learning = new Set(["learn", "listen"]);
  const grade5Animals = new Set(["bear", "cat", "chicken", "cow", "deer", "dinosaur", "dog", "donkey", "duck", "eagle", "elephant", "fox", "frog", "goat", "goose", "hen", "hippo", "horse", "kangaroo", "kitten", "koala", "lamb", "lion", "monkey", "monster", "mouse", "ox", "panda", "parrot", "pet", "pig", "puppy", "rabbit", "rat", "sheep", "swan", "tiger", "turkey", "wolf", "zebra"]);

  const grade6Insects = new Set(["ant", "bat", "bee", "bird", "bug", "butterfly", "cockroach", "dragon", "mosquito", "snail", "snake", "spider", "worm"]);
  const grade6SeaAnimals = new Set(["crab", "dolphin", "fish", "shark", "shrimp", "turtle", "whale"]);
  const grade6AnimalActions = new Set(["bark", "bite", "swallow"]);
  const grade6AnimalParts = new Set(["tail", "wing"]);
  const grade6Pronouns = new Set(["i", "my", "me", "he", "his", "him", "she", "her", "we", "our", "us", "they", "their", "them", "it", "its", "you", "your"]);
  const grade6Demonstratives = new Set(["this", "that", "these", "those"]);
  const grade6Questions = new Set(["how", "what", "which", "who", "whose", "when", "where", "why"]);
  const grade6Countries = new Set(["australia", "canada", "egypt", "france", "germany", "greece", "italy", "japan", "mexico", "russia", "south korea", "thailand", "the uk", "the usa"]);
  const grade6HealthAdjectives = new Set(["comfortable", "dizzy", "healthy", "ill", "painful", "pale", "sick", "strong", "tired", "weak", "well"]);
  const grade6Illnesses = new Set(["cold", "flu", "headache", "stomachache", "toothache", "cough", "fever", "pain", "sore throat"]);
  const grade6HealthNouns = new Set(["cure", "death", "health", "life", "medicine"]);
  const grade6Tableware = new Set(["bowl", "chopsticks", "cup", "dish", "fork", "glass", "knife", "napkin", "plate", "saucer", "spoon", "straw"]);
  const grade6Vehicles = new Set(["airplane (plane)", "ambulance", "bicycle (bike)", "boat", "bus", "car", "helicopter", "jeep", "mrt", "railway", "scooter", "ship", "subway", "tank", "taxi", "train", "truck"]);
  const grade6TrafficPlaces = new Set(["bus stop", "train station", "bridge", "highway"]);

  function normalize(words) {
    return words.map(item => {
      if (Array.isArray(item)) {
        const [word, zh, letter, icon] = item;
        return { word, zh, letter, icon: visualForWord(word, zh, icon) };
      }
      return {
        ...item,
        letter: item.letter || String(item.word || "").replace(/[^A-Za-z]/g, "").slice(0, 1).toUpperCase(),
        icon: visualForWord(item.word, item.zh, item.icon)
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
        { ...stageTypes[0], id: "g1-study", title: "Letter & Word Cards", subtitle: "A-Z 字母、圖像單字與 US English TTS", icon: "🔤", badge: "Letter Scout", background: "assets/stage_phonics_a.jpg" },
        { ...stageTypes[1], id: "g1-listen", title: "Listening Flip", subtitle: "聽老師念，翻牌配對自然發音單字", background: "assets/stage_phonics_b.jpg" },
        { ...stageTypes[2], id: "g1-speak", background: "assets/stage_phonics_a.jpg" },
        { ...stageTypes[3], id: "g1-read", background: "assets/stage_phonics_b.jpg" },
        { ...stageTypes[4], id: "g1-write", background: "assets/stage_phonics_c.jpg" },
        { ...stageTypes[5], id: "g1-story", title: "Sentence Builder", subtitle: "一年級生字組句練習", background: "assets/stage_phonics_c.jpg" }
      ];
    }
    return stageTypes.map((stage, index) => ({
      ...stage,
      id: `g${grade}-${stage.type}`,
      background: `assets/stage_phonics_${["a", "b", "c", "a", "b", "c"][index]}.jpg`
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
    currentView = "home";
    app.innerHTML = `
      ${topbar()}
      <main class="home">
        <section class="hero-copy">
          <span class="eyebrow">English Word Exam</span>
          <h1>英語大會考離線入口</h1>
          <p class="lead">給沒有補習資源的孩子也能自學：先聽得到、看得懂，再跟著說、讀句子，最後用生字組成有意義的英文句。</p>
          <div class="hero-stats">
            <div class="stat"><strong>6</strong><span>年級入口</span></div>
            <div class="stat"><strong>Listen</strong><span>聽音看圖</span></div>
            <div class="stat"><strong>Speak</strong><span>跟讀自學</span></div>
            <div class="stat"><strong>Read</strong><span>讀句組句</span></div>
          </div>
          <div class="speech-status ${speechStatusClass()}">${speechStatusText()}</div>
          <div class="offline-status info" id="offlineCacheStatus">${offlineStatusText()}</div>
          <div class="task-actions home-actions">
            <button class="btn primary" data-view="grades">選擇年級</button>
            <button class="btn secondary" id="testSpeech">測試發音</button>
          </div>
        </section>
        <section class="hero-art" aria-hidden="true"><img src="assets/hero_student.jpg" alt=""></section>
      </main>
      ${footer()}`;
    bindNav();
    document.getElementById("testSpeech").onclick = () => {
      const ok = speak("Hello. I can practice English offline.");
      const status = document.querySelector(".speech-status");
      if (!ok && status) {
        status.className = "speech-status warn";
        status.textContent = "此瀏覽器不支援語音朗讀，或目前沒有可用語音。請改用支援 Web Speech API 的瀏覽器，並安裝 English / en-US 語音包。";
      }
    };
  }

  function renderGrades() {
    currentView = "grades";
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
    currentView = "course";
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
              <img src="assets/npc_teacher.jpg" alt="英語導師">
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
    currentView = "stage";
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
            <img src="assets/npc_teacher.jpg" alt="英語導師">
            <div><strong>English Guide：</strong>${stage.subtitle}。先看圖，再聽音，接著說、讀、寫，最後用生字組成完整句子。</div>
          </div>
          <section class="task">${body}</section>
        </section>
      </main>
      ${footer()}`;
    bindNav();
  }

  function renderStudy(stage) {
    const letterCards = letters.map(letter => ({ word: letter, zh: "letter", icon: letter, kind: "letter" }));
    const wordCards = vocabFor(currentGrade);
    const words = currentGrade === 1 ? [...letterCards, ...wordCards] : wordCards;
    const weeklyGroups = splitIntoWeek(wordCards);
    const today = suggestedDay();
    const body = `
      <div class="objective">${currentGrade === 1 ? "一年級先單獨練 A-Z 字母，再進入圖片單字卡。不要把字母和單字混在同一組。" : "全部單字都會出現，並分成七天。每天念一組，週末可以複習全部。"}</div>
      <div class="task-box">
        <h2>${currentGrade === 1 ? "A-Z Letter & Word Cards" : "Daily Visual Word Cards"}</h2>
        <p class="daily-note">${currentGrade === 1 ? "建議流程：先聽 A-Z 字母音 → 跟念 → 再看圖練單字。" : `每日流程：看圖 3 秒 → 按朗讀 → 跟念 3 次 → 說出中文意思。今天建議：Day ${today}。`}</p>
        ${currentGrade === 1 ? `
          <div class="study-sections">
            <section class="day-section letter-section">
              <header>
                <strong>A-Z</strong>
                <span>Letter Practice · ${letterCards.length} 個</span>
              </header>
              <div class="letter-bank compact-letter-bank">
                ${letterCards.map(studyCard).join("")}
              </div>
            </section>
            <section class="day-section word-section">
              <header>
                <strong>Words</strong>
                <span>Picture Word Cards · ${wordCards.length} 個</span>
              </header>
              <div class="letter-bank">
                ${wordCards.map(studyCard).join("")}
              </div>
            </section>
          </div>
        ` : `
          <div class="week-plan">
            ${weeklyGroups.map((group, index) => `
              <section class="day-section ${index + 1 === today ? "today" : ""}">
                <header>
                  <strong>Day ${index + 1}</strong>
                  <span>${dayName(index + 1)} · ${group.length} 個</span>
                </header>
                <div class="letter-bank">
                  ${group.map(studyCard).join("")}
                </div>
              </section>`).join("")}
          </div>
        `}
        <div class="task-actions">
          <button class="btn primary" id="finishStudy">完成今日跟讀</button>
          <button class="btn secondary" data-view="course">回任務地圖</button>
        </div>
        <div class="feedback info show">${currentGrade === 1 ? "一年級頁面已分開：上方只練字母，下方才是圖片單字。" : "這一頁會列出本年級全部單字；每日只需完成一組，七天剛好跑完一輪。"}</div>
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

  function studyCard(item) {
    return `
      <button class="letter-btn visual-word-card ${item.kind === "letter" ? "letter-only-card" : ""}" data-say="${escapeHtml(item.word)}" data-sentence="${escapeHtml(sentenceFor(item, item.word))}">
        ${visualMarkup(item)}
        <span>${escapeHtml(item.word)}</span>
        <small>${escapeHtml(item.zh)}</small>
        ${sentenceMarkup(item)}
      </button>`;
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
              ${visualMarkup(item)}<span>${item.word}</span>${sentenceMarkup(item)}
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
    const words = shuffle(vocabFor(currentGrade)).slice(0, currentGrade === 1 ? 4 : 5).map(item => ({
      ...item,
      sentence: sentenceFor(item, item.word)
    }));
    const body = `
      <div class="objective">完成聽、說、讀、寫後，請把生字放進有意義的英文句子。依序點選詞塊，組成完整句。</div>
      <div class="task-box">
        <p class="eyebrow">Sentence Builder</p>
        <h2>用生字組成句子</h2>
        <div class="task-actions">
          <button class="btn primary" id="speakSentence">朗讀目標句</button>
          <button class="btn secondary" id="clearSentence">重新排列</button>
        </div>
        <div class="sentence-builder">
          <div class="story-card sentence-target" id="sentencePrompt"></div>
          <div class="sentence-slots" id="sentenceSlots"></div>
          <div class="letter-bank" id="sentenceBank"></div>
        </div>
        <div class="feedback info show" id="feedback">請依照英文句子的意思，點選詞塊排出一個完整、有意義的句子。</div>
        <div class="task-actions">
          <button class="btn primary" id="checkSentence">檢查句子</button>
          <button class="btn secondary" data-view="course">回任務地圖</button>
        </div>
      </div>`;
    missionShell(stage, body);
    let index = 0;
    let selected = [];

    function renderSentenceRound() {
      const item = words[index];
      const tokens = sentenceTokens(item.sentence);
      selected = [];
      document.getElementById("sentencePrompt").innerHTML = `
        <p class="sentence-focus">${visualMarkup(item)} <span><strong>${item.word}</strong>：${item.zh}</span></p>
        <small>第 ${index + 1} 題 / ${words.length} 題</small>
      `;
      document.getElementById("sentenceSlots").textContent = "點選下方詞塊來組句";
      document.getElementById("sentenceBank").innerHTML = shuffle(tokens).map((token, tokenIndex) => `
        <button class="letter-btn sentence-token" data-token="${escapeHtml(token)}" data-token-index="${tokenIndex}">
          <span class="token-visual">${tokenVisual(token, item)}</span>
          <span class="token-text">${escapeHtml(token)}</span>
        </button>
      `).join("");
      const feedback = document.getElementById("feedback");
      feedback.className = "feedback info show";
      feedback.textContent = "請把詞塊排成完整句子。句子裡一定要用到這個生字。";
      document.querySelectorAll("[data-token]").forEach(button => {
        button.onclick = () => {
          selected.push(button.dataset.token);
          button.disabled = true;
          button.classList.add("done");
          document.getElementById("sentenceSlots").innerHTML = selected.map(token => `
            <span class="selected-token"><span class="token-visual">${tokenVisual(token, item)}</span><span>${escapeHtml(token)}</span></span>
          `).join("");
        };
      });
      setTimeout(() => speak(item.word), 250);
    }

    document.getElementById("speakSentence").onclick = () => speak(words[index].sentence);
    document.getElementById("clearSentence").onclick = renderSentenceRound;
    document.getElementById("checkSentence").onclick = () => {
      const item = words[index];
      const answer = normalizeSentence(selected.join(" "));
      const target = normalizeSentence(item.sentence);
      const feedback = document.getElementById("feedback");
      if (answer === target) {
        feedback.className = "feedback good show";
        feedback.textContent = `很好！${item.sentence}`;
        speak(item.sentence);
        setTimeout(() => {
          index += 1;
          if (index >= words.length) completeStage(stage.id, words.length, words.length);
          else renderSentenceRound();
        }, 900);
      } else {
        feedback.className = "feedback bad show";
        feedback.textContent = `再調整一次。提示：句子要包含 ${item.word}，而且順序要能讀得通。`;
      }
    };
    renderSentenceRound();
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
    if (currentGrade === 3) return grade3SentenceFor(item, word);
    if (currentGrade === 4) return grade4SentenceFor(item, word);
    if (currentGrade === 5) return grade5SentenceFor(item, word);
    if (currentGrade === 6) return grade6SentenceFor(item, word);
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

  function itemKey(item) {
    return String(item.word || "").toLowerCase();
  }

  function hasWord(set, item) {
    return set.has(itemKey(item));
  }

  function grade3SentenceFor(item, word = "____") {
    const key = String(item.word || "");
    const sentenceWord = grade3SentenceWord(key, word);
    if (key === "family") return `My ${sentenceWord} is here.`;
    if (grade3FamilyPlural.has(key)) return `My ${sentenceWord} are here.`;
    if (isGrade3FamilyWord(key)) return `My ${sentenceWord} is here.`;
    if (grade3Numbers.has(key)) return `I can count to ${sentenceWord}.`;
    if (key === "color") return `What ${sentenceWord} is it?`;
    if (grade3Colors.has(key)) return `The ball is ${sentenceWord}.`;
    if (grade3Feelings.has(key)) return `I feel ${sentenceWord}.`;
    if (grade3FaceParts.has(key) || grade3BodyParts.has(key)) return `This is my ${sentenceWord}.`;
    if (grade3Produce.has(key)) return `I like the ${sentenceWord}.`;
    if (grade3Foods.has(key)) return `I eat ${sentenceWord}.`;
    return `I know the word ${sentenceWord}.`;
  }

  function grade3SentenceWord(key, word) {
    if (word === "____") return word;
    if (key === "hundred") return "one hundred";
    if (key === "thousand") return "one thousand";
    if (key === "parent(s)") return "parents";
    if (key === "relative(s)") return "relatives";
    return word;
  }

  function isGrade3FamilyWord(key) {
    return ["aunt", "brother", "cousin", "daughter", "father", "granddaughter", "grandfather", "grandmother", "grandson", "husband", "mother", "nephew", "niece", "sister", "son", "uncle", "wife"].includes(key);
  }

  function grade4SentenceFor(item, word = "____") {
    const key = itemKey(item);
    if (key === "beer") return `${capitalizeWord(word)} is a drink for adults.`;
    if (key === "pants" || key === "jeans" || key === "shorts" || key === "underwear") return `I wear ${word}.`;
    if (key === "race") return `I run in a ${word}.`;
    if (key === "barbecue") return `We have a ${word}.`;
    if (key === "bowling") return `I go ${word}.`;
    if (key === "picnic") return `We have a ${word}.`;
    if (hasWord(grade4Meals, item)) return `I have ${word} at school.`;
    if (hasWord(grade4Foods, item)) return `I eat ${word} for lunch.`;
    if (hasWord(grade4Drinks, item)) return `I drink ${word}.`;
    if (hasWord(grade4Desserts, item)) return `I want some ${word}.`;
    if (hasWord(grade4Seasonings, item)) return `Please pass the ${word}.`;
    if (hasWord(grade4FoodFeelings, item)) return `I am ${word}.`;
    if (hasWord(grade4Tastes, item)) return `The food is ${word}.`;
    if (hasWord(grade4FoodActions, item)) return `I ${word} with my family.`;
    if (itemKey(item) === "menu") return `I read the ${word}.`;
    if (hasWord(grade4Times, item)) return `I read in the ${word}.`;
    if (hasWord(grade4Days, item)) return `I play on ${word}.`;
    if (hasWord(grade4Months, item)) return `My birthday is in ${word}.`;
    if (hasWord(grade4Seasons, item)) return `I like ${word}.`;
    if (itemKey(item) === "clock" || itemKey(item) === "watch") return `I look at the ${word}.`;
    if (hasWord(grade4Clothes, item)) return `I wear a ${word}.`;
    if (hasWord(grade4Accessories, item)) return `I have a ${word}.`;
    if (hasWord(grade4Sports, item)) return `I play ${word}.`;
    if (hasWord(grade4Activities, item)) return `I like to ${word}.`;
    if (hasWord(grade4HouseRooms, item)) return `I am in the ${word}.`;
    return `I can use the word ${word}.`;
  }

  function grade5SentenceFor(item, word = "____") {
    const key = itemKey(item);
    if (key === "glasses") return `I wear ${word}.`;
    if (hasWord(grade5HouseParts, item)) return `The ${word} is in my house.`;
    if (hasWord(grade5Furniture, item)) return `The ${word} is in my room.`;
    if (hasWord(grade5HomeItems, item)) return `I use the ${word} at home.`;
    if (hasWord(grade5Appliances, item)) return `I turn on the ${word}.`;
    if (hasWord(grade5Tools, item)) return `I need the ${word}.`;
    if (hasWord(grade5HomeActions, item)) return `I can ${word} at home.`;
    if (hasWord(grade5Places, item)) return `I go to the ${word}.`;
    if (hasWord(grade5SchoolItems, item)) return `I use a ${word} in class.`;
    if (hasWord(grade5Subjects, item)) return `I study ${word}.`;
    if (hasWord(grade5People, item)) return `My ${word} is kind.`;
    if (hasWord(grade5Learning, item)) return `I ${word} in class.`;
    if (hasWord(grade5Animals, item)) return `I see a ${word}.`;
    return `I can use the word ${word}.`;
  }

  function grade6SentenceFor(item, word = "____") {
    const key = itemKey(item);
    if (key === "cure") return `Doctors can ${word} illness.`;
    if (key === "death") return `${capitalizeWord(word)} means life ends.`;
    if (key === "health") return `Good ${word} is important.`;
    if (key === "life") return `${capitalizeWord(word)} is precious.`;
    if (key === "medicine") return `Take ${word} when you are sick.`;
    if (key === "airplane (plane)") return `I travel by airplane.`;
    if (key === "ambulance") return `An ${word} helps sick people.`;
    if (key === "bicycle (bike)") return `I ride a bicycle.`;
    if (key === "mrt") return `I take the MRT.`;
    if (key === "railway") return `The train runs on the ${word}.`;
    if (key === "subway") return `I take the ${word}.`;
    if (key === "bridge") return `Cars go across the ${word}.`;
    if (key === "highway") return `Cars drive on the ${word}.`;
    if (hasWord(grade6Insects, item)) return `I see a ${word} outside.`;
    if (hasWord(grade6SeaAnimals, item)) return `A ${word} lives in water.`;
    if (itemKey(item) === "bark") return `Dogs ${word} loudly.`;
    if (itemKey(item) === "bite") return `Dogs may ${word}.`;
    if (itemKey(item) === "swallow") return `Please ${word} the medicine.`;
    if (hasWord(grade6AnimalParts, item)) return `The bird has a ${word}.`;
    if (hasWord(grade6Pronouns, item)) return `${word} is a pronoun.`;
    if (hasWord(grade6Demonstratives, item)) return `Look at ${word}.`;
    if (hasWord(grade6Questions, item)) return `${capitalizeWord(word)} do you ask?`;
    if (hasWord(grade6Countries, item)) return `I want to visit ${word}.`;
    if (hasWord(grade6HealthAdjectives, item)) return `I feel ${word}.`;
    if (hasWord(grade6Illnesses, item)) return `I have a ${word}.`;
    if (hasWord(grade6HealthNouns, item)) return `Health is about ${word}.`;
    if (hasWord(grade6Tableware, item)) return `I use a ${word} at dinner.`;
    if (hasWord(grade6Vehicles, item)) return `I ride a ${word}.`;
    if (hasWord(grade6TrafficPlaces, item)) return `I wait at the ${word}.`;
    return `I can use the word ${word}.`;
  }

  function capitalizeWord(word) {
    const text = String(word || "");
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
  }

  function sentenceMarkup(item) {
    const sentence = sentenceFor(item, item.word);
    const translation = sentenceZhFor(item, sentence);
    return `
      <em>
        ${sentenceVisualMarkup(sentence, item)}
        <span class="sentence-en">${escapeHtml(sentence)}</span>
        <span class="sentence-zh">${escapeHtml(translation)}</span>
      </em>`;
  }

  function sentenceVisualMarkup(sentence, focusItem) {
    const chips = sentenceTokens(sentence).map(token => {
      const visual = tokenVisual(token, focusItem);
      const text = escapeHtml(token);
      return `<span class="sentence-picture-chip">${visual ? `<span class="token-visual">${visual}</span>` : ""}<span>${text}</span></span>`;
    }).join("");
    return `<span class="sentence-picture-line" aria-label="圖像化句子">${chips}</span>`;
  }

  function sentenceZhFor(item, sentence = sentenceFor(item, item.word)) {
    if (item.sentenceZh) return item.sentenceZh;
    if (exactSentenceZh[sentence]) return exactSentenceZh[sentence];
    if (currentGrade === 3) return grade3SentenceZhFor(item);
    if (currentGrade === 4) return grade4SentenceZhFor(item);
    if (currentGrade === 5) return grade5SentenceZhFor(item);
    if (currentGrade === 6) return grade6SentenceZhFor(item);

    const zh = item.zh || item.word;
    if (/^I see a /i.test(sentence)) return `我看到一個${zh}。`;
    if (/^This is my /i.test(sentence)) return `這是我的${zh}。`;
    if (/^My .+ is here\.$/i.test(sentence)) return `我的${zh}在這裡。`;
    if (/^I like /i.test(sentence)) return `我喜歡${zh}。`;
    if (/^I study English on /i.test(sentence)) return `我在${zh}學英文。`;
    if (/^I want to visit the /i.test(sentence)) return `我想參觀${zh}。`;
    if (/^I am /i.test(sentence)) return `我覺得${zh}。`;
    if (/^Today is /i.test(sentence)) return `今天是${zh}。`;
    return `${zh}的例句。`;
  }

  function grade3SentenceZhFor(item) {
    const key = String(item.word || "");
    const zh = cleanZhMeaning(item.zh || item.word);
    if (key === "parent(s)") return "我的父母在這裡。";
    if (key === "relative(s)") return "我的親戚在這裡。";
    if (key === "family") return `我的${zh}在這裡。`;
    if (grade3FamilyPlural.has(key)) return `我的${zh}在這裡。`;
    if (isGrade3FamilyWord(key)) return `我的${zh}在這裡。`;
    if (key === "hundred") return "我可以數到一百。";
    if (key === "thousand") return "我可以數到一千。";
    if (grade3Numbers.has(key)) return `我可以數到${zh}。`;
    if (key === "color") return `它是什麼${zh}？`;
    if (grade3Colors.has(key)) return `球是${zh}。`;
    if (grade3Feelings.has(key)) return `我覺得${zh}。`;
    if (grade3FaceParts.has(key) || grade3BodyParts.has(key)) return `這是我的${zh}。`;
    if (grade3Produce.has(key)) return `我喜歡${zh}。`;
    if (grade3Foods.has(key)) return `我吃${zh}。`;
    return `我認識${zh}這個字。`;
  }

  function grade4SentenceZhFor(item) {
    const key = itemKey(item);
    const zh = cleanZhMeaning(item.zh || item.word);
    if (key === "beer") return `${zh}是大人的飲料。`;
    if (key === "pants" || key === "jeans" || key === "shorts" || key === "underwear") return `我穿${zh}。`;
    if (key === "race") return `我參加${zh}。`;
    if (key === "barbecue") return `我們烤肉。`;
    if (key === "bowling") return `我去打${zh}。`;
    if (key === "picnic") return `我們去${zh}。`;
    if (hasWord(grade4Meals, item)) return `我在學校吃${zh}。`;
    if (hasWord(grade4Foods, item)) return `我午餐吃${zh}。`;
    if (hasWord(grade4Drinks, item)) return `我喝${zh}。`;
    if (hasWord(grade4Desserts, item)) return `我想要一些${zh}。`;
    if (hasWord(grade4Seasonings, item)) return `請把${zh}遞給我。`;
    if (hasWord(grade4FoodFeelings, item)) return `我覺得${zh}。`;
    if (hasWord(grade4Tastes, item)) return `食物是${zh}。`;
    if (hasWord(grade4FoodActions, item)) return `我和家人一起${zh}。`;
    if (itemKey(item) === "menu") return `我看${zh}。`;
    if (hasWord(grade4Times, item)) return `我在${zh}閱讀。`;
    if (hasWord(grade4Days, item)) return `我在${zh}玩。`;
    if (hasWord(grade4Months, item)) return `我的生日在${zh}。`;
    if (hasWord(grade4Seasons, item)) return `我喜歡${zh}。`;
    if (itemKey(item) === "clock" || itemKey(item) === "watch") return `我看${zh}。`;
    if (hasWord(grade4Clothes, item)) return `我穿${zh}。`;
    if (hasWord(grade4Accessories, item)) return `我有一個${zh}。`;
    if (hasWord(grade4Sports, item)) return `我打${zh}。`;
    if (hasWord(grade4Activities, item)) return `我喜歡${zh}。`;
    if (hasWord(grade4HouseRooms, item)) return `我在${zh}裡。`;
    return `我會使用${zh}這個字。`;
  }

  function grade5SentenceZhFor(item) {
    const key = itemKey(item);
    const zh = cleanZhMeaning(item.zh || item.word);
    if (key === "glasses") return `我戴${zh}。`;
    if (hasWord(grade5HouseParts, item)) return `${zh}在我的家裡。`;
    if (hasWord(grade5Furniture, item)) return `${zh}在我的房間裡。`;
    if (hasWord(grade5HomeItems, item)) return `我在家使用${zh}。`;
    if (hasWord(grade5Appliances, item)) return `我打開${zh}。`;
    if (hasWord(grade5Tools, item)) return `我需要${zh}。`;
    if (hasWord(grade5HomeActions, item)) return `我可以在家${zh}。`;
    if (hasWord(grade5Places, item)) return `我去${zh}。`;
    if (hasWord(grade5SchoolItems, item)) return `我在課堂上使用${zh}。`;
    if (hasWord(grade5Subjects, item)) return `我學${zh}。`;
    if (hasWord(grade5People, item)) return `我的${zh}很親切。`;
    if (hasWord(grade5Learning, item)) return `我在課堂上${zh}。`;
    if (hasWord(grade5Animals, item)) return `我看到一隻${zh}。`;
    return `我會使用${zh}這個字。`;
  }

  function grade6SentenceZhFor(item) {
    const key = itemKey(item);
    const zh = cleanZhMeaning(item.zh || item.word);
    if (key === "cure") return `醫生可以治療疾病。`;
    if (key === "death") return `死亡表示生命結束。`;
    if (key === "health") return `健康很重要。`;
    if (key === "life") return `生命很珍貴。`;
    if (key === "medicine") return `生病時要吃藥。`;
    if (key === "airplane (plane)") return `我搭飛機旅行。`;
    if (key === "ambulance") return `救護車幫助生病的人。`;
    if (key === "bicycle (bike)") return `我騎腳踏車。`;
    if (key === "mrt") return `我搭捷運。`;
    if (key === "railway") return `火車在鐵路上行駛。`;
    if (key === "subway") return `我搭地下鐵。`;
    if (key === "bridge") return `車子過橋。`;
    if (key === "highway") return `車子在高速公路上行駛。`;
    if (hasWord(grade6Insects, item)) return `我在外面看到一隻${zh}。`;
    if (hasWord(grade6SeaAnimals, item)) return `${zh}住在水裡。`;
    if (itemKey(item) === "bark") return `狗會大聲${zh}。`;
    if (itemKey(item) === "bite") return `狗可能會${zh}。`;
    if (itemKey(item) === "swallow") return `請${zh}藥。`;
    if (hasWord(grade6AnimalParts, item)) return `鳥有${zh}。`;
    if (hasWord(grade6Pronouns, item)) return `${zh}是代名詞。`;
    if (hasWord(grade6Demonstratives, item)) return `看${zh}。`;
    if (hasWord(grade6Questions, item)) return `你用${zh}來問問題。`;
    if (hasWord(grade6Countries, item)) return `我想參觀${zh}。`;
    if (hasWord(grade6HealthAdjectives, item)) return `我覺得${zh}。`;
    if (hasWord(grade6Illnesses, item)) return `我有${zh}。`;
    if (hasWord(grade6HealthNouns, item)) return `健康和${zh}有關。`;
    if (hasWord(grade6Tableware, item)) return `我晚餐時使用${zh}。`;
    if (hasWord(grade6Vehicles, item)) return `我搭乘${zh}。`;
    if (hasWord(grade6TrafficPlaces, item)) return `我在${zh}等待。`;
    return `我會使用${zh}這個字。`;
  }

  function cleanZhMeaning(value = "") {
    return String(value).replace(/[()（）]/g, "");
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

  function sentenceTokens(sentence) {
    return String(sentence).replace(/[.?!。！？]+$/g, "").split(/\s+/).filter(Boolean);
  }

  function normalizeSentence(sentence) {
    return String(sentence).replace(/[.?!。！？]+$/g, "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function spellingKey(word) {
    return String(word).replace(/[^A-Za-z]/g, "");
  }

  function visualKey(value = "") {
    return spellingKey(value).toLowerCase();
  }

  function visualForWord(word = "", zh = "", fallback = "") {
    const key = visualKey(word);
    return exactWordVisuals[key] || fallback || iconFor(word, zh);
  }

  function visualMarkup(item) {
    if (item.image) {
      return `<strong class="word-visual has-image"><img class="word-picture" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.word)}"></strong>`;
    }
    return `<strong class="word-visual">${escapeHtml(item.icon || visualForWord(item.word, item.zh))}</strong>`;
  }

  function tokenVisual(token, focusItem) {
    const key = visualKey(token);
    if (!key) return "";
    if (key === visualKey(focusItem.word)) {
      if (focusItem.image) return visualMarkup(focusItem);
      return escapeHtml(focusItem.icon || visualForWord(focusItem.word, focusItem.zh));
    }
    return escapeHtml(exactWordVisuals[key] || grammarVisuals[key] || "");
  }

  function escapeRegex(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function iconFor(word = "", zh = "") {
    const exact = exactWordVisuals[visualKey(word)];
    if (exact) return exact;
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
    currentView = "report";
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
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      showSpeechNotice("這台瀏覽器目前不能朗讀。請改用 Chrome 或 Edge，並安裝 English / en-US 語音。");
      return false;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = text.length === 1 ? .75 : .82;
    const usVoice = englishVoice();
    if (usVoice) utterance.voice = usVoice;
    utterance.onerror = () => showSpeechNotice("朗讀沒有成功。請檢查電腦音量，或到 Windows 語音設定安裝 English / en-US 語音包。");
    window.speechSynthesis.speak(utterance);
    return true;
  }

  function showSpeechNotice(message) {
    const feedback = document.getElementById("feedback");
    if (feedback) {
      feedback.className = "feedback bad show";
      feedback.textContent = message;
    }
    const status = document.getElementById("speechStatus");
    if (status) {
      status.className = "speech-status warn";
      status.textContent = message;
    }
  }

  function englishVoice() {
    if (!("speechSynthesis" in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    return voices.find(voice => voice.localService && /en-US/i.test(voice.lang))
      || voices.find(voice => voice.localService && /^en/i.test(voice.lang))
      || voices.find(voice => /en-US/i.test(voice.lang))
      || voices.find(voice => /^en/i.test(voice.lang))
      || null;
  }

  function speechStatusText() {
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      return "發音狀態：此瀏覽器不支援語音朗讀，仍可離線練習看字、讀句、拼寫與組句。";
    }
    const voices = window.speechSynthesis.getVoices();
    const voice = englishVoice();
    if (!voices.length) return "發音狀態：支援語音朗讀，英文語音正在載入。若沒有聲音，請重新整理或安裝英文語音包。";
    if (voice?.localService) return `發音狀態：本機英文語音可用，可離線朗讀。使用語音：${voice.name}`;
    if (voice) return `發音狀態：英文語音可用。若要完全離線，請在裝置上安裝英文語音包。使用語音：${voice.name}`;
    return "發音狀態：未找到英文語音。請在 Windows、iPad、Chromebook 或手機系統中安裝 English / en-US 語音包。";
  }

  function speechStatusClass() {
    const voice = englishVoice();
    if (voice?.localService) return "good";
    if (voice) return "info";
    return "warn";
  }

  function offlineStatusText() {
    if (!("serviceWorker" in navigator) || !("caches" in window)) {
      return "離線快取狀態：此瀏覽器不支援離線快取。可在線上使用，或改用 Chrome、Edge、Safari 等支援瀏覽器。";
    }
    return "離線快取狀態：支援離線快取。GitHub Pages 版首次載入後，會保存課程檔案供同一載具離線開啟。";
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

  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      if (currentView === "home") renderHome();
    };
  }

  window.LEO_DEBUG = {
    sentenceFor: (grade, item, word = item.word) => {
      const previousGrade = currentGrade;
      currentGrade = Number(grade);
      const sentence = sentenceFor(item, word);
      currentGrade = previousGrade;
      return sentence;
    },
    sentenceZhFor: (grade, item) => {
      const previousGrade = currentGrade;
      currentGrade = Number(grade);
      const sentence = sentenceFor(item, item.word);
      const translation = sentenceZhFor(item, sentence);
      currentGrade = previousGrade;
      return translation;
    },
    vocabFor: grade => vocabFor(Number(grade))
  };

  renderHome();
})();
