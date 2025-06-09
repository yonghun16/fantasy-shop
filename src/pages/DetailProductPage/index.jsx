import { useParams } from "react-router-dom";
import { dummyProducts } from "../LandingPage/dummyProducts";

const DetailProductPage = () => {
  const { id } = useParams();
  const product = dummyProducts.find((item) => item.id === id);

  if (!product) {
    return <div className="p-4">존재하지 않는 상품입니다.</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-xl text-yellow-700 mt-2">{product.price} Gold</p>
      <p className="text-gray-700 mt-4">{product.description}</p>
    </div>
  );
};

export default DetailProductPage;
