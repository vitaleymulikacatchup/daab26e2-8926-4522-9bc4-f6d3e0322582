import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-cloudflare-blue mb-4">
            Leading companies rely on{' '}
            <span className="text-cloudflare-orange">Cloudflare</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-cloudflare-orange to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Connect users and apps securely</h3>
            <p className="text-lg mb-6 opacity-90">
              Keep your people safe and productive as they access apps and data from anywhere, with comprehensive security and performance.
            </p>
            <button className="bg-white text-cloudflare-orange font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Get started
            </button>
            <div className="mt-6">
              <span className="text-sm opacity-75">Learn more</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <blockquote className="text-lg text-gray-700 mb-6">
              "Discord is where the world builds relationships. Cloudflare helps us deliver on that mission, connecting our internal teams and enabling every request to our critical apps is processed on the fastest and most secure network."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                D
              </div>
              <div>
                <div className="font-medium text-gray-900">Mark Smith</div>
                <div className="text-sm text-gray-600">VP of Engineering, Discord</div>
              </div>
            </div>
          </div>
        </div>

        {/* Company logos */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">THOMSON REUTERS</div>
            <div className="text-2xl font-bold text-gray-400">BROADCOM</div>
            <div className="text-2xl font-bold text-gray-400">COLGATE-PALMOLIVE</div>
            <div className="text-2xl font-bold text-gray-400">DOORDASH</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;