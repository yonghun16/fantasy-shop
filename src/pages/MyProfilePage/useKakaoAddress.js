import { useState, useEffect, useCallback } from "react";

function useKakaoAddress() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.daum && window.daum.Postcode) {
      setLoading(false);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;

    script.onload = () => {
      if (window.daum && window.daum.Postcode) {
        setLoading(false);
      } else {
        setLoading(false);
        console.error(
          "카카오 주소 API 로드됐지만 window.daum.Postcode가 없습니다."
        );
      }
    };

    script.onerror = () => {
      setLoading(false);
      console.error("카카오 주소 API 로드 실패");
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const openAddressModal = useCallback((onComplete) => {
    if (!window.daum || !window.daum.Postcode) {
      alert("주소 API가 아직 로드되지 않았습니다.");
      return;
    }

    new window.daum.Postcode({
      oncomplete: onComplete,
    }).open();
  }, []);

  return { openAddressModal, loading };
}

export default useKakaoAddress;
