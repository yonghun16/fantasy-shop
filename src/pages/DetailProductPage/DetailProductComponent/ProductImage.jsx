const IMG_URL = import.meta.env.VITE_API_IMG_URL;

const ProductImage = ({ src, alt }) => (
  <div className="flex-1 flex justify-center items-center w-full h-full">
    <img
      src={`${IMG_URL}${src}`}
      alt={alt}
      className="max-w-full max-h-[600px] w-auto h-auto object-contain rounded-md"
    />
  </div>
);

export default ProductImage;
