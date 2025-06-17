import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bannerImage1 from "../../assets/images/notice1.png";
import bannerImage2 from "../../assets/images/notice2.png";
import bannerImage3 from "../../assets/images/notice3.png";
import bannerImage4 from "../../assets/images/notice4.png";

const bannerImages = [bannerImage1, bannerImage2, bannerImage3, bannerImage4];

const BannerImages = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  // 자동 전환 타이머 설정
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  // 왼쪽 화살표 클릭
  const handlePrev = () => {
    setBannerIndex((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  // 오른쪽 화살표 클릭
  const handleNext = () => {
    setBannerIndex((prev) => (prev + 1) % bannerImages.length);
  };

  return (
    <div className="relative w-full group" style={{ paddingBottom: "28.66%" }}>
      {bannerImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Banner ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-fill transition-opacity duration-1000 ${
            index === bannerIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* 좌우 버튼 */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-20 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
        aria-label="Previous Banner"
      >
        <FaChevronLeft />
      </button>

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
