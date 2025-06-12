import React from 'react';

import { LuSword, LuShield, LuWand } from "react-icons/lu";
import { GiPocketBow } from "react-icons/gi";

const stats = [
  { label: '데미지', icon: <LuSword size={24} /> },
  { label: '방어력', icon: <LuShield size={24} /> },
  { label: '명중력', icon: <GiPocketBow size={24} /> },
  { label: '마법력', icon: <LuWand size={24} /> },
];

export default function ItemStats({ register }) {
  return (
    <div>
      <label className="block font-semibold mb-3">아이템 성능</label>
      <div className="grid grid-cols-2 gap-4">
        {stats.map(({ label, icon }) => (
          <div key={label} className="border border-gray-200 rounded-md p-3">
            <div className="flex flex-col items-center gap-2 font-semibold mb-2">
              <div>{icon}</div>
              <div>{label}</div>
            </div>
            <input
              type="number"
              placeholder="0-999"
              className="
                w-full text-center 
                border border-gray-200 rounded-md p-2 
                hover:bg-gray-50
                focus:border-indigo-500 focus:outline-none focus:bg-indigo-50"
              min={0}
              max={999}
              {...register(`stats.${label}`, {
                valueAsNumber: true,
                min: 0,
                max: 999,
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
