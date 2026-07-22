/* ============================================
   Teachers' Day Celebration — Premium JavaScript
   GPU-Accelerated Animations, Games & Interactions
   ============================================ */

// ===== Teacher Data (ABCD Multiple Choice) =====
const teachers = [
    { name: "Cikgu RIZAN", color: "#E91E63", question: "Kata hubung terbahagi kepada berapa jenis?", options: ["A. 2 jenis", "B. 3 jenis", "C. 4 jenis", "D. 5 jenis"], answer: "B", url: "teacher/cikgu-rizan.html", lang: "malay", subject: "Bahasa Melayu", icon: "🌹" },
    { name: "詹晋沣老师", color: "#2196F3", question: "真空中的光速大约是多少 m/s？", options: ["A. 3×10⁶ m/s", "B. 3×10⁸ m/s", "C. 3×10¹⁰ m/s", "D. 3×10⁴ m/s"], answer: "B", url: "teacher/zhan-jinfeng.html", lang: "chinese", subject: "Physics", icon: "⚛️" },
    { name: "林淑娟老师", color: "#F44336", question: "π 的近似值约等于多少？", options: ["A. 3.12", "B. 3.14", "C. 3.16", "D. 3.18"], answer: "B", url: "teacher/lin-shujuan.html", lang: "chinese", subject: "Mathematics", icon: "📐" },
    { name: "Mrs. Vatsala", color: "#000000", question: "How many letters are there in the English alphabet?", options: ["A. 24", "B. 25", "C. 26", "D. 27"], answer: "C", url: "teacher/mrs-vatsala.html", lang: "english", subject: "English", icon: "📖" },
    { name: "黄荣富老师", color: "#FF9800", question: "10² 等于多少？", options: ["A. 10", "B. 20", "C. 50", "D. 100"], answer: "D", url: "teacher/huang-rongfu.html", lang: "chinese", subject: "数学", icon: "🔢" },
    { name: "林素铭老师", color: "#00A0E9", question: "马来西亚于哪一年独立？", options: ["A. 1955", "B. 1956", "C. 1957", "D. 1958"], answer: "C", url: "teacher/lin-suming.html", lang: "chinese", subject: "历史", icon: "🏛️" },
    { name: "许雍敏老师", color: "#C8A2FF", question: "光的三原色共有几种？", options: ["A. 2种", "B. 3种", "C. 4种", "D. 5种"], answer: "B", url: "teacher/teacher-linda.html", lang: "chinese", subject: "美术", icon: "🎨" },
    { name: "蔡礼懃老师", color: "#D946EF", question: "联合国第11个可持续发展目标是什么？", options: ["A. 气候行动", "B. 水下生物", "C. 负责任消费和生产", "D. 可持续城市和社区"], answer: "D", url: "teacher/cai-liken.html", lang: "chinese", subject: "机器人", icon: "🤖" },
    { name: "林家祺老师", color: "#1a1a1a", question: "联合国第12个可持续发展目标是什么？", options: ["A. 负责任消费和生产", "B. 负责任消费和生产", "C. 负责任消费和生产", "D. 和平正义与强大机构"], answer: "C", url: "teacher/lin-jiaqi.html", lang: "chinese", subject: "机器人", icon: "🤖" },
    { name: "Mrs. Pavithra", color: "#009688", question: "What is the past tense of 'write'?", options: ["A. writed", "B. wrote", "C. written", "D. writing"], answer: "B", url: "teacher/mrs-pavithra.html", lang: "english", subject: "English", icon: "✍️" },
    { name: "张佳玲老师", color: "#EC4899", question: "Komputer memerlukan apa untuk berfungsi?", options: ["A. internet", "B. kuasa", "C. software", "D. monitor"], answer: "B", url: "teacher/zhang-jialing.html", lang: "malay", subject: "国文&电脑", icon: "💻" },
    { name: "黄慧婷老师", color: "#06B6D4", question: "汉字有多少个基本笔画？", options: ["A. 6个", "B. 7个", "C. 8个", "D. 9个"], answer: "C", url: "teacher/huang-huiting.html", lang: "chinese", subject: "Chinese", icon: "笔" },
    { name: "婧雯老师", color: "#9C27B0", question: "课业辅导的主要目的是什么？", options: ["A. 增加学生负担", "B. 帮助学生提高学业成绩", "C. 让学生多做题", "D. 延长上课时间"], answer: "B", url: "teacher/jing-wen.html", lang: "chinese", subject: "Tuition", icon: "📝" },
    { name: "孙庆龄老师", color: "#2196F3", question: "课业辅导对学生有什么帮助？", options: ["A. 让学生更累", "B. 减少课堂作业", "C. 增加课外活动", "D. 提高学习能力和成绩"], answer: "D", url: "teacher/sun-qingling.html", lang: "chinese", subject: "Tuition", icon: "🎯" },
    { name: "Mrs. Subatra", color: "#F44336", question: "What is the past tense of 'go'?", options: ["A. goed", "B. gone", "C. went", "D. going"], answer: "C", url: "teacher/mrs-subatra.html", lang: "english", subject: "English", icon: "🗣️" },
    { name: "崔家琪老师", color: "#2196F3", question: "生物学主要研究什么？", options: ["A. 岩石和矿物", "B. 生命现象和生物活动规律", "C. 天体和宇宙", "D. 社会和文化"], answer: "B", url: "teacher/cui-jiaqi.html", lang: "chinese", subject: "Biology", icon: "🧬" },
    { name: "尤雪慧老师", color: "#2196F3", question: "电脑的基本组成部分有哪些？", options: ["A. 显示器和键盘", "B. CPU和内存", "C. 硬件和软件", "D. 鼠标和主机"], answer: "C", url: "teacher/you-xuehui.html", lang: "chinese", subject: "ICT", icon: "🖥️" },
    { name: "洪星宇老师", color: "#808080", question: "汉字有多少个基本笔画？", options: ["A. 4个", "B. 6个", "C. 8个", "D. 12个"], answer: "C", url: "teacher/hong-xingyu.html", lang: "chinese", subject: "Chinese", icon: "📖" },
    { name: "符丽娜老师", color: "#FFFFFF", question: "华文学习的重要性是什么？", options: ["A. 传承中华文化", "B. 增加考试压力", "C. 浪费时间", "D. 只是多一门语言"], answer: "A", url: "teacher/fu-lina.html", lang: "chinese", subject: "Chinese", icon: "书法" },
    { name: "林亚鸾老师", color: "#FF8C00", question: "经济学研究的核心是什么？", options: ["A. 市场营销", "B. 资源分配", "C. 消费者心理", "D. 政府政策"], answer: "B", url: "teacher/lin-yalian.html", lang: "chinese", subject: "Economics", icon: "📊" },
    { name: "黄爱玲老师", color: "#BA68C8", question: "班长带是什么颜色的？", options: ["A. 红色", "B. 蓝色", "C. 紫色", "D. 绿色"], answer: "C", url: "teacher/huang-ailing.html", lang: "chinese", subject: "训育处", icon: "🎗️" },
    { name: "杜静颖老师", color: "#9B59B6", question: "学长带是什么颜色的？", options: ["A. 蓝色/红色", "B. 绿色/黄色", "C. 紫色/粉色", "D. 橙色/黑色"], answer: "A", url: "teacher/du-jingying.html", lang: "chinese", subject: "训育处", icon: "🎖️" },
    { name: "罗凯欣老师", color: "#FFC107", question: "华文老师上课最喜欢穿什么颜色的衣服？", options: ["A. 红色", "B. 黄色", "C. 白色", "D. 蓝色"], answer: "B", url: "teacher/luo-kaixin.html", lang: "chinese", subject: "Chinese", icon: "👗" },
    { name: "朱彦翰老师", color: "#757575", question: "中华人民共和国是哪一年成立的？", options: ["A. 1945年", "B. 1946年", "C. 1948年", "D. 1949年"], answer: "D", url: "teacher/zhu-yanhan.html", lang: "chinese", subject: "历史", icon: "📜" },
    { name: "罗贤惟老师", color: "#D32F2F", question: "下列哪项属于体育运动项目？", options: ["A. 篮球", "B. 围棋", "C. 绘画", "D. 书法"], answer: "A", url: "teacher/luo-xianwei.html", lang: "chinese", subject: "体育", icon: "⚽" },
    { name: "Cikgu Nabilah", color: "#D32F2F", question: "Perjanjian Malayan Union ditandatangani pada tahun berapa?", options: ["A. 1944", "B. 1945", "C. 1946", "D. 1947"], answer: "C", url: "teacher/cikgu-nabilah.html", lang: "malay", subject: "Bahasa Malaysia", icon: "📚" }
];

