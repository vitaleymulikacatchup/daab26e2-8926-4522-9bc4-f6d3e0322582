import React from 'react';

const GlobalNetwork = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-cloudflare-blue mb-4">
            One global cloud network{' '}
            <span className="text-cloudflare-orange">unlike any other</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cloudflare offers an intelligent global cloud network from the ground up for security, speed, and reliability.
          </p>
        </div>

        <div className="relative">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-cloudflare-orange mb-2">160+</div>
              <div className="text-sm text-gray-600">Countries</div>
              <div className="text-xs text-gray-500 mt-1">Global services available globally</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-cloudflare-orange mb-2">330+</div>
              <div className="text-sm text-gray-600">Cities</div>
              <div className="text-xs text-gray-500 mt-1">Cities where threats blocked every day</div>
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-cloudflare-orange mb-2">100%</div>
            <div className="text-sm text-gray-600">Uptime</div>
            <div className="text-xs text-gray-500 mt-1">Of all websites are protected by Cloudflare</div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-cloudflare-orange mb-2">0%</div>
              <div className="text-sm text-gray-600">Latency</div>
              <div className="text-xs text-gray-500 mt-1">Close to 99% of the connected population, including distributed China</div>
            </div>
          </div>

          {/* World Map Visualization */}
          <div className="relative h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 world-map opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-cloudflare-blue mb-2">Global Network</div>
                <div className="text-gray-600">Serving millions of requests per second</div>
              </div>
            </div>
            
            {/* Network dots */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cloudflare-orange rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cloudflare-orange rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cloudflare-orange rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-cloudflare-orange rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;