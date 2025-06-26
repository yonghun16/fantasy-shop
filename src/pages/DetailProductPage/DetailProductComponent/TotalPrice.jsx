const TotalPrice = ({ price, count }) => (
  <div className="text-right text-lg text-indigo-600 font-semibold mb-3">
    총 금액:{" "}
    {(price * count).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}{" "}
    G
  </div>
);

export default TotalPrice;
