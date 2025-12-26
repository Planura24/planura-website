
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-emerald-600 flex items-center justify-center rounded text-white font-bold">P</div>
              <span className="text-xl font-bold tracking-tight font-heading">PLANURA</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Uw strategisch partner in ruimtelijke ordening en gebiedsontwikkeling. Heldere kaders, haalbare plannen.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigatie</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => onPageChange('home')} className="hover:text-emerald-500 transition-colors">Home</button></li>
              <li><button onClick={() => onPageChange('diensten')} className="hover:text-emerald-500 transition-colors">Diensten</button></li>
              <li><button onClick={() => onPageChange('over-ons')} className="hover:text-emerald-500 transition-colors">Over Planura</button></li>
              <li><button onClick={() => onPageChange('aanpak')} className="hover:text-emerald-500 transition-colors">Onze Aanpak</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Expertise</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Strategisch Advies</li>
              <li>Omgevingswet Implementatie</li>
              <li>Haalbaarheidsstudies</li>
              <li>Procesmanagement</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Lijnbaansgracht 12, Amsterdam</li>
              <li>+31 (0)20 123 45 67</li>
              <li>info@planura.nl</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:row items-center justify-between text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Planura Ruimtelijke Ordening. Alle rechten voorbehouden.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Algemene Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
