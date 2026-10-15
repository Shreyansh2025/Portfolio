import test from 'node:test';
import assert from 'node:assert/strict';
import { EasterEggDetector } from './easterEggDetector.ts';

test('EasterEggDetector does not trigger before 10 taps', () => {
  const detector = new EasterEggDetector({ targetClicks: 10, windowMs: 3000 });
  const start = 1000;

  for (let i = 0; i < 9; i++) {
    const triggered = detector.registerTap(start + i * 150);
    assert.equal(triggered, false, `Tap ${i + 1} should not trigger`);
  }

  assert.equal(detector.getCount(start + 9 * 150), 9);
});

test('EasterEggDetector triggers on exactly the 10th tap within 3000ms window', () => {
  const detector = new EasterEggDetector({ targetClicks: 10, windowMs: 3000 });
  const start = 1000;

  for (let i = 0; i < 9; i++) {
    const triggered = detector.registerTap(start + i * 200); // 9 taps across 1600ms
    assert.equal(triggered, false);
  }

  // 10th tap at 1800ms
  const triggeredOnTenth = detector.registerTap(start + 1800);
  assert.equal(triggeredOnTenth, true, '10th tap must trigger Easter egg');
  assert.equal(detector.getIsLocked(), true, 'Must lock during melody');
});

test('EasterEggDetector prunes taps outside the 3000ms window', () => {
  const detector = new EasterEggDetector({ targetClicks: 10, windowMs: 3000 });
  
  // 5 taps early on
  detector.registerTap(1000);
  detector.registerTap(1200);
  detector.registerTap(1400);
  detector.registerTap(1600);
  detector.registerTap(1800);

  // Jump ahead by 4 seconds (now = 5800)
  // Those previous 5 taps are now >3000ms old and pruned
  assert.equal(detector.getCount(5800), 0);

  // 5 taps now (total taps in window = 5)
  for (let i = 0; i < 5; i++) {
    detector.registerTap(5800 + i * 200);
  }
  assert.equal(detector.getCount(6600), 5);

  // Another 4 taps (total = 9)
  for (let i = 5; i < 9; i++) {
    const triggered = detector.registerTap(5800 + i * 200);
    assert.equal(triggered, false);
  }

  // 10th tap within the current window
  const triggered = detector.registerTap(5800 + 9 * 200);
  assert.equal(triggered, true);
});

test('EasterEggDetector prevents multiple overlapping triggers while locked, and unlocks when done', () => {
  const detector = new EasterEggDetector({ targetClicks: 10, windowMs: 3000 });
  const start = 1000;

  for (let i = 0; i < 10; i++) {
    detector.registerTap(start + i * 100);
  }

  assert.equal(detector.getIsLocked(), true);

  // Further taps while locked return false
  const tapWhileLocked = detector.registerTap(start + 1500);
  assert.equal(tapWhileLocked, false);

  // Unlock when melody completes
  detector.unlock();
  assert.equal(detector.getIsLocked(), false);
  assert.equal(detector.getCount(start + 2000), 0);

  // Can be triggered again later
  for (let i = 0; i < 9; i++) {
    assert.equal(detector.registerTap(start + 3000 + i * 100), false);
  }
  assert.equal(detector.registerTap(start + 3000 + 9 * 100), true);
});
