/* import library */
import { useState } from 'react';
import { useForm } from "react-hook-form";

/* import component */
import ItemBasicInfo from './ItemBasicInfo';
import ItemStats from './ItemStats';
import ItemCategory from './ItemCategory';
import { Button } from '../../shared/ui/Button'

/* import assets */
import { LuUpload } from "react-icons/lu";


/* UI */
const ItemForm = () => {
  const [category, setCategory] = useState('');

  // react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",    // 사용자가 input을 터치하고 벗어났을 때 유효성 검사 실행
  });

  // onSubmit Handler
  const onSubmit = (data) => {
    console.log("제출 성공:", data);

    reset();
  };

  return (
    <div className="max-w-5xl mx-auto m-18">
      <h1 className="text-2xl font-bold mb-8 text-center">아이템 등록</h1>

      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="
          grid grid-cols-1 md:grid-cols-2 gap-8
          px-12 py-16 mb-12 md:m-12 border-0 md:border border-gray-200 rounded-md">
          {/* 왼쪽 패널 */}
          <ItemBasicInfo register={register} errors={errors} />

          {/* 오른쪽 패널 */}
          <div className="space-y-6">
            <ItemCategory register={register} watch={watch} />
            <ItemStats register={register} />
          </div>

        </div>

        {/* 등록 버튼 */}
        <div className="flex justify-center mt-8 md:col-span-2">
          <Button
            type="submit"
            icon={<LuUpload />}
            className="w-60"
          >아이템 등록하기</Button>
        </div>
      </form>

    </div>
  );
}

export default ItemForm;
