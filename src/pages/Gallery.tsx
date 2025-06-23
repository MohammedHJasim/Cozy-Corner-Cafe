import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  const galleryImages = [
    {
      url: "/placeholder.svg",
      title: "Cozy Interior",
      category: "Ambiance"
    },
    {
      url: "/placeholder.svg",
      title: "Fresh Pastries",
      category: "Food"
    },
    {
      url: "/placeholder.svg",
      title: "Coffee Art",
      category: "Beverages"
    },
    {
      url: "/placeholder.svg",
      title: "Evening Ambiance",
      category: "Ambiance"
    },
    {
      url: "/placeholder.svg",
      title: "Cafe Cat",
      category: "Friends"
    },
    {
      url: "/placeholder.svg",
      title: "Outdoor Seating",
      category: "Ambiance"
    },
    {
      url: "/placeholder.svg",
      title: "Happy Customers",
      category: "Community"
    },
    {
      url: "/placeholder.svg",
      title: "Work & Coffee",
      category: "Lifestyle"
    },
    {
      url: "/placeholder.svg",
      title: "Nature Views",
      category: "Ambiance"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />
      
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-amber-900 mb-6">Gallery</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Take a visual journey through our cafe - from our delicious food and artisan coffee to our warm atmosphere and happy customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Gallery;
