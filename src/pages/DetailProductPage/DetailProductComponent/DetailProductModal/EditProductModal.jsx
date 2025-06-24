import clsx from "clsx";
import { InputBox } from "../../../../shared/ui/InputBox";
import { Button } from "../../../../shared/ui/Button";
import ImageDropzone from "../ImageDropzone";
import useEditProductForm from "../../../../features/DetailProduct/useEditProductForm";
import { useSelector, useDispatch } from "react-redux";
import { closeEditModal } from "../../../../features/modal/modalSlice";

const CATEGORY_OPTIONS = [
  { label: "검", value: "sword" },
  { label: "활", value: "bow" },
  { label: "지팡이", value: "wand" },
  { label: "방패", value: "shield" },
];
const IMG_URL = import.meta.env.VITE_API_IMG_URL;

const EditProductModal = () => {
  const dispatch = useDispatch();
  const { isOpen, product } = useSelector((state) => state.modal.editModal);

  const {
    formData,
    handleChange,
    handleImageSelect,
    handleCategorySelect,
    handleSubmit,
    isLoading,
  } = useEditProductForm(product, () => {
    dispatch(closeEditModal());
    window.location.reload();
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)]">
      <div
        className="absolute inset-0"
        onClick={() => dispatch(closeEditModal())}
      />
      <div className="bg-white z-10 rounded-lg shadow-lg p-6 w-full max-w-xl relative">
        <h2 className="text-lg font-semibold mb-4 text-center">
          아이템 정보 수정
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "이름", name: "itemName" },
            { label: "가격", name: "itemPrice", type: "number" },
            { label: "재고", name: "itemInventory", type: "number" },
            { label: "성능", name: "itemEffect" },
          ].map(({ label, name, type = "text" }) => (
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

          {/* 카테고리 선택 */}
          <div>
            <p className="block text-sm font-medium mb-1 text-gray-800">
              카테고리
            </p>
            <div className="flex w-full gap-2">
              {CATEGORY_OPTIONS.map(({ label, value }) => (
                <Button
                  key={value}
                  type="button"
                  color={formData.itemCategory === value ? "indigo" : "gray"}
                  onClick={() => handleCategorySelect(value)}
                  className="flex-1 text-sm"
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>

          {/* 설명 */}
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

          {/* 이미지 */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">
              이미지
            </label>
            <ImageDropzone
              onFileSelect={handleImageSelect}
              initialImage={
                product?.itemImageUrl?.startsWith("http")
                  ? product.itemImageUrl
                  : `${IMG_URL}${product.itemImageUrl}`
              }
            />
          </div>

          {/* 버튼 */}
          <div className="flex justify-end gap-3 pt-4">
            <Button type="submit" color="indigo" disabled={isLoading}>
              {isLoading ? "저장 중..." : "저장"}
            </Button>
            <Button
              type="button"
              color="gray"
              onClick={() => dispatch(closeEditModal())}
            >
              취소
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
