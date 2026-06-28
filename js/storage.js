// LocalStorage manager for persistent interactions

const STORAGE_KEYS = {
  THEME: "prophecies_theme",
  BOOKINGS: "prophecies_bookings",
  QUESTIONS: "prophecies_questions",
  FAVORITES: "prophecies_favorites",
  BOOKMARKS: "prophecies_bookmarks"
};

// --- General Helpers ---
function getFromStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    console.error("Error reading from localStorage", e);
    return defaultValue;
  }
}

function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error("Error writing to localStorage", e);
  }
}

// --- Theme Preference ---
function getThemePreference() {
  return getFromStorage(STORAGE_KEYS.THEME, "light");
}

function saveThemePreference(theme) {
  saveToStorage(STORAGE_KEYS.THEME, theme);
}

// --- Favorites (Prophets) ---
function getFavoriteProphets() {
  return getFromStorage(STORAGE_KEYS.FAVORITES, []);
}

function toggleFavoriteProphet(prophetId) {
  const favorites = getFavoriteProphets();
  const index = favorites.indexOf(prophetId);
  if (index === -1) {
    favorites.push(prophetId);
  } else {
    favorites.splice(index, 1);
  }
  saveToStorage(STORAGE_KEYS.FAVORITES, favorites);
  return favorites.includes(prophetId);
}

function isProphetFavorite(prophetId) {
  return getFavoriteProphets().includes(prophetId);
}

// --- Bookmarks (Articles) ---
function getBookmarkedArticles() {
  return getFromStorage(STORAGE_KEYS.BOOKMARKS, []);
}

function toggleBookmarkArticle(articleId) {
  const bookmarks = getBookmarkedArticles();
  const index = bookmarks.indexOf(articleId);
  if (index === -1) {
    bookmarks.push(articleId);
  } else {
    bookmarks.splice(index, 1);
  }
  saveToStorage(STORAGE_KEYS.BOOKMARKS, bookmarks);
  return bookmarks.includes(articleId);
}

function isArticleBookmarked(articleId) {
  return getBookmarkedArticles().includes(articleId);
}

// --- Bookings ---
function getBookings() {
  return getFromStorage(STORAGE_KEYS.BOOKINGS, []);
}

function addBooking(bookingData) {
  const bookings = getBookings();
  const newBooking = {
    id: "booking_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
    date: new Date().toISOString(),
    ...bookingData
  };
  bookings.push(newBooking);
  saveToStorage(STORAGE_KEYS.BOOKINGS, bookings);
  return newBooking;
}

// --- Questions & Answers (Community Forum) ---
// Default seed questions to make the community look alive
const defaultQuestions = [
  {
    id: "q-1",
    name: "ملاك ميخائيل",
    text: "كيف نربط بين نبوة تكوين ٣: ١٥ عن نسل المرأة وسحق رأس الحية وبين لاهوت السيد المسيح؟ هل المرأة هنا تشير فقط للعذراء مريم؟",
    date: new Date(Date.now() - 3600000 * 24 * 3).toISOString(), // 3 days ago
    likes: 12,
    replies: [
      {
        id: "r-1",
        name: "خادم كنسي",
        text: "نعم، النبوة تشير نبوياً للعذراء مريم التي ولدت المسيح دون زرع بشر (نسل المرأة). والمسيح بصلبه وقيامته سحق رأس الحية (الشيطان).",
        date: new Date(Date.now() - 3600000 * 24 * 2).toISOString()
      }
    ]
  },
  {
    id: "q-2",
    name: "سارة عبد المسيح",
    text: "لماذا لم يكتب داود النبي بشكل مباشر اسم 'يسوع' في مزامير الآلام؟",
    date: new Date(Date.now() - 3600000 * 24).toISOString(), // 1 day ago
    likes: 8,
    replies: [
      {
        id: "r-2",
        name: "د. إميل حبيب",
        text: "النبوات تكتب بلغة رمزية ونبوية تكشف عن الصفات والأعمال والمصير، والاسم 'يسوع' يعني 'يهوه يخلص' وهو ما ظهر جلياً في المضمون النبوي لكل المزامير المسيانية.",
        date: new Date(Date.now() - 3600000 * 12).toISOString()
      }
    ]
  }
];

function getQuestions() {
  let questions = getFromStorage(STORAGE_KEYS.QUESTIONS, null);
  if (!questions) {
    questions = defaultQuestions;
    saveToStorage(STORAGE_KEYS.QUESTIONS, questions);
  }
  return questions;
}

function addQuestion(name, text) {
  const questions = getQuestions();
  const newQuestion = {
    id: "q_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
    name: name || "زائر مجهول",
    text: text,
    date: new Date().toISOString(),
    likes: 0,
    likedBy: [], // Array of question IDs the user liked
    replies: []
  };
  questions.unshift(newQuestion);
  saveToStorage(STORAGE_KEYS.QUESTIONS, questions);
  return newQuestion;
}

function toggleLikeQuestion(questionId) {
  const questions = getQuestions();
  const qIndex = questions.findIndex(q => q.id === questionId);
  if (qIndex === -1) return null;

  const question = questions[qIndex];
  if (!question.likedBy) {
    question.likedBy = [];
  }

  // To prevent multi-like from the same user session:
  // We will track liked question IDs in user's profile
  const userLikes = getFromStorage("user_likes_tracker", []);
  const userLikeIndex = userLikes.indexOf(questionId);

  if (userLikeIndex === -1) {
    // User hasn't liked it yet
    question.likes = (question.likes || 0) + 1;
    userLikes.push(questionId);
  } else {
    // User already liked it, unlike it
    question.likes = Math.max(0, (question.likes || 1) - 1);
    userLikes.splice(userLikeIndex, 1);
  }

  saveToStorage("user_likes_tracker", userLikes);
  saveToStorage(STORAGE_KEYS.QUESTIONS, questions);
  return { likes: question.likes, userLiked: userLikes.includes(questionId) };
}

function hasUserLikedQuestion(questionId) {
  const userLikes = getFromStorage("user_likes_tracker", []);
  return userLikes.includes(questionId);
}

function addReply(questionId, replyName, replyText) {
  const questions = getQuestions();
  const qIndex = questions.findIndex(q => q.id === questionId);
  if (qIndex === -1) return null;

  const newReply = {
    id: "r_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
    name: replyName || "خادم مجهول",
    text: replyText,
    date: new Date().toISOString()
  };

  if (!questions[qIndex].replies) {
    questions[qIndex].replies = [];
  }
  questions[qIndex].replies.push(newReply);
  saveToStorage(STORAGE_KEYS.QUESTIONS, questions);
  return newReply;
}

// Export functions to window
window.storage = {
  getThemePreference,
  saveThemePreference,
  getFavoriteProphets,
  toggleFavoriteProphet,
  isProphetFavorite,
  getBookmarkedArticles,
  toggleBookmarkArticle,
  isArticleBookmarked,
  getBookings,
  addBooking,
  getQuestions,
  addQuestion,
  toggleLikeQuestion,
  hasUserLikedQuestion,
  addReply
};
