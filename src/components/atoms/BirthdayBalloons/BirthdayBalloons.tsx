"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import {
  FIREWORKS_DEFAULTS,
  FIREWORKS_DURATION,
  FIREWORKS_INTERVAL,
  FIREWORKS_PARTICLE_COUNT,
} from "./BirthdayBalloons.consts";

const randomInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const BirthdayBalloons = () => {
  useEffect(() => {
    const animationEnd = Date.now() + FIREWORKS_DURATION;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = FIREWORKS_PARTICLE_COUNT * (timeLeft / FIREWORKS_DURATION);
      confetti({ ...FIREWORKS_DEFAULTS, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...FIREWORKS_DEFAULTS, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, FIREWORKS_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return null;
};
