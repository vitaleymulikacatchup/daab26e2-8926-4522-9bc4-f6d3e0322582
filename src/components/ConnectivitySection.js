import React from 'react';
import { Globe, Shield, Zap, Users } from 'lucide-react';

const ConnectivitySection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-cloudflare-blue mb-4">
            Our connectivity cloud is the best place to
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 25+ cloud services on one unified platform, uniquely powered by a global cloud network. We call it the connectivity cloud.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Connect Section */}
          <div className="space-y-8">
            <div className="flex justify-center lg:justify-start">
              <div className="w-64 h-48 bg-orange-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 opacity-50"></div>
                <div className="relative">
                  <Globe className="w-16 h-16 text-cloudflare-orange mb-4 mx-auto" />
                  <div className="flex space-x-2 justify-center">
                    <div className="w-8 h-8 bg-cloudflare-orange rounded-full opacity-80"></div>
                    <div className="w-8 h-8 bg-orange-400 rounded-full opacity-60"></div>
                    <div className="w-8 h-8 bg-orange-300 rounded-full opacity-40"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-cloudflare-blue mb-4">
                Connect your people, apps and AI agents
              </h3>
              <p className="text-gray-600 mb-6">
                Modernize your network and secure your workforce against unauthorized access, with browsing controls and phishing. Accelerate your journey to Zero Trust with our SASE platform today.
              </p>
              <div className="space-y-2">
                <button className="btn-primary mr-4">Contact sales</button>
                <button className="text-cloudflare-orange hover:underline">Learn more</button>
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-sm font-medium text-gray-700">Related</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-cloudflare-orange hover:underline cursor-pointer">Cloudflare Zero Trust (SASE)</span>
                  <span className="text-sm text-cloudflare-orange hover:underline cursor-pointer">AI and SASE security</span>
                </div>
              </div>
            </div>
          </div>

          {/* Protect Section */}
          <div className="space-y-8">
            <div className="flex justify-center lg:justify-start">
              <div className="w-64 h-48 bg-orange-50 rounded-lg flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-16 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-full relative">
                    <div className="absolute left-2 top-2 w-4 h-4 bg-white rounded-full"></div>
                    <div className="absolute right-8 top-2 w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-2xl font-bold text-green-600">Fast</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-cloudflare-blue mb-4">
                Protect and accelerate websites and AI-enabled apps
              </h3>
              <p className="text-gray-600 mb-6">
                Use our industry-leading WAF, DDoS, and bot protection to protect your websites, APIs, and AI applications while accelerating performance with our ultra-fast global network.
              </p>
              <div className="space-y-2">
                <button className="btn-primary mr-4">Start for free</button>
                <button className="text-cloudflare-orange hover:underline">Compare plans</button>
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-sm font-medium text-gray-700">Related</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-cloudflare-orange hover:underline cursor-pointer">Cloudflare named a Leader in Forrester Wave for WAF for 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Build Section */}
          <div className="space-y-8">
            <div className="flex justify-center lg:justify-start">
              <div className="w-64 h-48 bg-blue-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="w-full h-full bg-gradient-to-br from-blue-800 to-blue-900"></div>
                  <div className="absolute top-4 left-4 right-4">
                    <div className="bg-blue-700 h-2 rounded mb-2"></div>
                    <div className="bg-blue-600 h-2 rounded mb-2 w-3/4"></div>
                    <div className="bg-blue-500 h-2 rounded w-1/2"></div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-cloudflare-orange rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-cloudflare-blue mb-4">
                Build and secure AI agents
              </h3>
              <p className="text-gray-600 mb-6">
                Agents are the future of AI, and Cloudflare is the best place to get started. Use our agents framework and orchestration tools to run the models you choose and deploy them globally, while our advanced security controls help remove the barriers of your apps.
              </p>
              <div className="space-y-2">
                <button className="btn-primary mr-4">Developer docs</button>
                <button className="text-cloudflare-orange hover:underline">Developer docs</button>
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-sm font-medium text-gray-700">Related</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-cloudflare-orange hover:underline cursor-pointer">Build AI apps securely</span>
                  <span className="text-sm text-cloudflare-orange hover:underline cursor-pointer">Build AI Agents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectivitySection;