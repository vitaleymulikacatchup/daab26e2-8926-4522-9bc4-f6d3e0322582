import React from 'react';
import { Zap, Shield, TrendingUp, Globe, Settings, Package } from 'lucide-react';

const HowWeHelp = () => {
  const helpItems = [
    {
      icon: Zap,
      title: 'Accelerate website performance',
      description: 'Make your website faster with our global CDN'
    },
    {
      icon: Shield,
      title: 'Block bad traffic',
      description: 'Protect against DDoS attacks and malicious bots'
    },
    {
      icon: TrendingUp,
      title: 'Optimize video experiences',
      description: 'Deliver high-quality video content globally'
    },
    {
      icon: Globe,
      title: 'Deploy serverless code',
      description: 'Run code at the edge for better performance'
    },
    {
      icon: Settings,
      title: 'Deploy AI on the edge',
      description: 'Run AI models closer to your users'
    },
    {
      icon: Package,
      title: 'Eliminate egress fees for object storage',
      description: 'Store and serve data without bandwidth costs'
    }
  ];

  return (
    <section className="gradient-bg section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            How Cloudflare can help
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-cloudflare-orange rounded-lg flex items-center justify-center mr-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-cloudflare-blue">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-cloudflare-orange font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;