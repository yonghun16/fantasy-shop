import useProductDetail from "./hooks/useProductDetail";
import ProductInfo from "./DetailProductComponent/ProductInfo";
import QuantityController from "./DetailProductComponent/QuantityController";
import ProductActionButtons from "./DetailProductComponent/ProductActionButtons";
import ProductPageStatus from "./DetailProductComponent/ProductPageStatus";
import ProductImage from "./DetailProductComponent/ProductImage";
import TotalPrice from "./DetailProductComponent/TotalPrice";

const DetailProductPage = () => {
  const { product, count, handleIncrease, handleDecrease, loading, error } =
    useProductDetail();

  // 상태에 따라 메시지 보여주고, 문제가 없으면 null 반환됨
  if (loading || error || !product) {
    return (
      <ProductPageStatus loading={loading} error={error} product={product} />
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* 상단 제목 */}
      <h2 className="text-xl font-semibold text-center mb-6">
        아이템 상세보기
      </h2>

      {/* 제품 상세 정보 영역 */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 gap-8">
        {/* 왼쪽: 제품 이미지 */}
        <ProductImage src={product.itemImageUrl} alt={product.itemName} />

        {/* 오른쪽: 제품 설명, 수량 조절, 가격, 액션 버튼 등 */}
        <div className="flex flex-col flex-1 justify-between">
          {/* 제품 정보 (이름, 설명, 재고 등) */}
          <ProductInfo product={product} />

          {/* 수량 조절 컴포넌트 (현재 수량과 재고 수에 따라 증가/감소 가능) */}
          <QuantityController
            count={count}
            max={product.itemInventory}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />

          {/* 총 가격 계산 */}
          <TotalPrice price={product.itemPrice} count={count} />

          {/* 장바구니 추가/아이템 정보 수정 및 삭제 등의 액션 버튼 */}
          <ProductActionButtons product={product} count={count} />
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
