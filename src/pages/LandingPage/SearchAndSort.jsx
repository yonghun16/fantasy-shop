const SearchAndSort = ({
  searchTerm, // 현재 검색어 상태
  setSearchTerm, // 검색어를 업데이트하는 함수
  sortOption, // 현재 선택된 정렬 옵션
  setSortOption, // 정렬 옵션을 변경하는 함수
  sortOptions, // 정렬 옵션들의 배열
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 mb-6 gap-4">
      {/* 검색어 입력창 */}
      <input
        type="text"
        placeholder="아이템을 검색해 보세요."
        value={searchTerm} // 현재 검색어 상태 값 반영
        onChange={(e) => setSearchTerm(e.target.value)} // 입력 변경 시 상태 업데이트
        className="w-full md:w-7/8 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow"
      />
      <select
        value={sortOption} // 현재 선택된 정렬 값
        onChange={(e) => setSortOption(e.target.value)} // 선택 변경 시 상태 업데이트
        className="w-full md:w-1/8 border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-400 shadow"
      >
        {/* 정렬 옵션들을 option 태그로 렌더링 */}
        {sortOptions.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndSort;
