const Introduction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            A Place Where Stories Begin
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Nestled in the heart of our community, Cozy Corner Cafe offers more than just exceptional coffee and food. 
            We're a gathering place where friends reconnect, ideas flourish, and memories are made over perfectly crafted beverages and locally-sourced cuisine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">☕</span>
            </div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-3">Premium Coffee</h3>
            <p className="text-gray-600 leading-relaxed">
              Hand-selected beans roasted to perfection, served by skilled baristas who care about every cup.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🥐</span>
            </div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-3">Fresh Pastries</h3>
            <p className="text-gray-600 leading-relaxed">
              Baked daily using traditional recipes and the finest ingredients for an authentic taste experience.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏠</span>
            </div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-3">Cozy Atmosphere</h3>
            <p className="text-gray-600 leading-relaxed">
              Warm lighting, comfortable seating, and friendly service create the perfect environment to relax and unwind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
