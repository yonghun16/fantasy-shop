const ProductPageStatus = ({ loading, error, product }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-500">
        불러오는 중...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96 text-red-500">
        {error}
      </div>
    );
  }
  // loading이 끝났고, error도 없는데 제품 정보가 없는 경우 (잘못된 접근 등)
  if (!product) {
    return (
      <div className="flex justify-center items-center h-96 text-red-600">
        존재하지 않는 상품입니다.
      </div>
    );
  }

  return null;
};

export default ProductPageStatus;