// ===== Answer check (letter comparison for MCQ) =====
function checkAnswer(selected, correct) {
    return selected.toUpperCase() === correct.toUpperCase();
}

// ===== Global State =====
let currentLang = localStorage.getItem('td_lang') || 'chinese';
let envelopeInterval = null;
let isLowPerfDevice = false;
let isMobileDevice = false;

// ===== I18n Translations =====
const translations = {
    chinese: {
        welcome_title: "教师节快乐",
        welcome_subtitle: "致我们敬爱的教育者们",
        welcome_btn: "🎉 开始庆祝 Celebrate 🎉",
        games_title: "🎮 庆祝活动 Activities",
        game_envelope_name: "💌 抽祝福",
        game_envelope_desc: "点击信封，收获教师节祝福",
        game_guess_name: "🧠 猜老师 20问",
        game_guess_desc: "系统想一位老师，你来猜！最多20个问题",
        game_diy_name: "🎨 DIY教师节卡片",
        game_diy_desc: "选择背景、贴纸、颜色，设计专属卡片",
        instruction_malay: "Klik pada nama guru yang sedang bercahaya...",
        instruction_english: "Click on the glowing teacher's name...",
        instruction_chinese: "点击发光的老师名字，进入他们的教师节专属网页。",
        teacher_list_text: "教师列表",
        guess_remaining: "剩余问题",
        guess_correct: "恭喜！那就是【%s】！",
        guess_wrong: "不是哦，继续猜吧！",
        guess_play_again: "再来一次",
        diy_title: "DIY 教师节卡片",
        diy_bg_label: "背景:",
        diy_color_label: "文字:",
        diy_sticker_label: "贴纸:",
        diy_msg_label: "留言:",
        diy_add_sticker_label: "添加贴纸:",
        diy_placeholder: "写下你的祝福...",
        diy_download: "📥 下载卡片",
        diy_add_sticker: "+ 添加",
        diy_sticker_bg_label: "贴纸背景:",
        envelope_thanks: "谢谢 Terima Kasih 🙏",
        envelope_greeting: "💌",
        title_malay: "Selamat Hari Guru",
        title_chinese: "教师节快乐",
        title_english: "Happy Teachers' Day",
    },
    malay: {
        welcome_title: "Selamat Hari Guru",
        welcome_subtitle: "Hormat kami kepada pendidik tersayang",
        welcome_btn: "🎉 Mulakan Perayaan 🎉",
        games_title: "🎮 Aktiviti Perayaan",
        game_envelope_name: "💌 Cabut Doa",
        game_envelope_desc: "Klik sampul untuk doa Hari Guru",
        game_guess_name: "🧠 Tebak Guru 20 Soalan",
        game_guess_desc: "Sistem fikir guru, anda tebak! Maksimum 20 soalan",
        game_diy_name: "🎨 Kad DIY Hari Guru",
        game_diy_desc: "Pilih latar, pelekat, warna, reka kad sendiri",
        instruction_malay: "Klik nama guru yang bercahaya untuk masuk ke laman khas.",
        instruction_english: "Click the glowing teacher's name to enter their page.",
        instruction_chinese: "点击发光的老师名字，进入专属页面。",
        teacher_list_text: "Senarai Guru",
        guess_remaining: "Soalan baki",
        guess_correct: "Tahniah! Itu 【%s】！",
        guess_wrong: "Salah, cuba lagi!",
        guess_play_again: "Cuba Lagi",
        diy_title: "DIY Kad Hari Guru",
        diy_bg_label: "Latar:",
        diy_color_label: "Teks:",
        diy_sticker_label: "Pelekat:",
        diy_msg_label: "Mesej:",
        diy_add_sticker_label: "Tambah pelekat:",
        diy_placeholder: "Tulis doa anda...",
        diy_download: "📥 Muat Turun Kad",
        diy_add_sticker: "+ Tambah",
        diy_sticker_bg_label: "Latar Pelekat:",
        envelope_thanks: "Terima Kasih 🙏",
        envelope_greeting: "💌",
        title_malay: "Selamat Hari Guru",
        title_chinese: "教师节快乐",
        title_english: "Happy Teachers' Day",
    },
    english: {
        welcome_title: "Happy Teachers' Day",
        welcome_subtitle: "A heartfelt tribute to our beloved educators",
        welcome_btn: "🎉 Start Celebrating 🎉",
        games_title: "🎮 Celebration Activities",
        game_envelope_name: "💌 Draw Blessing",
        game_envelope_desc: "Click an envelope to receive a Teacher's Day blessing",
        game_guess_name: "🧠 Guess Teacher 20Q",
        game_guess_desc: "I'm thinking of a teacher. Guess who! Max 20 questions",
        game_diy_name: "🎨 DIY Teacher Card",
        game_diy_desc: "Choose background, stickers, colors, design your own card",
        instruction_malay: "Klik nama guru yang bercahaya untuk masuk ke laman khas.",
        instruction_english: "Click on the glowing teacher's name to enter their personal Teachers' Day website.",
        instruction_chinese: "点击发光的老师名字，进入他们的教师节专属网页。",
        teacher_list_text: "Teacher List",
        guess_remaining: "Remaining questions",
        guess_correct: "Congratulations! It's 【%s】!",
        guess_wrong: "Not quite, try again!",
        guess_play_again: "Play Again",
        diy_title: "DIY Teacher's Day Card",
        diy_bg_label: "Background:",
        diy_color_label: "Text:",
        diy_sticker_label: "Sticker:",
        diy_msg_label: "Message:",
        diy_add_sticker_label: "Add sticker:",
        diy_placeholder: "Write your blessing...",
        diy_download: "📥 Download Card",
        diy_add_sticker: "+ Add",
        diy_sticker_bg_label: "Sticker BG:",
        envelope_thanks: "Thank You 🙏",
        envelope_greeting: "💌",
        title_malay: "Selamat Hari Guru",
        title_chinese: "教师节快乐",
        title_english: "Happy Teachers' Day",
    }
};

// ===== Blessings for Envelope Game (60 total, 20 each language) =====
const blessings = {
    chinese: [
        "老师，您是我们人生路上的明灯，感谢您一直以来的教诲和关怀！",
        "三尺讲台育桃李，一支粉笔写春秋。老师，您辛苦了！",
        "没有您当初的耐心教导，就没有我今天的成长。谢谢您！",
        "您是园丁，用心血浇灌花朵；您是蜡烛，用生命照亮前程。",
        "敬爱的老师，感谢您包容我们的顽皮，用智慧点亮我们的未来！",
        "您的每一句鼓励，都成为我前进的动力。谢谢您，老师！",
        "春蚕到死丝方尽，蜡炬成灰泪始干。您的奉献精神，永记心中！",
        "老师，您不仅是知识的传授者，更是人生的引路人。",
        "一支粉笔两袖清风，三尺讲台四季晴雨。祝您教师节快乐！",
        "感谢您在茫茫学海中为我们点亮方向的灯塔！",
        "您的笑容是最温暖的阳光，照亮了我们的校园生活。",
        "老师，您教会我们知识，更教会我们做人的道理。",
        "岁月染白了您的双鬓，却永远改变不了您对我们的爱。",
        "教诲如春风，师恩深似海。感谢您，敬爱的老师！",
        "您不是演员，却吸引着我们饥渴的目光；您不是歌唱家，却让知识的清泉叮咚作响。",
        "感恩有您，在我最懵懂的时候点亮我前行的路！",
        "老师，您是天空中最亮的那颗星，指引着方向。",
        "三尺讲台，三寸舌，三寸笔，三千桃李。十年树木，十载风，十载雨，十万栋梁。",
        "亲爱的老师，愿您的每一天都像今天一样充满喜悦！",
        "老师，您付出的每一份心血，我们都铭记在心！"
    ],
    malay: [
        "Guru, anda adalah pelita dalam kehidupan kami. Terima kasih atas bimbingan dan perhatian anda!",
        "Di pentas kecil anda mencurahkan ilmu, di kapur putih anda menulis masa depan. Terima kasih Cikgu!",
        "Tanpa kesabaran anda mengajar kami, saya tidak akan berjaya hari ini. Terima kasih!",
        "Anda tukang taman yang menyuburkan bunga dengan air mata keringat.",
        "Cikgu tersayang, terima kasih kerana menerima kerenah kami dan membimbing kami dengan ilmu.",
        "Setiap kata semangat dari cikgu menjadi kekuatan kepada saya. Terima kasih!",
        "Burung bangau tidak kenal penat terbang mencari makanan. Begitulah cikgu mendidik kami.",
        "Cikgu bukan sahaja mengajar ilmu tetapi juga membentuk sahsihat diri kami.",
        "Capit kulit menulis ilmu, tiga kaki pentas memanen bintang. Selamat Hari Guru!",
        "Terima kasih Cikgu kerana menjadi mercun cahaya dalam lautan ilmu!",
        "Senyuman cikgu adalah sinar paling hangat di sekolah kami.",
        "Guru, anda mengajar kami ilmu dan juga pelajaran hidup yang bermakna.",
        "Masa berubah memutihkan rambut anda, tetapi tidak mengubah kasih sayang anda kepada kami.",
        "Didikan bagai angin sepoi-sepoi bahasa, cinta guru bagai lautan yang dalam.",
        "Anda bukan pelakon namun menarik perhatian kami; anda bukan penyanyi namun membuatkan ilmu berbunyi.",
        "Terima kasih kerana menerangi jalan hidup kami ketika kami masih bodoh!",
        "Cikgu, anda seperti bintang paling terang di langit yang menunjukkan arah.",
        "Tiga kaki pentas, tiga inci lidah, tiga inci berus, tiga ribu pekebun bunga.",
        "Cikgu sayang, semoga setiap hari anda penuh kegembiraan seperti hari ini!",
        "Cikgu, setiap titik peluh yang cikgu titiskan, kami ingat sampai bila-bila!"
    ],
    english: [
        "Teacher, you are the lighthouse of our lives. Thank you for your guidance and care!",
        "On a small stage you poured knowledge, on white chalk you wrote our futures.",
        "Without your patient teaching, I would not be who I am today. Thank you!",
        "You are the gardener who nourishes flowers with sweat and dedication.",
        "Dear teacher, thank you for accepting our mischief and guiding us with wisdom.",
        "Every word of encouragement from you became my strength. Thank you!",
        "Like a migratory bird flying tirelessly, so do you educate us without rest.",
        "Teachers don't just teach knowledge but also shape our character.",
        "Chalk writes knowledge, three-foot stage harvests stars. Happy Teachers' Day!",
        "Thank you for being the beacon of light in the ocean of learning!",
        "Your smile is the warmest sunshine on our campus.",
        "Teacher, you taught us knowledge and also life lessons that matter.",
        "Time whitened your hair, but never changed your love for us.",
        "Guidance like spring breeze, teacher's grace as deep as the sea.",
        "You may not be an actor, yet you captivated our hungry eyes.",
        "Thank you for lighting our path when we were most lost!",
        "Teacher, you are the brightest star in our sky guiding the way.",
        "Three-foot stage, three-inch tongue, three-inch brush, three thousand students.",
        "Dear teacher, may every day of yours be as joyful as this one!",
        "Teacher, every drop of effort you give, we will remember forever!"
    ]
};

// ===== 20 Questions: Predefined Q&A for each teacher =====
function getGuessQuestionsForTeacher(teacher) {
    const allQuestions = [
        { q: "Is this teacher Chinese?", fn: t => t.lang === 'chinese' },
        { q: "Is this teacher a Malay teacher?", fn: t => t.lang === 'malay' },
        { q: "Is this teacher an English teacher?", fn: t => t.lang === 'english' },
        { q: "Does the teacher's name start with a letter?", fn: t => /^[A-Z]/.test(t.name) },
        { q: "Does the teacher teach a science subject?", fn: t => ['Physics','Biology','Science'].includes(t.subject) },
        { q: "Does the teacher teach a language subject?", fn: t => ['Bahasa Melayu','English','Chinese','Sejarah'].includes(t.subject) },
        { q: "Does the teacher teach Mathematics or Economics?", fn: t => ['Mathematics','Economics','Accounting'].includes(t.subject) },
        { q: "Does the teacher have 'Mrs.' in their name?", fn: t => t.name.startsWith('Mrs.') },
        { q: "Does the teacher have 'Cikgu' in their name?", fn: t => t.name.startsWith('Cikgu') },
        { q: "Does the teacher's name contain Chinese characters?", fn: t => /[一-龥]/.test(t.name) },
        { q: "Is the teacher associated with ICT?", fn: t => ['ICT'].includes(t.subject) },
        { q: "Does the teacher teach History or Civics?", fn: t => ['Sejarah','Civics'].includes(t.subject) },
        { q: "Is the teacher's primary color red/pink?", fn: t => ['#E91E63','#F44336','#D32F2F','#C8A2FF','#EC4899','#BA68C8','#9B59B6'].includes(t.color) },
        { q: "Is the teacher's primary color blue?", fn: t => ['#2196F3','#009688','#00A0E9'].includes(t.color) },
        { q: "Is the teacher's primary color green?", fn: t => ['#808080','#FF8C00','#FF9800','#FFC107','#D946EF'].includes(t.color) },
        { q: "Does the teacher teach after school/tuition?", fn: t => ['Tuition'].includes(t.subject) },
        { q: "Was this teacher added recently to the list?", fn: t => ['zhu-yanhan','luo-xianwei','cikgu-nabilah'].some(f => teacher.url.includes(f)) },
        { q: "Is the teacher known for their vibrant personality?", fn: t => ['Art','Sports'].includes(t.subject) },
        { q: "Does the teacher help with student development?", fn: t => ['Class A','Class B'].includes(t.subject) },
        { q: "Would you describe this teacher as dedicated and passionate?", fn: t => true }
    ];
    return allQuestions.map((q, i) => ({ index: i, text: q.q, isCorrect: q.fn(teacher) }));
}

// ===== Device Detection =====
function detectDevice() {
    const w = window.innerWidth;
    isMobileDevice = w <= 768;
    if (isMobileDevice) document.body.classList.add('mobile');
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    if (/Mobi|Android/i.test(ua)) {
        document.body.classList.add('touch-device');
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
            isLowPerfDevice = true;
            document.body.classList.add('touch-degraded');
        }
    }
}

// ===== Particle Count by Device (Ultra-reduced on mobile) =====
function getParticleCount(desktop, tablet, mobile, ultraMobile) {
    const w = window.innerWidth;
    if (w <= 420) return ultraMobile;
    if (w <= 768) return mobile;
    if (w <= 1024) return tablet;
    return desktop;
}

// ===== Pause animations when page is not visible =====
document.addEventListener('visibilitychange', () => {
    document.body.classList.toggle('paused', document.hidden);
});

// ===== Apply Current Language =====
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('td_lang', lang);
    const t = translations[lang] || translations.chinese;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    document.documentElement.lang = lang === 'chinese' ? 'zh' : lang === 'malay' ? 'ms' : 'en';

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Show/hide title lines based on language
    document.querySelectorAll('.title-malay,.title-chinese,.title-english').forEach(el => {
        el.style.opacity = el.classList.contains('title-' + lang) ? '1' : '0';
        el.style.height = el.classList.contains('title-' + lang) ? '' : '0';
        el.style.overflow = el.classList.contains('title-' + lang) ? '' : 'hidden';
    });

    // Apply sticker bg label
    const stickerBgLabel = document.getElementById('diyStickerBgLabel');
    if (stickerBgLabel && t.diy_sticker_bg_label) {
        stickerBgLabel.textContent = t.diy_sticker_bg_label;
    }
    const greetingLabel = document.getElementById('diyGreetingLabel');
    if (greetingLabel) {
        greetingLabel.textContent = lang === 'chinese' ? '问候语:' : lang === 'malay' ? 'Salam:' : 'Greeting:';
    }
}

// ===== Welcome Overlay =====
function initWelcomeOverlay() {
    const overlay = document.getElementById('welcomeOverlay');
    const btn = document.getElementById('welcomeEnterBtn');
    if (!overlay) return;

    const container = document.getElementById('welcomeHearts');
    if (container) {
        const heartEmojis = ['❤','💛','💚','💜','💙','🧡','💗','💖'];
        for (let i = 0; i < 20; i++) {
            const h = document.createElement('span');
            h.className = 'welcome-heart';
            h.textContent = heartEmojis[i % heartEmojis.length];
            h.style.left = Math.random() * 100 + '%';
            h.style.animationDelay = Math.random() * 6 + 's';
            h.style.animationDuration = (4 + Math.random() * 4) + 's';
            container.appendChild(h);
        }
    }

    btn.addEventListener('click', () => {
        overlay.classList.add('hidden');
        launchConfetti(30);
        startEnvelopeRain();
    });
}

// ===== Language Toggle =====
function initLanguageToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            applyLanguage(btn.dataset.lang);
        });
    });
}

// ===== Envelope Rain =====
function startEnvelopeRain() {
    const container = document.getElementById('envelopeRainContainer');
    if (!container) return;
    stopEnvelopeRain();

    const count = isMobileDevice ? 4 : 8;
    const envelopeIcons = ['💌','📨','📩','✉️'];

    envelopeInterval = setInterval(() => {
        if (container.children.length >= count) return;
        const env = document.createElement('div');
        env.className = 'falling-envelope';
        env.textContent = envelopeIcons[Math.floor(Math.random() * envelopeIcons.length)];
        env.style.left = Math.random() * 90 + 5 + '%';
        env.style.setProperty('--rot-start', (-20 + Math.random()*40) + 'deg');
        env.style.setProperty('--rot-end', (-30 + Math.random()*60) + 'deg');
        const duration = 5 + Math.random() * 5;
        env.style.animationDuration = duration + 's';

        env.addEventListener('click', function(e) {
            e.stopPropagation();
            openEnvelope(this);
        });

        container.appendChild(env);
        setTimeout(() => { if (env.parentNode) env.remove(); }, duration * 1000 + 500);
    }, isMobileDevice ? 3000 : 1800);
}

function stopEnvelopeRain() {
    if (envelopeInterval) { clearInterval(envelopeInterval); envelopeInterval = null; }
}

function openEnvelope(element) {
    const langKeys = blessings[currentLang] || blessings.chinese;
    const blessing = langKeys[Math.floor(Math.random() * langKeys.length)];
    const t = translations[currentLang] || translations.chinese;

    const modal = document.getElementById('envelopeModal');
    const greeting = document.getElementById('envelopeGreeting');
    const blessingEl = document.getElementById('envelopeBlessing');
    const closeBtn = document.getElementById('envelopeCloseBtn');

    greeting.textContent = t.envelope_greeting + ' ' + (currentLang === 'chinese' ? '教师节快乐!' : currentLang === 'malay' ? 'Hari Guru!' : "Happy Teachers' Day!");
    blessingEl.textContent = blessing;
    modal.classList.add('open');
    closeBtn.textContent = t.envelope_thanks;

    if (element && element.parentNode) element.remove();
    launchConfetti(15);
}

document.getElementById('envelopeCloseBtn')?.addEventListener('click', () => {
    document.getElementById('envelopeModal').classList.remove('open');
});

// ===== 20 Questions Game — FIXED: Random reveal with fireworks =====
let guessState = { teacher: null, questions: [], answered: [], count: 20 };

function startGuessGame() {
    // Pick a RANDOM teacher (not trying to guess)
    const t = teachers[Math.floor(Math.random() * teachers.length)];
    guessState = { teacher: t, questions: getGuessQuestionsForTeacher(t), answered: [], count: 20 };
    showNextGuessQuestion();
    document.getElementById('guessModal').classList.add('open');
    launchConfetti(10);
}

function showNextGuessQuestion() {
    const available = guessState.questions.filter((_, i) => !guessState.answered.includes(i));
    if (available.length === 0 || guessState.count <= 0) {
        showGuessResult(guessState.teacher.name);
        return;
    }
    const q = available[Math.floor(Math.random() * available.length)];
    const idx = guessState.questions.indexOf(q);
    guessState.answered.push(idx);
    guessState.count--;

    const countdown = document.getElementById('guessCountdown');
    const label = document.getElementById('guessLabel');
    const question = document.getElementById('guessQuestion');
    const options = document.getElementById('guessOptions');
    const resultArea = document.getElementById('guessResultArea');

    const t = translations[currentLang] || translations.chinese;
    countdown.textContent = guessState.count;
    label.textContent = t.guess_remaining + ': ' + guessState.count;
    question.textContent = q.text;
    options.innerHTML = '';
    resultArea.innerHTML = '';

    // Yes/No buttons
    ['Yes', 'No'].forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'guess-option-btn';
        btn.textContent = choice;
        btn.addEventListener('click', () => {
            showNextGuessQuestion();
        });
        options.appendChild(btn);
    });
}

function showGuessResult(teacherName) {
    const t = translations[currentLang] || translations.chinese;
    const question = document.getElementById('guessQuestion');
    const options = document.getElementById('guessOptions');
    const resultArea = document.getElementById('guessResultArea');

    options.innerHTML = '';
    resultArea.innerHTML = '';

    // Big reveal with fireworks!
    question.textContent = t.guess_correct.replace('%s', teacherName);

    const div = document.createElement('div');
    div.className = 'guess-result correct';
    div.innerHTML = '🎉🎆🎇';
    question.parentNode.insertBefore(div, resultArea);

    // Fireworks confetti burst
    setTimeout(() => launchConfetti(50), 0);
    setTimeout(() => launchConfetti(30), 500);
    setTimeout(() => launchConfetti(20), 1000);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'guess-next-btn';
    nextBtn.textContent = t.guess_play_again;
    nextBtn.addEventListener('click', () => {
        document.getElementById('guessModal').classList.remove('open');
        startGuessGame();
    });
    resultArea.appendChild(nextBtn);
}

