import { useState } from "react";
import { dummyProducts } from "./dummyProducts";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/notice2.png";

const LandingPage = () => {
  // 검색어 상태 관리
  const [searchTerm, setSearchTerm] = useState("");
  // 검색어를 포함하는 상품만 필터링
  const filteredProducts = dummyProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* 검색창 */}
      <div className="w-full flex justify-center py-6 bg-white">
        <input
          type="text"
          placeholder="상품명을 입력하세요..."
          value={searchTerm} // 입력된 검색어 상태값 연결
          onChange={(e) => setSearchTerm(e.target.value)} // 입력 시 상태 업데이트
          className="w-full max-w-md border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
        />
      </div>

      {/* 배너 이미지 */}
      <div className="w-screen mb-8">
        <img
          src={bannerImage}
          alt="Fantasy Shop Banner"
          className="w-screen h-110 object-cover block"
        />
      </div>

      {/* 상품 목록 */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* 필터링된 상품 배열을 map으로 순회하며 렌더링 */}
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/detailproduct/${product.id}`} // 상품 상세 페이지로 이동하는 링크
            className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover object-center rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="mt-1 text-yellow-700 font-bold">
              {product.price} Gold
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
