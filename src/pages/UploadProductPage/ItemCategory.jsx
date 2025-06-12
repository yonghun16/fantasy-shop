import { clsx } from 'clsx';

const categories = [
  { label: '검', value: 'sword' },
  { label: '활', value: 'bow' },
  { label: '방패', value: 'shield' },
  { label: '지팡이', value: 'wand' }
];

export default function ItemCategory({ register, watch }) {
  const selectedCategory = watch('category');

  return (
    <div>
      <label className="block font-semibold mb-2">아이템 구분</label>
      <div className="grid grid-cols-2 gap-2">
        {categories.map(({ label, value }) => (
          <label
            key={value}
            className={clsx(
              'flex justify-center items-center text-center h-12 border p-3 rounded-md cursor-pointer',
              selectedCategory === value
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-300 hover:bg-gray-50'
            )}
          >
            <input
              type="radio"
              value={value}
              {...register('category')}
              className="hidden"
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
}
