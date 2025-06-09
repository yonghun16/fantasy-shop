import { LuUser } from "react-icons/lu";
import { InputBox } from "../../shared/ui/InputBox";

const ShippingInfoForm = () => {
  return (
    <div className="border rounded p-6 space-y-4">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <LuUser className="w-5 h-5 text-indigo-500" />
        배송 정보
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputBox placeholder="이름" className="w-full" />
        <InputBox placeholder="연락처" className="w-full" />
      </div>
      <InputBox placeholder="주소" className="w-full" />
      <InputBox placeholder="배송 전달 사항" className="w-full" />
    </div>
  );
};

export default ShippingInfoForm;
