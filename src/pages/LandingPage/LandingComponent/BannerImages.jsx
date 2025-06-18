import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bannerImage1 from "../../../assets/images/notice1.png";
import bannerImage2 from "../../../assets/images/notice2.png";
import bannerImage3 from "../../../assets/images/notice3.png";
import bannerImage4 from "../../../assets/images/notice4.png";

const bannerImages = [bannerImage1, bannerImage2, bannerImage3, bannerImage4];

const BannerImages = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const elapsed = useRef(0);
  const timer = useRef(null);

  const DURATION = 10000;
  const INTERVAL = 50;

  const resetTimer = () => {
    clearInterval(timer.current);
    elapsed.current = 0;
    setProgress(0);
  };

  const goToPrev = () => {
    resetTimer();
    setIndex((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    resetTimer();
    setIndex((prev) => (prev + 1) % bannerImages.length);
  };

  useEffect(() => {
    if (paused) return;

    timer.current = setInterval(() => {
      elapsed.current += INTERVAL;

      if (elapsed.current >= DURATION) {
        goToNext(); // 다음 배너로 이동하면서 resetTimer 호출됨
      } else {
        setProgress((elapsed.current / DURATION) * 100);
      }
    }, INTERVAL);

    return () => clearInterval(timer.current);
  }, [index, paused]);

  return (
    <div
      className="relative w-full group"
      style={{ paddingBottom: "28.66%" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 배너 이미지들 */}
      {bannerImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Banner ${i + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-fill transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* 진행 바 */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <div
          className="h-full bg-white/60 transition-[width] duration-50"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 이전 버튼 */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-20 transition-opacity opacity-0 group-hover:opacity-100"
        aria-label="Previous"
      >
        <FaChevronLeft />
      </button>

      {/* 다음 버튼 */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-20 transition-opacity opacity-0 group-hover:opacity-100"
        aria-label="Next"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default BannerImages;
