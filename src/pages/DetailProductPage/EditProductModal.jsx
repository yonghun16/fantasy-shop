import { useEffect, useState } from "react";
import axiosInstance from "../../shared/api/axios";
import { InputBox } from "../../shared/ui/InputBox";
import { Button } from "../../shared/ui/Button";
import clsx from "clsx";

const EditProductModal = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: 0,
    itemInventory: 0,
    itemEffect: "",
    itemCategory: "",
    itemImage: null,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData({
        itemName: product.itemName || "",
        itemDescription: product.itemDescription || "",
        itemPrice: product.itemPrice || 0,
        itemInventory: product.itemInventory || 0,
        itemEffect: product.itemEffect || "",
        itemCategory: product.itemCategory || "",
        itemImage: null,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "itemImage") {
      setFormData((prev) => ({ ...prev, itemImage: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    for (const key in formData) {
      const value = formData[key];
      if (value !== null && value !== undefined) {
        data.append(key, value);
      }
    }

    try {
      await axiosInstance.put(`/item/${product.itemPk}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("상품 정보가 수정되었습니다.");
      onClose();
    } catch (err) {
      console.error(err);
      alert("상품 수정 실패");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const inputFields = [
    { label: "이름", name: "itemName" },
    { label: "가격", name: "itemPrice", type: "number" },
    { label: "재고", name: "itemInventory", type: "number" },
    { label: "성능", name: "itemEffect" },
    { label: "카테고리", name: "itemCategory" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)]">
      {/* 외부 클릭 시 닫기 */}
      <div className="absolute inset-0" onClick={onClose} />
      <div className="bg-white z-10 rounded-lg shadow-lg p-6 w-full max-w-xl relative">
        <h2 className="text-lg font-semibold mb-4 text-center">
          아이템 정보 수정
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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
