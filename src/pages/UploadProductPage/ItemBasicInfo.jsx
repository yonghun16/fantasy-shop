/* import components */
import { useFormContext } from "react-hook-form";
import { InputBox } from "../../shared/ui/InputBox";
import { TextareaBox } from "./TextareaBox";

/* import icons */
import { LuCamera } from "react-icons/lu";

/* import hooks */
import { useImageUploader } from "../../features/uploadProduct/useImageUploader";

const ItemBasicInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { selectedImageFile, previewUrl, getRootProps, getInputProps } =
    useImageUploader();

  // 중요: 이미지 파일 넘겨야 하므로 나중에 selectedImageFile 를 부모 submit 에서 사용할 것

  return (
    <div className="space-y-6">
      <InputBox
        label="아이템 이름"
        type="text"
        {...register("itemName", { required: "아이템 이름은 필수입니다." })}
      />
      {errors.itemName && (
        <p className="text-rose-500 text-sm -mt-3">{errors.itemName.message}</p>
      )}

      <TextareaBox
        label="아이템 설명"
        {...register("itemDescription", {
          required: "아이템 설명은 필수입니다.",
        })}
      />
      {errors.itemDescription && (
        <p className="text-rose-500 text-sm -mt-3">
          {errors.itemDescription.message}
        </p>
      )}

      <InputBox
        label="아이템 가격(Gold Coins)"
        type="number"
        {...register("itemPrice", { required: "아이템 가격은 필수입니다." })}
      />
      {errors.itemPrice && (
        <p className="text-rose-500 text-sm -mt-3">
          {errors.itemPrice.message}
        </p>
      )}

      <InputBox
        label="아이템 재고"
        type="number"
        {...register("itemInventory", {
          required: "아이템 재고는 필수입니다.",
        })}
      />
      {errors.itemInventory && (
        <p className="text-rose-500 text-sm -mt-3">
          {errors.itemInventory.message}
        </p>
      )}

      <div>
        <label className="block font-semibold mb-1">아이템 이미지</label>
        <div
          {...getRootProps()}
          className="w-full h-45 bg-gray-50 border border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-100"
        >
          <input {...getInputProps()} />
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="w-32 h-32 object-cover mb-2"
            />
          ) : (
            <>
              <LuCamera className="w-12 h-12 mb-3" />
              <div>클릭하여 이미지를 업로드 하세요</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemBasicInfo;
