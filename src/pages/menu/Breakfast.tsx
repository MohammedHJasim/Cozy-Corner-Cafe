import MenuSection from "@/components/MenuSection";

const breakfastItems = [
  {
    name: "Classic Avocado Toast",
    description: "Fresh avocado, cherry tomatoes, feta cheese on sourdough",
    price: "$12.95",
    image: "https://via.placeholder.com/300x200?text=Classic+Avocado+Toast"
  },
  {
    name: "Belgian Waffle Stack",
    description: "Fluffy waffles with seasonal berries and maple syrup",
    price: "$14.50",
    image: "https://via.placeholder.com/300x200?text=Belgian+Waffle+Stack"
  },
  {
    name: "Farm Fresh Omelet",
    description: "Three eggs with local vegetables and artisan cheese",
    price: "$13.75",
    image: "https://via.placeholder.com/300x200?text=Farm+Fresh+Omelet"
  }
];

const MenuBreakfast = () => (
  <MenuSection title="Breakfast" items={breakfastItems} />
);

export default MenuBreakfast; 