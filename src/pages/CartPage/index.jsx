import CartItemList from "./CartItemList";
import CartSummary from "./CartSummary";
import ShippingInfoForm from "./ShippingInfoForm";

const CartPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="hidden md:block text-2xl font-bold text-center mb-8">장바구니</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <CartItemList />
          <ShippingInfoForm />
        </div>
        <CartSummary />
      </div>
    </div>
  );
};

export default CartPage;
