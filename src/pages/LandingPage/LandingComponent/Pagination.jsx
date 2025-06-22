const Pagination = ({ currentPage, totalPages, onPrev, onNext }) => {
  return (
    <div className="pb-10 flex justify-center mt-8 gap-4 text-sm text-gray-600 items-center">
      {/* 이전 페이지로 이동하는 버튼 */}
      <button
        onClick={onPrev} // 클릭 시 이전 페이지 함수 호출
        disabled={currentPage === 1} // 첫 페이지면 비활성화
        className="
          px-3 py-1
          disabled:opacity-30 disabled:cursor-default
          hover:text-indigo-500 hover:font-semibold
          disabled:hover:text-current disabled:hover:font-normal
          cursor-pointer
        "
      >
        &lt; 이전
      </button>

      {/* 현재 페이지 번호와 전체 페이지 수를 보여줌 */}
      <span className="font-semibold text-black">
        {currentPage} / {totalPages}
      </span>

      {/* 다음 페이지로 이동하는 버튼 */}
      <button
        onClick={onNext} // 클릭 시 다음 페이지 함수 호출
        disabled={currentPage === totalPages} // 마지막 페이지면 비활성화
        className="
          px-3 py-1
          disabled:opacity-30 disabled:cursor-default
          hover:text-indigo-500 hover:font-semibold
          disabled:hover:text-current disabled:hover:font-normal
          cursor-pointer
        "
      >
        다음 &gt;
      </button>
    </div>
  );
};

export default Pagination;
