import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { audioEngine, SoundTheme } from './audioEngine.ts';
import { EasterEggDetector } from './easterEggDetector.ts';

export interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

interface SoundContextValue {
  isMuted: boolean;
  toggleMute: () => void;
  theme: SoundTheme;
  setTheme: (theme: SoundTheme) => void;
  playNote: (toneIndex?: number) => void;
  registerScreenClick: (x?: number, y?: number) => void;
  isEasterEggActive: boolean;
  easterEggNotice: string | null;
  ripples: ClickRipple[];
  isAmbientPlaying: boolean;
  toggleAmbientMusic: () => void;
}

const SoundContext = createContext<SoundContextValue | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState<boolean>(() => audioEngine.getIsMuted());
  const [theme, setThemeState] = useState<SoundTheme>(() => audioEngine.getTheme());
  const [isAmbientPlaying, setIsAmbientPlaying] = useState<boolean>(() => audioEngine.getIsAmbientPlaying());
  const [isEasterEggActive, setIsEasterEggActive] = useState<boolean>(false);
  const [easterEggNotice, setEasterEggNotice] = useState<string | null>(null);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);
  
  const detectorRef = useRef<EasterEggDetector>(new EasterEggDetector({ targetClicks: 10, windowMs: 3000 }));
  const noticeTimerRef = useRef<number | null>(null);
  const rippleIdRef = useRef<number>(0);

  const toggleMute = useCallback(() => {
    const nextMuted = audioEngine.toggleMuted();
    setIsMuted(nextMuted);
    if (nextMuted) {
      setIsAmbientPlaying(false);
    } else {
      audioEngine.playDynamicInteraction(0.07);
    }
  }, []);

  const toggleAmbientMusic = useCallback(() => {
    const isPlaying = audioEngine.toggleAmbientMusic();
    setIsAmbientPlaying(isPlaying);
    if (isPlaying) {
      setIsMuted(false);
    }
  }, []);

  const setTheme = useCallback((newTheme: SoundTheme) => {
    audioEngine.setTheme(newTheme);
    setThemeState(newTheme);
  }, []);

  const playNote = useCallback((toneIndex?: number) => {
    audioEngine.playDynamicInteraction();
  }, []);

  const triggerEasterEgg = useCallback(() => {
    setIsEasterEggActive(true);
    setEasterEggNotice('“Peaceful Nocturne” · A quiet reward unfolds');

    audioEngine.playEasterEggPhrase(() => {
      setIsEasterEggActive(false);
      detectorRef.current.unlock();
      if (noticeTimerRef.current) window.clearTimeout(noticeTimerRef.current);
      noticeTimerRef.current = window.setTimeout(() => {
        setEasterEggNotice(null);
      }, 2500);
    });
  }, []);

  const registerScreenClick = useCallback(
    (x?: number, y?: number) => {
      // 1. Play relaxing tone
      playNote();

      // 2. Add visual water ripple if coordinates provided
      if (typeof x === 'number' && typeof y === 'number') {
        const id = ++rippleIdRef.current;
        setRipples((prev) => [...prev.slice(-6), { id, x, y }]);
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 900);
      }

      // 3. Register tap for Easter egg
      const triggered = detectorRef.current.registerTap(Date.now());
      if (triggered) {
        triggerEasterEgg();
      }
    },
    [playNote, triggerEasterEgg]
  );

  // Global listener: Clicks anywhere on the screen make sound and trigger ripple!
  // Excludes text selections and typing into form fields.
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Check if user is currently selecting text
      const selection = window.getSelection();
      if (selection && selection.toString().trim().length > 0) {
        return;
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Ignore input/textarea/editable controls so typing isn't noisy
      const tagName = target.tagName.toLowerCase();
      if (
        tagName === 'input' ||
        tagName === 'textarea' ||
        tagName === 'select' ||
        target.isContentEditable ||
        target.closest('input, textarea, select, [contenteditable="true"]')
      ) {
        return;
      }

      // Trigger peaceful sound and ripple at mouse location
      registerScreenClick(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleDocumentClick, { capture: true });
    };
  }, [registerScreenClick]);

  return (
    <SoundContext.Provider
      value={{
        isMuted,
        toggleMute,
        theme,
        setTheme,
        playNote,
        registerScreenClick,
        isEasterEggActive,
        easterEggNotice,
        ripples,
        isAmbientPlaying,
        toggleAmbientMusic,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = (): SoundContextValue => {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return ctx;
};
