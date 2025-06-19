import { LuSword, LuShield, LuWand } from "react-icons/lu";
import { GiPocketBow } from "react-icons/gi";

const stats = [
  { label: "데미지", icon: <LuSword size={24} />, category: "sword" },
  { label: "방어력", icon: <LuShield size={24} />, category: "shield" },
  { label: "명중력", icon: <GiPocketBow size={24} />, category: "bow" },
  ,
  { label: "마법력", icon: <LuWand size={24} />, category: "wand" },
];

const ItemStats = ({ register, watch }) => {
  const selectedCategory = watch("category");

  return (
    <div>
      <label className="block font-semibold mb-3">아이템 성능</label>
      <div className="grid grid-cols-2 gap-4">
        {stats.map(({ label, icon, category }) => {
          const isActive = selectedCategory === category;

          return (
            <div key={label} className="border border-gray-200 rounded-md p-3">
              <div className="flex flex-col items-center gap-2 font-semibold mb-2">
                <div>{icon}</div>
                <div>{label}</div>
              </div>
              <input
                type="number"
                placeholder="0-9999.99"
                disabled={!isActive}
                className={`
                w-full text-center 
                border border-gray-200 rounded-md p-2 
                ${
                  isActive
                    ? "border-indigo-500 bg-white"
                    : "border-gray-200 bg-gray-100 text-gray-400"
                }
                hover:bg-gray-50
                focus:border-indigo-500 focus:outline-none focus:bg-indigo-50`}
                min={0}
                max={9999.99}
                {...register(`stats.${label}`, {
                  valueAsNumber: true,
                  min: 0,
                  max: 9999.99,
                  validate: (value) => {
                    if (!isActive) return true; // 비활성 input → 검증 통과
                    return (
                      value <= 9999.99 || "최대 9999.99 까지 입력 가능합니다."
                    );
                  },
                })}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ItemStats;
