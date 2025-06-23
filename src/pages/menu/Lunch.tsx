import MenuSection from "@/components/MenuSection";

const lunchItems = [
  {
    name: "Grilled Chicken Sandwich",
    description: "Herb-marinated chicken with arugula and sun-dried tomatoes",
    price: "$15.95",
    image: "https://via.placeholder.com/300x200?text=Grilled+Chicken+Sandwich"
  },
  {
    name: "Mediterranean Bowl",
    description: "Quinoa, roasted vegetables, hummus, and tahini dressing",
    price: "$16.50",
    image: "https://via.placeholder.com/300x200?text=Mediterranean+Bow"
  },
  {
    name: "Classic Caesar Salad",
    description: "Crisp romaine, parmesan, croutons, house-made dressing",
    price: "$12.95",
    image: "https://via.placeholder.com/300x200?text=Classic+Caesar+Salad"
  }
];

const MenuLunch = () => (
  <MenuSection title="Lunch" items={lunchItems} />
);

export default MenuLunch; 