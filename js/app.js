// Simplified Kids App Controller for "نبوات المسيح للأطفال"

document.addEventListener("DOMContentLoaded", () => {
  // Initialize elements & states
  initTheme();
  initRouter();
  initScrollEffects();
  initGlobalSearch();
  
  // Render prophets
  renderProphetsGrid();
  
  // Initialize Counters
  setTimeout(animateCounters, 1000);

  // Hide loader
  const loader = document.getElementById("loader-screen");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 600);
  }
});

// ==========================================
// 1. ROUTER & NAVIGATION SYSTEM
// ==========================================
const routes = {
  "home": "section-home",
  "404": "section-404"
};

let currentRoute = "home";

function initRouter() {
  window.addEventListener("hashchange", handleRouting);
  handleRouting();
}

function handleRouting() {
  const hash = window.location.hash.substring(1) || "home";
  
  let route = hash.split("/")[0] || "home";
  if (route.startsWith("/")) route = route.substring(1);

  // Stop any active Speech synthesis if route changes
  if (window.speechEngine) {
    window.speechEngine.stop();
    resetModalPlayButtonState();
  }

  let sectionId = routes[route];
  if (!sectionId) {
    sectionId = routes["404"];
    route = "404";
  }

  // Toggle sections
  document.querySelectorAll(".app-section").forEach(sec => {
    sec.classList.remove("active");
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active");
  }

  currentRoute = route;
  window.scrollTo({ top: 0, behavior: "smooth" });
  
  if (route === "home") {
    setTimeout(animateCounters, 300);
  }
}

function navigateTo(hash) {
  window.location.hash = hash;
}

// ==========================================
// 2. THEME CONFIGURATION (DARK / LIGHT)
// ==========================================
function initTheme() {
  const themeBtn = document.getElementById("theme-toggle");
  if (!themeBtn) return;

  const currentTheme = window.storage.getThemePreference();
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    updateThemeIcon(true);
  } else {
    document.body.classList.remove("dark-mode");
    updateThemeIcon(false);
  }

  themeBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    window.storage.saveThemePreference(isDark ? "dark" : "light");
    updateThemeIcon(isDark);
    showToast("تغيير المظهر 🌟", isDark ? "تفعيل مظهر النجوم البراق" : "تفعيل مظهر الشمس المضيء", "success");
  });
}

function updateThemeIcon(isDark) {
  const icon = document.querySelector("#theme-toggle svg");
  if (!icon) return;
  
  if (isDark) {
    // Sun Icon
    icon.innerHTML = `<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41z"/>`;
  } else {
    // Moon Icon
    icon.innerHTML = `<path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-9 8.3-9.9.5-.1.9.3.8.8-.4 1.5-.1 3.2.9 4.6 1.2 1.7 3.1 2.7 5.1 2.7.8 0 1.6-.1 2.4-.4.5-.2 1 .2.8.7-.9 4.7-5 8.1-9.9 8.1-1.3 0-2.5-.2-3.7-.6 1.6 2.2 4.2 3.6 7.1 3.6 4 0 7.4-2.7 8.5-6.5.1-.5.7-.7 1.1-.4.4.3.5.8.3 1.3-1.6 5.1-6.3 8.6-11.7 8.6z"/>`;
  }
}

