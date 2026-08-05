// components/AnimatedCounter.tsx
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number; // ms
  format?: (value: number) => string;
}

const defaultFormat = (value: number): string => {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1)}M`;
  if (value >= 1_000) return `${Math.floor(value / 1_000)}K`;
  return `${value}`;
};

const easeOutExpo = (t: number): number => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = '+',
  duration = 1800,
  format = defaultFormat,
}) => {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutExpo(progress);
            setValue(Math.floor(eased * target));

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setValue(target);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, target, duration]);

  return (
    <span ref={ref} className="stat-number">
      {format(value)}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;