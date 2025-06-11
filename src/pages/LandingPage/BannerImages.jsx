import { useState, useEffect } from "react";
import bannerImage1 from "../../assets/images/notice1.png";
import bannerImage2 from "../../assets/images/notice2.png";
import bannerImage3 from "../../assets/images/notice3.png";
import bannerImage4 from "../../assets/images/notice4.png";

// 임포트한 이미지를 배열에 담아 관리
const bannerImages = [bannerImage1, bannerImage2, bannerImage3, bannerImage4];

const BannerImages = () => {
  // 현재 보여줄 배너 이미지의 인덱스를 상태로 관리. 초기값은 0.
  const [bannerIndex, setBannerIndex] = useState(0);

  // 컴포넌트가 처음 렌더링될 때 실행되는 useEffect
  useEffect(() => {
    // 10초마다 bannerIndex 값을 다음 인덱스로 변경하는 타이머를 만든다.
    const intervalId = setInterval(() => {
      // 이전 인덱스에서 1을 더하고, 배열 길이로 나눈 나머지를 사용해 인덱스가 배열 범위를 넘지 않게 합니다.
      setBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 10000);

    // 컴포넌트가 사라질 때 타이머를 정리(cleanup)합니다.
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-120 mb-6 overflow-hidden">
      {/* 
        이미지 배열을 map으로 돌면서 각각 img 태그를 생성합니다.
        index가 현재 배너 인덱스와 같으면 보이도록, 아니면 숨기도록 처리합니다.
      */}
      {bannerImages.map((img, index) => (
        <img
          key={index} // React가 각 아이템을 구분할 수 있도록 key를 지정
          src={img} // 이미지 경로
          alt={`Banner ${index + 1}`} // 접근성을 위한 대체 텍스트
          className={`scale-[1.05] absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === bannerIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
};

export default BannerImages;
