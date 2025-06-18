const BASE_URL = "http://13.211.52.203:8080";

const ProductImage = ({ src, alt }) => (
  <div className="flex-1 flex justify-center items-center w-full h-full">
    <img
      src={`${BASE_URL}${src}`}
      alt={alt}
      className="max-w-[450px] max-h-[450px] w-auto h-auto object-contain rounded-md"
    />
  </div>
);

export default ProductImage;
