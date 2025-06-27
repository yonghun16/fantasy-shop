import { Link, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import "react-toastify/dist/ReactToastify.css";
import useAddToCart from "../../../shared/hooks/useAddToCart";
import { toast } from "react-toastify";
import { getImageUrl } from "../../../shared/utils/getImageUrl";

const ProductGrid = ({ products, count = 1 }) => {
  const addToCart = useAddToCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    // localStorage에서 accessToken 읽기
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
      toast.warn("장바구니는 로그인 후 이용 가능합니다.");
      return;
    }
    // 토큰 있으면 장바구니 추가
    addToCart(product, count);
  };

  return (
    // 아이템들을 그리드 형태로 보여주는 컨테이너
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
      {products.map((product) => (
        // 각 아이템 카드: key는 제품 고유 id
        <div
          key={product.itemPk}
          className="relative border border-gray-200 rounded-lg overflow-hidden shadow hover:border-indigo-500 transition bg-white flex flex-col"
        >
          {/* 아이템 상세 페이지로 이동하는 링크 */}
          <Link to={`/detailproduct/${product.itemPk}`}>
            <img
              src={getImageUrl(product.itemImageUrl)}
              alt={product.itemName}
              className="w-full h-48 object-cover object-center"
            />
            {/* 아이템 이름을 보여주는 영역 */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.itemName}</h2>
            </div>
          </Link>

          <div className="flex-grow" />

          {/* 가격 표시 영역 */}
          <div className="px-4 pb-4">
            <p className="mt-2 text-indigo-600 font-bold">
              {product.itemPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              G
            </p>
          </div>

          {/* 장바구니 아이콘 */}
          <button
            className="absolute bottom-3 right-3 text-gray-400 hover:text-indigo-600 transition-colors"
            aria-label="장바구니에 추가"
            onClick={() => handleAddToCart(product)}
          >
            <LuShoppingCart size={22} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
