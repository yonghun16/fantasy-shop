const BASE_URL = "http://13.211.52.203:8080";

const ProductImage = ({ src, alt }) => (
  <div className="flex-1 flex justify-center items-center">
    <img
      src={`${BASE_URL}${src}`}
      alt={alt}
      className="w-[350px] h-[350px] object-contain rounded-md"
    />
  </div>
);

export default ProductImage;
