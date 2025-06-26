import { getImageUrl } from "../../../shared/utils/getImageUrl";

const ProductImage = ({ src, alt }) => (
  <div className="flex-1 flex justify-center items-center w-full h-full">
    <img
      src={getImageUrl("150x150")}
      alt={alt}
      className="max-w-full max-h-[600px] w-auto h-auto object-contain rounded-md"
    />
  </div>
);

export default ProductImage;
