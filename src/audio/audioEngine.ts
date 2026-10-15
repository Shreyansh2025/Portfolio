/**
 * Web Audio Synthesizer for warm, low-pass filtered pentatonic piano tones,
 * dynamic chord/arpeggio variations, continuous ambient background mode,
 * and peaceful ambient rewards.
 */

export type SoundTheme = 'piano' | 'chime' | 'celesta';

// Warm, peaceful C major / G / Eb pentatonic scale frequencies
const PENTATONIC_FREQUENCIES = [
  261.63, // C4
  293.66, // D4
  329.63, // E4
  392.00, // G4
  440.00, // A4
  523.25, // C5
  587.33, // D5
  659.25, // E5
  783.99, // G5
  880.00, // A5
];

class AudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isPhrasePlaying: boolean = false;
  private isAmbientPlaying: boolean = false;
  private ambientTimer: number | null = null;
  private theme: SoundTheme = 'piano';
  private noteIndex: number = 0;
  private lastNoteTime: number = 0;
  private hasPlayedIntro: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const storedMute = sessionStorage.getItem('portfolio_audio_muted');
      if (storedMute !== null) {
        this.isMuted = storedMute === 'true';
      }
      const storedTheme = sessionStorage.getItem('portfolio_sound_theme') as SoundTheme | null;
      if (storedTheme && ['piano', 'chime', 'celesta'].includes(storedTheme)) {
        this.theme = storedTheme;
      }
    }
  }

  private initContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('portfolio_audio_muted', String(muted));
    }
    if (muted && this.isAmbientPlaying) {
      this.stopAmbientMusic();
    }
  }

  public toggleMuted(): boolean {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  public getTheme(): SoundTheme {
    return this.theme;
  }

  public setTheme(theme: SoundTheme): void {
    this.theme = theme;
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('portfolio_sound_theme', theme);
    }
    this.playDynamicInteraction(0.08);
  }

  public getIsPhrasePlaying(): boolean {
    return this.isPhrasePlaying;
  }

  public getIsAmbientPlaying(): boolean {
    return this.isAmbientPlaying;
  }

  /**
   * First-visit welcome chime: plays a gentle 3-note warm arpeggio
   * upon the first user interaction on the page.
   */
  public playWelcomeChime(): void {
    if (this.isMuted || this.hasPlayedIntro) return;
    this.hasPlayedIntro = true;
    const ctx = this.initContext();
    if (!ctx) return;

    const t = ctx.currentTime + 0.05;
    // Soft introductory Cmaj9 arpeggio: C4 -> G4 -> E5
    this.renderPianoNote(ctx, 261.63, t, 1.6, 0.07);
    this.renderPianoNote(ctx, 392.00, t + 0.16, 1.8, 0.07);
    this.renderPianoNote(ctx, 659.25, t + 0.35, 2.2, 0.08);
  }

  /**
   * Continuous Peaceful Background Ambient Piano:
   * Plays a quiet, contemplative chord progression inspired by the
   * warm solo piano track uploaded by the user.
   */
  public toggleAmbientMusic(): boolean {
    if (this.isAmbientPlaying) {
      this.stopAmbientMusic();
      return false;
    } else {
      this.startAmbientMusic();
      return true;
    }
  }

  public startAmbientMusic(): void {
    if (this.isMuted) this.setMuted(false);
    this.isAmbientPlaying = true;
    this.playAmbientLoopCycle();
  }

  public stopAmbientMusic(): void {
    this.isAmbientPlaying = false;
    if (this.ambientTimer !== null) {
      clearTimeout(this.ambientTimer);
      this.ambientTimer = null;
    }
  }

  private playAmbientLoopCycle(): void {
    if (!this.isAmbientPlaying) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const t0 = ctx.currentTime + 0.05;

    // Tranquil, meditative piano progression (Cmaj9 -> Am9 -> Fmaj7 -> Gsus4 -> C)
    const cycleNotes: Array<[number, number, number, number]> = [
      [0.00, 130.81, 3.4, 0.04], // C3 bass
      [0.10, 261.63, 2.4, 0.035], // C4
      [0.55, 329.63, 2.2, 0.035], // E4
      [0.95, 392.00, 2.4, 0.035], // G4
      [1.35, 493.88, 2.8, 0.04], // B4

      [2.20, 110.00, 3.4, 0.04], // A2 bass
      [2.35, 261.63, 2.2, 0.035], // C4
      [2.75, 329.63, 2.2, 0.035], // E4
      [3.15, 440.00, 2.6, 0.04], // A4

      [4.00, 174.61, 3.4, 0.04], // F3 bass
      [4.15, 261.63, 2.2, 0.035], // C4
      [4.55, 349.23, 2.4, 0.035], // F4
      [4.95, 523.25, 2.8, 0.04], // C5

      [5.80, 196.00, 3.4, 0.04], // G3 bass
      [5.95, 293.66, 2.4, 0.035], // D4
      [6.35, 392.00, 2.6, 0.04], // G4
      [6.75, 523.25, 3.2, 0.04], // C5 resolution
    ];

    cycleNotes.forEach(([offset, freq, dur, vol]) => {
      this.renderPianoNote(ctx, freq, t0 + offset, dur, vol);
    });

    // Schedule next gentle cycle at 8.2 seconds
    this.ambientTimer = window.setTimeout(() => {
      if (this.isAmbientPlaying) {
        this.playAmbientLoopCycle();
      }
    }, 8200);
  }

  /**
   * Dynamic Click Sound Logic:
   * Sometime a single warm felt-piano note,
   * Sometime a gentle 2-note harmonic interval,
   * Sometime a delicate 3-4 note rolled cascade!
   */
  public playDynamicInteraction(baseVolume: number = 0.08): void {
    // If master is muted, or reward phrase is playing, or continuous peaceful background music is active,
    // do not trigger individual click notes to prevent acoustic collision!
    if (this.isMuted || this.isPhrasePlaying || this.isAmbientPlaying) return;

    const now = Date.now();
    if (now - this.lastNoteTime < 65) return;
    this.lastNoteTime = now;

    if (!this.hasPlayedIntro) {
      this.playWelcomeChime();
      return;
    }

    const ctx = this.initContext();
    if (!ctx) return;

    const rand = Math.random();

    if (rand < 0.60) {
      const freq = this.getNextFrequency();
      this.renderNoteByTheme(ctx, freq, ctx.currentTime, 0.9, baseVolume);
    } else if (rand < 0.85) {
      const baseFreq = this.getNextFrequency();
      const intervalFreq = this.getHarmonicCompanion(baseFreq);
      const t = ctx.currentTime;
      this.renderNoteByTheme(ctx, baseFreq, t, 1.1, baseVolume * 0.9);
      this.renderNoteByTheme(ctx, intervalFreq, t + 0.04, 1.2, baseVolume * 0.8);
    } else {
      const baseIdx = this.noteIndex;
      const numNotes = Math.random() > 0.5 ? 3 : 4;
      const t = ctx.currentTime;

      for (let i = 0; i < numNotes; i++) {
        const freq = PENTATONIC_FREQUENCIES[(baseIdx + i * 2) % PENTATONIC_FREQUENCIES.length];
        this.renderNoteByTheme(ctx, freq, t + i * 0.05, 1.3 - i * 0.1, baseVolume * 0.75);
      }
      this.noteIndex = (this.noteIndex + numNotes) % PENTATONIC_FREQUENCIES.length;
    }
  }

  private getNextFrequency(): number {
    const freq = PENTATONIC_FREQUENCIES[this.noteIndex % PENTATONIC_FREQUENCIES.length];
    this.noteIndex = (this.noteIndex + 1) % PENTATONIC_FREQUENCIES.length;
    return freq;
  }

  private getHarmonicCompanion(freq: number): number {
    const idx = PENTATONIC_FREQUENCIES.indexOf(freq);
    if (idx !== -1) {
      return PENTATONIC_FREQUENCIES[(idx + 2) % PENTATONIC_FREQUENCIES.length];
    }
    return freq * 1.5;
  }

  private renderNoteByTheme(
    ctx: AudioContext,
    freq: number,
    startTime: number,
    duration: number,
    volume: number
  ): void {
    if (this.theme === 'chime') {
      this.renderChimeNote(ctx, freq, startTime, duration, volume);
    } else if (this.theme === 'celesta') {
      this.renderCelestaNote(ctx, freq, startTime, duration, volume);
    } else {
      this.renderPianoNote(ctx, freq, startTime, duration, volume);
    }
  }

  /**
   * Warm, low-pass filtered acoustic felt-piano tone
   */
  private renderPianoNote(
    ctx: AudioContext,
    freq: number,
    startTime: number,
    duration: number,
    volume: number
  ): void {
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(Math.min(freq * 3.0, 1100), startTime);
    filter.frequency.exponentialRampToValueAtTime(Math.max(freq * 1.05, 240), startTime + duration);

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, startTime);
    masterGain.gain.linearRampToValueAtTime(volume, startTime + 0.005);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    const harmonics = [
      { mult: 1, gain: 0.85, type: 'sine' as OscillatorType },
      { mult: 2, gain: 0.24, type: 'triangle' as OscillatorType },
      { mult: 3, gain: 0.09, type: 'sine' as OscillatorType },
    ];

    harmonics.forEach(({ mult, gain: hRatio, type }) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq * mult, startTime);

      g.gain.setValueAtTime(hRatio, startTime);
      g.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(g);
      g.connect(filter);
      osc.start(startTime);
      osc.stop(startTime + duration + 0.05);
    });

    filter.connect(masterGain);
    masterGain.connect(ctx.destination);
  }

  private renderChimeNote(
    ctx: AudioContext,
    freq: number,
    startTime: number,
    duration: number,
    volume: number
  ): void {
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, startTime);
    masterGain.gain.linearRampToValueAtTime(volume * 0.85, startTime + 0.015);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    const partials = [
      { mult: 1.0, gain: 0.8 },
      { mult: 2.76, gain: 0.22 },
    ];

    partials.forEach(({ mult, gain: pGain }) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * mult, startTime);
      g.gain.setValueAtTime(pGain, startTime);
      g.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
      osc.connect(g);
      g.connect(masterGain);
      osc.start(startTime);
      osc.stop(startTime + duration + 0.05);
    });

    masterGain.connect(ctx.destination);
  }

  private renderCelestaNote(
    ctx: AudioContext,
    freq: number,
    startTime: number,
    duration: number,
    volume: number
  ): void {
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, startTime);
    masterGain.gain.linearRampToValueAtTime(volume * 0.8, startTime + 0.004);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);
    osc.connect(masterGain);
    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);

    masterGain.connect(ctx.destination);
  }

  public playEasterEggPhrase(onEnd?: () => void): Promise<void> {
    if (this.isMuted || this.isPhrasePlaying) {
      return Promise.resolve();
    }

    const ctx = this.initContext();
    if (!ctx) return Promise.resolve();

    this.isPhrasePlaying = true;
    const t0 = ctx.currentTime + 0.05;

    const score: Array<[number, number, number, number]> = [
      [0.00, 130.81, 3.2, 0.09], // C3 bass
      [0.06, 329.63, 2.2, 0.07], // E4
      [0.26, 392.00, 2.0, 0.08], // G4
      [0.52, 493.88, 2.3, 0.08], // B4
      [0.82, 523.25, 2.5, 0.09], // C5
      [1.12, 659.25, 2.4, 0.08], // E5

      [1.50, 164.81, 3.2, 0.09], // E3 bass
      [1.58, 392.00, 2.0, 0.07], // G4
      [1.84, 493.88, 2.1, 0.08], // B4
      [2.14, 587.33, 2.4, 0.09], // D5
      [2.48, 783.99, 2.8, 0.09], // G5

      [2.95, 174.61, 3.0, 0.09], // F3 bass
      [3.05, 349.23, 2.2, 0.07], // F4
      [3.32, 523.25, 2.2, 0.08], // C5
      [3.62, 659.25, 2.4, 0.08], // E5
      [3.98, 783.99, 2.6, 0.08], // G5

      [4.35, 130.81, 3.4, 0.09], // C3 bass
      [4.50, 392.00, 2.8, 0.07], // G4
      [4.80, 523.25, 3.2, 0.09], // C5
    ];

    score.forEach(([offset, freq, dur, vol]) => {
      this.renderPianoNote(ctx, freq, t0 + offset, dur, vol);
    });

    const totalDurationMs = 5800;

    return new Promise((resolve) => {
      setTimeout(() => {
        this.isPhrasePlaying = false;
        if (onEnd) onEnd();
        resolve();
      }, totalDurationMs);
    });
  }
}

export const audioEngine = new AudioEngine();
