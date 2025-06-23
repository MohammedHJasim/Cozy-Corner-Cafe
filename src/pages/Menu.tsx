import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Coffee, Utensils, CupSoda, Cake } from "lucide-react";

const Menu = () => {
  const menuSections = [
    {
      title: "Breakfast",
      items: [
        {
          name: "Classic Avocado Toast",
          description: "Fresh avocado, cherry tomatoes, feta cheese on sourdough",
          price: "$12.95",
          image: "/placeholder.svg"
        },
        {
          name: "Belgian Waffle Stack",
          description: "Fluffy waffles with seasonal berries and maple syrup",
          price: "$14.50",
          image: "/placeholder.svg"
        },
        {
          name: "Farm Fresh Omelet",
          description: "Three eggs with local vegetables and artisan cheese",
          price: "$13.75",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      title: "Lunch",
      items: [
        {
          name: "Grilled Chicken Sandwich",
          description: "Herb-marinated chicken with arugula and sun-dried tomatoes",
          price: "$15.95",
          image: "/placeholder.svg"
        },
        {
          name: "Mediterranean Bowl",
          description: "Quinoa, roasted vegetables, hummus, and tahini dressing",
          price: "$16.50",
          image: "/placeholder.svg"
        },
        {
          name: "Classic Caesar Salad",
          description: "Crisp romaine, parmesan, croutons, house-made dressing",
          price: "$12.95",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      title: "Beverages",
      items: [
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
      ]
    },
    {
      title: "Desserts",
      items: [
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
      ]
    }
  ];

  const location = useLocation();
  const categories = [
    { name: "Breakfast", path: "/menu/breakfast", icon: <Utensils className="w-5 h-5 mr-2" /> },
    { name: "Lunch", path: "/menu/lunch", icon: <Coffee className="w-5 h-5 mr-2" /> },
    { name: "Beverages", path: "/menu/beverages", icon: <CupSoda className="w-5 h-5 mr-2" /> },
    { name: "Desserts", path: "/menu/desserts", icon: <Cake className="w-5 h-5 mr-2" /> },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />
      {/* Category Navbar */}
      <div className="sticky top-0 z-20 bg-white/90 py-4 shadow-lg mb-8 border-b border-amber-200 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 flex justify-center gap-4 flex-wrap">
          {categories.map((cat) => {
            const isActive = location.pathname === cat.path;
            return (
              <Link
                key={cat.name}
                to={cat.path}
                className={`flex items-center px-6 py-3 rounded-full font-semibold text-lg transition shadow-md border-2
                  ${isActive
                    ? "bg-amber-800 text-white border-amber-800 scale-105"
                    : "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100 hover:border-amber-400"}
                `}
                style={{ minWidth: 140, justifyContent: 'center' }}
              >
                {cat.icon}
                {cat.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-amber-900 mb-6">Our Menu</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Carefully crafted dishes using the finest local ingredients, prepared with love and served with a smile.
            </p>
            <button className="mt-6 bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition-colors duration-300">
              Download PDF Menu
            </button>
          </div>

          <Outlet />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Menu;
