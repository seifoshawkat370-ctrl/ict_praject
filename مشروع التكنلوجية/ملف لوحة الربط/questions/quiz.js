// ==========================================
// قاعدة بيانات الأسئلة (Question Bank)
// ==========================================
const questionBank = [
    {
        question: "ما هو تعريف برامج الفدية (Ransomware)؟",
        options: [
            "برمجيات تقوم بتسريع الجهاز",
            "برمجيات خبيثة تشفر الملفات وتطلب فدية لفكها",
            "برمجيات لمكافحة الفيروسات",
            "نظام تشغيل جديد"
        ],
        answer: 1 // Index 1 is correct
    },
    {
        question: "كيف تنتشر برامج الفدية عادة؟",
        options: [
            "عبر رسائل البريد الإلكتروني التصيدية (Phishing)",
            "عبر تحديثات ويندوز الرسمية",
            "عبر لوحة المفاتيح",
            "عبر شحن الهاتف"
        ],
        answer: 0
    },
    {
        question: "ما هي العملة التي يطلبها المخترقون عادة؟",
        options: [
            "الدولار النقدي",
            "التحويل البنكي المباشر",
            "العملات الرقمية (مثل Bitcoin)",
            "الذهب"
        ],
        answer: 2
    },
    {
        question: "ماذا يجب أن تفعل إذا أصيب جهازك ببرنامج فدية؟",
        options: [
            "دفع الفدية فوراً",
            "عزل الجهاز عن الشبكة فوراً",
            "إعادة تشغيل الجهاز عدة مرات",
            "شراء جهاز جديد"
        ],
        answer: 1
    },
    {
        question: "ما هي أفضل طريقة للوقاية من فقدان البيانات بسبب برامج الفدية؟",
        options: [
            "عدم استخدام الإنترنت",
            "النسخ الاحتياطي الدوري للبيانات (Backups)",
            "ترك الجهاز مفتوحاً دائماً",
            "استخدام كلمة مرور سهلة"
        ],
        answer: 1
    },
    {
        question: "أي من التالي يعتبر هجوم فدية شهير؟",
        options: [
            "WannaCry",
            "Notepad",
            "Calculator",
            "Paint"
        ],
        answer: 0
    },
    {
        question: "لماذا لا يُنصح بدفع الفدية؟",
        options: [
            "لأنها رخيصة جداً",
            "لأنه لا يوجد ضمان لاستعادة الملفات ويشجع المجرمين",
            "لأن البنك يرفض ذلك",
            "لأن الشرطة ستدفع بدلاً منك"
        ],
        answer: 1
    },
    {
        question: "ما هو التشفير (Encryption) في سياق برامج الفدية؟",
        options: [
            "حذف الملفات نهائياً",
            "تحويل البيانات لصيغة غير قابلة للقراءة إلا بمفتاح",
            "نسخ الملفات لمكان آخر",
            "ضغط الملفات لتوفير المساحة"
        ],
        answer: 1
    },
    {
        question: "ما هو التصيد الإلكتروني (Phishing)؟",
        options: [
            "صيد الأسماك عبر الإنترنت",
            "خداع المستخدمين لكشف معلومات حساسة أو تحميل برمجيات خبيثة",
            "مسابقة للفوز بجوائز",
            "برنامج لتسريع الإنترنت"
        ],
        answer: 1
    },
    {
        question: "كيف يمكن تقليل خطر الإصابة عبر البريد الإلكتروني؟",
        options: [
            "فتح جميع المرفقات فوراً",
            "التحقق من هوية المرسل وعدم فتح روابط مشبوهة",
            "الرد على جميع الرسائل",
            "تعطيل البريد الإلكتروني"
        ],
        answer: 1
    },
    {
        question: "ما هو دور برامج مكافحة الفيروسات؟",
        options: [
            "زيادة سرعة الألعاب",
            "اكتشاف ومنع البرمجيات الخبيثة قبل إصابة الجهاز",
            "تنزيل الفيروسات",
            "تشغيل الموسيقى"
        ],
        answer: 1
    },
    {
        question: "ما معنى أن يكون ملفاً بامتداد '.exe'؟",
        options: [
            "ملف صورة",
            "ملف نصي",
            "ملف تنفيذي (قد يكون برنامجاً أو فيروساً)",
            "موقع إلكتروني"
        ],
        answer: 2
    },
    {
        question: "ما هو 'Ransomware-as-a-Service' (RaaS)؟",
        options: [
            "نموذج تأجير برامج الفدية لمجرمين آخرين",
            "خدمة عملاء مايكروسوفت",
            "نوع من أنواع الحواسيب",
            "خدمة توصيل الطلبات"
        ],
        answer: 0
    },
    {
        question: "أيهم أكثر عرضة لهجمات الفدية؟",
        options: [
            "الأجهزة غير المحدثة (Unpatched systems)",
            "الأجهزة المغلقة",
            "الطابعات الورقية",
            "الساعات اليدوية"
        ],
        answer: 0
    },
    {
        question: "ماذا تفعل النسخ الظلية (Shadow Copies)؟",
        options: [
            "تنسخ ظل المستخدم",
            "تحفظ نسخاً سابقة من الملفات قد تساعد في الاستعادة",
            "تزيد مساحة الشاشة",
            "تغلق الجهاز تلقائياً"
        ],
        answer: 1
    },
    {
        question: "ما هو 'Lock Screen Ransomware'؟",
        options: [
            "نوع يغلق الشاشة ويمنع الوصول للنظام دون تشفير الملفات",
            "قفل شاشة الهاتف العادي",
            "شاشة توقف متحركة",
            "لعبة فيديو"
        ],
        answer: 0
    },
    {
        question: "ما هي القاعدة 3-2-1 في النسخ الاحتياطي؟",
        options: [
            "3 نسخ، وسيطين مختلفين، نسخة خارج الموقع",
            "3 وجبات، 2 استراحة، 1 عمل",
            "3 أجهزة، 2 شاشة، 1 ماوس",
            "لا توجد قاعدة بهذا الاسم"
        ],
        answer: 0
    },
    {
        question: "هل يمكن فك تشفير جميع برامج الفدية؟",
        options: [
            "نعم، دائماً",
            "لا، يعتمد على قوة التشفير وتوفر أداة فك (Decrypter)",
            "فقط إذا دفعت المال",
            "نعم ببرنامج الرسام"
        ],
        answer: 1
    },
    {
        question: "كيف يحاول المهاجمون إخافة الضحية؟",
        options: [
            "بوضع عداد تنازلي وتهديد بمضاعفة السعر أو حذف البيانات",
            "بإرسال باقة ورد",
            "بتشغيل موسيقى هادئة",
            "بتغيير خلفية الشاشة لقطط"
        ],
        answer: 0
    },
    {
        question: "ما هي الهندسة الاجتماعية؟",
        options: [
            "بناء الجسور",
            "التلاعب النفسي بالبشر لافشاء معلومات سرية",
            "تصميم مواقع الويب",
            "إصلاح الحواسيب"
        ],
        answer: 1
    }
];

// ==========================================
// منطق الاختبار (Quiz Logic)
// ==========================================

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 180; // 180 seconds
let timerInterval;

const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress');
const qNumber = document.getElementById('q-number');
const scoreDisplay = document.getElementById('score');
const resultMessage = document.getElementById('result-message');
const timerDisplay = document.getElementById('timer');

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    // Select 10 random questions
    currentQuestions = questionBank.sort(() => 0.5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 180;
    
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    
    startTimer();
    enableAntiCheat();
    loadQuestion();
}

// Anti-Cheat Logic
function enableAntiCheat() {
    document.addEventListener('visibilitychange', handleCheat);
    document.addEventListener('contextmenu', preventMenu);
    
    // Prevent selection and copy
    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);
    document.addEventListener('paste', preventCopy);
    document.addEventListener('dragstart', preventCopy);
    document.addEventListener('selectstart', preventCopy);
    document.addEventListener('keydown', preventKeyShortcuts);
}

function disableAntiCheat() {
    document.removeEventListener('visibilitychange', handleCheat);
    document.removeEventListener('contextmenu', preventMenu);
    
    // Remove listeners
    document.removeEventListener('copy', preventCopy);
    document.removeEventListener('cut', preventCopy);
    document.removeEventListener('paste', preventCopy);
    document.removeEventListener('dragstart', preventCopy);
    document.removeEventListener('selectstart', preventCopy);
    document.removeEventListener('keydown', preventKeyShortcuts);
}

function handleCheat() {
    if (document.hidden) {
        showResults('cheat');
    }
}

function preventMenu(e) {
    e.preventDefault();
}

function preventCopy(e) {
    e.preventDefault();
}

function preventKeyShortcuts(e) {
    // Block Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+A
    if ((e.ctrlKey || e.metaKey) && 
        (e.key === 'c' || e.key === 'v' || e.key === 'x' || e.key === 'a')) {
        e.preventDefault();
    }
}

function startTimer() {
    timerDisplay.textContent = `⏳ ${formatTime(timeLeft)}`;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `⏳ ${formatTime(timeLeft)}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = '';
    
    qNumber.textContent = `سؤال ${currentQuestionIndex + 1} / 10`;
    progressFill.style.width = `${((currentQuestionIndex) / 10) * 100}%`;

    q.options.forEach((opt, index) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, btnElement) {
    // Disable all options
    const options = optionsContainer.children;
    for (let opt of options) {
        opt.onclick = null;
    }

    const correctIndex = currentQuestions[currentQuestionIndex].answer;

    if (selectedIndex === correctIndex) {
        btnElement.classList.add('correct');
        score++;
    } else {
        btnElement.classList.add('wrong');
        options[correctIndex].classList.add('correct'); // Show correct answer
    }

    // Wait and go to next
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1500); // 1.5 second delay
}

function showResults(reason = null) {
    clearInterval(timerInterval); // Stop timer
    disableAntiCheat(); // Stop monitoring
    
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    if (reason === 'cheat') {
        score = 0;
        scoreDisplay.textContent = 0;
        scoreDisplay.style.color = 'var(--error-color)';
        resultMessage.textContent = "🚫 تم كشف محاولة غش! تم إنهاء الاختبار لأنك غادرت الصفحة.";
        resultMessage.style.color = 'var(--error-color)';
        return;
    }

    scoreDisplay.textContent = score;
    scoreDisplay.style.color = 'var(--string-color)';
    resultMessage.style.color = 'var(--text-color)';

    if (score === 10) {
        resultMessage.textContent = "مذهل! أنت خبير في الأمن السيبراني 🛡️";
    } else if (score >= 7) {
        resultMessage.textContent = "عمل رائع! لديك معلومات جيدة 👍";
    } else if (score >= 5) {
        resultMessage.textContent = "لا بأس، لكن تحتاج للمزيد من الحذر 🤔";
    } else {
        resultMessage.textContent = "انتبه! جهازك في خطر، تعلم المزيد عن الحماية ⚠️";
    }
}