// ===== DIY Card Designer — Enhanced with more colors & drag =====
let diyState = { bg: 'gold', color: '#1a1a2e', sticker: '🌹', msg: '', stickers: [{ emoji: '🌹', x: 50, y: 15 }], greeting: 'chinese', stickerBgDark: false };
const diyBgs = {
    gold: 'linear-gradient(135deg, #FFF8DC, #FFEFD5, #FFD700)',
    pink: 'linear-gradient(135deg, #FFE4E1, #FFC0CB, #FF69B4)',
    blue: 'linear-gradient(135deg, #E0F7FA, #B3E5FC, #29B6F6)',
    green: 'linear-gradient(135deg, #E8F5E9, #C8E6C9, #66BB6A)',
    purple: 'linear-gradient(135deg, #F3E5F5, #E1BEE7, #9C27B0)',
    orange: 'linear-gradient(135deg, #FFF3E0, #FFE0B2, #FF9800)',
    red: 'linear-gradient(135deg, #FFEBEE, #FFCDD2, #E53935)',
    cyan: 'linear-gradient(135deg, #E0F7FA, #B2EBF2, #00BCD4)',
    mint: 'linear-gradient(135deg, #E8F5E9, #C8E6C9, #4CAF50)',
    lavender: 'linear-gradient(135deg, #EDE7F6, #D1C4E9, #673AB7)',
    peach: 'linear-gradient(135deg, #FFF3E0, #FFE0B2, #FFAB91)',
    sky: 'linear-gradient(135deg, #E3F2FD, #BBDEFB, #2196F3)',
    coral: 'linear-gradient(135deg, #FBE9E7, #FFCCBC, #FF5722)',
    lemon: 'linear-gradient(135deg, #FFFDE7, #FFF9C4, #FFEB3B)',
    rose: 'linear-gradient(135deg, #FCE4EC, #F8BBD0, #E91E63)',
    sunset: 'linear-gradient(135deg, #FFF8E1, #FFE0B2, #FF6F00)',
    ocean: 'linear-gradient(135deg, #E0F2F1, #B2DFDB, #00897B)',
    forest: 'linear-gradient(135deg, #E8F5E9, #A5D6A7, #2E7D32)',
    midnight: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
    cream: 'linear-gradient(135deg, #FFFDE7, #FFF8E1, #FFECB3)'
};

// Greeting text in three languages
const diyGreetings = {
    chinese: '教师节快乐',
    malay: 'Selamat Hari Guru',
    english: "Happy Teachers' Day"
};

// Extended color palette
const diyColors = [
    '#1a1a2e', '#FFFFFF', '#000000', '#00CED1', '#2E8B57', '#DC143C',
    '#FF8C00', '#8A2BE2', '#0000FF', '#8B4513', '#B8860B', '#C0C0C0',
    '#4169E1', '#FF1493', '#228B22', '#9932CC', '#F4A460', '#008080'
];

// Extended sticker set
const diyStickers = ['🌹','🌸','🎓','📚','✨','💐','🍎','❤️','🏆','🎁','🎉','🌟','💯','🎂','🙏','📝','🔔','🎀','🌺','🦋'];

function initDiyDesigner() {
    // Background buttons
    document.querySelectorAll('.diy-bg-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.diy-bg-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            diyState.bg = btn.dataset.bg;
            updateDiyPreview();
        });
    });

    // Update modal title based on language
    const diyTitleEl = document.getElementById('diyTitle');
    if (diyTitleEl && translations[currentLang]?.diy_title) {
        diyTitleEl.textContent = translations[currentLang].diy_title;
    }

    // Color swatches
    const colorContainer = document.querySelector('.diy-control-row')?.parentElement;
    // We'll rebuild the color swatches dynamically
    rebuildColorSwatches();

    // Sticker buttons
    document.querySelectorAll('.diy-sticker-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            diyState.sticker = btn.dataset.sticker;
            updateDiyPreview();
        });
    });

    // Greeting language buttons
    document.querySelectorAll('.diy-greeting-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.diy-greeting-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            diyState.greeting = btn.dataset.lang;
            updateDiyPreview();
        });
    });

    // Sticker dark bg toggle
    document.querySelectorAll('.diy-sticker-bg-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.diy-sticker-bg-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            diyState.stickerBgDark = btn.dataset.dark === 'true';
            updateDiyPreview();
        });
    });

    // Message input
    const msgInput = document.getElementById('diyMsgInput');
    msgInput?.addEventListener('input', () => {
        diyState.msg = msgInput.value;
        updateDiyPreview();
    });

    // Custom sticker add
    const addBtn = document.getElementById('diyAddStickerBtn');
    const customInput = document.getElementById('diyCustomStickerInput');
    addBtn?.addEventListener('click', () => {
        const emoji = customInput?.value.trim();
        if (emoji) {
            diyState.stickers.push({ emoji, x: 50 + Math.random()*30, y: 10 + Math.random()*30 });
            customInput.value = '';
            updateDiyPreview();
        }
    });

    // Download button
    document.getElementById('diyDownloadBtn')?.addEventListener('click', downloadDiyCard);
}

function rebuildColorSwatches() {
    // Find the color swatch row
    const rows = document.querySelectorAll('.diy-control-row');
    let colorRow = null;
    rows.forEach(row => {
        const label = row.querySelector('.diy-label');
        if (label && label.textContent.includes('olor') || label?.textContent.includes('ext')) {
            colorRow = row;
        }
    });
    if (!colorRow) return;

    colorRow.innerHTML = '<span class="diy-label" id="diyColorLabel">Text:</span>';
    diyColors.forEach(color => {
        const swatch = document.createElement('div');
        swatch.className = 'diy-color-swatch' + (color === diyState.color ? ' active' : '');
        swatch.dataset.color = color;
        swatch.style.background = color;
        if (color === '#FFFFFF') swatch.style.borderColor = 'rgba(255,215,0,0.5)';
        swatch.addEventListener('click', () => {
            document.querySelectorAll('.diy-color-swatch').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            diyState.color = color;
            updateDiyPreview();
        });
        colorRow.appendChild(swatch);
    });
}

function updateDiyPreview() {
    const preview = document.getElementById('diyPreview');
    const titleText = document.getElementById('diyTitleText');
    const msgText = document.getElementById('diyMsgText');

    // Sticker dark bg wrapper
    let stickerBgWrapper = preview.querySelector('.diy-sticker-bg-wrapper');
    if (diyState.stickerBgDark) {
        if (!stickerBgWrapper) {
            stickerBgWrapper = document.createElement('div');
            stickerBgWrapper.className = 'diy-sticker-bg-wrapper';
            stickerBgWrapper.style.cssText = 'position:absolute;inset:0;background:rgba(0,0,0,0.6);border-radius:16px;backdrop-filter:blur(2px);pointer-events:none;z-index:1;';
            preview.appendChild(stickerBgWrapper);
        }
    } else if (stickerBgWrapper) {
        stickerBgWrapper.remove();
    }

    preview.style.background = diyBgs[diyState.bg] || diyBgs.gold;
    titleText.style.color = diyState.color;
    msgText.style.color = diyState.color;

    // Remove old stickers
    preview.querySelectorAll('.diy-sticker').forEach(el => el.remove());

    // Add main sticker
    if (diyState.stickers.length > 0) {
        diyState.stickers.forEach((s, idx) => {
            const el = document.createElement('div');
            el.className = 'diy-sticker';
            el.textContent = s.emoji;
            el.style.left = s.x + '%';
            el.style.top = s.y + '%';
            el.style.transform = 'translate(-50%, -50%)';

            // Make draggable
            makeDraggable(el, (nx, ny) => {
                s.x = nx; s.y = ny;
                el.style.left = nx + '%';
                el.style.top = ny + '%';
            });

            preview.appendChild(el);
        });
    }

    msgText.textContent = diyState.msg;
    const greetingKey = 'title_' + (diyState.greeting || currentLang);
    titleText.textContent = translations[diyState.greeting || currentLang]?.[greetingKey] || diyGreetings[diyState.greeting || currentLang];
}

