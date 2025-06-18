import { useEffect, useState } from "react";
import axiosInstance from "../../../../shared/api/axios";
import { InputBox } from "../../../../shared/ui/InputBox";
import { Button } from "../../../../shared/ui/Button";
import clsx from "clsx";
import { toast } from "react-toastify";
import ImageDropzone from "../ImageDropzone";

// 선택 가능한 카테고리 목록
const CATEGORY_OPTIONS = ["검", "활", "지팡이", "방패"];

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 초기 폼 데이터 생성 함수
const getInitialFormData = (product) => ({
  itemName: product?.itemName || "",
  itemDescription: product?.itemDescription || "",
  itemPrice: product?.itemPrice || 0,
  itemInventory: product?.itemInventory || 0,
  itemEffect: product?.itemEffect || "",
  itemCategory: product?.itemCategory || "",
  itemImage: null, // 새 이미지 파일 업로드를 위해 null로 초기화
});

// 텍스트 입력 필드 정보
const inputFields = [
  { label: "이름", name: "itemName" },
  { label: "가격", name: "itemPrice", type: "number" },
  { label: "재고", name: "itemInventory", type: "number" },
  { label: "성능", name: "itemEffect" },
];

const EditProductModal = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState(getInitialFormData(product)); // 폼 상태
  const [loading, setLoading] = useState(false); // 로딩 상태

  // 모달 열릴 때마다 formData 초기화
  useEffect(() => {
    if (product) {
      setFormData(getInitialFormData(product));
    }
  }, [product]);

  // input, textarea, file input 변경 핸들러
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "itemImage" ? files[0] : value, // 이미지 input은 파일 객체로 저장
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // FormData 객체 생성 후 모든 formData 필드 추가
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        data.append(key, value);
      }
    });

    try {
      // PUT 요청으로 상품 정보 업데이트
      await axiosInstance.put(`/item/${product.itemPk}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // 새로고침 후 성공 메시지 출력하기 위해 localStorage에 저장
      localStorage.setItem("toastMessage", "상품 정보가 수정되었습니다.");
      onClose();
      window.location.reload();
    } catch (err) {
      console.error(err);
      toast.error("상품 수정 실패");
    } finally {
      setLoading(false);
    }
  };

  // 모달이 열리지 않았으면 null 반환 (렌더링하지 않음)
  if (!isOpen) return null;

  console.log("product.itemImageUrl:", product?.itemImageUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)]">
      {/* 바깥 영역 클릭 시 닫기 */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* 모달 컨텐츠 */}
      <div className="bg-white z-10 rounded-lg shadow-lg p-6 w-full max-w-xl relative">
        <h2 className="text-lg font-semibold mb-4 text-center">
          아이템 정보 수정
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* input 필드 렌더링 */}
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

          {/* 카테고리 선택 버튼 */}
          <div>
            <p className="block text-sm font-medium mb-1 text-gray-800">
              카테고리
            </p>
            <div className="flex w-full gap-2">
              {CATEGORY_OPTIONS.map((category) => (
                <Button
                  key={category}
                  type="button"
                  color={formData.itemCategory === category ? "indigo" : "gray"}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, itemCategory: category }))
                  }
                  className="flex-1 text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* 설명 입력 필드 */}
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
              rows={3}
              className={clsx(
                "w-full px-4 py-2 text-base rounded-md border border-gray-200 bg-gray-50 text-gray-900",
                "focus:outline-none focus:border-indigo-500"
              )}
            />
          </div>

          {/* 이미지 업로드 필드 */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">
              이미지
            </label>
            <ImageDropzone
              onFileSelect={(file) =>
                setFormData((prev) => ({ ...prev, itemImage: file }))
              }
              initialImage={
                product?.itemImageUrl?.startsWith("http")
                  ? product.itemImageUrl
                  : `${BASE_URL}${product.itemImageUrl}`
              }
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
