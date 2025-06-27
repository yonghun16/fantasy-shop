import { useEffect, useRef, useState } from "react";

const useAutoComplete = (autoSuggestList, onAutoSuggestClick, inputRef) => {
  const [isFocused, setIsFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const itemRefs = useRef([]);

  // 하이라이트된 아이템으로 스크롤 이동
  useEffect(() => {
    if (highlightedIndex >= 0 && itemRefs.current[highlightedIndex]) {
      itemRefs.current[highlightedIndex].scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex]);

  // 자동완성 목록 바뀌면 refs 초기화
  useEffect(() => {
    itemRefs.current.length = 0;
  }, [autoSuggestList]);

  const handleKeyDown = (e, onSearch) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < autoSuggestList.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : autoSuggestList.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < autoSuggestList.length) {
        const selected = autoSuggestList[highlightedIndex];
        onAutoSuggestClick(selected.itemName);
        inputRef?.current?.blur();
        setIsFocused(false);
        setHighlightedIndex(-1);
      } else {
        onSearch();
      }
    }
  };

  const handleClickItem = (itemName) => {
    onAutoSuggestClick(itemName);
    inputRef?.current?.blur();
    setIsFocused(false);
    setHighlightedIndex(-1);
  };

  return {
    isFocused,
    setIsFocused,
    highlightedIndex,
    setHighlightedIndex,
    itemRefs,
    handleKeyDown,
    handleClickItem,
  };
};

export default useAutoComplete;
