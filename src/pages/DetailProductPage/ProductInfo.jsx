import { GiBroadsword } from "react-icons/gi";

const ProductInfo = ({ product }) => (
  <div>
    <h1 className="text-3xl font-bold">{product.name}</h1>
    <p className="text-xl text-indigo-600 font-semibold mt-1">
      {product.price.toFixed(2)} G
    </p>
    <div className="flex items-center gap-2 text-gray-700 mt-4">
      <GiBroadsword className="text-lg" />
      <span className="text-sm font-semibold">데미지 {product.damage}</span>
    </div>
    <p className="mt-4 text-sm leading-relaxed text-gray-700">
      {product.description || "이 아이템에 대한 설명이 없습니다."}
    </p>
  </div>
);

export default ProductInfo;
