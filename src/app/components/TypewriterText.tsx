import { useEffect, useRef, useState } from 'react';

type TypewriterTextProps = {
  text: string;
  className?: string;
  speedMs?: number;
  startDelayMs?: number;
  showCursor?: boolean;
};

export function TypewriterText({
  text,
  className,
  speedMs = 28,
  startDelayMs = 150,
  showCursor = true,
}: TypewriterTextProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const startTimeoutRef = useRef<number | null>(null);
  const tickTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setVisibleCount(0);

    if (startTimeoutRef.current) {
      window.clearTimeout(startTimeoutRef.current);
      startTimeoutRef.current = null;
    }

    if (tickTimeoutRef.current) {
      window.clearTimeout(tickTimeoutRef.current);
      tickTimeoutRef.current = null;
    }

    let cancelled = false;
    let index = 0;

    const tick = () => {
      if (cancelled) return;

      index = Math.min(index + 1, text.length);
      setVisibleCount(index);

      if (index >= text.length) return;

      tickTimeoutRef.current = window.setTimeout(tick, speedMs);
    };

    startTimeoutRef.current = window.setTimeout(() => {
      tick();
    }, startDelayMs);

    return () => {
      cancelled = true;
      if (startTimeoutRef.current) window.clearTimeout(startTimeoutRef.current);
      if (tickTimeoutRef.current) window.clearTimeout(tickTimeoutRef.current);
    };
    // Intentionally restart when text changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speedMs, startDelayMs]);

  const visibleText = text.slice(0, visibleCount);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{visibleText}</span>
      {showCursor && (
        <span aria-hidden className="typewriter-cursor inline-block align-baseline">
          |
        </span>
      )}
    </span>
  );
}
