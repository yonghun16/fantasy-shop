import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bannerImage1 from "../../assets/images/notice1.png";
import bannerImage2 from "../../assets/images/notice2.png";
import bannerImage3 from "../../assets/images/notice3.png";
import bannerImage4 from "../../assets/images/notice4.png";

const bannerImages = [bannerImage1, bannerImage2, bannerImage3, bannerImage4];

const BannerImages = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  const [progress, setProgress] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const elapsedRef = useRef(0);

  const progressInterval = useRef(null);

  // 배너 인덱스 혹은 일시정지 상태가 바뀔 때마다 실행되는 effect
  useEffect(() => {
    const totalDuration = 10000; // 한 배너가 보여지는 전체 시간 (10초)
    const updateInterval = 50; // 진행률 업데이트 주기 (50ms)

    // 일시정지 상태가 아니면 타이머 시작
    if (!isPaused) {
      progressInterval.current = setInterval(() => {
        // 경과 시간 누적
        elapsedRef.current += updateInterval;

        if (elapsedRef.current >= totalDuration) {
          // 10초가 다 지나면 다음 배너로 이동
          setBannerIndex((prev) => (prev + 1) % bannerImages.length);
          elapsedRef.current = 0; // 경과 시간 초기화
          setProgress(0); // 진행률 초기화
        } else {
          // 경과 시간에 따라 진행률 업데이트
          setProgress((elapsedRef.current / totalDuration) * 100);
        }
      }, updateInterval);
    }

    // effect cleanup: 컴포넌트 언마운트 혹은 의존성 변경 시 타이머 제거
    return () => clearInterval(progressInterval.current);
  }, [bannerIndex, isPaused]); // 배너 인덱스 또는 일시정지 상태가 변할 때마다 실행

  // 이전 버튼 클릭 핸들러
  const handlePrev = () => {
    clearInterval(progressInterval.current); // 타이머 제거
    elapsedRef.current = 0; // 경과 시간 초기화
    setProgress(0); // 진행률 초기화
    // 배너 인덱스 감소 (첫 배너일 땐 마지막 배너로 순환)
    setBannerIndex((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  // 다음 버튼 클릭 핸들러
  const handleNext = () => {
    clearInterval(progressInterval.current); // 타이머 제거
    elapsedRef.current = 0; // 경과 시간 초기화
    setProgress(0); // 진행률 초기화
    // 배너 인덱스 증가 (마지막 배너일 땐 첫 배너로 순환)
    setBannerIndex((prev) => (prev + 1) % bannerImages.length);
  };

  return (
    <div
      className="relative w-full group"
      style={{ paddingBottom: "28.66%" }}
      // 마우스 진입 시 isPaused를 true로 바꿔서 자동 진행 정지
      // 마우스 나가면 다시 false로 바꿔서 진행 재개
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 각 배너 이미지 출력 */}
      {bannerImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Banner ${index + 1}`}
          // 현재 배너일 때만 보이고, 나머지는 투명하게 처리
          className={`absolute top-0 left-0 w-full h-full object-fill transition-opacity duration-1000 ${
            index === bannerIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* 하단 진행 바 */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        {/* 진행 바 */}
        <div
          className="h-full bg-white/60 transition-width duration-50"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 이전 버튼 */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-20 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
        aria-label="Previous Banner"
      >
        <FaChevronLeft />
      </button>

      {/* 다음 버튼 */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-20 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
        aria-label="Next Banner"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default BannerImages;
