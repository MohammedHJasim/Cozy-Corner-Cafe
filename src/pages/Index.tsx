import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />
      <Hero />
      <Introduction />
      
      {/* About Us Section moved from About page */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-amber-900 mb-6">Our Story</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From a simple dream to a beloved community gathering place, discover the passion behind Cozy Corner Cafe.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Cafe founders"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-800 mb-6">Founded with Love</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cozy Corner Cafe was born from a simple belief: that great coffee and good food have the power to bring people together. 
                Founded in 2018 by Maria and James Rodriguez, our cafe started as a dream to create a warm, welcoming space where the community could gather.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Both Maria and James brought years of experience in hospitality and a shared passion for quality ingredients. 
                Maria's background in culinary arts and James's expertise in coffee roasting created the perfect foundation for what would become our beloved cafe.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we're proud to serve our community with the same dedication to quality and warmth that inspired our beginning.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-cream-50 rounded-lg p-8 mb-16 shadow-md">
            <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              To create exceptional experiences through quality coffee, delicious food, and genuine hospitality. 
              We believe in supporting our local community by sourcing ingredients from nearby farms and 
              providing a space where connections flourish and memories are made.
            </p>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We source locally when possible and use eco-friendly practices to minimize our environmental impact.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Community</h3>
              <p className="text-gray-600">
                We're more than a cafe - we're a gathering place that strengthens the bonds within our community.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                From bean to cup, from farm to table, we never compromise on the quality of our ingredients and service.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
