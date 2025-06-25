import { InputBox } from "../../../shared/ui/InputBox";
import { FaSearch } from "react-icons/fa";
import useAutoFocusFromSearchParams from "../../../features/Landing/useAutoFocusFromSearchParams";

const SearchAndSort = ({
  inputValue,
  setInputValue,
  onSearch,
  sortOption,
  setSortOption,
  sortOptions,
  autoSuggestList,
  onAutoSuggestClick,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };

  const inputRef = useAutoFocusFromSearchParams();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-6 gap-4 relative">
      {/* 검색창 영역 */}
      <div className="w-full md:w-7/8 relative">
        <InputBox
          id="item-search"
          ref={inputRef}
          placeholder="아이템을 검색해 보세요."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          icon={<FaSearch />}
          iconPosition="left"
          color="indigo"
          size="md"
          className="w-full"
          inputProps={{
            enterKeyHint: "search",
          }}
        />

        {/* 자동완성 드롭다운 */}
        {autoSuggestList.length > 0 && (
          <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md z-50">
            {autoSuggestList.map((item) => (
              <li
                key={item.itemId}
                className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => onAutoSuggestClick(item.itemName)}
              >
                <img
                  src={item.itemImageUrl || "/default-image.png"} // ✅ itemImageUrl 사용
                  alt={item.itemName}
                  className="w-8 h-8 object-cover rounded"
                />
                <span className="text-sm text-gray-800">{item.itemName}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 검색 버튼 */}
      <button
        onClick={onSearch}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        검색
      </button>

      {/* 정렬 드롭다운 */}
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="w-full md:w-1/8 border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-400 shadow"
      >
        {sortOptions.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndSort;
