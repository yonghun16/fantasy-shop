import { InputBox } from "../../../shared/ui/InputBox";
import { FaSearch } from "react-icons/fa";
import useAutoFocusFromSearchParams from "../../../features/Landing/useAutoFocusFromSearchParams";
import { Button } from "../../../shared/ui/Button";
import useAutoComplete from "../../../features/Landing/useAutoComplete";
import { getImageUrl } from "../../../shared/utils/getImageUrl";

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
  const inputRef = useAutoFocusFromSearchParams();

  const {
    isFocused,
    setIsFocused,
    highlightedIndex,
    itemRefs,
    handleKeyDown,
    handleClickItem,
  } = useAutoComplete(autoSuggestList, onAutoSuggestClick, inputRef);

  const handleSearch = () => {
    onSearch();
    inputRef?.current?.blur();
    setIsFocused(false);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-6 gap-4 relative">
      <div className="w-full md:w-7/8 relative">
        <InputBox
          id="item-search"
          ref={inputRef}
          placeholder="아이템을 검색해 보세요."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, handleSearch)}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          icon={<FaSearch />}
          iconPosition="left"
          color="indigo"
          size="md"
          className="w-full"
          inputProps={{
            enterKeyHint: "search",
            autoComplete: "off",
          }}
        />

        {isFocused && autoSuggestList.length > 0 && (
          <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md z-50 max-h-60 overflow-y-auto custom-scrollbar">
            {autoSuggestList.map((item, index) => (
              <li
                key={`${item.itemId}-${index}`}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`flex items-center gap-3 px-4 py-2 cursor-pointer transition-colors ${
                  highlightedIndex === index
                    ? "bg-indigo-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleClickItem(item.itemName)}
                onMouseDown={(e) => e.preventDefault()}
              >
                <img
                  src={getImageUrl(item.itemImageUrl)}
                  alt={item.itemName}
                  className="w-8 h-8 object-cover rounded"
                />
                <span className="text-sm text-gray-800">{item.itemName}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Button onClick={handleSearch} color="indigo" size="md">
        검색
      </Button>

      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="w-full md:w-1/8 border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-400 shadow"
      >
        {sortOptions.map((opt, index) => (
          <option key={`${opt}-${index}`}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndSort;