// ===== Draggable elements =====
function makeDraggable(el, onMove) {
    let isDragging = false;
    let startX, startY;

    el.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        el.style.cursor = 'grabbing';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        startX = e.clientX;
        startY = e.clientY;

        const preview = el.parentElement;
        const rect = preview.getBoundingClientRect();
        const previewW = rect.width;
        const previewH = rect.height;

        let newX = parseFloat(el.style.left) + (dx / previewW) * 100;
        let newY = parseFloat(el.style.top) + (dy / previewH) * 100;

        // Clamp within preview area
        newX = Math.max(5, Math.min(95, newX));
        newY = Math.max(5, Math.min(95, newY));

        onMove(newX, newY);
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        el.style.cursor = 'grab';
    });

    // Touch support
    el.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        el.style.cursor = 'grabbing';
        e.preventDefault();
    }, { passive: false });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const dx = e.touches[0].clientX - startX;
        const dy = e.touches[0].clientY - startY;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;

        const preview = el.parentElement;
        const rect = preview.getBoundingClientRect();
        const previewW = rect.width;
        const previewH = rect.height;

        let newX = parseFloat(el.style.left) + (dx / previewW) * 100;
        let newY = parseFloat(el.style.top) + (dy / previewH) * 100;
        newX = Math.max(5, Math.min(95, newX));
        newY = Math.max(5, Math.min(95, newY));

        onMove(newX, newY);
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
        el.style.cursor = 'grab';
    });
}

function downloadDiyCard() {
    const preview = document.getElementById('diyPreview');
    // Disable stickers-bg-wrapper before capturing so it's not included in screenshot
    const stickerBgWrapper = preview.querySelector('.diy-sticker-bg-wrapper');
    let bgHidden = false;
    if (stickerBgWrapper) {
        stickerBgWrapper.style.display = 'none';
        bgHidden = true;
    }

    // Make the modal visible temporarily so html2canvas can see it
    // html2canvas ignores hidden elements, so ensure modal is not display:none
    const diyModal = document.getElementById('diyModal');
    const wasOpen = diyModal.classList.contains('open');

    // Use html2canvas to capture exactly what user sees on screen
    html2canvas(preview, {
        backgroundColor: null,
        scale: 2,  // high resolution
        useCORS: true,
        logging: false
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'my-teachers-day-card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        // Restore
        if (bgHidden && stickerBgWrapper) {
            stickerBgWrapper.style.display = '';
        }
    }).catch(() => {
        // Fallback: if html2canvas fails, just save preview as-is
        if (bgHidden && stickerBgWrapper) {
            stickerBgWrapper.style.display = '';
        }
        alert('Please make sure you have internet connection for the download feature.');
    });
}

// ===== Confetti Burst =====
function launchConfetti(count) {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    const colors = ['#FFD700','#FF69B4','#00CED1','#FF6347','#ADFF2F','#FF4500','#9370DB','#20B2AA','#FF1493','#00FF7F'];

    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = (20 + Math.random() * 60) + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.setProperty('--drift', (-50 + Math.random()*100) + 'px');
        piece.style.setProperty('--duration', (2 + Math.random()*2) + 's');
        piece.style.setProperty('--delay', (Math.random()*0.5) + 's');
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        container.appendChild(piece);
        setTimeout(() => piece.remove(), 4000);
    }
}

