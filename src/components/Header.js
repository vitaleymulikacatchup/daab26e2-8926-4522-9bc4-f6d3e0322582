import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cloudflare-orange rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">CF</span>
              </div>
              <span className="text-xl font-bold text-cloudflare-blue">Cloudflare</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-cloudflare-orange cursor-pointer">
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-cloudflare-orange cursor-pointer">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-cloudflare-orange cursor-pointer">
              <span>Developers</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-cloudflare-orange cursor-pointer">
              <span>Partners</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-cloudflare-orange cursor-pointer">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <span className="text-gray-700 hover:text-cloudflare-orange cursor-pointer">Pricing</span>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-4">
            <span className="text-sm text-gray-600">Contact sales +44 20 3514 6970</span>
            <button className="text-gray-700 hover:text-cloudflare-orange">Log in</button>
            <button className="btn-primary">Sign up</button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <span className="text-gray-700">Products</span>
              <span className="text-gray-700">Solutions</span>
              <span className="text-gray-700">Developers</span>
              <span className="text-gray-700">Partners</span>
              <span className="text-gray-700">Resources</span>
              <span className="text-gray-700">Pricing</span>
              <div className="pt-4 border-t border-gray-200">
                <button className="text-gray-700 mb-2 block">Log in</button>
                <button className="btn-primary w-full">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;