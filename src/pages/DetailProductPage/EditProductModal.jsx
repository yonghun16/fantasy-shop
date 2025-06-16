import { useEffect, useState } from "react";
import axiosInstance from "../../shared/api/axios";
import { InputBox } from "../../shared/ui/InputBox";
import { Button } from "../../shared/ui/Button";
import clsx from "clsx";

const EditProductModal = ({ isOpen, onClose, product }) => {
  // 입력 상태 관리
  const [formData, setFormData] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: 0,
    itemInventory: 0,
    itemEffect: "",
    itemCategory: "",
    itemImage: null,
  });

  // 저장 버튼 클릭 시 로딩 상태
  const [loading, setLoading] = useState(false);

  // 모달이 열릴 때마다 전달받은 상품 정보로 formData 초기화
  useEffect(() => {
    if (product) {
      setFormData({
        itemName: product.itemName || "",
        itemDescription: product.itemDescription || "",
        itemPrice: product.itemPrice || 0,
        itemInventory: product.itemInventory || 0,
        itemEffect: product.itemEffect || "",
        itemCategory: product.itemCategory || "",
        itemImage: null, // 기존 이미지는 불러오지 않음 (새 이미지 업로드만 가능)
      });
    }
  }, [product]);

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "itemImage") {
      // 파일 입력일 경우, 첫 번째 파일 저장
      setFormData((prev) => ({ ...prev, itemImage: files[0] }));
    } else {
      // 텍스트나 숫자 입력일 경우
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // FormData 객체 생성 (이미지 포함 전송을 위해 multipart/form-data 사용)
    const data = new FormData();
    for (const key in formData) {
      const value = formData[key];
      if (value !== null && value !== undefined) {
        data.append(key, value);
      }
    }

    try {
      // 상품 수정 API 요청
      await axiosInstance.put(`/item/${product.itemPk}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("상품 정보가 수정되었습니다.");
      onClose();
    } catch (err) {
      console.error(err);
      alert("상품 수정 실패");
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  // 모달이 닫혀있으면 렌더링하지 않음
  if (!isOpen) return null;

  // input 필드 정보
  const inputFields = [
    { label: "이름", name: "itemName" },
    { label: "가격", name: "itemPrice", type: "number" },
    { label: "재고", name: "itemInventory", type: "number" },
    { label: "성능", name: "itemEffect" },
    { label: "카테고리", name: "itemCategory" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)]">
      <div className="absolute inset-0" onClick={onClose} />

      {/* 모달 콘텐츠 박스 */}
      <div className="bg-white z-10 rounded-lg shadow-lg p-6 w-full max-w-xl relative">
        <h2 className="text-lg font-semibold mb-4 text-center">
          아이템 정보 수정
        </h2>

        {/* 수정 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* InputBox 렌더링 */}
          {inputFields.map(({ label, name, type = "text" }) => (
            <InputBox
              key={name}
              label={label}
              name={name}
              type={type}
              value={formData[name]}
              onChange={handleChange}
              required
              className="w-full"
            />
          ))}

          {/* 설명 입력 (textarea 별도 처리) */}
          <div>
            <label
              htmlFor="itemDescription"
              className="block text-sm font-medium mb-1 text-gray-800"
            >
              설명
            </label>
            <textarea
              id="itemDescription"
              name="itemDescription"
              value={formData.itemDescription}
              onChange={handleChange}
              required
              className={clsx(
                "w-full px-4 py-2 text-base rounded-md border border-gray-200 bg-gray-50 text-gray-900",
                "focus:outline-none focus:border-indigo-500"
              )}
              rows={3}
            />
          </div>

          {/* 이미지 파일 업로드 */}
          <div>
            <label
              htmlFor="itemImage"
              className="block text-sm font-medium mb-1 text-gray-800"
            >
              이미지
            </label>
            <input
              type="file"
              id="itemImage"
              name="itemImage"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md"
            />
          </div>

          {/* 하단 버튼 영역 */}
          <div className="flex justify-end gap-3 pt-4">
            <Button type="submit" color="indigo" disabled={loading}>
              {loading ? "저장 중..." : "저장"}
            </Button>
            <Button type="button" color="gray" onClick={onClose}>
              취소
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
