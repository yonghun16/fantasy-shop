import useProductDetail from "./useProductDetail";
import ProductInfo from "./ProductInfo";
import QuantityController from "./QuantityController";
import ProductActionButtons from "./ProductActionButtons";
import NotFoundMessage from "./NotFoundMessage";
import ProductImage from "./ProductImage";
import TotalPrice from "./TotalPrice";

const DetailProductPage = () => {
  // 커스텀 훅을 사용해 제품 정보와 수량, 수량 증가/감소 함수 가져오기
  const { product, count, handleIncrease, handleDecrease } = useProductDetail();

  // 제품 정보가 없는 경우 (잘못된 접근 등), '찾을 수 없음' 메시지를 표시
  if (!product) return <NotFoundMessage />;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* 상단 제목 */}
      <h2 className="text-xl font-semibold text-center mb-6">
        아이템 상세보기
      </h2>

      {/* 제품 상세 정보 영역 */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 gap-8">
        {/* 왼쪽: 제품 이미지 */}
        <ProductImage src={product.image} alt={product.name} />

        {/* 오른쪽: 제품 설명, 수량 조절, 가격, 액션 버튼 등 */}
        <div className="flex flex-col flex-1 justify-between">
          {/* 제품 정보 (이름, 설명, 재고 등) */}
          <ProductInfo product={product} />

          {/* 수량 조절 컴포넌트 (현재 수량과 재고 수에 따라 증가/감소 가능) */}
          <QuantityController
            count={count}
            max={product.quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />

          {/* 총 가격 계산 */}
          <TotalPrice price={product.price} count={count} />

          {/* 장바구니 추가/아이템 정보 수정 및 삭제 등의 액션 버튼 */}
          <ProductActionButtons />
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
