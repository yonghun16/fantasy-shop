import { useParams } from "react-router-dom";
import { useState } from "react";
import { dummyProducts } from "../LandingPage/dummyProducts";

import ProductInfo from "./ProductInfo";
import QuantityController from "./QuantityController";
import ProductActionButtons from "./ProductActionButtons";
import NotFoundMessage from "./NotFoundMessage";
import ProductImage from "./ProductImage";
import TotalPrice from "./TotalPrice";

const DetailProductPage = () => {
  const { id } = useParams();
  const product = dummyProducts.find((item) => item.id === id);
  const [count, setCount] = useState(1);

  if (!product) return <NotFoundMessage />;

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrease = () => {
    if (count < product.quantity) setCount(count + 1);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-xl font-semibold text-center mb-6">
        아이템 상세보기
      </h2>

      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 gap-8">
        <ProductImage src={product.image} alt={product.name} />

        <div className="flex flex-col flex-1 justify-between">
          <ProductInfo product={product} />
          <QuantityController
            count={count}
            max={product.quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
          <TotalPrice price={product.price} count={count} />
          <ProductActionButtons />
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
