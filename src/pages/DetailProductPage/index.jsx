import { useParams } from "react-router-dom";
import { dummyProducts } from "../LandingPage/dummyProducts";

const DetailProductPage = () => {
  // 파라미터에서 id 값을 가져옴
  const { id } = useParams();
  // id와 일치하는 상품을 데이터에서 찾음
  const product = dummyProducts.find((item) => item.id === id);

  // 해당 id에 맞는 상품이 없으면 안내 메시지 출력
  if (!product) {
    return <div className="p-4">존재하지 않는 상품입니다.</div>;
  }

  // 상품이 존재하면 상세 정보 화면 렌더링
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
