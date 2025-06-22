import { LuUser } from "react-icons/lu";
import { InputBox } from "../../shared/ui/InputBox";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ShippingInfoForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  const userData = useSelector((state) => state.user.userData);

  useEffect(() => {
    setUserInfo({
      name: userData.userName ?? "",
      phone: userData.phoneNumber ?? "",
      address: userData.address ?? "",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="border border-gray-300 rounded p-6 space-y-4">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <LuUser className="w-5 h-5 text-indigo-500" />
        배송 정보
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputBox
          name="name"
          placeholder="이름"
          label="이름"
          value={userInfo.name}
          className="w-full"
          onChange={handleChange}
        />
        <InputBox
          name="phone"
          placeholder="연락처"
          label="연락처"
          value={userInfo.phone}
          className="w-full"
          onChange={handleChange}
        />
      </div>
      <InputBox
        name="address"
        placeholder="주소"
        label="주소"
        value={userInfo.address}
        className="w-full"
        onChange={handleChange}
      />
      <InputBox
        name="note"
        placeholder="배송 전달 사항"
        label="배달 전달 사항"
        className="w-full"
        onChange={handleChange}
      />
    </div>
  );
};

export default ShippingInfoForm;
