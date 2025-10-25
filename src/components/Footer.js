import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cloudflare-dark text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Getting Started */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-300">GETTING STARTED</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Free plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Small business plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">For enterprises</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Get a recommendation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Request a demo</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-300">SOLUTIONS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Connectivity cloud</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Application services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SASE and workspace security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Network services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Developer platform</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-300">SUPPORT</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customer support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community forum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Developers Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lost account access?</a></li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-300">COMPLIANCE</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Compliance resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trust</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GDPR</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Responsible AI</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Transparency report</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-300">COMPANY</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Cloudflare</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Network map</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Logos & press kit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Diversity, equity, & inclusion</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Logo and contact */}
            <div className="flex items-center mb-6 lg:mb-0">
              <div className="flex items-center space-x-2 mr-8">
                <div className="w-8 h-8 bg-cloudflare-orange rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CF</span>
                </div>
                <span className="text-xl font-bold">Cloudflare</span>
              </div>
              <span className="text-cloudflare-orange text-sm">Contact sales +44 20 3514 6970</span>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-4 lg:mb-0">
                © 2024 Cloudflare, Inc. | Privacy policy | Terms of use | Report Security Issues | Trademark
              </div>
              <div>
                Trust & Safety | Responsible Disclosure | Vulnerability Disclosure
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;