// قاعدة بيانات الأنبياء ونبواتهم وتفسيرها المشكول
const prophetsData = {
    abraham: {
        name: "أَبُونَا إِبْرَاهِيمُ الخَلِيلُ",
        role: "أَبُو الآبَاءِ وَرَمْزُ الذَّبِيحَةِ",
        avatar: "⭐",
        prophecies: [
            {
                ref: "تَكْوِين ٢٢: ١٨",
                text: "«وَيَتَبَارَكُ فِي نَسْلِكَ جَمِيعُ أُمَمِ الأَرْضِ، مِنْ أَجْلِ أَنَّكَ سَمِعْتَ لِقَوْلِي».",
                explanation: "وَعَدَ اللهُ أَبَانَا إِبْرَاهِيمَ بِأَنَّ مُخَلِّصَ العَالَمِ (السَّيِّدَ المَسِيحَ) سَيُولَدُ مِنْ نَسْلِهِ لِيَكُونَ بَرَكَةً لِكُلِّ شُعُوبِ الأَرْضِ. كَمَا أَنَّ قِصَّةَ تَقْدِيمِ ابْنِهِ إِسْحَاقَ ذَبِيحَةً وَفِدَاءَهُ بِالْكَبْشِ كَانَتْ رَمْزاً جَمِيلاً لِفِدَاءِ المَسِيحِ لَنَا عَلَى الصَّلِيبِ."
            }
        ]
    },
    jacob: {
        name: "يَعْقُوبُ أَبُو الآبَاءِ",
        role: "صَاحِبُ نُبُوءَةِ شِيلُونَ",
        avatar: "📜",
        prophecies: [
            {
                ref: "تَكْوِين ٤٩: ١٠",
                text: "«لاَ يَزُولُ قَضِيبٌ مِنْ يَهُوذَا وَمُشْتَرِعٌ مِنْ بَيْنِ رِجْلَيْهِ حَتَّى يَأْتِيَ شِيلُونُ وَلَهُ يَكُونُ خُضُوعُ شُعُوبٍ».",
                explanation: "تَنَبَّأَ يَعْقُوبُ أَبُو الآبَاءِ قَبْلَ مَوْتِهِ بِأَنَّ المَسِيحَ (الذِي سَمَّاهُ شِيلُونُ، أَيْ مَنْ لَهُ السُّلْطَانُ وَالسَّلَامُ) سَيُولَدُ مِنْ سِبْطِ يَهُوذَا، وَأَنَّ جَمِيعَ شُعُوبِ الأَرْضِ سَوْفَ تُحِبُّهُ وَتَخْضَعُ لِمُلْكِهِ الرُّوحِيِّ."
            }
        ]
    },
    joseph: {
        name: "يُوسُفُ الصِّدِّيقُ",
        role: "رَمْزُ المَسِيحِ المُخَلِّصِ",
        avatar: "🌾",
        prophecies: [
            {
                ref: "تَكْوِين ٣٧ وَ ٤٥",
                text: "«أَنَا يُوسُفُ أَخُوكُمُ الَّذِي بَعْتُمُوهُ... الآنَ لاَ تَتَأَسَّفُوا... لأَنَّهُ لِاسْتِبْقَاءِ حَيَاةٍ أَرْسَلَنِي اللهُ قُدَّامَكُمْ».",
                explanation: "يُوسُفُ الصِّدِّيقُ هُوَ رَمْزٌ رَائِعٌ لِلْمَسِيحِ؛ فَقَدْ كَانَ الِابْنَ المَحْبُوبَ لِأَبِيهِ، حَسَدَهُ إِخْوَتُهُ وَبَاعُوهُ بِالْفِضَّةِ، لَكِنَّ اللهَ حَوَّلَ الآلَامَ إِلَى مَجْدٍ، فَصَارَ مُنْقِذاً وَمُخَلِّصاً لِلْعَالَمِ مِنَ المَجَاعَةِ وَقَدَّمَ لَهُمُ القَمْحَ (خُبْزَ الحَيَاةِ)، وَسَامَحَ إِخْوَتَهُ كَمَا سَامَحَنَا المَسِيحُ عَلَى الصَّلِيبِ."
            }
        ]
    },
    moses: {
        name: "مُوسَى النَّبِيُّ كَلِيمُ اللهِ",
        role: "وَسِيطُ الشَّرِيعَةِ وَالمُحَرِّرُ",
        avatar: "📖",
        prophecies: [
            {
                ref: "تَثْنِيَة ١٨: ١٥",
                text: "«يُقِيمُ لَكَ الرَّبُّ إِلهُكَ نَبِيًّا مِنْ وَسَطِكَ مِنْ إِخْوَتِكَ مِثْلِي. لَهُ تَسْمَعُونَ».",
                explanation: "تَنَبَّأَ مُوسَى النَّبِيُّ بِأَنَّ اللهَ سَيُرْسِلُ نَبِيًّا عَظِيماً مِثْلَهُ لِيُكَلِّمَ الشَّعْبَ. وَالمَسِيحُ هُوَ هَذَا النَّبِيُّ وَالمُخَلِّصُ الذِي حَرَّرَنَا مِنْ عُبُودِيَّةِ الشَّيْطَانِ كَمَا حَرَّرَ مُوسَى الشَّعْبَ مِنْ عُبُودِيَّةِ فِرْعَوْنَ."
            }
        ]
    },
    david: {
        name: "دَاوُدُ النَّبِيُّ وَالمَلِكُ",
        role: "رَتَّالُ المَرَانِمِ وَجَدُّ المَسِيحِ",
        avatar: "🎵",
        prophecies: [
            {
                ref: "مَزْمُور ٢٢: ١٦-١٨",
                text: "«ثَقَبُوا يَدَيَّ وَرِجْلَيَّ. أُحْصِي كُلَّ عِظَامِي، وَهُمْ يَنْظُرُونَ وَيَتَفَرَّسُونَ فِيَّ. يَقْسِمُونَ ثِيَابِي بَيْنَهُمْ، وَعَلَى لِبَاسِي يَقْتَرِعُونَ».",
                explanation: "تَنَبَّأَ المَلِكُ دَاوُدُ بِدِقَّةٍ شَدِيدَةٍ عَنْ تَفَاصِيلِ صَلْبِ السَّيِّدِ المَسِيحِ قَبْلَ مِئَاتِ السِّنِينَ؛ فَذَكَرَ ثَقْبَ يَدَيْهِ وَرِجْلَيْهِ بِالمَسَامِيرِ، وَاقْتِسَامَ الجُنُودِ لِثِيَابِهِ وَعَمَلَ القُرْعَةِ عَلَيْهَا."
            },
            {
                ref: "مَزْمُور ١١٠: ١",
                text: "«قَالَ الرَّبُّ لِرَبِّي: اجْلِسْ عَنْ يَمِينِي حَتَّى أَضَعَ أَعْدَاءَكَ مَوْطِئًا لِقَدَمَيْكَ».",
                explanation: "تُؤَكِّدُ هَذِهِ النُّبُوءَةُ أَنَّ السَّيِّدَ المَسِيحَ لَيْسَ مُجَرَّدَ إِنسَانٍ عادِيٍّ، بَلْ هُوَ الرَّبُّ الإِلهُ الذِي صَعِدَ إِلَى السَّمَاءِ بَعْدَ قِيَامَتِهِ وَجَلَسَ فِي مَجْدِهِ السَّمَاوِيِّ."
            }
        ]
    },
    isaiah: {
        name: "إِشَعْيَاءُ النَّبِيُّ",
        role: "النَّبِيُّ الإِنْجِيلِيُّ",
        avatar: "🔥",
        prophecies: [
            {
                ref: "إِشَعْيَاء ٧: ١٤",
                text: "«وَلكِنْ يُعْطِيكُمُ السَّيِّدُ نَفْسُهُ آيَةً: هَا الْعَذْرَاءُ تَحْبَلُ وَتَلِدُ ابْنًا وَتَدْعُو اسْمَهُ عِمَّانُوئِيلَ».",
                explanation: "تَنَبَّأَ إِشَعْيَاءُ بِأَنَّ المَسِيحَ سَيُولَدُ مِنْ عَذْرَاءَ دُونَ زَرْعِ بَشَرٍ، وَأَنَّهُ سَيَكُونُ «عِمَّانُوئِيلَ» أَيْ (اللهُ مَعَنَا)، وَهُوَ دَلِيلٌ عَلَى تَجَسُّدِ اللهِ وَمَحَبَّتِهِ لَنَا."
            },
            {
                ref: "إِشَعْيَاء ٥٣: ٥",
                text: "«وَهُوَ مَجْرُوحٌ لأَجْلِ مَعَاصِينَا، مَسْحُوقٌ لأَجْلِ آثَامِنَا. تَأْدِيبُ سَلاَمِنَا عَلَيْهِ، وَبِجُرَاحِهِ شُفِينَا».",
                explanation: "تَنَبَّأَ إِشَعْيَاءُ بِآلَامِ المَسِيحِ العَظِيمَةِ، وَأَنَّهُ سُيُجْرَحُ وَيَتَأَلَّمُ لِيَحْمِلَ عِقَابَ خَطَايَانَا وَيَمْنَحَنَا الشِّفَاءَ وَالسَّلَامَ مَعَ اللهِ."
            }
        ]
    },
    mary: {
        name: "القِدِّيسَةُ مَرْيَمُ العَذْرَاءُ",
        role: "أُمُّ النُّورِ كَطِفْلَةٍ وَعَهْدُ الخَلَاصِ",
        avatar: "👑",
        prophecies: [
            {
                ref: "تَكْوِين ٣: ١٥",
                text: "«وَأَضَعُ عَدَاوَةً بَيْنَكِ وَبَيْنَ الْمَرْأَةِ، وَبَيْنَ نَسْلِكِ وَنَسْلِهَا. هُوَ يَسْحَقُ رَأْسَكِ، وَأَنْتِ تَسْحَقِينَ عَقِبَهُ».",
                explanation: "هَذِهِ هِيَ أَوَّلُ نُبُوءَةٍ عَنِ الخَلَاصِ فِي الكِتَابِ المُقَدَّسِ؛ وَعَدَ اللهُ آدَمَ وَحَوَّاءَ بِأَنَّ نَسْلَ المَرْأَةِ (وَهُوَ السَّيِّدُ المَسِيحُ المَوْلُودُ مِنَ العَذْرَاءِ مَرْيَمَ) سَوْفَ يَهْزِمُ الشَّيْطَانَ (الحَيَّةَ) وَيَسْحَقُ قُوَّتَهُ بِالصَّلِيبِ."
            }
        ]
    },
    zechariah: {
        name: "زَكَرِيَّا النَّبِيُّ",
        role: "نَبِيُّ أُرُوشَلِيمَ وَالسَّعَفِ",
        avatar: "🕊️",
        prophecies: [
            {
                ref: "زَكَرِيَّا ٩: ٩",
                text: "«ابْتَهِجِي جِدًّا يَا ابْنَةَ صِهْيَوْنَ، اهْتِفِي يَا بِنْتَ أُورُشَلِيمَ. هُوَذَا مَلِكُكِ يَأْتِي إِلَيْكِ. هُوَ عَادِلٌ وَمَنْصُورٌ وَدِيعٌ، وَرَاكِبٌ عَلَى حِمَارٍ وَعَلَى جَحْشٍ ابْنِ أَتَانٍ».",
                explanation: "تَنَبَّأَ زَكَرِيَّا بِدُخُولِ المَسِيحِ إِلَى أُورُشَلِيمَ فِي أَحَدِ الشَّعَانِينِ كَمَلِكٍ وَدِيعٍ وَمُتَوَاضِعٍ رَاكِبٍ عَلَى جَحْشٍ، وَتَحَقَّقَ ذَلِكَ عِنْدَمَا اسْتَقْبَلَهُ الأَطْفَالُ بِأَغْصَانِ الزَّيْتُونِ وَالسَّعَفِ."
            }
        ]
    }
};

// عناصر واجهة المستخدم
const emptyState = document.getElementById("emptyState");
const characterCard = document.getElementById("characterCard");
const charName = document.getElementById("charName");
const charRole = document.getElementById("charRole");
const charAvatar = document.getElementById("charAvatar");
const prophecyText = document.getElementById("prophecyText");
const bibleRef = document.getElementById("bibleRef");
const explanationText = document.getElementById("explanationText");

const playAudioBtn = document.getElementById("playAudioBtn");
const visualizer = document.getElementById("visualizer");
const propheciesNav = document.getElementById("propheciesNav");
const prevProphecy = document.getElementById("prevProphecy");
const nextProphecy = document.getElementById("nextProphecy");
const prophecyIndicator = document.getElementById("prophecyIndicator");

let currentCharacterId = null;
let currentProphecyIndex = 0;
let synth = window.speechSynthesis;
let currentUtterance = null;
let isSpeaking = false;

// تهيئة التفاعل على النقاط النشطة (Hotspots)
document.querySelectorAll(".hotspot-area").forEach(area => {
    area.addEventListener("click", () => {
        const charId = area.getAttribute("data-id");
        selectCharacter(charId);
    });
});

// دالة اختيار شخصية وعرض بياناتها
function selectCharacter(charId) {
    // إزالة الصف النشط من الأزرار الأخرى
    document.querySelectorAll(".hotspot-area").forEach(d => d.classList.remove("active"));
    const activeArea = document.getElementById(`area-${charId}`);
    if (activeArea) activeArea.classList.add("active");

    // إيقاف تشغيل أي صوت حالي
    stopSpeech();

    currentCharacterId = charId;
    currentProphecyIndex = 0;

    const charData = prophetsData[charId];
    if (!charData) return;

    // تحديث الواجهة بالبيانات
    charName.textContent = charData.name;
    charRole.textContent = charData.role;
    charAvatar.textContent = charData.avatar;

    // عرض النبوة الأولى
    updateProphecyDisplay();

    // إخفاء الحالة الفارغة وإظهار الكارت
    emptyState.classList.add("hidden");
    characterCard.classList.remove("hidden");

    // النزول برفق للكارت في الشاشات الصغيرة
    document.getElementById("displaySection").scrollIntoView({ behavior: "smooth" });
}

// دالة تحديث عرض النبوءة الحالية
function updateProphecyDisplay() {
    const charData = prophetsData[currentCharacterId];
    const prophecy = charData.prophecies[currentProphecyIndex];

    prophecyText.textContent = prophecy.text;
    bibleRef.textContent = `(${prophecy.ref})`;
    explanationText.textContent = prophecy.explanation;

    // التحكم بأزرار التنقل بين النبوات
    if (charData.prophecies.length > 1) {
        propheciesNav.classList.remove("hidden");
        prophecyIndicator.textContent = `${currentProphecyIndex + 1} / ${charData.prophecies.length}`;
    } else {
        propheciesNav.classList.add("hidden");
    }

    // إعادة تعيين أزرار تشغيل الصوت
    resetAudioControls();
}

// أزرار التنقل بين النبوءات المتعددة
prevProphecy.addEventListener("click", () => {
    const charData = prophetsData[currentCharacterId];
    if (currentProphecyIndex > 0) {
        currentProphecyIndex--;
        stopSpeech();
        updateProphecyDisplay();
    }
});

nextProphecy.addEventListener("click", () => {
    const charData = prophetsData[currentCharacterId];
    if (currentProphecyIndex < charData.prophecies.length - 1) {
        currentProphecyIndex++;
        stopSpeech();
        updateProphecyDisplay();
    }
});

// منطق تشغيل الصوت (نطق الكلام بصوت طفل)
playAudioBtn.addEventListener("click", () => {
    if (isSpeaking) {
        stopSpeech();
    } else {
        startSpeech();
    }
});

function startSpeech() {
    if (!synth) {
        alert("معذرةً، متصفحك لا يدعم قراءة النصوص صوتياً.");
        return;
    }

    // إيقاف أي قراءة نشطة
    synth.cancel();

    const charData = prophetsData[currentCharacterId];
    const prophecy = charData.prophecies[currentProphecyIndex];
    
    // نقرأ النص المشكول مع النبوة والشاهد
    const textToSpeak = `النُّبُوءَةُ مِنْ ${prophecy.ref} تَقُولُ: ${prophecy.text}. التَّفْسِيرُ المُبَسَّطُ لِلْأَطْفَالِ: ${prophecy.explanation}`;

    // إعداد التحدث
    currentUtterance = new SpeechSynthesisUtterance(textToSpeak);
    currentUtterance.lang = "ar-EG"; // تعيين اللهجة العربية المصرية لتكون لطيفة
    
    // تعديل الخواص ليبدو كصوت طفل
    currentUtterance.pitch = 1.45; // نبرة صوت حادة/عالية لتشبه الأطفال
    currentUtterance.rate = 0.92;  // سرعة أبطأ قليلاً لتسهيل الفهم اللغوي للأطفال

    // محاولة اختيار أفضل صوت عربي متاح في المتصفح
    const voices = synth.getVoices();
    const arabicVoice = voices.find(voice => voice.lang.startsWith("ar"));
    if (arabicVoice) {
        currentUtterance.voice = arabicVoice;
    }

    // أحداث تشغيل الصوت
    currentUtterance.onstart = () => {
        isSpeaking = true;
        playAudioBtn.querySelector(".play-icon").classList.add("hidden");
        playAudioBtn.querySelector(".pause-icon").classList.remove("hidden");
        visualizer.classList.add("playing");
    };

    currentUtterance.onend = () => {
        resetAudioControls();
    };

    currentUtterance.onerror = () => {
        resetAudioControls();
    };

    // بدء القراءة
    synth.speak(currentUtterance);
}

function stopSpeech() {
    if (synth && synth.speaking) {
        synth.cancel();
    }
    resetAudioControls();
}

function resetAudioControls() {
    isSpeaking = false;
    playAudioBtn.querySelector(".play-icon").classList.remove("hidden");
    playAudioBtn.querySelector(".pause-icon").classList.add("hidden");
    visualizer.classList.remove("playing");
}

// تحميل الأصوات في المتصفح تلقائياً فور توفرها
if (synth && synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = () => {
        // يتم تحميل الأصوات في الخلفية
    };
}