// ===== Question Modal (ABCD) =====
function initQuestionModal() {
    const modalHTML = `
        <div id="questionModal" class="question-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 id="modalTeacherName" class="modal-teacher-name"></h3>
                    <button class="modal-close" id="modalClose">&times;</button>
                </div>
                <div class="modal-body">
                    <p id="modalQuestion" class="modal-question"></p>
                    <div id="mcqOptions" class="mcq-options"></div>
                    <p id="errorMessage" class="error-message"></p>
                </div>
                <div class="modal-footer">
                    <button id="submitAnswer" class="submit-button">提交答案</button>
                </div>
            </div>
        </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('questionModal');
    const modalTeacherName = document.getElementById('modalTeacherName');
    const modalQuestion = document.getElementById('modalQuestion');
    const mcqOptionsContainer = document.getElementById('mcqOptions');
    const submitButton = document.getElementById('submitAnswer');
    const closeButton = document.getElementById('modalClose');
    const errorMessage = document.getElementById('errorMessage');

    let currentTeacher = null;
    let selectedAnswer = null;

    function showModal(teacher) {
        currentTeacher = teacher;
        selectedAnswer = null;
        modalTeacherName.textContent = teacher.name;
        modalQuestion.textContent = teacher.question;
        mcqOptionsContainer.innerHTML = '';
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';

        const optionLabels = ['A', 'B', 'C', 'D'];
        teacher.options.forEach((optionText, index) => {
            const label = document.createElement('label');
            label.className = 'mcq-option';
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'mcq-answer';
            radio.value = optionLabels[index];
            radio.className = 'mcq-radio';
            radio.addEventListener('change', () => {
                selectedAnswer = optionLabels[index];
                document.querySelectorAll('.mcq-option').forEach(opt => opt.classList.remove('selected'));
                label.classList.add('selected');
                errorMessage.style.display = 'none';
            });
            label.appendChild(radio);
            const span = document.createElement('span');
            span.className = 'mcq-label-text';
            span.textContent = optionText;
            label.appendChild(span);
            mcqOptionsContainer.appendChild(label);
        });

        const buttonTexts = { malay: 'Hantar Jawapan', english: 'Submit Answer', chinese: '提交答案' };
        const errorMessages = { malay: 'Sila pilih jawapan', english: 'Please select an answer', chinese: '请选择答案' };
        const incorrectMessages = { malay: 'Jawapan tidak betul, cuba lagi.', english: 'Incorrect answer, try again.', chinese: '答案错误，请重试。' };

        submitButton.textContent = buttonTexts[teacher.lang] || buttonTexts.english;
        currentTeacher.emptyError = errorMessages[teacher.lang] || errorMessages.english;
        currentTeacher.incorrectError = incorrectMessages[teacher.lang] || incorrectMessages.english;
        modal.style.display = 'flex';
    }

    function hideModal() { modal.style.display = 'none'; currentTeacher = null; selectedAnswer = null; }

    closeButton.addEventListener('click', hideModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') hideModal();
    });
    document.addEventListener('keydown', (e) => {
        if (!currentTeacher || modal.style.display !== 'flex') return;
        const options = ['A','B','C','D'];
        if (options.includes(e.key.toUpperCase())) {
            const idx = options.indexOf(e.key.toUpperCase());
            const radios = mcqOptionsContainer.querySelectorAll('.mcq-radio');
            if (radios[idx]) { radios[idx].checked = true; radios[idx].dispatchEvent(new Event('change')); }
        }
    });

    submitButton.addEventListener('click', () => {
        if (!selectedAnswer) { errorMessage.textContent = currentTeacher.emptyError; errorMessage.style.display = 'block'; return; }
        if (checkAnswer(selectedAnswer, currentTeacher.answer)) {
            launchConfetti(25);
            setTimeout(() => { window.location.href = currentTeacher.url; }, 800);
        } else {
            errorMessage.textContent = currentTeacher.incorrectError;
            errorMessage.style.display = 'block';
            selectedAnswer = null;
            document.querySelectorAll('.mcq-radio').forEach(r => r.checked = false);
            document.querySelectorAll('.mcq-option').forEach(o => o.classList.remove('selected'));
        }
    });

    window.showQuestionModal = showModal;
}

// ===== Page Quiz (on individual teacher profile pages) =====
function renderPageQuiz() {
    const quizSection = document.getElementById('quizSection');
    if (!quizSection) return;

    const pathSegments = window.location.pathname.split('/');
    const fileName = pathSegments[pathSegments.length - 1] || '';
    const baseUrl = fileName.replace('.html', '');
    const teacher = teachers.find(t => t.url.includes(baseUrl));
    if (!teacher) return;

    const questionEl = quizSection.querySelector('#quizQuestion');
    const optionsEl = quizSection.querySelector('#quizOptions');
    const submitBtn = quizSection.querySelector('#quizSubmitBtn');
    const errorEl = quizSection.querySelector('#quizError');
    if (!questionEl || !optionsEl || !submitBtn) return;

    questionEl.textContent = teacher.question;
    const optionLabels = ['A', 'B', 'C', 'D'];
    let selectedAnswer = null;

    teacher.options.forEach((optionText, index) => {
        const btn = document.createElement('div');
        btn.className = 'page-quiz-option';
        btn.innerHTML = `<span class="page-quiz-letter">${optionLabels[index]}</span> ${optionText}`;
        btn.addEventListener('click', () => {
            selectedAnswer = optionLabels[index];
            document.querySelectorAll('.page-quiz-option').forEach(o => o.classList.remove('selected'));
            btn.classList.add('selected');
            if (errorEl) errorEl.style.display = 'none';
        });
        optionsEl.appendChild(btn);
    });

    const buttonTexts = { malay: 'Hantar Jawapan', english: 'Submit Answer', chinese: '提交答案' };
    submitBtn.textContent = buttonTexts[teacher.lang] || buttonTexts.english;

    submitBtn.addEventListener('click', () => {
        if (!selectedAnswer) { if (errorEl) { errorEl.textContent = 'Please select an answer'; errorEl.style.display = 'block'; } return; }
        if (checkAnswer(selectedAnswer, teacher.answer)) {
            launchConfetti(20);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            if (errorEl) { errorEl.textContent = 'Incorrect answer, try again.'; errorEl.style.display = 'block'; }
            selectedAnswer = null;
            document.querySelectorAll('.page-quiz-option').forEach(o => o.classList.remove('selected'));
        }
    });
}

// ===== Message Wall (for teacher profile pages) =====
function initMessageWall() {
    const wallContent = document.querySelector('.message-wall-content');
    const formContainer = document.querySelector('.message-form');
    if (!wallContent) return;

    const teacherName = document.querySelector('.profile-name')?.textContent || 'unknown';
    const storageKey = 'messages_' + teacherName;
    let messages = JSON.parse(localStorage.getItem(storageKey) || '[]');

    if (messages.length === 0) {
        const examples = [
            { sender: "学生A", text: "老师，谢谢您一直以来的付出！教师节快乐！" },
            { sender: "学生B", text: "您的教诲我会永远铭记在心。祝您身体健康！" },
            { sender: "学生C", text: "您是最好最耐心老师！感恩有您！" }
        ];
        messages = examples;
        localStorage.setItem(storageKey, JSON.stringify(messages));
    }

    messages.forEach(m => addMessageToWall(m.sender, m.text, false));

    if (formContainer) {
        const senderInput = formContainer.querySelector('[name="sender"]');
        const textInput = formContainer.querySelector('[name="text"]');
        const sendBtn = formContainer.querySelector('.message-send-btn');
        sendBtn.addEventListener('click', () => {
            const sender = senderInput?.value.trim() || 'Anonymous';
            const text = textInput?.value.trim();
            if (!text) return;
            messages.push({ sender, text });
            localStorage.setItem(storageKey, JSON.stringify(messages));
            addMessageToWall(sender, text, true);
            if (textInput) textInput.value = '';
            if (senderInput) senderInput.value = '';
            launchConfetti(5);
        });
    }
}

function addMessageToWall(sender, text, animate) {
    const wallContent = document.querySelector('.message-wall-content');
    if (!wallContent) return;
    const item = document.createElement('div');
    item.className = 'message-item' + (animate ? '' : '');
    item.innerHTML = `<p class="message-sender">${escapeHtml(sender)}</p><p class="message-text">${escapeHtml(text)}</p>`;
    if (animate) item.style.animation = 'messageSlideIn 0.5s ease-out';
    wallContent.appendChild(item);
    wallContent.scrollTop = wallContent.scrollHeight;
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ===== Particle Effects =====
function initBokehEffect() {
    const container = document.getElementById('bokehContainer');
    if (!container) return;
    const count = getParticleCount(8, 5, 0, 0);
    for (let i = 0; i < count; i++) {
        const bokeh = document.createElement('div');
        bokeh.className = 'bokeh';
        const size = Math.random() * 100 + 50;
        bokeh.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*20}s;animation-duration:${15+Math.random()*10}s;`;
        container.appendChild(bokeh);
    }
}

function initGoldenDust() {
    const container = document.getElementById('goldenDust');
    if (!container) return;
    const count = getParticleCount(25, 15, isMobileDevice ? 4 : 8, 2);
    for (let i = 0; i < count; i++) {
        const dust = document.createElement('div');
        dust.className = 'dust-particle';
        dust.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*25}s;animation-duration:${20+Math.random()*15}s;`;
        container.appendChild(dust);
    }
}

function initParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;
    const count = getParticleCount(10, 6, 2, 1);
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 4 + 2;
        particle.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${size}px;height:${size}px;animation-delay:${Math.random()*30}s;animation-duration:${25+Math.random()*20}s;`;
        container.appendChild(particle);
    }
}

