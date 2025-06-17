import { GiBroadsword } from "react-icons/gi";

const ProductInfo = ({ product }) => {
  const { itemName, itemPrice, itemEffect, itemDescription } = product;

  return (
    <div>
      <h1 className="text-3xl font-bold">{itemName}</h1>

      <p className="mt-1 text-xl font-semibold text-indigo-600">
        {itemPrice.toFixed(2)} G
      </p>

      <div className="mt-4 flex items-center gap-2 text-gray-700">
        <GiBroadsword className="text-lg" />
        <span className="text-sm font-semibold">데미지 {itemEffect}</span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-700">
        {itemDescription || "이 아이템에 대한 설명이 없습니다."}
      </p>
    </div>
  );
};

export default ProductInfo;
