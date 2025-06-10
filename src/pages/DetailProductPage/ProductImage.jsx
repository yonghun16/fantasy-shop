const ProductImage = ({ src, alt }) => (
  <div className="flex-1 flex justify-center items-center">
    <img
      src={src}
      alt={alt}
      className="w-[350px] h-[350px] object-contain rounded-md border"
    />
  </div>
);

export default ProductImage;
