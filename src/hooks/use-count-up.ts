import { useEffect, useMemo, useRef, useState } from "react";

type UseCountUpOptions = {
  start?: number;
  end: number;
  durationMs?: number;
  delayMs?: number;
  decimals?: number;
  run?: boolean;
};

export function useCountUp({
  start = 0,
  end,
  durationMs = 1200,
  delayMs = 0,
  decimals = 0,
  run = true,
}: UseCountUpOptions) {
  const [value, setValue] = useState(start);
  const rafIdRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  const step = useMemo(() => {
    const factor = Math.pow(10, decimals);
    return {
      factor,
      clamp: (n: number) => Math.round(n * factor) / factor,
    };
  }, [decimals]);

  useEffect(() => {
    if (!run) return;
    if (startedRef.current) return;

    startedRef.current = true;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const startAt = () => {
      const startTime = performance.now();
      const from = start;
      const to = end;

      const tick = (now: number) => {
        const t = Math.min(1, (now - startTime) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3);
        const next = from + (to - from) * eased;

        setValue(step.clamp(next));

        if (t < 1) {
          rafIdRef.current = requestAnimationFrame(tick);
        } else {
          setValue(step.clamp(to));
        }
      };

      rafIdRef.current = requestAnimationFrame(tick);
    };

    if (delayMs > 0) {
      timeoutId = setTimeout(startAt, delayMs);
    } else {
      startAt();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [delayMs, durationMs, end, run, start, step]);

  return value;
}