// ==========================================
// 3. SCROLL METRICS & BACK TO TOP
// ==========================================
function initScrollEffects() {
  const progressBar = document.getElementById("scroll-progress");
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const scrollPercent = (window.scrollY / totalHeight) * 100;
      if (progressBar) progressBar.style.width = scrollPercent + "%";
    }

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("active");
      } else {
        backToTopBtn.classList.remove("active");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// ==========================================
// 4. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(title, message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-title">${title}</span>
      <span class="toast-message">${message}</span>
    </div>
    <span class="toast-close">&times;</span>
  `;

  container.appendChild(toast);

  // Close trigger
  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.remove();
  });

  // Auto remove after 4 seconds
  setTimeout(() => {
    toast.style.animation = "slideInLeft 0.35s ease reverse";
    setTimeout(() => {
      toast.remove();
    }, 350);
  }, 4000);
}

// ==========================================
// 5. ANIMATED COUNTERS
// ==========================================
function animateCounters() {
  if (currentRoute !== "home") return;
  const counters = document.querySelectorAll(".counter-number");
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    let count = 0;
    const speed = 1500 / target; // Animate in 1.5s
    
    const updateCount = () => {
      const increment = Math.ceil(target / 40);
      if (count < target) {
        count += increment;
        if (count > target) count = target;
        counter.innerText = count + "+";
        setTimeout(updateCount, speed);
      } else {
        counter.innerText = target + "+";
      }
    };
    
    updateCount();
  });
}

// ==========================================
// 6. RENDER PROPHETS (HOME PAGE)
// ==========================================

// Emoji icons for each prophet as a fallback and decorative element
const prophetEmojis = {
  adam: "🌱", noah: "🚢", abraham: "⭐", moses: "🌊",
  david: "🎵", isaiah: "📜", jeremiah: "💛", daniel: "🦁",
  micah: "🏘️", zechariah: "🫏"
};

function renderProphetsGrid() {
  const grid = document.getElementById("prophets-grid-container");
  if (!grid) return;

  grid.innerHTML = "";
  const prophets = window.prophetsData || [];

  prophets.forEach(prophet => {
    const isFav = window.storage.isProphetFavorite(prophet.id);
    const emoji = prophetEmojis[prophet.id] || "✨";
    const bgColor = prophet.bgColor || "#60a5fa";
    const card = document.createElement("div");
    card.className = "prophet-card";
    // Apply the prophet's unique color to the card's top border accent
    card.style.borderTopColor = bgColor;
    card.style.borderTopWidth = "6px";

    card.innerHTML = `
      <div class="favorite-btn ${isFav ? "active" : ""}" data-id="${prophet.id}">
        <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </div>

      <div class="prophet-avatar-container" style="background: linear-gradient(135deg, ${bgColor}99 0%, ${bgColor} 100%);">
        <!-- DiceBear SVG cartoon avatar loaded as <img> -->
        <img
          class="prophet-avatar"
          src="${prophet.avatar}"
          alt="صورة كرتونية للنبي ${prophet.name}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <!-- Emoji fallback shown if avatar fails to load -->
        <div class="prophet-emoji-fallback" style="display:none; width:100%; height:100%; border-radius:50%; justify-content:center; align-items:center; font-size:3.5rem;">
          ${emoji}
        </div>
      </div>

      <div class="prophet-emoji-badge">${emoji}</div>
      <h3 class="prophet-name" style="color: ${bgColor};">${prophet.name}</h3>
      <p class="prophet-desc">${prophet.description}</p>
      <button class="prophet-btn" data-id="${prophet.id}" style="background-color:${bgColor}; color:#fff; border-color:${bgColor};">
        استمع للحكاية 🔉
      </button>
    `;

    // Favorites Event
    card.querySelector(".favorite-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      const btn = e.currentTarget;
      const id = btn.getAttribute("data-id");
      const active = window.storage.toggleFavoriteProphet(id);

      if (active) {
        btn.classList.add("active");
        showToast("المفضلة المفرحة ❤️", `تم حفظ صديقنا ${prophet.name} في المفضلة!`, "success");
      } else {
        btn.classList.remove("active");
        showToast("المفضلة المفرحة 💛", `تمت إزالة ${prophet.name} من المفضلة`, "warning");
      }
    });

    // Modal Trigger
    card.querySelector(".prophet-btn").addEventListener("click", () => {
      openProphecyModal(prophet);
    });

    grid.appendChild(card);
  });
}


// ==========================================
// 7. PROPHECY MODAL & AUDIO ENGINE (TTS)
// ==========================================
let activeSpeechText = "";

function openProphecyModal(prophet) {
  const overlay = document.getElementById("prophecy-modal-overlay");
  if (!overlay) return;

  // Insert details
  document.getElementById("modal-cover").src = prophet.illustration;
  document.getElementById("modal-prophet-name").innerText = `حكاية النبي ${prophet.name}`;
  document.getElementById("modal-prophecy-title").innerText = prophet.title;
  document.getElementById("modal-prophecy-text").innerText = prophet.prophecy;
  document.getElementById("modal-prophecy-ref").innerText = prophet.reference;
  document.getElementById("modal-fulfillment-text").innerText = prophet.fulfillment;

  // TTS Setup (kid-friendly script)
  activeSpeechText = `حكاية صديقنا البار ${prophet.name}، بعنوان: ${prophet.title}، ونص الوعد يقول: ${prophet.prophecy}، ومكان هذا الوعد في التوراة هو: ${prophet.reference}، وقصة تحقيق هذا الوعد الجميل هي: ${prophet.fulfillment}`;
  
  // Set up speech voices dropdown
  const voiceSelect = document.getElementById("speech-voice-select");
  if (voiceSelect && window.speechEngine) {
    voiceSelect.innerHTML = "";
    const voices = window.speechEngine.getArabicVoices();
    if (voices.length === 0) {
      voiceSelect.innerHTML = `<option value="">صوت عربي كرتوني افتراضي</option>`;
    } else {
      voices.forEach(v => {
        voiceSelect.innerHTML += `<option value="${v.name}">${v.name} (${v.lang})</option>`;
      });
      if (window.speechEngine.currentVoice) {
        voiceSelect.value = window.speechEngine.currentVoice.name;
      }
    }
  }

  // Reset Speech Synthesis controls UI
  resetModalPlayButtonState();

  // Show Modal
  overlay.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable body scroll

  // Setup control listeners
  setupModalActionListeners(prophet);
}

function closeProphecyModal() {
  const overlay = document.getElementById("prophecy-modal-overlay");
  if (!overlay) return;

  overlay.classList.remove("active");
  document.body.style.overflow = ""; // Enable scroll
  
  if (window.speechEngine) {
    window.speechEngine.stop();
  }
  resetModalPlayButtonState();
}

function resetModalPlayButtonState() {
  const btn = document.getElementById("speech-play-btn");
  const wave = document.getElementById("speech-audio-wave");
  if (btn) {
    // Reset to Play Triangle
    btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
    btn.setAttribute("title", "تشغيل");
  }
  if (wave) {
    wave.classList.remove("active");
  }
}

function setupModalActionListeners(prophet) {
  const overlay = document.getElementById("prophecy-modal-overlay");
  
  // Close triggers
  const closeBtn = overlay.querySelector(".modal-close-btn");
  closeBtn.onclick = closeProphecyModal;
  overlay.onclick = (e) => {
    if (e.target === overlay) closeProphecyModal();
  };

  // Keyboard accessibility
  window.onkeydown = (e) => {
    if (e.key === "Escape") {
      closeProphecyModal();
    }
  };

  // Utility Actions (Copy & Print)
  const copyBtn = document.getElementById("btn-copy-prophecy");
  copyBtn.onclick = () => {
    const textToCopy = `${prophet.title}\n${prophet.prophecy}\n(${prophet.reference})`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast("نسخ الوعد 📝", "تم نسخ كلمات الوعد بنجاح لترسلها لأصدقائك!", "success");
    }).catch(err => {
      showToast("خطأ 😢", "فشل نسخ النص", "error");
    });
  };

  const printBtn = document.getElementById("btn-print-prophecy");
  printBtn.onclick = () => {
    window.print();
  };

  // Speech Controllers
  const playBtn = document.getElementById("speech-play-btn");
  const pauseBtn = document.getElementById("speech-pause-btn");
  const stopBtn = document.getElementById("speech-stop-btn");
  const replayBtn = document.getElementById("speech-replay-btn");
  const voiceSelect = document.getElementById("speech-voice-select");
  const cartoonSwitch = document.getElementById("speech-cartoon-switch");

  if (voiceSelect) {
    voiceSelect.onchange = (e) => {
      if (window.speechEngine) {
        window.speechEngine.setVoice(e.target.value);
        if (window.speechEngine.isPlaying) {
          triggerSpeechPlayback();
        }
      }
    };
  }

  // Cartoon mode switch (Active by default for kids)
  if (cartoonSwitch) {
    // Reset switch state representation on each modal open to match engine default
    if (window.speechEngine && window.speechEngine.isCartoon) {
      cartoonSwitch.classList.add("active");
    } else {
      cartoonSwitch.classList.remove("active");
    }

    cartoonSwitch.onclick = () => {
      const active = cartoonSwitch.classList.toggle("active");
      if (window.speechEngine) {
        window.speechEngine.setCartoonMode(active);
        showToast("تغيير الصوت 🧸", active ? "تم تفعيل الصوت الكرتوني المرح والجميل" : "تم تفعيل صوت الحكواتي الطبيعي المريح", "success");
        // If speaking, restart to apply voice pitch changes
        if (window.speechEngine.isPlaying) {
          window.speechEngine.stop();
          triggerSpeechPlayback();
        }
      }
    };
  }

  const triggerSpeechPlayback = () => {
    if (!window.speechEngine) return;
    
    const playIcon = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
    const pauseIcon = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
    const wave = document.getElementById("speech-audio-wave");

    if (window.speechEngine.isPlaying) {
      if (window.speechEngine.isPaused) {
        window.speechEngine.resume();
      } else {
        window.speechEngine.pause();
      }
    } else {
      window.speechEngine.speak(
        activeSpeechText,
        // onStart
        () => {
          playBtn.innerHTML = pauseIcon;
          playBtn.setAttribute("title", "إيقاف مؤقت");
          if (wave) wave.classList.add("active");
        },
        // onEnd
        () => {
          playBtn.innerHTML = playIcon;
          playBtn.setAttribute("title", "تشغيل");
          if (wave) wave.classList.remove("active");
        },
        // onPause
        () => {
          playBtn.innerHTML = playIcon;
          playBtn.setAttribute("title", "استئناف");
          if (wave) wave.classList.remove("active");
        },
        // onResume
        () => {
          playBtn.innerHTML = pauseIcon;
          playBtn.setAttribute("title", "إيقاف مؤقت");
          if (wave) wave.classList.add("active");
        },
        // onError
        (err) => {
          console.error("Speech playback error:", err);
          resetModalPlayButtonState();
          showToast("عذراً 😢", "هناك مشكلة بسيطة بالنطق بجهازك، جرب تغيير صوت المتحدث.", "error");
        }
      );
    }
  };

  playBtn.onclick = triggerSpeechPlayback;

  pauseBtn.onclick = () => {
    if (window.speechEngine) window.speechEngine.pause();
  };

  stopBtn.onclick = () => {
    if (window.speechEngine) {
      window.speechEngine.stop();
      resetModalPlayButtonState();
    }
  };

  replayBtn.onclick = () => {
    if (window.speechEngine) {
      window.speechEngine.stop();
      setTimeout(triggerSpeechPlayback, 100);
    }
  };
}

// ==========================================
// 8. GLOBAL SEARCH SYSTEM
// ==========================================
function initGlobalSearch() {
  const searchInput = document.getElementById("nav-search-input");
  const resultsOverlay = document.getElementById("search-results-dropdown");
  
  if (!searchInput || !resultsOverlay) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    
    if (!query) {
      resultsOverlay.classList.remove("active");
      resultsOverlay.innerHTML = "";
      return;
    }

    const matches = [];
    (window.prophetsData || []).forEach(p => {
      if (p.name.toLowerCase().includes(query) || 
          p.description.toLowerCase().includes(query) ||
          p.title.toLowerCase().includes(query) ||
          p.prophecy.toLowerCase().includes(query)) {
        matches.push(p);
      }
    });
    
    renderSearchResults(matches, resultsOverlay);
  });

  // Close search overlay when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !resultsOverlay.contains(e.target)) {
      resultsOverlay.classList.remove("active");
    }
  });

  searchInput.addEventListener("focus", () => {
    if (searchInput.value.trim()) {
      resultsOverlay.classList.add("active");
    }
  });
}

function renderSearchResults(matches, container) {
  container.innerHTML = "";
  
  if (matches.length === 0) {
    container.innerHTML = `<div class="search-no-results">لا توجد نتائج مطابقة لـبحثك. 🔍</div>`;
    container.classList.add("active");
    return;
  }

  const group = document.createElement("div");
  group.className = "search-result-group";
  group.innerHTML = `<div class="search-group-title">الأنبياء والوعود الحبيبة</div>`;
  
  matches.forEach(p => {
    const item = document.createElement("div");
    item.className = "search-result-item";
    item.innerHTML = `
      <div>
        <div class="search-item-title">${p.name}</div>
        <div class="search-item-desc">${p.title}</div>
      </div>
    `;
    item.onclick = () => {
      container.classList.remove("active");
      document.getElementById("nav-search-input").value = "";
      
      // Open prophecy details modal
      openProphecyModal(p);
    };
    group.appendChild(item);
  });
  
  container.appendChild(group);
  container.classList.add("active");
}