function initSparkles() {
    const container = document.getElementById('sparklesContainer');
    if (!container) return;
    const count = getParticleCount(12, 8, isMobileDevice ? 2 : 5, 1);
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        const size = Math.random() * 8 + 4;
        sparkle.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${size}px;height:${size}px;animation-delay:${Math.random()*3}s;animation-duration:${2+Math.random()*2}s;`;
        container.appendChild(sparkle);
    }
}

// ===== Teacher Name Animation (FIXED: proper boundaries, no overlap) =====
let randomAppearanceTimeout = null;

function initTeacherNameAnimation() {
    const nameCards = document.querySelectorAll('.teacher-name-card');
    const namesContainer = document.getElementById('namesContainer');
    if (!namesContainer || nameCards.length === 0) return;

    const containerRect = namesContainer.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    const badgeRadius = 225;
    const safeZoneRadius = badgeRadius + 100;
    const minRadius = safeZoneRadius + 40;
    const maxRadius = minRadius + 150;

    const cardDimensions = Array.from(nameCards).map(card => {
        const rect = card.getBoundingClientRect();
        return { width: rect.width, height: rect.height };
    });

    const cardStates = Array.from(nameCards).map((card, index) => ({
        element: card, currentX: 0, currentY: 0, currentAngle: 0, currentRadius: 0,
        isVisible: false, isAnimating: false, isGlowing: false,
        cardWidth: cardDimensions[index].width, cardHeight: cardDimensions[index].height
    }));

    function checkCollision(x, y, cw, ch, existing) {
        const minDist = Math.max(cw, ch) + 100; // Increased spacing
        for (const pos of existing) {
            const dx = x - pos.x, dy = y - pos.y;
            if (Math.sqrt(dx*dx + dy*dy) < minDist) return true;
        }
        return false;
    }

    function isInSafeZone(x, y) {
        const dx = x - centerX, dy = y - centerY;
        return Math.sqrt(dx*dx + dy*dy) < safeZoneRadius;
    }

    function generatePositions() {
        const positions = [];
        for (let i = 0; i < cardStates.length; i++) {
            let valid = false, attempts = 0;
            while (!valid && attempts < 50) {
                attempts++;
                const angle = Math.random() * Math.PI * 2;
                const radius = minRadius + Math.random() * (maxRadius - minRadius);
                const cw = cardStates[i].cardWidth, ch = cardStates[i].cardHeight;
                let x = centerX + Math.cos(angle)*radius + (Math.random()-0.5)*40 - cw/2;
                let y = centerY + Math.sin(angle)*radius + (Math.random()-0.5)*40 - ch/2;
                // Clamp within container bounds to prevent overflow
                x = Math.max(10, Math.min(containerWidth - cw - 10, x));
                y = Math.max(10, Math.min(containerHeight - ch - 10, y));
                if (!isInSafeZone(x+cw/2, y+ch/2) && !checkCollision(x, y, cw, ch, positions)) {
                    valid = true;
                    positions.push({ x, y, angle, radius });
                }
            }
            if (!valid) {
                const angle = Math.random()*Math.PI*2;
                const radius = minRadius + Math.random()*(maxRadius-minRadius);
                const cw = cardStates[i].cardWidth, ch = cardStates[i].cardHeight;
                let x = centerX + Math.cos(angle)*radius - cw/2;
                let y = centerY + Math.sin(angle)*radius - ch/2;
                x = Math.max(10, Math.min(containerWidth - cw - 10, x));
                y = Math.max(10, Math.min(containerHeight - ch - 10, y));
                positions.push({ x, y, angle, radius });
            }
        }
        return positions;
    }

    const positions = generatePositions();
    cardStates.forEach((state, i) => {
        if (positions[i]) {
            state.currentX = positions[i].x; state.currentY = positions[i].y;
            state.currentAngle = positions[i].angle; state.currentRadius = positions[i].radius;
            state.element.style.cssText = `left:0;top:0;transform:translate3d(${positions[i].x}px,${positions[i].y}px,0);opacity:0;pointer-events:none;white-space:nowrap;overflow:visible;`;
        }
    });

    function startCycle() {
        const visibleCount = isMobileDevice ? 1 : (2 + Math.floor(Math.random() * 3));
        const shuffled = [...cardStates].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, Math.min(visibleCount, shuffled.length));

        cardStates.forEach(s => { s.isVisible=false; s.isGlowing=false; s.element.style.opacity='0'; s.element.style.pointerEvents='none'; s.element.classList.remove('visible'); });

        selected.forEach((s, i) => {
            setTimeout(() => {
                s.element.style.transition = 'opacity 0.4s ease-in-out';
                s.element.style.opacity = '1'; s.element.style.pointerEvents = 'auto';
                s.element.classList.add('visible'); s.isVisible = true; s.isGlowing = true;
                const stayDuration = isMobileDevice ? 3000 : (2000 + Math.random() * 2000);
                setTimeout(() => {
                    s.element.style.opacity = '0'; s.element.style.pointerEvents = 'none';
                    s.element.classList.remove('visible'); s.isVisible = false; s.isGlowing = false;
                    setTimeout(() => {
                        const newPos = generatePositions();
                        const idx = cardStates.indexOf(s);
                        if (idx < newPos.length) {
                            s.currentX = newPos[idx].x; s.currentY = newPos[idx].y;
                            s.element.style.transform = `translate3d(${newPos[idx].x}px,${newPos[idx].y}px,0)`;
                        }
                    }, 300);
                }, stayDuration);
            }, i * 200);
        });

        const cycleInterval = isMobileDevice ? 5000 : (4000 + Math.random() * 2000);
        randomAppearanceTimeout = setTimeout(startCycle, cycleInterval);
    }

    setTimeout(startCycle, 1000);
}

// ===== Teacher Card Click Handlers =====
function initTeacherCardClickHandlers() {
    document.querySelectorAll('.teacher-name-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const displayName = this.textContent.trim();
            let teacher = teachers.find(t => t.name === displayName);
            if (!teacher) {
                const nameWithoutTitle = displayName.replace(/老师$/, '');
                teacher = teachers.find(t => t.name === nameWithoutTitle || t.name.endsWith(nameWithoutTitle));
            }
            if (teacher && window.showQuestionModal) window.showQuestionModal(teacher);
        });
    });
}

// ===== Parallax Effect =====
function initParallaxEffect() {
    if (isMobileDevice) return;
    const badgeContainer = document.getElementById('badgeContainer');
    if (!badgeContainer) return;

    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth/2) / window.innerWidth;
        mouseY = (e.clientY - window.innerHeight/2) / window.innerHeight;
    });
    function updateParallax() {
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;
        badgeContainer.style.transform = `translate3d(${targetX*10}px,${targetY*10}px,0)`;
        requestAnimationFrame(updateParallax);
    }
    updateParallax();
}

// ===== Teacher Mode Toggle → Open teacher-list.html =====
function initTeacherModeToggle() {
    const toggleButton = document.getElementById('teacherModeToggle');
    if (!toggleButton) return;
    toggleButton.addEventListener('click', () => {
        window.location.href = 'teacher-list.html';
    });
}

// ===== Games Section =====
function initGamesSection() {
    document.getElementById('gameEnvelope')?.addEventListener('click', () => {
        startEnvelopeRain();
    });
    document.getElementById('gameGuess')?.addEventListener('click', () => {
        startGuessGame();
    });
    document.getElementById('gameDiy')?.addEventListener('click', () => {
        document.getElementById('diyModal').classList.add('open');
        updateDiyPreview();
    });

    document.getElementById('guessModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'guessModal') e.target.classList.remove('open');
    });
    document.getElementById('diyModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'diyModal') e.target.classList.remove('open');
    });
}

// ===== Intersection Observer =====
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('in-view');
            else entry.target.classList.remove('in-view');
        });
    }, { root: null, rootMargin: '0px', threshold: 0.1 });
    document.querySelectorAll('.badge-section, .teacher-names-section, .instruction-section').forEach(s => observer.observe(s));
}

// ===== Loading State =====
window.addEventListener('load', () => { document.body.classList.add('loaded'); });

// ===== Reduce motion if user prefers =====
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('reduced-motion');
}

// ===== Disable heavy animations when not in view =====
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('in-view', entry.isIntersecting);
        });
    }, { threshold: 0.1 });
    const badgeSection = document.querySelector('.badge-section');
    if (badgeSection) observer.observe(badgeSection);
}

// ===== Teacher Name Card Keyboard Navigation =====
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.teacher-name-card').forEach(card => {
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
        });
    });
});

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    detectDevice();
    initWelcomeOverlay();
    initLanguageToggle();
    applyLanguage(currentLang);
    initBokehEffect();
    initGoldenDust();
    initParticles();
    initSparkles();
    initTeacherNameAnimation();
    initParallaxEffect();
    initIntersectionObserver();
    initQuestionModal();
    initTeacherModeToggle();
    initGamesSection();
    initDiyDesigner();
    initTeacherCardClickHandlers();
    renderPageQuiz();
    initMessageWall();
});

console.log('%cTeachers\' Day Celebration', 'font-size:24px;font-weight:bold;color:#FFD700;');
console.log('%cGPU-accelerated for smooth 60 FPS', 'font-size:12px;color:#FFA500;');
console.log('%cMobile optimized • Multi-language supported', 'font-size:10px;color:#FFF8DC;');
