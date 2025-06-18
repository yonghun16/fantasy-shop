const QuantityController = ({ count, onDecrease, onIncrease, max }) => (
  <div className="flex items-center mt-6 mb-4">
    <button
      onClick={onDecrease}
      className="w-8 h-8 border rounded hover:bg-gray-100 text-lg font-bold"
    >
      -
    </button>
    <span className="mx-4 text-lg">{count}</span>
    <button
      onClick={onIncrease}
      className="w-8 h-8 border rounded hover:bg-gray-100 text-lg font-bold"
    >
      +
    </button>
    <span className="ml-auto text-sm text-gray-500">{max} 개 남음</span>
  </div>
);

export default QuantityController;
