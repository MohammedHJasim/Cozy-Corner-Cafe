import MenuSection from "@/components/MenuSection";

const beveragesItems = [
  {
    name: "Signature House Blend",
    description: "Rich, smooth coffee with notes of chocolate and caramel",
    price: "$4.50",
    image: "https://via.placeholder.com/300x200?text=Signature+House+Blend"
  },
  {
    name: "Lavender Honey Latte",
    description: "Espresso with steamed milk, lavender, and local honey",
    price: "$5.75",
    image: "https://via.placeholder.com/300x200?text=Lavender+Honey+Latte"
  },
  {
    name: "Fresh Pressed Juice",
    description: "Daily selection of seasonal fruits and vegetables",
    price: "$6.95",
    image: "https://via.placeholder.com/300x200?text=Fresh+Pressed+Juice"
  }
];

const MenuBeverages = () => (
  <MenuSection title="Beverages" items={beveragesItems} />
);

export default MenuBeverages; 