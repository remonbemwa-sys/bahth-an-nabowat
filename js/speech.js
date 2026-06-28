// Child-Friendly Robust SpeechSynthesis engine for reading prophecies

class ProphecySpeechEngine {
  constructor() {
    this.synth = window.speechSynthesis;
    this.utterance = null;
    this.isPaused = false;
    this.isPlaying = false;
    this.voices = [];
    this.currentVoice = null;
    this.isCartoon = true; // Default to cartoon voice mode for children!
    
    if (this.synth) {
      // Chrome loads voices asynchronously, so we listen to this event
      this.synth.onvoiceschanged = () => this.loadVoices();
      this.loadVoices();
    } else {
      console.warn("SpeechSynthesis API is not supported in this browser.");
    }
  }

  loadVoices() {
    if (!this.synth) return;
    try {
      const allVoices = this.synth.getVoices();
      // Filter for Arabic voices
      this.voices = allVoices.filter(v => v.lang.startsWith("ar"));
      
      // If no Arabic voices found, try looking for general voices or leave it empty for default
      if (this.voices.length > 0) {
        // Select Microsoft Shakir, Hoda, or standard Google Arabic voice if available
        this.currentVoice = this.voices.find(v => v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Hoda") || v.name.includes("Naayf")) || this.voices[0];
      }
      console.log("Arabic voices loaded:", this.voices.map(v => v.name));
    } catch (e) {
      console.error("Error loading SpeechSynthesis voices", e);
    }
  }

  getArabicVoices() {
    // If empty, force refresh voices list
    if (this.voices.length === 0 && this.synth) {
      this.loadVoices();
    }
    return this.voices;
  }

  setVoice(voiceName) {
    if (this.voices.length > 0) {
      this.currentVoice = this.voices.find(v => v.name === voiceName) || this.currentVoice;
    }
  }

  setCartoonMode(enabled) {
    this.isCartoon = !!enabled;
  }

  speak(text, onStart, onEnd, onPause, onResume, onError) {
    if (!this.synth) {
      if (onError) onError("المتصفح لا يدعم القارئ الصوتي");
      return;
    }

    try {
      // CRITICAL: Cancel any running speech before starting a new one
      this.synth.cancel();

      // Create a fresh utterance instance
      this.utterance = new SpeechSynthesisUtterance(text);
      
      // Set language fallbacks
      this.utterance.lang = "ar-EG"; // Egypt Arabic is friendly, fallback to Saudi or general ar
      
      // Bind voice if found and valid
      if (this.currentVoice) {
        this.utterance.voice = this.currentVoice;
        this.utterance.lang = this.currentVoice.lang;
      }

      // Configure speeds and pitches for children
      if (this.isCartoon) {
        // High pitch sounds like a cute cartoon chipmunk character!
        this.utterance.pitch = 1.75;
        this.utterance.rate = 1.15;
      } else {
        // Standard voice is slightly slower for clear classical Arabic pronunciation for children
        this.utterance.pitch = 1.05;
        this.utterance.rate = 0.90;
      }

      // Event hooks
      this.utterance.onstart = () => {
        this.isPlaying = true;
        this.isPaused = false;
        console.log("Speech started speaking...");
        if (onStart) onStart();
      };

      this.utterance.onend = () => {
        this.isPlaying = false;
        this.isPaused = false;
        console.log("Speech finished speaking.");
        if (onEnd) onEnd();
      };

      this.utterance.onerror = (event) => {
        this.isPlaying = false;
        this.isPaused = false;
        console.error("SpeechSynthesisUtterance error event:", event);
        if (onError) onError(event);
      };

      this.utterance.onpause = () => {
        this.isPaused = true;
        if (onPause) onPause();
      };

      this.utterance.onresume = () => {
        this.isPaused = false;
        if (onResume) onResume();
      };

      // Speak!
      this.synth.speak(this.utterance);

      // Force resume on Chrome (occasionally Chrome SpeechSynthesis pauses randomly after 15 seconds)
      // We check if it is speaking and trigger resume if needed
      const rInterval = setInterval(() => {
        if (this.isPlaying && !this.isPaused) {
          this.synth.resume();
        } else {
          clearInterval(rInterval);
        }
      }, 10000);

    } catch (err) {
      console.error("Fatal error during speech synthesis speak()", err);
      if (onError) onError(err);
    }
  }

  pause() {
    if (this.synth && this.isPlaying && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
    }
  }

  resume() {
    if (this.synth && this.isPlaying && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isPlaying = false;
      this.isPaused = false;
    }
  }
}

// Instantiate and expose globally
window.speechEngine = new ProphecySpeechEngine();
