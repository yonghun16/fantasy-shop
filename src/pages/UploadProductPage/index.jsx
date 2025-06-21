/* import */
import { FormProvider, useForm } from "react-hook-form";
import ItemBasicInfo from "./ItemBasicInfo";
import ItemStats from "./ItemStats";
import ItemCategory from "./ItemCategory";
import { Button } from "../../shared/ui/Button";
import { LuUpload } from "react-icons/lu";
import { postItem } from "../../shared/api/itemUpload";
import { useImageUploader } from "../../features/uploadProduct/useImageUploader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ItemForm = () => {
  const navigate = useNavigate();

  const formMethods = useForm({
    mode: "onTouched",
  });

  const {
    register,
    watch,
    formState: { errors },
    reset,
  } = formMethods;

  // 이미지 업로더 훅
  const { selectedImageFile, previewUrl, getRootProps, getInputProps } =
    useImageUploader();

  const onSubmit = async (data) => {
    console.log("폼 전체 값:", data);

    const selectedCategory = data.category;
    const stats = data.stats || {};
    const activeStatKey = Object.keys(stats).find((key) => stats[key] > 0);
    const activeStatValue = stats[activeStatKey];

    const payload = {
      itemName: data.itemName,
      itemDescription: data.itemDescription,
      itemPrice: data.itemPrice,
      itemInventory: data.itemInventory,
      itemCategory: selectedCategory,
      itemEffect: `${activeStatKey} +${activeStatValue}`,
      itemImage: selectedImageFile, // 정상 적용됨!
    };

    try {
      const res = await postItem(payload);
      console.log("등록 성공:", res);
      toast.success("아이템 등록이 완료되었습니다.");
      reset();
      navigate("/");
    } catch (err) {
      console.error("등록 실패:", err);
    }
  };

  return (
    <FormProvider {...formMethods}>
      <div className="max-w-5xl mx-auto m-18">
        <h1 className="text-2xl font-bold mb-8 text-center">아이템 등록</h1>

        <form
          onSubmit={formMethods.handleSubmit(onSubmit, (errors) => {
            console.log("유효성 검사 실패", errors);
          })}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-16 mb-12 md:m-12 border-0 md:border border-gray-200 rounded-md">
            {/* 왼쪽 패널 */}
            <ItemBasicInfo
              register={register}
              errors={errors}
              previewUrl={previewUrl}
              getRootProps={getRootProps}
              getInputProps={getInputProps}
            />

            {/* 오른쪽 패널 */}
            <div className="space-y-6">
              <ItemCategory register={register} watch={watch} />
              <ItemStats register={register} watch={watch} />
            </div>
          </div>

          {/* 등록 버튼 */}
          <div className="flex justify-center mt-8 md:col-span-2">
            <Button type="submit" icon={<LuUpload />} className="w-60">
              아이템 등록하기
            </Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default ItemForm;
