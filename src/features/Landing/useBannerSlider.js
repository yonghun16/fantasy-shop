import { useEffect, useRef, useState } from "react";

const useBannerSlider = (length, duration = 10000, interval = 50) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const elapsed = useRef(0);
  const timer = useRef(null);

  const resetTimer = () => {
    clearInterval(timer.current);
    elapsed.current = 0;
  };

  const goToPrev = () => {
    resetTimer();
    setIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const goToNext = () => {
    resetTimer();
    setIndex((prev) => (prev + 1) % length);
  };

  useEffect(() => {
    if (paused) return;

    timer.current = setInterval(() => {
      elapsed.current += interval;
      if (elapsed.current >= duration) {
        goToNext();
      }
    }, interval);

    return () => clearInterval(timer.current);
  }, [index, paused]);

  return { index, goToPrev, goToNext, setPaused };
};

export default useBannerSlider;
