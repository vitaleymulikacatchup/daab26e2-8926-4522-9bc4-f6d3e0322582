import React from 'react';
import { Shield, Zap, Users } from 'lucide-react';

const GetStarted = () => {
  return (
    <section className="gradient-bg section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get started with the connectivity cloud
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Optimized for free</h3>
            <p className="text-white/80 mb-6">
              Get basic website performance and security features at no cost.
            </p>
            <button className="bg-white text-cloudflare-orange font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Sign up for free
            </button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Need help choosing?</h3>
            <p className="text-white/80 mb-6">
              Find the right plan for your needs with our interactive guide.
            </p>
            <button className="bg-white text-cloudflare-orange font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Plan selector
            </button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Talk to an expert</h3>
            <p className="text-white/80 mb-6">
              Get personalized recommendations from our solutions team.
            </p>
            <button className="bg-white text-cloudflare-orange font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Contact sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;