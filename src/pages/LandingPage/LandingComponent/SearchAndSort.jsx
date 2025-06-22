import { InputBox } from "../../../shared/ui/InputBox";
import { FaSearch } from "react-icons/fa";

const SearchAndSort = ({
  inputValue,
  setInputValue,
  onSearch, // 엔터 또는 버튼 클릭 시 호출
  sortOption,
  setSortOption,
  sortOptions,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-6 gap-4">
      {/* 검색어 입력창 */}
      <div className="w-full md:w-7/8">
        <InputBox
          id="item-search"
          placeholder="아이템을 검색해 보세요."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          icon={<FaSearch />}
          iconPosition="left"
          color="indigo"
          size="md"
          className="w-full"
        />
      </div>
      <select
        id="sort"
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
