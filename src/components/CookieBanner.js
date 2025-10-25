import React, { useState } from 'react';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="container-custom py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0 lg:mr-8">
            <h3 className="font-bold text-cloudflare-blue mb-2">Our site uses cookies</h3>
            <p className="text-sm text-gray-600">
              Like most websites, we use cookies to make our site work the way you expect it to, improve your experience on our site, analyze site usage, and assist in our marketing efforts. By clicking "Accept All Cookies", you agree to the storing of all categories of cookies on your device. If you wish to accept or reject some categories of cookies, please click "Cookie Preferences".
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
            <button className="btn-secondary text-sm whitespace-nowrap">
              Cookie Preferences
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors">
              Reject All
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors">
              Accept All Cookies
            </button>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 lg:relative lg:top-0 lg:right-0 lg:ml-4 p-1 hover:bg-gray-100 rounded"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;