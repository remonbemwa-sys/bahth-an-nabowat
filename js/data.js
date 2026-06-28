// Kids Cartoon Dataset for the Old Testament Prophecies of Jesus Christ
// Prophet avatars use DiceBear cartoon avatars - free, colorful, child-friendly SVG characters
const prophetsData = [
  {
    id: "adam",
    name: "آدم",
    title: "مخلصنا سيسحق رأس الحية الشارّة",
    description: "أول البشر الكرام، ومنه بدأت وعود المحبة الإلهية لمستقبل مشرق وسعيد.",
    prophecy: "«وَأَضَعُ عَدَاوَةً بَيْنَكِ وَبَيْنَ الْمَرْأَةِ، وَبَيْنَ نَسْلِكِ وَنَسْلِهَا. هُوَ يَسْحَقُ رَأْسَكِ، وَأَنْتِ تَسْحَقِينَ عَقِبَهُ».",
    reference: "التكوين ٣: ١٥",
    fulfillment: "تجسد الرب يسوع المنتصر ليخلصنا من الشر والخطية ويبهج قلوبنا بالأمان والسلام الممتد.",
    // DiceBear 'fun-emoji' style - cheerful emoji-face cartoon avatar
    avatar: "https://api.dicebear.com/8.x/fun-emoji/svg?seed=adam&backgroundColor=b6e3f4&eyes=love&mouth=smile",
    bgColor: "#4ade80",
    illustration: "assets/prophets_cartoon_group.png"
  },
  {
    id: "noah",
    name: "نوح",
    title: "الرب الحبيب سيسكن معنا ويرعانا",
    description: "باني الفلك العجيب وحامي الكائنات الأليفة من الطوفان الكبير.",
    prophecy: "«لِيَفْتَحِ اللهُ لِيَافِثَ فَيَسْكُنَ فِي مَسَاكِنِ سَامٍ، وَلْيَكُنْ كَنْعَانُ عَبْداً لَهُمْ».",
    reference: "التكوين ٩: ٢٧",
    fulfillment: "جاء السيد المسيح وحل بيننا بالمحبة والسلام، وعلمنا كيف نسكن معاً في أمان وفرح.",
    // DiceBear 'adventurer' - a friendly explorer character (fits an ark builder)
    avatar: "https://api.dicebear.com/8.x/fun-emoji/svg?seed=noah&backgroundColor=c0aede&eyes=wink&mouth=cute",
    bgColor: "#60a5fa",
    illustration: "assets/prophets_cartoon_group.png"
  },
  {
    id: "abraham",
    name: "إبراهيم",
    title: "بنسلك الجميل ستتبارك كل الأرض",
    description: "الجد الحنون الطيب وصديق الله الذي نال الوعد الأعظم لبركة كل أطفال العالم.",
    prophecy: "«وَيَتَبَارَكُ فِي نَسْلِكَ جَمِيعُ أُمَمِ الأَرْضِ، مِنْ أَجْلِ أَنَّكَ سَمِعْتَ لِقَوْلِي».",
    reference: "التكوين ٢٢: ١٨",
    fulfillment: "جاء يسوع المخلص من نسل إبراهيم ليكون بركة وفرحة لكل طفل وإنسان في كل بلاد العالم.",
    avatar: "https://api.dicebear.com/8.x/fun-emoji/svg?seed=abraham&backgroundColor=ffd5dc&eyes=plain&mouth=smile",
    bgColor: "#fb923c",
    illustration: "assets/prophets_cartoon_group.png"
  },
  {
    id: "moses",
    name: "موسى",
    title: "سيأتي معلم عظيم وصديق رائع مثلي",
    description: "قائد الشعب اللطيف الذي شق البحر الأحمر بعصاه وحمل الوصايا الثمينة.",
    prophecy: "«يُقِيمُ لَكَ الرَّبُّ إِلهُكَ نَبِيًّا مِنْ وَسَطِكَ مِنْ إِخْوَتِكَ مِثْلِي. لَهُ تَسْمَعُونَ».",
    reference: "التثنية ١٨: ١٥",
    fulfillment: "جاء يسوع المعلم الرائع والصديق الوفي ليعلمنا المحبة الحقيقية ويسير معنا خطوة بخطوة.",
    avatar: "https://api.dicebear.com/8.x/fun-emoji/svg?seed=moses&backgroundColor=d1d4f9&eyes=stars&mouth=tongueOut",
    bgColor: "#a78bfa",
    illustration: "assets/prophets_cartoon_group.png"
  },
  {
    id: "david",
    name: "داود",
    title: "المخلص سينتصر على الموت ويعود للحياة",
    description: "الملك الصغير الشجاع الذي هزم جالوت وغنى أجمل الترانيم لله بقيثارته.",
    prophecy: "«لأَنَّكَ لَنْ تَتْرُكَ نَفْسِي فِي الْهَاوِيَةِ. لاَ تَدَعَ قُدُّوسَكَ يَرَى فَسَاداً».",
    reference: "المزامير ١٦: ١٠",
    fulfillment: "قام يسوع المسيح منتصراً من القبر في فجر يوم الأحد البهيج ليعطينا الحياة والأمل الدائم.",
    avatar: "https://api.dicebear.com/8.x/fun-emoji/svg?seed=david&backgroundColor=ffdfbf&eyes=wink&mouth=wideSmile",
    bgColor: "#f59e0b",
    illustration: "assets/prophets_cartoon_group.png"
  },
  {
    id: "isaiah",
    name: "إشعياء",
    title: "المولود العجيب ابن العذراء مريم",
    description: "النبي البصير الذي رسم أجمل الصور عن سلام المسيح وحبه للأطفال.",
    prophecy: "«هَا الْعَذْرَاءُ تَحْبَلُ وَتَلِدُ ابْنًا وَتَدْعُو اسْمَهُ «عِمَّانُوئِيلَ»».",
    reference: "إشعياء ٧: ١٤",
    fulfillment: "ولادة الطفل يسوع المحبوب من العذراء الطاهرة مريم في ليلة الميلاد المجيد.",
    avatar: "https://api.dicebear.com/8.x/fun-emoji/svg?seed=isaiah&backgroundColor=b6e3f4&eyes=cute&mouth=lilSmile",
    bgColor: "#06b6d4",
    illustration: "assets/prophets_cartoon_group.png"
  },
  {
    id: "jeremiah",
    name: "إرميا",
    title: "عهد الحب الجديد المكتوب في قلوبنا",
    description: "النبي الوفي الذي أحب شعبه وتنبأ بعهد جديد يملأ القلوب بالفرح والمحبة.",
    prophecy: "«أَجْعَلُ شَرِيعَتِي فِي دَاخِلِهِمْ وَأَكْتُبُهَا عَلَى قُلُوبِهِمْ وَأَكُونُ لَهُمْ إِلهاً».",
    reference: "إرميا ٣١: ٣٣",
    fulfillment: "جاء السيد المسيح ليكتب شريعة الحب في قلوبنا لنحب بعضنا بعضاً.",
    avatar: "https://api.dicebear.com/8.x/fun-emoji/svg?seed=jeremiah&backgroundColor=c0aede&eyes=closed&mouth=openSad",
    bgColor: "#ec4899",
    illustration: "assets/prophets_cartoon_group.png"
  },
  {
    id: "daniel",
    name: "دانيآل",
    title: "تحديد موعد مجيء ملك الفرح والسلام",
    description: "الفتى الذكي الشجاع الذي حمته ملائكة الرب داخل جب الأسود.",
    prophecy: "«إِلَى الْمَسِيحِ الرَّئِيسِ سَبْعَةُ أَسَابِيعَ وَاثْنَانِ وَسِتُّونَ أُسْبُوعاً...».",
    reference: "دانيآل ٩: ٢٥",
    fulfillment: "ظهر يسوع المسيح ملك السلام في الزمان المحدد تاريخياً لينشر نوره وفرحته.",
    avatar: "https://api.dicebear.com/8.x/fun-emoji/svg?seed=daniel&backgroundColor=ffd5dc&eyes=shades&mouth=smile",
    bgColor: "#14b8a6",
    illustration: "assets/prophets_cartoon_group.png"
  },
  {
    id: "micah",
    name: "ميخا",
    title: "الولادة البهيجة في قرية بيت لحم الصغيرة",
    description: "النبي القروي الهادئ الذي أعلن للكون موضع ولادة المخلص الحبيب.",
    prophecy: "«أَمَّا أَنْتِ يَا بَيْتَ لَحْمِ أَفْرَاتَةَ... فَمِنْكِ يَخْرُجُ لِي الَّذِي يَكُونُ مُتَسَلِّطاً».",
    reference: "ميخا ٥: ٢",
    fulfillment: "ولد الطفل يسوع في مزود متواضع في قرية بيت لحم، وجاء الرعاة والمجوس بالهدايا.",
    avatar: "https://api.dicebear.com/8.x/fun-emoji/svg?seed=micah&backgroundColor=b6e3f4&eyes=love&mouth=wideSmile",
    bgColor: "#84cc16",
    illustration: "assets/prophets_cartoon_group.png"
  },
  {
    id: "zechariah",
    name: "زكريا",
    title: "الملك الوديع يدخل راكباً على جحش مرح",
    description: "النبي الطيب الذي رسم لوحة واضحة لدخول المسيح الوديع لأورشليم.",
    prophecy: "«اهْتِفِي يَا بِنْتَ أُرُشَلِيمَ. هُوَذَا مَلِكُكِ يَأْتِي إِلَيْكِ. هُوَ عَادِلٌ وَوَدِيعٌ وَرَاكِبٌ عَلَى حِمَارٍ».",
    reference: "زكريا ٩: ٩",
    fulfillment: "دخل يسوع أورشليم راكباً جحشاً بسيطاً والأطفال يستقبلونه بسعف النخل: أوصنا في الأعالي!",
    avatar: "https://api.dicebear.com/8.x/fun-emoji/svg?seed=zechariah&backgroundColor=ffdfbf&eyes=plain&mouth=cute",
    bgColor: "#f43f5e",
    illustration: "assets/prophets_cartoon_group.png"
  }
];

// Export globally
window.prophetsData = prophetsData;
