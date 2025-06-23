import MenuSection from "@/components/MenuSection";

const dessertsItems = [
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center and vanilla ice cream",
    price: "$8.95",
    image: "https://via.placeholder.com/300x200?text=Chocolate+Lava+Cake"
  },
  {
    name: "Seasonal Fruit Tart",
    description: "Buttery pastry shell with pastry cream and fresh fruits",
    price: "$7.50",
    image: "https://via.placeholder.com/300x200?text=Seasonal+Fruit+Tart"
  },
  {
    name: "Artisan Cheese Plate",
    description: "Selection of local cheeses with crackers and preserves",
    price: "$16.95",
    image: "https://via.placeholder.com/300x200?text=Artisan+Cheese+Plate"
  }
];

const MenuDesserts = () => (
  <MenuSection title="Desserts" items={dessertsItems} />
);

export default MenuDesserts; 