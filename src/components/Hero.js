import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-cloudflare-blue mb-6">
              Connect, protect, and build{' '}
              <span className="text-cloudflare-orange">everywhere</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Make employees, applications and networks faster and more secure everywhere, while reducing complexity and cost.
            </p>
            <button className="btn-primary text-lg">
              Get started
            </button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-gradient-to-br from-cloudflare-orange to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-1 h-32 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;