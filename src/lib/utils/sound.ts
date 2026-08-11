// Web Audio API procedural sound generator for tactile UI feedback

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

export const isSoundEnabled = () => soundEnabled;

export const toggleSound = (): boolean => {
  soundEnabled = !soundEnabled;
  return soundEnabled;
};

const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const playClickSound = (freq = 800, duration = 0.03, type: OscillatorType = 'sine') => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq / 2, ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // Ignore audio context errors
  }
};

export const playHoverSound = () => {
  playClickSound(1200, 0.02, 'triangle');
};

export const playTerminalKeySound = () => {
  playClickSound(600 + Math.random() * 400, 0.02, 'square');
};
