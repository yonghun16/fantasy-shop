import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bannerImage1 from "../../../assets/images/notice1.webp";
import bannerImage2 from "../../../assets/images/notice2.webp";
import bannerImage3 from "../../../assets/images/notice3.webp";
import bannerImage4 from "../../../assets/images/notice4.webp";
import useBannerSlider from "../../../features/Landing/useBannerSlider";

const bannerImages = [bannerImage1, bannerImage2, bannerImage3, bannerImage4];

const BannerImages = () => {
  const { index, goToPrev, goToNext, setPaused } = useBannerSlider(
    bannerImages.length
  );

  return (
    <div
      className="relative w-full group mb-5 min-h-[170px]"
      style={{ paddingBottom: "24%" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 배너 이미지들 */}
      {bannerImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Banner ${i + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

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
