const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex w-full px-4 gap-4 mb-2 overflow-x-auto whitespace-nowrap justify-start sm:justify-center scrollbar-hide">
      {categories.map((cat) => (
        // 카테고리 이름을 키로 사용해서 각 카테고리마다 버튼 생성
        <button
          key={cat}
          // 버튼 클릭 시 해당 카테고리를 활성 상태로 변경하는 함수 실행
          onClick={() => setActiveCategory(cat)}
          // 현재 활성화된 카테고리인지 확인해서 스타일 다르게 적용
          className={`cursor-pointer px-4 py-2 border-b-2 ${
            activeCategory === cat
              ? "border-indigo-500 text-indigo-600 font-semibold"
              : "border-transparent text-gray-500 hover:text-indigo-500"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
