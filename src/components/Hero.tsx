import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-200">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/placeholder.svg')"
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 animate-fade-in">
          Welcome to<br />
          <span className="text-orange-700">Cozy Corner Cafe</span>
        </h1>
        <p className="text-xl md:text-2xl text-amber-800 mb-8 animate-fade-in delay-300">
          Where every cup tells a story and every bite feels like home
        </p>
        <div className="space-x-4 animate-fade-in delay-500">
          <Link to="/menu">
            <button className="bg-amber-800 text-white px-8 py-3 rounded-lg hover:bg-amber-900 transition-colors duration-300 text-lg font-semibold">
              View Our Menu
            </button>
          </Link>
          <Link to="/contact">
          <button className="border-2 border-amber-800 text-amber-800 px-8 py-3 rounded-lg hover:bg-amber-800 hover:text-white transition-all duration-300 text-lg font-semibold">
            Make Reservation
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
