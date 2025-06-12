import img1 from "../../assets/images/test-item1.png";
import img2 from "../../assets/images/test-itme2.png";

export const mockOrders = [
  {
    paymentPk: 101,
    paymentDate: "2025-06-01T15:00:00",
    totalPrice: 30000,
    paymentStatus: "paid",
    items: [
      {
        name: "Dragonhide Shield",
        quantity: 1,
        imageUrl: img1,
      },
      { name: "Strong Shield", quantity: 2, imageUrl: img1 },
    ],
  },
  {
    paymentPk: 102,
    paymentDate: "2025-06-08T12:30:00",
    totalPrice: 54000,
    paymentStatus: "paid",
    items: [
      {
        name: "Dragonhide Sword",
        quantity: 1,
        imageUrl: img2,
      },
      { name: "Firey Sword", quantity: 2, imageUrl: img2 },
    ],
  },
  {
    paymentPk: 103,
    paymentDate: "2025-06-10T09:15:00",
    totalPrice: 19000,
    paymentStatus: "paid",
    items: [{ name: "Dragonhide Shield", quantity: 2, imageUrl: img1 }],
  },
];
