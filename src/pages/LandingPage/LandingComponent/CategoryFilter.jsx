const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex w-full gap-4 mb-2 justify-center">
      {categories.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => setActiveCategory(value)}
          className={`cursor-pointer px-4 py-2 border-b-2 ${
            activeCategory === value
              ? "border-indigo-500 text-indigo-600 font-semibold"
              : "border-transparent text-gray-500 hover:text-indigo-500"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
