import React from 'react';
import { ArrowRight } from 'lucide-react';

const NewsResources = () => {
  const newsItems = [
    {
      category: 'Blog',
      title: 'Cloudflare named a Challenger in 2024 Gartner Magic Quadrant for SASE Platforms',
      description: 'Read about our recognition in the latest Gartner report.',
      type: 'Read Report',
      bgColor: 'bg-gradient-to-br from-orange-400 to-orange-500'
    },
    {
      category: 'Report',
      title: 'Cloudflare named a Challenger in 2024 Gartner Magic Quadrant for SASE Platforms',
      description: 'Learn about our position in the competitive landscape.',
      type: 'Read Report',
      bgColor: 'bg-gradient-to-br from-orange-400 to-orange-500'
    },
    {
      category: 'Announcement',
      title: 'Announcing Cloudflare\'s first ever Global Impact Report',
      description: 'Discover how we\'re making the internet better for everyone.',
      type: 'Learn more',
      bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-400'
    },
    {
      category: 'Update',
      title: 'Join our expert-led webinar on improving your security posture',
      description: 'Get insights from security experts on best practices.',
      type: 'Register',
      bgColor: 'bg-gradient-to-br from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-cloudflare-blue mb-6 lg:mb-0">
            News and resources
          </h2>
          <div className="flex space-x-6">
            <button className="text-cloudflare-orange hover:underline font-medium">What's new</button>
            <button className="text-gray-600 hover:text-cloudflare-orange font-medium">Events</button>
            <button className="text-gray-600 hover:text-cloudflare-orange font-medium">Careers</button>
            <button className="text-gray-600 hover:text-cloudflare-orange font-medium">Press</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`${item.bgColor} rounded-xl p-6 h-48 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                </div>
              </div>
              <div>
                <div className="text-sm text-cloudflare-orange font-medium mb-2">{item.category}</div>
                <h3 className="font-bold text-cloudflare-blue mb-2 group-hover:text-cloudflare-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center text-cloudflare-orange hover:underline">
                  <span className="text-sm font-medium">{item.type}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-cloudflare-orange rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsResources;