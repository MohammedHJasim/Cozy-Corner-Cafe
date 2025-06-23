
interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection = ({ title, items }: MenuSectionProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-amber-800 mb-8 text-center">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                <span className="text-lg font-bold text-orange-600">{item.price}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
