/**
 * Pure state machine / logic for detecting the 10-tap musical Easter egg.
 * Designed to be 100% decoupled from DOM/Web Audio for deterministic unit testing.
 */

export interface EasterEggConfig {
  targetClicks: number;
  windowMs: number;
}

export const DEFAULT_EASTER_EGG_CONFIG: EasterEggConfig = {
  targetClicks: 10,
  windowMs: 3000,
};

export class EasterEggDetector {
  private timestamps: number[] = [];
  private isLocked: boolean = false;
  private readonly config: EasterEggConfig;

  constructor(config: Partial<EasterEggConfig> = {}) {
    this.config = { ...DEFAULT_EASTER_EGG_CONFIG, ...config };
  }

  /**
   * Registers a tap at the given timestamp (in ms).
   * Returns true if this tap successfully triggered the Easter egg.
   */
  public registerTap(now: number = Date.now()): boolean {
    if (this.isLocked) {
      return false;
    }

    // Prune timestamps older than the rolling window
    const cutoff = now - this.config.windowMs;
    this.timestamps = this.timestamps.filter((ts) => ts >= cutoff);

    // Add current tap
    this.timestamps.push(now);

    // Check if threshold reached
    if (this.timestamps.length >= this.config.targetClicks) {
      // Triggered!
      this.timestamps = [];
      this.isLocked = true;
      return true;
    }

    return false;
  }

  /**
   * Gets the current count of taps within the active time window.
   */
  public getCount(now: number = Date.now()): number {
    const cutoff = now - this.config.windowMs;
    this.timestamps = this.timestamps.filter((ts) => ts >= cutoff);
    return this.timestamps.length;
  }

  /**
   * Unlocks the detector once the reward phrase finishes playing,
   * allowing the visitor to discover it again later.
   */
  public unlock(): void {
    this.isLocked = false;
    this.timestamps = [];
  }

  /**
   * Returns whether the detector is currently locked (melody in progress).
   */
  public getIsLocked(): boolean {
    return this.isLocked;
  }

  /**
   * Manually resets the state.
   */
  public reset(): void {
    this.timestamps = [];
    this.isLocked = false;
  }
}
