const TotalPrice = ({ price, count }) => (
  <div className="text-right text-lg text-indigo-600 font-semibold mb-3">
    총 금액: {(price * count).toFixed(2)} G
  </div>
);

export default TotalPrice;
